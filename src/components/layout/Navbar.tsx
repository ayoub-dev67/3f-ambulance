"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Cross } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen || !menuRef.current) return;
    if (e.key === "Escape") {
      setIsOpen(false);
      menuButtonRef.current?.focus();
      return;
    }
    if (e.key === "Tab") {
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector<HTMLElement>("a[href], button");
      firstFocusable?.focus();
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      aria-label="Navigation principale"
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1" onClick={() => setIsOpen(false)}>
            <span className="font-heading text-xl font-black text-primary md:text-2xl">3F</span>
            <Cross className="h-3.5 w-3.5 text-accent md:h-4 md:w-4" aria-hidden="true" />
            <span className="font-heading text-base font-light tracking-wide text-grey-800 md:text-lg">AMBULANCE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? "text-primary border-b-2 border-primary pb-1" : "text-grey-800 pb-1"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Appel Desktop */}
          <a
            href={SITE_CONFIG.phoneHref}
            className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent-hover hover:shadow-lg lg:flex"
            aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
            {SITE_CONFIG.phoneDisplay}
          </a>

          {/* Mobile: phone icon + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white"
              aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
            </a>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-grey-800 hover:bg-grey-100"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 md:h-20 md:px-8">
          <Link href="/" className="flex items-center gap-1" onClick={() => setIsOpen(false)}>
            <span className="font-heading text-2xl font-black text-primary">3F</span>
            <Cross className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="font-heading text-lg font-light tracking-wide text-grey-800">AMBULANCE</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-grey-800 hover:bg-grey-100"
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex h-[calc(100%-64px)] flex-col justify-between px-6 pb-8 md:h-[calc(100%-80px)]">
          <nav className="flex flex-col gap-1 pt-4" aria-label="Menu mobile">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-xl py-4 pl-4 text-2xl font-semibold transition-colors ${
                    isActive ? "text-primary bg-primary-50" : "text-dark hover:text-primary hover:bg-primary-50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4">
            <p className="text-center font-heading text-2xl font-bold text-dark">
              {SITE_CONFIG.phoneDisplay}
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-accent-hover"
              aria-label={`Appeler le ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
