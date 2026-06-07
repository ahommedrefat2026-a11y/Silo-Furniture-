"use client";

import { useState } from "react";

export default function CustomRequests() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    furnitureType: "",
    requirements: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm({ name: "", email: "", furnitureType: "", requirements: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit");
    }
  };

  return (
    <section id="custom" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              Made for You
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-offwhite mb-6 leading-tight">
              Can&apos;t Find Your <br />
              <span className="italic text-gold-light">Exact Size?</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />
            <p className="text-warm-gray-light font-sans text-base leading-relaxed mb-8 max-w-md">
              We build custom pieces tailored to your space. From dining tables
              that fit an alcove to bookshelves that hug an awkward corner—share
              your vision, and our artisans in Dhaka will bring it to life.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-xs">1</span>
                </div>
                <div>
                  <p className="text-offwhite font-sans text-sm font-medium mb-1">Share Your Vision</p>
                  <p className="text-warm-gray text-xs leading-relaxed">Tell us the dimensions, style, and wood preference.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-xs">2</span>
                </div>
                <div>
                  <p className="text-offwhite font-sans text-sm font-medium mb-1">Receive a Proposal</p>
                  <p className="text-warm-gray text-xs leading-relaxed">We send detailed sketches, material options, and pricing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-xs">3</span>
                </div>
                <div>
                  <p className="text-offwhite font-sans text-sm font-medium mb-1">We Build &amp; Deliver</p>
                  <p className="text-warm-gray text-xs leading-relaxed">Handcrafted in our Dhaka workshop and delivered with care.</p>
                </div>
              </div>
            </div>

            {/* WhatsApp & Facebook CTAs */}
            <div className="mt-10 space-y-3">
              {/* WhatsApp - Primary */}
              <a
                href="https://wa.me/8801575837449?text=Hi%20S%20I%20L%20O%20Furniture!%20I%27d%20like%20to%20discuss%20a%20custom%20furniture%20piece."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-offwhite text-sm font-medium group-hover:text-[#25D366] transition-colors">
                    Message us on WhatsApp
                  </p>
                  <p className="text-warm-gray text-xs mt-0.5">
                    +880 1575-837449 · Typically replies within minutes
                  </p>
                </div>
                <svg className="w-4 h-4 text-[#25D366] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              {/* Facebook - Secondary */}
              <a
                href="https://www.facebook.com/people/S-I-L-O-Furniture/61590499297617/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-charcoal-light/40 border border-charcoal-light hover:border-gold/30 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 text-warm-gray group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="text-warm-gray text-xs tracking-[0.1em] uppercase font-sans group-hover:text-gold transition-colors">
                  Follow us on Facebook
                </span>
              </a>
            </div>
          </div>

          {/* Form side */}
          <div className="bg-charcoal-light/50 border border-charcoal-light p-8 md:p-10">
            <h3 className="font-serif text-2xl text-offwhite mb-2">
              Start Your Custom Piece
            </h3>
            <p className="text-warm-gray text-xs tracking-wide mb-8">
              Fill in your details and we&apos;ll get back within 48 hours.
            </p>

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-serif text-xl text-offwhite mb-2">Thank You</p>
                <p className="text-warm-gray text-sm">
                  Your inquiry has been received. Our team will be in touch soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-gold text-xs tracking-[0.2em] uppercase hover:text-gold-light transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-warm-gray-light text-xs tracking-wide uppercase mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-field !bg-charcoal !border-charcoal-light !text-offwhite focus:!border-gold"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-warm-gray-light text-xs tracking-wide uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-field !bg-charcoal !border-charcoal-light !text-offwhite focus:!border-gold"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-warm-gray-light text-xs tracking-wide uppercase mb-2">
                    Furniture Type
                  </label>
                  <select
                    value={form.furnitureType}
                    onChange={(e) =>
                      setForm({ ...form, furnitureType: e.target.value })
                    }
                    className="input-field !bg-charcoal !border-charcoal-light !text-offwhite focus:!border-gold"
                    required
                  >
                    <option value="">Select a type</option>
                    <option value="dining-table">Dining Table</option>
                    <option value="sofa">Sofa</option>
                    <option value="bed-frame">Bed Frame</option>
                    <option value="bookshelf">Bookshelf</option>
                    <option value="coffee-table">Coffee Table</option>
                    <option value="sideboard">Sideboard</option>
                    <option value="desk">Desk</option>
                    <option value="tv-unit">TV Unit</option>
                    <option value="wardrobe">Wardrobe</option>
                    <option value="sculptural-piece">Sculptural Piece</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-warm-gray-light text-xs tracking-wide uppercase mb-2">
                    Custom Requirements
                  </label>
                  <textarea
                    value={form.requirements}
                    onChange={(e) =>
                      setForm({ ...form, requirements: e.target.value })
                    }
                    rows={4}
                    className="input-field !bg-charcoal !border-charcoal-light !text-offwhite focus:!border-gold resize-none"
                    placeholder="Describe dimensions, wood preference, finish, etc."
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-xs">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
