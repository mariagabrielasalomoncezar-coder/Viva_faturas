"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, buildWhatsAppLink } from "@/lib/config";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base-deep/85 backdrop-blur-md border-b border-base-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal/15 ring-1 ring-signal/40">
            <span className="h-2.5 w-2.5 rounded-full bg-signal-teal animate-node-glow" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink-primary">
            Viva Connecta
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com um especialista
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-base-line lg:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-ink-primary transition-transform duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink-primary transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-5 bg-ink-primary transition-transform duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 border-t border-base-line bg-base-deep px-5 py-4 sm:px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-base-elevated hover:text-ink-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar com um especialista
          </a>
        </nav>
      </div>
    </header>
  );
}
