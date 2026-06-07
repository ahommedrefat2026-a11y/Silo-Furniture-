"use client";

import { useState, useEffect, useCallback } from "react";

interface Inquiry {
  id: number;
  name: string;
  email: string;
  furnitureType: string;
  requirements: string;
  createdAt: string;
}

interface Subscriber {
  id: number;
  email: string;
  createdAt: string;
}

type TabType = "guide" | "inquiries" | "subscribers";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>("guide");
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchInquiries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/inquiries");
      const data = await res.json();
      if (data.success) setInquiries(data.data);
    } catch {
      /* empty */
    }
    setLoading(false);
  }, []);

  const fetchSubscribers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/subscribers");
      const data = await res.json();
      if (data.success) setSubscribers(data.data);
    } catch {
      /* empty */
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (activeTab === "inquiries") fetchInquiries();
    if (activeTab === "subscribers") fetchSubscribers();
  }, [activeTab, fetchInquiries, fetchSubscribers]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const furnitureTypeLabels: Record<string, string> = {
    "dining-table": "Dining Table",
    sofa: "Sofa",
    "bed-frame": "Bed Frame",
    bookshelf: "Bookshelf",
    "coffee-table": "Coffee Table",
    sideboard: "Sideboard",
    desk: "Desk",
    "tv-unit": "TV Unit",
    wardrobe: "Wardrobe",
    "sculptural-piece": "Sculptural Piece",
    other: "Other",
  };

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <header className="bg-charcoal-dark text-offwhite">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <a href="/" className="font-serif text-xl tracking-[0.3em] text-offwhite hover:text-gold transition-colors">
              S I L O
            </a>
            <span className="text-gold text-[9px] tracking-[0.2em] uppercase font-sans ml-2">
              Admin Panel
            </span>
          </div>
          <a
            href="/"
            className="text-warm-gray text-xs tracking-[0.15em] uppercase font-sans hover:text-gold transition-colors flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Site
          </a>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-cream bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-0">
            {(
              [
                { key: "guide", label: "📖 How to Use", icon: "" },
                { key: "inquiries", label: "📩 Custom Inquiries", icon: "" },
                { key: "subscribers", label: "📧 Newsletter Subscribers", icon: "" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-4 text-xs tracking-[0.1em] uppercase font-sans transition-all border-b-2 ${
                  activeTab === tab.key
                    ? "border-gold text-charcoal font-medium"
                    : "border-transparent text-warm-gray hover:text-charcoal"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* ===== GUIDE TAB ===== */}
        {activeTab === "guide" && (
          <div className="space-y-10">
            {/* Welcome */}
            <div className="bg-white border border-cream rounded-lg p-8">
              <h1 className="font-serif text-3xl text-charcoal mb-3">
                Welcome to Your S I L O Furniture Dashboard
              </h1>
              <p className="text-warm-gray font-sans text-sm leading-relaxed max-w-2xl">
                This guide explains every section of your website, how customers interact
                with it, and how you can manage incoming leads. Bookmark this page for
                quick reference.
              </p>
            </div>

            {/* Website Structure */}
            <div className="bg-white border border-cream rounded-lg p-8">
              <h2 className="font-serif text-2xl text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">1</span>
                Your Website Sections
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "🏠 Hero Section",
                    desc: "The first thing visitors see — a full-screen luxury living room image with your headline \"Crafted for Generations. Designed for Today.\" Two buttons: \"Explore Collections\" scrolls down, \"WhatsApp Us\" opens a direct chat.",
                  },
                  {
                    title: "✨ Value Propositions",
                    desc: "Three-column section showing what makes S I L O different: Sustainably Sourced Wood, Master Artisan Craftsmanship, and Made to Order Customizations.",
                  },
                  {
                    title: "🛋️ Featured Collections",
                    desc: "Beautiful image cards for Living Room, Dining Space, and Bedroom Sanctuaries. Each card has a hover effect showing \"View Collection\".",
                  },
                  {
                    title: "🔨 The Craft (Story)",
                    desc: "Split layout with a close-up artisan image and your brand story about sculptural furniture for modern urban spaces. Includes stats: 100% Solid Wood, 25yr Warranty, Zero Particle Board.",
                  },
                  {
                    title: "📝 Custom Requests (Lead Gen)",
                    desc: "Dark section with a 3-step process and a contact form. When someone submits the form, their inquiry is saved to your database — view them in the \"Custom Inquiries\" tab above.",
                  },
                  {
                    title: "⭐ Testimonials",
                    desc: "Carousel with 3 customer reviews from Gulshan, Banani, and Dhanmondi (Dhaka). Visitors can click dots to navigate between reviews.",
                  },
                  {
                    title: "📬 Footer & Newsletter",
                    desc: "Email newsletter signup (subscribers saved to database), your social links (WhatsApp, Facebook, Instagram, Pinterest), contact info, and copyright.",
                  },
                  {
                    title: "💬 Floating WhatsApp Button",
                    desc: "A green WhatsApp icon always visible at the bottom-right corner. It pulses to attract attention, then stays steady. Clicking opens WhatsApp with a pre-filled message.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-offwhite rounded-lg border border-cream">
                    <h3 className="font-sans text-sm font-semibold text-charcoal mb-2">{item.title}</h3>
                    <p className="text-warm-gray text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="bg-white border border-cream rounded-lg p-8">
              <h2 className="font-serif text-2xl text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] text-sm">2</span>
                WhatsApp Integration — How It Works
              </h2>
              <div className="bg-[#25D366]/5 border border-[#25D366]/20 rounded-lg p-6 mb-6">
                <p className="text-charcoal font-sans text-sm font-medium mb-1">Your WhatsApp Number</p>
                <p className="text-[#25D366] font-sans text-lg font-semibold tracking-wide">+880 1575-837449</p>
              </div>
              <p className="text-warm-gray font-sans text-sm leading-relaxed mb-4">
                When a customer clicks any WhatsApp button on your site, it opens WhatsApp (app or web) with your number
                and a pre-written message. You will receive the message directly in your WhatsApp inbox.
              </p>
              <h3 className="font-sans text-sm font-semibold text-charcoal mb-3">WhatsApp buttons are placed in these 6 locations:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "🔝 Navbar — \"WhatsApp Us\" gold button (desktop & mobile)",
                  "🏠 Hero — \"WhatsApp Us\" secondary button",
                  "📝 Custom Requests — Green \"Message us on WhatsApp\" card",
                  "📋 Footer — Green \"Chat on WhatsApp\" card",
                  "📋 Footer — Phone number link (+880 1575-837449)",
                  "💬 Floating button — Bottom-right corner (always visible)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 bg-offwhite rounded border border-cream">
                    <span className="text-xs text-warm-gray leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How Leads Come In */}
            <div className="bg-white border border-cream rounded-lg p-8">
              <h2 className="font-serif text-2xl text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">3</span>
                How Customer Leads Come In
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-offwhite rounded-lg border border-cream">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💬</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-charcoal mb-1">Via WhatsApp (Instant)</h3>
                    <p className="text-warm-gray text-xs leading-relaxed">
                      Most customers will tap the WhatsApp button. You receive the message instantly on your phone.
                      Reply directly, share photos of your work, send quotes — all within WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-offwhite rounded-lg border border-cream">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📝</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-charcoal mb-1">Via Custom Inquiry Form (Saved to Database)</h3>
                    <p className="text-warm-gray text-xs leading-relaxed">
                      Some customers prefer filling out the form with their name, email, furniture type, and requirements.
                      These are stored in your database. Go to the <strong>&quot;Custom Inquiries&quot;</strong> tab above to view all submissions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-offwhite rounded-lg border border-cream">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-charcoal mb-1">Via Newsletter Signup</h3>
                    <p className="text-warm-gray text-xs leading-relaxed">
                      Visitors can subscribe to your newsletter in the footer. Their emails are saved in the database.
                      Go to the <strong>&quot;Newsletter Subscribers&quot;</strong> tab above to see the list.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-cream rounded-lg p-8">
              <h2 className="font-serif text-2xl text-charcoal mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold text-sm">4</span>
                Quick Links
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="/"
                  className="flex items-center gap-3 p-4 bg-offwhite rounded-lg border border-cream hover:border-gold/30 transition-colors group"
                >
                  <span className="text-xl">🌐</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal group-hover:text-gold transition-colors">View Website</p>
                    <p className="text-warm-gray text-[10px]">Your live homepage</p>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/people/S-I-L-O-Furniture/61590499297617/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-offwhite rounded-lg border border-cream hover:border-blue-300 transition-colors group"
                >
                  <span className="text-xl">📘</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal group-hover:text-blue-600 transition-colors">Facebook Page</p>
                    <p className="text-warm-gray text-[10px]">S I L O Furniture</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/8801575837449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-offwhite rounded-lg border border-cream hover:border-[#25D366]/30 transition-colors group"
                >
                  <span className="text-xl">💬</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal group-hover:text-[#25D366] transition-colors">WhatsApp</p>
                    <p className="text-warm-gray text-[10px]">+880 1575-837449</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ===== INQUIRIES TAB ===== */}
        {activeTab === "inquiries" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl text-charcoal">Custom Inquiries</h2>
                <p className="text-warm-gray text-xs mt-1">
                  {inquiries.length} total {inquiries.length === 1 ? "inquiry" : "inquiries"} received
                </p>
              </div>
              <button
                onClick={fetchInquiries}
                disabled={loading}
                className="btn-outline !py-2.5 !px-5 !text-[10px] disabled:opacity-50"
              >
                {loading ? "Refreshing..." : "↻ Refresh"}
              </button>
            </div>

            {loading && inquiries.length === 0 ? (
              <div className="text-center py-20">
                <div className="animate-spin w-8 h-8 border-2 border-gold border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-warm-gray text-sm">Loading inquiries...</p>
              </div>
            ) : inquiries.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-lg border border-cream">
                <div className="text-5xl mb-4">📭</div>
                <p className="font-serif text-xl text-charcoal mb-2">No Inquiries Yet</p>
                <p className="text-warm-gray text-sm max-w-md mx-auto">
                  When a customer fills out the custom furniture form on your website,
                  their inquiry will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {inquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="bg-white border border-cream rounded-lg p-6 hover:border-gold/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-sans text-base font-semibold text-charcoal">
                          {inquiry.name}
                        </h3>
                        <p className="text-warm-gray text-xs mt-0.5">{inquiry.email}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] tracking-[0.1em] uppercase font-sans font-medium rounded">
                          {furnitureTypeLabels[inquiry.furnitureType] || inquiry.furnitureType}
                        </span>
                        <span className="text-warm-gray text-[10px]">
                          {formatDate(inquiry.createdAt)}
                        </span>
                      </div>
                    </div>
                    <div className="bg-offwhite rounded p-4">
                      <p className="text-xs text-warm-gray uppercase tracking-wide mb-1 font-medium">Requirements</p>
                      <p className="text-charcoal text-sm leading-relaxed">{inquiry.requirements}</p>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <a
                        href={`https://wa.me/88${inquiry.email.includes("@") ? "" : inquiry.email}?text=Hi ${inquiry.name}, thank you for your inquiry about a ${furnitureTypeLabels[inquiry.furnitureType] || inquiry.furnitureType} at S I L O Furniture!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#25D366] text-[10px] tracking-[0.1em] uppercase font-sans font-medium hover:underline"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Reply via WhatsApp
                      </a>
                      <a
                        href={`mailto:${inquiry.email}?subject=Your Custom Furniture Inquiry — S I L O Furniture&body=Hi ${inquiry.name},%0A%0AThank you for your interest in a custom ${furnitureTypeLabels[inquiry.furnitureType] || inquiry.furnitureType}.%0A%0AWe'd love to discuss your requirements further.%0A%0ABest regards,%0AS I L O Furniture`}
                        className="inline-flex items-center gap-1.5 text-gold text-[10px] tracking-[0.1em] uppercase font-sans font-medium hover:underline"
                      >
                        ✉️ Reply via Email
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ===== SUBSCRIBERS TAB ===== */}
        {activeTab === "subscribers" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-serif text-2xl text-charcoal">Newsletter Subscribers</h2>
                <p className="text-warm-gray text-xs mt-1">
                  {subscribers.length} total {subscribers.length === 1 ? "subscriber" : "subscribers"}
                </p>
              </div>
              <button
                onClick={fetchSubscribers}
                disabled={loading}
                className="btn-outline !py-2.5 !px-5 !text-[10px] disabled:opacity-50"
              >
                {loading ? "Refreshing..." : "↻ Refresh"}
              </button>
            </div>

            {loading && subscribers.length === 0 ? (
              <div className="text-center py-20">
                <div className="animate-spin w-8 h-8 border-2 border-gold border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-warm-gray text-sm">Loading subscribers...</p>
              </div>
            ) : subscribers.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-lg border border-cream">
                <div className="text-5xl mb-4">📭</div>
                <p className="font-serif text-xl text-charcoal mb-2">No Subscribers Yet</p>
                <p className="text-warm-gray text-sm max-w-md mx-auto">
                  When visitors sign up for your newsletter in the footer,
                  their emails will appear here.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-cream rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-cream bg-offwhite">
                      <th className="text-left px-6 py-3 text-[10px] tracking-[0.15em] uppercase text-warm-gray font-sans font-medium">
                        #
                      </th>
                      <th className="text-left px-6 py-3 text-[10px] tracking-[0.15em] uppercase text-warm-gray font-sans font-medium">
                        Email Address
                      </th>
                      <th className="text-left px-6 py-3 text-[10px] tracking-[0.15em] uppercase text-warm-gray font-sans font-medium">
                        Subscribed On
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((sub, i) => (
                      <tr
                        key={sub.id}
                        className="border-b border-cream last:border-0 hover:bg-offwhite/50 transition-colors"
                      >
                        <td className="px-6 py-4 text-warm-gray text-xs">{i + 1}</td>
                        <td className="px-6 py-4 text-charcoal text-sm font-medium">{sub.email}</td>
                        <td className="px-6 py-4 text-warm-gray text-xs">{formatDate(sub.createdAt)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
