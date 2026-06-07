import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FeaturedCollections from "@/components/FeaturedCollections";
import TheCraft from "@/components/TheCraft";
import CustomRequests from "@/components/CustomRequests";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProps />
      <FeaturedCollections />
      <TheCraft />
      <CustomRequests />
      <Testimonials />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
