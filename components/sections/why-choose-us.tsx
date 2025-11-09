"use client"

import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Advanced manufacturing facilities with cutting-edge technology",
  "GMP, ISO, and WHO certified operations",
  "Rigorous quality control at every stage",
  "Ethical and transparent business practices",
  "Wide distribution network across India",
  "Dedicated customer support and service",
  "Continuous research and innovation",
  "Competitive and fair pricing",
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img src="/pharmaceutical-laboratory-research-facility.jpg" alt="Manufacturing facility" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          {/* Right Side - Benefits */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Why Choose Health Berry</h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-lg text-foreground group-hover:text-primary transition-colors">{benefit}</p>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg transform hover:-translate-y-1">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
