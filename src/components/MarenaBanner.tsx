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
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-3 sm:inset-0 sm:items-end sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="pointer-events-auto relative w-full max-w-md overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-2xl">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-2 top-2 rounded-full p-1.5 text-foreground/60 transition-colors hover:bg-olive/10 hover:text-foreground sm:right-3 sm:top-3"
          aria-label="Close banner"
        >
          <X className="size-4 sm:size-5" aria-hidden="true" />
        </button>

        <div className="flex gap-3 p-4 pr-10 sm:gap-4 sm:p-6">
          <div className="shrink-0">
            <img
              src={marenaAsset.url}
              alt="Marena from SolidMaint"
              className="size-12 rounded-full object-cover ring-2 ring-olive/30 sm:size-24"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-base font-bold text-foreground sm:text-lg">Hi, I&apos;m Marena.</p>
            <p className="mt-1 text-[0.8rem] leading-snug text-foreground/80 sm:mt-1.5 sm:text-sm sm:leading-relaxed">
              Questions about your home on the Costa del Sol? I&apos;m here to help.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-foreground/10 bg-olive/5 px-4 py-3 sm:gap-3 sm:px-6 sm:py-4">
          <button
            type="button"
            onClick={handleAsk}
            className="solid-button solid-button-coral min-h-10 flex-1 px-4 py-2 text-[0.7rem] shadow-sm sm:min-h-11 sm:text-sm"
          >
            Ask a question
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="rounded-full px-3 py-2 text-[0.8rem] font-bold text-foreground/80 transition-colors hover:bg-olive/10 hover:text-foreground sm:px-4 sm:py-2.5 sm:text-sm"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
