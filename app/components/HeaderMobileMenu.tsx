"use client";

import Link from "next/link";
import { useState } from "react";

type NavLink = {
  name: string;
  href: string;
};

type HeaderMobileMenuProps = {
  navLinks: NavLink[];
};

export default function HeaderMobileMenu({ navLinks }: HeaderMobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setMobileMenuOpen((open) => !open)}
        className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        aria-expanded={mobileMenuOpen}
        aria-controls="site-header-mobile-menu"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-px bg-charcoal transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
        />
        <span
          className={`w-6 h-px bg-charcoal transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-px bg-charcoal transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        />
      </button>

      <div
        id="site-header-mobile-menu"
        className={`md:hidden absolute top-full left-0 right-0 bg-cream/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-charcoal-soft hover:text-charcoal transition-colors duration-300 py-2 border-b border-sand/30"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#book"
            className="mt-2 px-6 py-3 bg-charcoal text-cream text-center rounded-full hover:bg-charcoal-soft transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}
