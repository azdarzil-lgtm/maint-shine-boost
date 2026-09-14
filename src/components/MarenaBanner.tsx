import { useEffect, useState } from "react";
import { X } from "lucide-react";

import marenaAsset from "@/assets/marena.webp.asset.json";

const BANNER_KEY = "solidmaint-marena-banner-closed";

export function MarenaBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window === "undefined") return undefined;
    const dismissed = window.localStorage.getItem(BANNER_KEY);
    if (dismissed) return undefined;
    const timer = window.setTimeout(() => setIsOpen(true), 2500);
    return () => window.clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(BANNER_KEY, "true");
    }
  };

  const handleAsk = () => {
    handleClose();
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-label="Ask Marena a question"
      className="fixed inset-0 z-50 flex items-end justify-end p-4"
      style={{ backgroundColor: "oklch(0.31 0.052 174 / 40%)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-sunlit/10 bg-background shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full p-1.5 text-foreground/60 transition-colors hover:bg-olive/10 hover:text-foreground"
          aria-label="Close banner"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <div className="flex gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img
              src={marenaAsset.url}
              alt="Marena from SolidMaint"
              className="size-20 rounded-full object-cover ring-2 ring-olive/30 sm:size-24"
            />
          </div>
          <div className="min-w-0 flex-1 pt-1">
            <p className="font-display text-lg font-bold text-foreground">Hi, I&apos;m Marena.</p>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">
              Have a question about your property on the Costa del Sol? I&apos;m here to help you find the right care plan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-foreground/10 bg-olive/5 px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={handleAsk}
            className="solid-button solid-button-coral flex-1 text-sm shadow-sm"
          >
            Ask a question
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full px-4 py-2.5 text-sm font-bold text-foreground/80 transition-colors hover:bg-olive/10 hover:text-foreground"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
