import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Products from "@/components/sections/products"
import WhyChooseUs from "@/components/sections/why-choose-us"
import Certifications from "@/components/sections/certifications"
import CTA from "@/components/sections/cta"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VisionMissionValues from "@/components/sections/vision-mission-values"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <VisionMissionValues />
      <Features />
      <Products />
      <WhyChooseUs />
      <Certifications />
      <CTA />
      <Footer />
    </main>
  )
}
