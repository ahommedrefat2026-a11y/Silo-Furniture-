import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "S I L O Furniture | Urban Living, Refined — Dhaka",
  description:
    "SILO | Urban Living, Refined. Sculptural furniture, modern urban spaces, and premium craftsmanship. Based in Dhaka, Bangladesh.",
  openGraph: {
    title: "S I L O Furniture | Urban Living, Refined",
    description:
      "Sculptural Furniture | Modern Urban Spaces | Premium Craftsmanship. Based in Dhaka.",
    url: "https://www.facebook.com/people/S-I-L-O-Furniture/61590499297617/",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
