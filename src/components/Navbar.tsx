"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-dark/95 backdrop-blur-sm">
      <div className="section-padding flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1">
          <span className="font-serif text-2xl tracking-[0.3em] text-offwhite font-medium">
            S I L O
          </span>
          <span className="hidden sm:inline-block text-gold text-[10px] tracking-[0.25em] uppercase font-sans ml-2 mt-1">
            Furniture
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <a
            href="#collections"
            className="text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors duration-300"
          >
            Collections
          </a>
          <a
            href="#craft"
            className="text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors duration-300"
          >
            The Craft
          </a>
          <a
            href="#custom"
            className="text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors duration-300"
          >
            Custom
          </a>
          <a
            href="#testimonials"
            className="text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors duration-300"
          >
            Reviews
          </a>
          <a
            href="https://wa.me/8801575837449?text=Hi%20S%20I%20L%20O%20Furniture!%20I%27m%20interested%20in%20your%20premium%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2.5 !px-6 text-[11px] gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-offwhite"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal-dark border-t border-charcoal-light px-6 py-8 space-y-6">
          <a
            href="#collections"
            onClick={() => setMenuOpen(false)}
            className="block text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors"
          >
            Collections
          </a>
          <a
            href="#craft"
            onClick={() => setMenuOpen(false)}
            className="block text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors"
          >
            The Craft
          </a>
          <a
            href="#custom"
            onClick={() => setMenuOpen(false)}
            className="block text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors"
          >
            Custom
          </a>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
            className="block text-warm-gray-light text-xs tracking-[0.2em] uppercase font-sans hover:text-gold transition-colors"
          >
            Reviews
          </a>
          <a
            href="https://wa.me/8801575837449?text=Hi%20S%20I%20L%20O%20Furniture!%20I%27m%20interested%20in%20your%20premium%20furniture."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold !py-2.5 w-full text-center text-[11px] gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
