export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="py-16 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-charcoal">
                  E
                </span>
              </div>
              <span className="font-serif text-xl font-medium">
                EDH Therapy
              </span>
            </div>
            <p className="text-sand text-sm leading-relaxed">
              Compassionate therapy for growth, healing, and self-discovery.
              Online therapy serving clients throughout California.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-cream">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sand hover:text-cream transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-cream">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-sand">
              <a
                href="tel:9164712562"
                className="hover:text-cream transition-colors duration-300"
              >
                (916) 471-2562
              </a>
              <span>El Dorado Hills, California</span>
              <span>Online Sessions Only</span>
            </div>
          </div>
        </div>

        <div className="py-6 px-6 bg-charcoal-soft/30 rounded-xl mb-12">
          <p className="text-sand text-sm text-center">
            <strong className="text-cream">Crisis Resources:</strong> If you are
            experiencing a crisis or emergency, please call 988 or go to your
            nearest emergency room. Online therapy is not appropriate for
            emergency situations.
          </p>
        </div>

        <div className="pt-8 border-t border-charcoal-soft/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sand text-sm">
            © {new Date().getFullYear()} EDH Therapy. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-sand">
            <a
              href="/privacy"
              className="hover:text-cream transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-cream transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
