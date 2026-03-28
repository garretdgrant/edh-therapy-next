"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { useRouter } from "next/navigation";

type ContactFormState = {
  company: string;
  name: string;
  email: string;
  phone: string;
  clientType: string;
  message: string;
};

const initialFormState: ContactFormState = {
  company: "",
  name: "",
  email: "",
  phone: "",
  clientType: "",
  message: "",
};

export default function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState(initialFormState);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact/general", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        error?: string;
        success?: boolean;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit form.");
      }

      setFormData(initialFormState);
      setFocusedField(null);
      router.push("/contact/thank-you");
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div style={{ display: "none" }}>
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="relative">
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === "name" || formData.name
              ? "-top-2.5 text-xs bg-cream px-2 text-sage"
              : "top-4 text-warm-gray"
          }`}
        >
          Your Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
          className="w-full rounded-xl border-2 border-sand/40 bg-transparent px-4 py-4 text-charcoal focus:border-sage focus:ring-0 outline-none transition-all duration-300 hover:border-sand"
          required
        />
      </div>

      <div className="relative">
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === "email" || formData.email
              ? "-top-2.5 text-xs bg-cream px-2 text-sage"
              : "top-4 text-warm-gray"
          }`}
        >
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          className="w-full rounded-xl border-2 border-sand/40 bg-transparent px-4 py-4 text-charcoal focus:border-sage focus:ring-0 outline-none transition-all duration-300 hover:border-sand"
          required
        />
      </div>

      <div className="relative">
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === "phone" || formData.phone
              ? "-top-2.5 text-xs bg-cream px-2 text-sage"
              : "top-4 text-warm-gray"
          }`}
        >
          Phone Number *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onFocus={() => setFocusedField("phone")}
          onBlur={() => setFocusedField(null)}
          className="w-full rounded-xl border-2 border-sand/40 bg-transparent px-4 py-4 text-charcoal focus:border-sage focus:ring-0 outline-none transition-all duration-300 hover:border-sand"
          required
        />
      </div>

      <div>
        <label className="block text-sm text-charcoal-soft mb-2">
          I&apos;m seeking help for
        </label>
        <select
          name="clientType"
          value={formData.clientType}
          onChange={handleChange}
          className="w-full rounded-xl border-2 border-sand/40 bg-transparent px-4 py-3 text-charcoal focus:border-sage focus:ring-0 outline-none transition-all duration-300 hover:border-sand appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238a8279'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 1rem center",
            backgroundSize: "1rem",
          }}
        >
          <option value="">Select...</option>
          <option value="individual">Myself (Individual)</option>
          <option value="couple">My Relationship (Couples)</option>
          <option value="family">My Family</option>
          <option value="teen">My Teen</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div className="relative">
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            focusedField === "message" || formData.message
              ? "-top-2.5 text-xs bg-cream px-2 text-sage"
              : "top-4 text-warm-gray"
          }`}
        >
          How can I support you? *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          rows={4}
          className="w-full rounded-xl border-2 border-sand/40 bg-transparent px-4 py-4 text-charcoal focus:border-sage focus:ring-0 outline-none transition-all duration-300 hover:border-sand resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream rounded-xl hover:bg-charcoal-soft transition-all duration-300 hover:shadow-xl text-lg font-medium"
      >
        <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
        <svg
          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      <p className="text-xs text-warm-gray text-center">
        Your information is kept confidential and will only be used to respond
        to your inquiry.
      </p>

      {submitError ? (
        <p className="text-sm text-terracotta text-center">{submitError}</p>
      ) : null}
    </form>
  );
}
