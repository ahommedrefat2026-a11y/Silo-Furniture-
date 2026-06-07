const collections = [
  {
    title: "Living Room",
    subtitle: "Sofas · Coffee Tables · Consoles",
    image:
      "https://images.pexels.com/photos/8082229/pexels-photo-8082229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    title: "Dining Space",
    subtitle: "Tables · Chairs · Sideboards",
    image:
      "https://images.pexels.com/photos/10486289/pexels-photo-10486289.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
  {
    title: "Bedroom Sanctuaries",
    subtitle: "Beds · Nightstands · Dressers",
    image:
      "https://images.pexels.com/photos/7018838/pexels-photo-7018838.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600",
  },
];

export default function FeaturedCollections() {
  return (
    <section
      id="collections"
      className="py-24 md:py-32 bg-cream section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Our Collections
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            Featured Collections
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Collection grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/80 via-charcoal-dark/20 to-transparent transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="w-8 h-[1px] bg-gold mb-4 transition-all duration-500 group-hover:w-12" />
                <h3 className="font-serif text-2xl md:text-3xl text-offwhite mb-2">
                  {item.title}
                </h3>
                <p className="text-warm-gray-light text-xs tracking-[0.15em] uppercase font-sans">
                  {item.subtitle}
                </p>
                <div className="mt-4 flex items-center gap-2 text-gold text-xs tracking-[0.2em] uppercase font-sans opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  View Collection
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
