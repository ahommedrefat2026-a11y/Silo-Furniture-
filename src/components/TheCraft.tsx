export default function TheCraft() {
  return (
    <section id="craft" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5974280/pexels-photo-5974280.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700"
                alt="Master artisan working on premium wood furniture"
                className="w-full h-[500px] md:h-[600px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
            {/* Stat badge */}
            <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-charcoal text-offwhite p-6 md:p-8">
              <p className="font-serif text-3xl md:text-4xl text-gold mb-1">100%</p>
              <p className="text-xs tracking-[0.2em] uppercase font-sans text-warm-gray-light">
                Premium<br />Craftsmanship
              </p>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:pl-8">
            <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
              The Craft
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Sculptural Furniture
              <br />
              <span className="italic">for Modern Urban Spaces</span>
            </h2>
            <div className="w-16 h-[2px] bg-gold mb-8" />

            <div className="space-y-6 text-warm-gray font-sans text-sm leading-relaxed">
              <p>
                At S I L O, every piece begins its journey in our Dhaka workshop, where
                seasoned artisans select each board for grain consistency, color
                depth, and structural integrity. We believe furniture should
                outlast trends—so we build it to outlast generations.
              </p>
              <p>
                Our signature mortise-and-tenon joinery is hand-cut, ensuring
                each connection is flush, strong, and beautiful even at the
                micro-level. We avoid shortcuts: no particle board, no veneer
                on structural pieces, no compromises.
              </p>
              <p>
                Premium finishes are applied in multiple layers—hand-rubbed
                oils that enhance natural grain, followed by protective coats
                that resist daily wear while maintaining the warmth and
                character of real wood. Urban living, refined.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#custom" className="btn-primary">
                Commission a Piece
              </a>
              <a href="#collections" className="btn-outline">
                View Our Work
              </a>
            </div>

            {/* Micro features */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-cream">
              <div>
                <p className="font-serif text-2xl text-charcoal">100%</p>
                <p className="text-xs text-warm-gray tracking-wide uppercase mt-1">
                  Solid Wood
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-charcoal">25yr</p>
                <p className="text-xs text-warm-gray tracking-wide uppercase mt-1">
                  Warranty
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-charcoal">Zero</p>
                <p className="text-xs text-warm-gray tracking-wide uppercase mt-1">
                  Particle Board
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
