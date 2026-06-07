export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6580396/pexels-photo-6580396.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal-dark/50 to-charcoal-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="w-12 h-[1px] bg-gold mx-auto mb-8" />

        <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-6">
          Urban Living, Refined · Dhaka
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-offwhite leading-[1.15] mb-6">
          Crafted for Generations.
          <br />
          <span className="italic text-gold-light">Designed for Today.</span>
        </h1>

        <p className="text-warm-gray-light text-base sm:text-lg font-sans font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Bespoke, premium furniture built with uncompromised quality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#collections" className="btn-gold">
            Explore Collections
            <svg
              className="ml-3 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="https://wa.me/8801575837449?text=Hi%20S%20I%20L%20O%20Furniture!%20I%27m%20interested%20in%20your%20premium%20furniture.%20Could%20you%20share%20more%20details%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-offwhite/30 text-offwhite font-sans font-medium text-sm tracking-widest uppercase transition-all duration-300 hover:border-[#25D366] hover:text-[#25D366]"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-warm-gray text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}
