"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "The walnut dining table we commissioned from S I L O is genuinely the most beautiful piece of furniture we own. After two years of daily use with three kids, there isn't a single wobble or scratch. It's built like a tank but looks like a work of art.",
    name: "Farhan & Nusrat Rahman",
    location: "Gulshan, Dhaka",
    piece: "Custom Walnut Dining Table",
    stars: 5,
  },
  {
    quote:
      "I've furnished three apartments and nothing compares to S I L O craftsmanship. The oak bedroom set we ordered was delivered flawlessly, and the hand-rubbed finish actually gets more beautiful with age. This is heirloom-quality, full stop.",
    name: "Arif Hossain",
    location: "Banani, Dhaka",
    piece: "Oak Bedroom Collection",
    stars: 5,
  },
  {
    quote:
      "We needed a sculptural bookshelf for our living room and S I L O made it happen. The team sent detailed 3D renderings before building, and the final piece was stunning. The joinery is flawless—you can feel the craftsmanship in every corner. True urban refined living.",
    name: "Sabrina Ahmed",
    location: "Dhanmondi, Dhaka",
    piece: "Custom Sculptural Bookshelf",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-cream">
      <div className="max-w-5xl mx-auto section-padding">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            What Our Clients Say
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Testimonial carousel */}
        <div className="relative">
          {/* Quote icon */}
          <div className="text-center mb-8">
            <svg
              className="w-10 h-10 mx-auto text-gold/40"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </div>

          {/* Active testimonial */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="font-serif text-lg md:text-xl lg:text-2xl text-charcoal leading-relaxed italic mb-8">
              &ldquo;{testimonials[active].quote}&rdquo;
            </p>

            <div className="w-8 h-[1px] bg-gold mx-auto mb-6" />

            <p className="font-sans text-sm font-medium text-charcoal">
              {testimonials[active].name}
            </p>
            <p className="text-warm-gray text-xs mt-1">
              {testimonials[active].location} · {testimonials[active].piece}
            </p>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-gold w-8"
                    : "bg-warm-gray-light hover:bg-warm-gray"
                }`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
