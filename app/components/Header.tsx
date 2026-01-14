"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sage to-sage-soft flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-charcoal">
                  E
                </span>
              </div>
              <div className="absolute -inset-1 rounded-full bg-sage/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-medium text-charcoal tracking-wide">
                EDH Therapy
              </span>
              <span className="text-xs text-warm-gray tracking-widest uppercase">
                El Dorado Hills
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-charcoal-soft hover:text-charcoal transition-colors duration-300 text-sm tracking-wide group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#book"
              className="ml-4 px-6 py-2.5 bg-charcoal text-cream text-sm rounded-full hover:bg-charcoal-soft transition-all duration-300 hover:shadow-lg"
            >
              Book Consultation
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
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
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-cream/98 backdrop-blur-lg shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-charcoal-soft hover:text-charcoal transition-colors duration-300 py-2 border-b border-sand/30"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="mt-2 px-6 py-3 bg-charcoal text-cream text-center rounded-full hover:bg-charcoal-soft transition-all duration-300"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
