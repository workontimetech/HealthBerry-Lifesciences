import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Products from "@/components/sections/products"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Certifications from "@/components/sections/certifications"
import CTA from "@/components/sections/cta"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VisionMissionValues from "@/components/sections/vision-mission-values"
import Founder from "@/components/sections/founder"

export default function Home() {
  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Health Berry Lifesciences Pvt. Ltd.",
    "url": "https://healthberrylifesciences.com",
    "logo": "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg",
    "description": "Leading pharmaceutical company in India providing quality medicines across therapeutic segments. WHO-GMP & ISO 9001:2015 certified.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No.2, S. No 40/2, Near Sinhgad College, Kondhawa Budruk",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411048",
      "addressCountry": "IN"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-99605-60515",
      "email": "info@healthberrylifesciences.com",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    }],
    "sameAs": [
      "https://www.linkedin.com/company/health-berry-lifesciences"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Health Berry Lifesciences Pvt. Ltd.",
    "image": "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg",
    "telephone": "+91-99605-60515",
    "email": "info@healthberrylifesciences.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No.2, S. No 40/2, 39/40, near Sinhgad College, Kondhwa Budruk, Yewalewadi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411048",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.4574",
      "longitude": "73.8933"
    },
    "openingHours": "Mo-Sa 10:00-18:00",
    "priceRange": "$$"
  };

  return (
    <main>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Navbar />
      <Hero />
      <VisionMissionValues />
      <Features />
      <Products />
      <WhyChooseUs />
      <Certifications />
      <Founder />
      <CTA />
      <Footer />
    </main>
  )
}
