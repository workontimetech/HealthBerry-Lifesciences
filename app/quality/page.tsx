"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Award, Beaker, Shield, Zap, Leaf } from "lucide-react"

const qualityCertifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System certification",
    icon: Award,
  },
  {
    name: "GMP Certified",
    description: "Good Manufacturing Practice compliance",
    icon: Shield,
  },
  {
    name: "WHO-GMP",
    description: "World Health Organization approved standards",
    icon: CheckCircle,
  },
  {
    name: "ISO 45001",
    description: "Occupational Health & Safety Management",
    icon: Zap,
  },
  {
    name: "ISO 14001",
    description: "Environmental Management System",
    icon: Leaf,
  },
  {
    name: "USFDA Approved",
    description: "United States Food and Drug Administration",
    icon: Beaker,
  },
]

const manufacturingProcess = [
  {
    step: 1,
    title: "Raw Material Sourcing",
    description:
      "Procurement of highest quality pharmaceutical ingredients from certified suppliers with rigorous quality checks",
  },
  {
    step: 2,
    title: "Laboratory Testing",
    description:
      "Comprehensive testing of all raw materials in state-of-the-art laboratories before production approval",
  },
  {
    step: 3,
    title: "Formulation",
    description: "Expert formulation teams develop precise drug formulations following strict regulatory guidelines",
  },
  {
    step: 4,
    title: "Production",
    description: "Manufacturing in ISO-certified facilities with advanced automation and strict quality protocols",
  },
  {
    step: 5,
    title: "Quality Control",
    description: "Rigorous testing of every batch to ensure purity, potency, and safety standards",
  },
  {
    step: 6,
    title: "Packaging & Distribution",
    description: "Secure packaging and temperature-controlled distribution to ensure product integrity",
  },
]

const qualityFeatures = [
  {
    title: "Advanced Testing Labs",
    description: "State-of-the-art laboratory facilities equipped with latest analytical instruments",
    details: "HPLC, GC-MS, UV-Vis Spectrophotometry, Dissolution apparatus",
  },
  {
    title: "Batch Testing",
    description: "Every batch undergoes 50+ quality parameters before release",
    details: "Microbial limits, potency assay, impurity testing, stability studies",
  },
  {
    title: "Traceability System",
    description: "Complete product traceability from raw material to end consumer",
    details: "Blockchain-enabled tracking, QR codes, batch documentation",
  },
  {
    title: "Cold Chain Management",
    description: "Temperature-controlled storage and transportation",
    details: "Real-time monitoring, automated alerts, audit trails",
  },
]

export default function QualityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Quality Assurance</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Uncompromising Standards in Every Product
              </p>
            </div>
          </div>
        </section>

        {/* Quality Commitment */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Quality Promise</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    At Health Berry Lifesciences, quality is not just a checkbox—it's the foundation of everything we
                    do. We believe that every patient deserves medicines they can trust completely.
                  </p>
                  <p>
                    Our commitment to quality extends across every aspect of our operations: from stringent supplier
                    selection to final product testing. We invest heavily in infrastructure and human expertise to
                    maintain the highest standards.
                  </p>
                  <div className="space-y-3 mt-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">100% batch testing before release</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">ISO 9001 & GMP certified operations</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">Continuous improvement programs</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-foreground">Regular third-party audits</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/QUALITY-MANUFACTURING.jpeg"
                  alt="Quality testing laboratory"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">International Certifications</h2>
              <p className="text-xl text-muted-foreground">Meeting global quality standards</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityCertifications.map((cert, index) => {
                const Icon = cert.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Manufacturing Process</h2>
              <p className="text-xl text-muted-foreground">Six-step quality assurance journey</p>
            </div>

            <div className="space-y-8">
              {manufacturingProcess.map((item, index) => (
                <div key={index} className="flex gap-8 items-start pb-8 border-b border-border last:border-b-0">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary text-primary-foreground font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Quality Infrastructure</h2>
              <p className="text-xl text-muted-foreground">Advanced systems ensuring excellence</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-10 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Beaker className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground font-semibold mb-3">{feature.description}</p>
                  <p className="text-muted-foreground text-sm">{feature.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "6+", label: "International Certifications", sublabel: "Global Standards" },
                { number: "100%", label: "Batch Testing", sublabel: "Before Release" },
                { number: "50+", label: "Quality Parameters", sublabel: "Per Batch" },
                { number: "0", label: "Non-Compliances", sublabel: "In Last 3 Years" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border"
                >
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/SUSTAINABLE MANUFACTURING.png"
                  alt="Sustainable manufacturing practices"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Sustainable Manufacturing</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our commitment to quality extends to environmental responsibility. We've implemented comprehensive
                    sustainability measures across all manufacturing facilities.
                  </p>
                  <div className="space-y-3 mt-8">
                    <div className="flex items-start gap-3">
                      <Leaf className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-foreground">Zero liquid discharge systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Leaf className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-foreground">Renewable energy integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Leaf className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-foreground">Waste reduction & recycling</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Leaf className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                      <span className="text-foreground">Carbon neutral operations by 2030</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Questions About Our Quality Standards?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our quality assurance team is ready to discuss our manufacturing processes and certifications
            </p>
            <a
              href="/contact"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
