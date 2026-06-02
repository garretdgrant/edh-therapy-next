import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal py-16 text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage">
                <span className="font-serif text-lg font-semibold text-charcoal">
                  E
                </span>
              </div>
              <span className="font-serif text-xl font-medium">
                EDH Therapy
              </span>
            </div>
            <p className="text-sm leading-relaxed text-sand">
              Meagan Murray, AMFT offers compassionate online therapy for
              anxiety, depression, couples, teens, and families. Serving El
              Dorado Hills, Folsom, Cameron Park, Sacramento, Roseville, and all
              of California.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-cream">Quick Links</h4>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-sand">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex items-center gap-3">
                  <Link
                    href={link.href}
                    className="transition-colors duration-300 hover:text-cream"
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 ? <span>·</span> : null}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-cream">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-sand">
              <a
                href="tel:9165004431"
                className="transition-colors duration-300 hover:text-cream"
              >
                916-500-4431
              </a>
              <span>El Dorado Hills, California</span>
              <span>Online Sessions Only</span>
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-xl bg-charcoal-soft/30 px-6 py-6">
          <p className="text-center text-sm text-sand">
            <strong className="text-cream">Areas Served:</strong> El Dorado
            Hills · Folsom · Cameron Park · Sacramento · Roseville · Granite Bay
            · All of California
          </p>
        </div>

        <div className="mb-12 rounded-xl bg-charcoal-soft/30 px-6 py-6">
          <p className="text-center text-sm text-sand">
            <strong className="text-cream">Crisis Resources:</strong> If you are
            experiencing a crisis or emergency, please call 988 or go to your
            nearest emergency room. Online therapy is not appropriate for
            emergency situations.
          </p>
        </div>

        <div className="border-t border-charcoal-soft/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-sand">
              © {currentYear} EDH Therapy. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-sand">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-cream"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-cream"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
