"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-charcoal-dark text-offwhite">
      {/* Newsletter Band */}
      <div className="border-b border-charcoal-light">
        <div className="max-w-7xl mx-auto section-padding py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-3">
                Newsletter
              </p>
              <h3 className="font-serif text-2xl md:text-3xl text-offwhite mb-2">
                Design Tips &amp; New Arrivals
              </h3>
              <p className="text-warm-gray text-sm">
                Join our mailing list for exclusive previews, care guides, and
                interior inspiration.
              </p>
            </div>
            <div>
              {status === "success" ? (
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-warm-gray-light text-sm">
                    You&apos;re subscribed! Watch your inbox for design inspiration.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-field !bg-charcoal !border-charcoal-light !text-offwhite focus:!border-gold flex-1"
                    required
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-gold flex-shrink-0 disabled:opacity-50"
                  >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              )}
              {status === "error" && (
                <p className="text-red-400 text-xs mt-2">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-serif text-2xl tracking-[0.3em] text-offwhite font-medium">
              S I L O
            </span>
            <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-sans mt-1 mb-3">
              Urban Living, Refined
            </p>
            <p className="text-warm-gray text-xs leading-relaxed">
              Sculptural furniture &amp; modern urban spaces with premium
              craftsmanship. Based in Dhaka, Bangladesh.
            </p>
          </div>

          {/* Collections */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-gray-light font-sans mb-4">
              Collections
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#collections" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  Living Room
                </a>
              </li>
              <li>
                <a href="#collections" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  Dining Space
                </a>
              </li>
              <li>
                <a href="#collections" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  Bedroom
                </a>
              </li>
              <li>
                <a href="#custom" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  Custom Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-gray-light font-sans mb-4">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <a href="#craft" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#craft" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  The Workshop
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#custom" className="text-warm-gray text-sm hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-gray-light font-sans mb-4">
              Connect With Us
            </p>

            {/* Facebook - Primary & Prominent */}
            <a
              href="https://www.facebook.com/people/S-I-L-O-Furniture/61590499297617/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-5 px-4 py-3 bg-gold/10 border border-gold/30 rounded hover:bg-gold/20 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-charcoal-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <p className="text-offwhite text-xs font-medium group-hover:text-gold transition-colors">Follow us on Facebook</p>
                <p className="text-warm-gray text-[10px]">S I L O Furniture</p>
              </div>
            </a>

            {/* WhatsApp - Prominent */}
            <a
              href="https://wa.me/8801575837449?text=Hi%20S%20I%20L%20O%20Furniture!%20I%27m%20interested%20in%20your%20premium%20furniture."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mb-5 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded hover:bg-[#25D366]/20 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-offwhite text-xs font-medium group-hover:text-[#25D366] transition-colors">Chat on WhatsApp</p>
                <p className="text-warm-gray text-[10px]">+880 1575-837449</p>
              </div>
            </a>

            {/* Other socials */}
            <div className="flex gap-3 mb-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/S-I-L-O-Furniture/61590499297617/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-warm-gray hover:bg-gold hover:text-charcoal-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com/silofurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-warm-gray hover:bg-gold hover:text-charcoal-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="https://pinterest.com/silofurniture"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center text-warm-gray hover:bg-gold hover:text-charcoal-dark transition-all duration-300"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
                </svg>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-warm-gray text-xs leading-relaxed">
                📍 Dhaka, Bangladesh
              </p>
              <a
                href="https://wa.me/8801575837449"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-gray text-xs leading-relaxed hover:text-[#25D366] transition-colors block"
              >
                📱 +880 1575-837449
              </a>
              <p className="text-warm-gray text-xs leading-relaxed">
                ✉️ info@silofurniture.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-charcoal-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-xs">
            © {new Date().getFullYear()} S I L O Furniture. All rights reserved. Dhaka, Bangladesh.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-warm-gray text-xs hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-warm-gray text-xs hover:text-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-warm-gray text-xs hover:text-gold transition-colors">
              Shipping Info
            </a>
            <a href="/admin" className="text-warm-gray/40 text-xs hover:text-gold transition-colors">
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
