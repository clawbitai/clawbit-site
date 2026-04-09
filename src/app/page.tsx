import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import QualificationForm from "@/components/QualificationForm";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Clawbit",
    "url": "https://clawbit.ro",
    "logo": "https://clawbit.ro/content/logo.png",
    "description": "Agenție de automatizare AI pentru afaceri mici din România. Oferim soluții pentru social media, triaj de emailuri și răspunsuri recenzii Google.",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "eusunt@clawbit.ro",
      "contactType": "customer service",
      "availableLanguage": "Romanian"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Problems />
        <Services />
        <Pricing />
        <QualificationForm />
      </main>
      <Footer />
      <ScrollObserver />
    </>
  );
}
