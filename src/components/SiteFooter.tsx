import { ArrowRight, Facebook, Heart, Instagram, Linkedin, Sparkles } from "lucide-react";

import { Brand } from "@/components/SiteHeader";

const socials = [
  { href: "https://www.facebook.com/solidmaint", label: "SolidMaint on Facebook", icon: Facebook },
  { href: "https://instagram.com/solidmaint", label: "SolidMaint on Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/company/solidmaint", label: "SolidMaint on LinkedIn", icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-deep text-sunlit">
      <div className="relative overflow-hidden">
        <img
          src={footerContactBg.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-deep/85" aria-hidden="true" />
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-deep"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-5 py-20 text-center md:px-10 md:py-28">
          <p className="section-label text-coral">Your home. Our care.</p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
            Let’s talk about your home.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sunlit/75">
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
        </div>
      </div>
      <div className="relative mx-auto max-w-4xl px-5 pb-16 pt-4 text-center md:px-10 md:pb-20">
        <div className="flex items-center justify-center gap-4">
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
        <div className="mt-10 flex flex-col items-center gap-5 border-t border-sunlit/15 pt-7 text-sm text-sunlit/55 sm:flex-row sm:justify-between">
          <Brand light />
          <p>© 2026 SolidMaint</p>
        </div>
        <div className="mt-8 space-y-3 text-center">
          <p className="text-xs text-sunlit/55 sm:text-sm">Marbella, Benalmádena · Mon–Fri, 09:00–18:00 CET</p>
          <div className="flex justify-center">
            <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-sunlit/20 px-5 py-2.5 text-xs text-sunlit/70 sm:text-sm">
              <span className="font-medium text-sunlit/85">SolidMaint.</span>
              <Heart className="size-3.5 fill-coral text-coral" aria-hidden="true" />
              <span>Ran by humans</span>
              <span className="text-sunlit/30" aria-hidden="true">·</span>
              <Sparkles className="size-3.5 text-coral" aria-hidden="true" />
              <span>Powered by AI</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
