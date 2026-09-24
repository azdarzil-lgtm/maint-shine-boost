import { ArrowRight, Facebook, Heart, Instagram, Linkedin, Sparkles } from "lucide-react";

import { Brand } from "@/components/SiteHeader";

const socials = [
  { href: "https://www.facebook.com/solidmaint", label: "SolidMaint on Facebook", icon: Facebook },
  { href: "https://instagram.com/solidmaint", label: "SolidMaint on Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/solidmaint", label: "SolidMaint on LinkedIn", icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative bg-deep py-20 text-sunlit md:py-28">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
        <p className="section-label text-coral">Your home. Our care.</p>
        <h2 className="mx-auto mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">
          Let’s talk about your home.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sunlit/65">
          Tell us where your home is and what needs care. Our team will reply within one working day.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href="mailto:info@solidmaint.com" className="solid-button solid-button-coral">
            Start your enquiry <ArrowRight aria-hidden="true" />
          </a>
          <a href="tel:+34951798899" className="solid-button solid-button-outline">
            Call +34 951 798 899
          </a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={label}
              className="grid size-11 place-items-center rounded-full border border-sunlit/25 text-sunlit transition-colors hover:border-coral hover:bg-coral hover:text-sunlit"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-col gap-5 border-t border-sunlit/15 pt-7 text-sm text-sunlit/55 sm:flex-row sm:items-center sm:justify-between">
          <Brand light />
          <p>Marbella, Benalmádena · Mon–Fri, 09:00–18:00 CET</p>
          <p>© 2026 SolidMaint</p>
        </div>
      </div>
    </footer>
  );
}
