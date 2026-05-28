"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Vakfımız", href: "/vakfimiz" },
  { label: "Burslar", href: "/burslar" },
  { label: "Karşıyaka Lisesi", href: "https://www.karsiyakalises.com", external: true },
  { label: "Haberler", href: "/haberler" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Üyelik", href: "/uyelik" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Ana navigasyon"
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight" aria-label="İKLEV Ana Sayfa">
          <span className="text-xl font-bold tracking-tight text-accent">İKLEV</span>
          <span className="text-[11px] font-normal text-muted tracking-wide">
            İzmir Karşıyaka Lisesi Eğitim Vakfı
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-6 lg:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/bagis"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Bağış Yap
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background px-6 pb-6 pt-4 lg:hidden"
        >
          <ul className="flex flex-col gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block text-base text-foreground transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/bagis"
            className="mt-6 block rounded-md bg-accent px-5 py-3 text-center text-sm font-medium text-white"
            onClick={() => setMenuOpen(false)}
          >
            Bağış Yap
          </Link>
        </div>
      )}
    </header>
  );
}
