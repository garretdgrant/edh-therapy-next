import Link from "next/link";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderScrollState from "./HeaderScrollState";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <nav
      id="site-header"
      className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6 transition-all duration-500"
    >
      <HeaderScrollState targetId="site-header" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
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
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-charcoal-soft hover:text-charcoal transition-colors duration-300 text-sm tracking-wide group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sage group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-charcoal text-cream text-sm rounded-full hover:bg-charcoal-soft transition-all duration-300 hover:shadow-lg"
            >
              Book Consultation
            </a>
          </div>

          <HeaderMobileMenu navLinks={navLinks} />
        </div>
      </div>
    </nav>
  );
}
