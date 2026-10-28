import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VivoPartnership from "@/components/VivoPartnership";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { ADDRESS, SITE_URL, WHATSAPP_NUMBER_DISPLAY } from "@/lib/config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Viva Connecta",
    description:
      "Soluções em telecomunicações e conectividade para empresas em Guarulhos e região. Parceira Vivo Empresas.",
    url: SITE_URL,
    telephone: WHATSAPP_NUMBER_DISPLAY,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      postalCode: ADDRESS.zip,
      addressCountry: "BR",
    },
    areaServed: "Guarulhos e região",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <VivoPartnership />
        <Services />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
