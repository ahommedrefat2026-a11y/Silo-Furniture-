const values = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4C18 4 6 12 6 24c0 8 6 16 18 20 12-4 18-12 18-20C42 12 30 4 24 4z" />
        <path d="M24 18v8M20 22h8" />
        <path d="M16 30c2 2 5 4 8 4s6-2 8-4" />
      </svg>
    ),
    title: "Sustainably Sourced Wood",
    description:
      "Every plank is traceable to certified forests. We partner with responsible growers to ensure our materials respect the earth while delivering unmatched grain and character.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 36c0-8 4-14 12-20 8 6 12 12 12 20" />
        <path d="M24 16v24" />
        <path d="M18 28c2-1 4-1 6 0s4 1 6 0" />
        <circle cx="24" cy="10" r="3" />
      </svg>
    ),
    title: "Master Artisan Craftsmanship",
    description:
      "Our artisans bring decades of tradition to each piece. Hand-cut joinery, meticulous sanding, and premium finishes create furniture that tells a story of expertise.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="1.2">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <path d="M8 20h32M20 8v32" />
        <path d="M28 28l4 4M32 28l-4 4" />
        <circle cx="14" cy="14" r="2" />
      </svg>
    ),
    title: "Made to Order Customizations",
    description:
      "No two spaces are alike. Choose dimensions, wood species, stain color, and hardware to create a piece that fits your home—and your life—perfectly.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 md:py-32 bg-offwhite section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-gold text-xs tracking-[0.4em] uppercase font-sans mb-4">
            Why S I L O
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6">
            What Sets Us Apart
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {values.map((item, i) => (
            <div key={i} className="text-center group">
              <div className="text-gold mb-6 flex justify-center transition-transform duration-500 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                {item.title}
              </h3>
              <p className="text-warm-gray font-sans text-sm leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
