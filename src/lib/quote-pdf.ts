const LOGO_URL = "/__l5e/assets-v1/fbf02850-81aa-4330-bb42-af2f8f4c71ee/solidmaint-logo-green-transparent.png";

export type QuoteLine = { label: string; amount: string };

async function loadLogo(): Promise<{ data: string; w: number; h: number } | null> {
  try {
    const blob = await (await fetch(LOGO_URL)).blob();
    const data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    const img = new Image();
    await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; img.src = data; });
    return { data, w: img.naturalWidth, h: img.naturalHeight };
  } catch {
    return null;
  }
}

export async function downloadQuotePdf({ lines, total, summary }: { lines: QuoteLine[]; total: string; summary: string[] }) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const green: [number, number, number] = [59, 97, 96];
  const coral: [number, number, number] = [237, 111, 95];
  const left = 20;
  const right = 190;
  let y = 20;

  const logo = await loadLogo();
  if (logo) {
    const w = 55;
    const h = (logo.h / logo.w) * w;
    doc.addImage(logo.data, "PNG", left, y, w, h);
    y += h + 8;
  } else {
    doc.setFont("helvetica", "bold").setFontSize(20).setTextColor(...green).text("SolidMaint", left, y + 8);
    y += 18;
  }

  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  doc.setFont("helvetica", "normal").setFontSize(9).setTextColor(110);
  doc.text(`Quote date: ${date}`, right, 22, { align: "right" });
  doc.text("SolidMaint S.L. · NIF B27612159", right, 27, { align: "right" });
  doc.text("Avda. Bulevar Príncipe Alfonso de Hohenlohe 2, 29602 Marbella", right, 32, { align: "right" });
  doc.text("info@solidmaint.com · +34 951 798 899", right, 37, { align: "right" });
  doc.text("Costa del Sol, Spain", right, 42, { align: "right" });

  y = Math.max(y, 52);

  doc.setFont("helvetica", "bold").setFontSize(18).setTextColor(...green).text("Your indicative home care plan", left, y);
  y += 10;

  doc.setFillColor(...green).roundedRect(left, y, right - left, 20, 3, 3, "F");
  doc.setFontSize(10).setTextColor(245, 241, 228).setFont("helvetica", "normal").text("Indicative monthly total (IVA included)", left + 6, y + 8);
  doc.setFontSize(18).setFont("helvetica", "bold").text(`${total} / month`, left + 6, y + 16);
  doc.setFontSize(9).setTextColor(...coral).text("No upfront payment — billed after service", right - 6, y + 16, { align: "right" });
  y += 30;

  doc.setFont("helvetica", "bold").setFontSize(12).setTextColor(...green).text("Price breakdown", left, y);
  y += 7;
  doc.setFont("helvetica", "normal").setFontSize(10).setTextColor(50);
  for (const line of lines) {
    const wrapped = doc.splitTextToSize(line.label, 130);
    doc.text(wrapped, left, y);
    doc.text(line.amount, right, y, { align: "right" });
    y += wrapped.length * 5 + 2;
    doc.setDrawColor(225).line(left, y - 3, right, y - 3);
  }
  y += 6;

  doc.setFont("helvetica", "bold").setFontSize(12).setTextColor(...green).text("What you're getting", left, y);
  y += 7;
  doc.setFont("helvetica", "normal").setFontSize(10).setTextColor(50);
  for (const item of summary) {
    const wrapped = doc.splitTextToSize(item, 164);
    if (y + wrapped.length * 5 > 270) { doc.addPage(); y = 20; }
    doc.setTextColor(...coral).text("•", left, y);
    doc.setTextColor(50).text(wrapped, left + 5, y);
    y += wrapped.length * 5 + 2;
  }

  y = Math.max(y + 8, 255);
  if (y > 275) { doc.addPage(); y = 20; }
  doc.setFontSize(8).setTextColor(120);
  doc.text(doc.splitTextToSize("This is an indicative estimate based on the information you've given us. Prices cover services only — any materials are quoted separately before we begin. We confirm the final plan after a quick look at your property. Fixed monthly fee, no upfront payment — billed after service. No minimum term. The final price stays within ±10% of this estimate after the free property visit, or you can cancel free of charge.", right - left), left, y);

  doc.save("SolidMaint-care-plan-quote.pdf");
}
