import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-12 -right-20 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-sage-soft/25 to-transparent animate-float" />
            <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-terracotta-soft/20 to-transparent animate-float-reverse" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Get in Touch
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  Begin with a free consultation
                </h1>
                <p className="text-lg text-warm-gray leading-relaxed max-w-xl">
                  Schedule a 15-minute call to see if therapy is the right fit.
                  I respond within 1-2 business days.
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300"
                >
                  Book Consultation
                </a>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] max-w-md mx-auto rounded-[2rem] overflow-hidden bg-gradient-to-br from-linen to-cream-dark shadow-2xl shadow-sand/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/20 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-14 h-14 mx-auto rounded-full bg-cream flex items-center justify-center">
                        <svg
                          className="w-7 h-7 text-sand"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 10a1 1 0 00-1-1h-3.586l-2-2H9.586l-2 2H4a1 1 0 00-1 1v7a1 1 0 001 1h16a1 1 0 001-1v-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-warm-gray text-sm">
                        Image of a welcoming therapy space
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-sage-soft/30 -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream-dark" id="book">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12">
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-charcoal">
                Contact Information
              </h2>
              <div className="space-y-3 text-warm-gray">
                <p>
                  <span className="font-medium text-charcoal">Phone:</span>{" "}
                  (916) 471-2562
                </p>
                <p>
                  <span className="font-medium text-charcoal">Email:</span> [Add
                  email placeholder]
                </p>
                <p>
                  <span className="font-medium text-charcoal">Location:</span>{" "}
                  El Dorado Hills, California
                </p>
                <p>Providing online therapy across California.</p>
              </div>

              <div className="pt-6 border-t border-sand/60 space-y-4">
                <h3 className="font-serif text-2xl text-charcoal">
                  Insurance & Billing
                </h3>
                <p className="text-warm-gray">
                  Out-of-network provider. Superbills available for
                  reimbursement.
                </p>
              </div>

              <div className="pt-6 border-t border-sand/60 space-y-4">
                <h3 className="font-serif text-2xl text-charcoal">
                  Safety Disclaimer
                </h3>
                <p className="text-warm-gray">
                  If you are experiencing an emergency or crisis, call 988 or
                  visit your nearest emergency room.
                </p>
              </div>
            </div>

            <div className="p-8 bg-cream rounded-3xl shadow-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-6">
                Contact Form
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm text-charcoal">Name</label>
                  <input
                    type="text"
                    className="mt-2 w-full rounded-xl border border-sand/60 bg-cream px-4 py-3 text-charcoal focus:border-sage focus:ring-2 focus:ring-sage/30 outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-sm text-charcoal">Email</label>
                  <input
                    type="email"
                    className="mt-2 w-full rounded-xl border border-sand/60 bg-cream px-4 py-3 text-charcoal focus:border-sage focus:ring-2 focus:ring-sage/30 outline-none"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-charcoal">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    className="mt-2 w-full rounded-xl border border-sand/60 bg-cream px-4 py-3 text-charcoal focus:border-sage focus:ring-2 focus:ring-sage/30 outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="text-sm text-charcoal">Message</label>
                  <textarea
                    className="mt-2 w-full rounded-xl border border-sand/60 bg-cream px-4 py-3 text-charcoal focus:border-sage focus:ring-2 focus:ring-sage/30 outline-none min-h-[140px]"
                    placeholder="How can I support you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
