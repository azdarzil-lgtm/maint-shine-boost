import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logoAsset from "@/assets/solidmaint-logo.png.asset.json";

const navLinks = [
  { label: "Benefits", to: "/", hash: "packages" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Team", to: "/", hash: "team" },
  { label: "Coverage", to: "/", hash: "coverage" },
  { label: "FAQs", to: "/", hash: "faqs" },
  { label: "Partners", to: "/partners" },
  { label: "Journal", to: "/journal" },
] as const;

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="SolidMaint home">
      <img src={logoAsset.url} alt="" className="size-10 rounded-md" width="40" height="40" />
      <span className={`flex flex-col leading-tight ${light ? "text-sunlit" : "text-deep"}`}>
        <span className="text-sm font-extrabold uppercase">SolidMaint</span>
        <span className="text-[11px] font-medium tracking-wide opacity-80">Your home. Cared for.</span>
      </span>
    </Link>
  );
}

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        dark ? "bg-deep/85 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-10 md:py-5">
        <Brand light />
        <div className="hidden items-center gap-8 text-sm font-bold uppercase text-sunlit lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              {...("hash" in link ? { hash: link.hash } : {})}
              className={`nav-link ${link.label === "Partners" ? "text-coral" : ""}`}

            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            className="solid-button solid-button-coral px-4 py-2.5 text-[0.7rem] sm:px-5 sm:text-xs md:text-[0.78rem]"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="grid size-11 shrink-0 place-items-center rounded-md border border-sunlit/40 text-sunlit lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="border-y border-deep/10 bg-sunlit px-4 py-2 text-deep lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              {...("hash" in link ? { hash: link.hash } : {})}
              onClick={() => setMenuOpen(false)}
              className={`block border-b border-deep/10 py-4 text-sm font-bold uppercase last:border-b-0 ${link.label === "Partners" ? "text-coral" : ""}`}

            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
