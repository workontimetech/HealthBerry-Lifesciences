"use client"

import { Beaker, Shield, Zap } from "lucide-react"

const features = [
  {
    icon: Beaker,
    title: "Quality Manufacturing",
    description: "State-of-the-art facilities with GMP and ISO certifications ensuring highest quality standards.",
  },
  {
    icon: Shield,
    title: "Ethical Standards",
    description: "Committed to ethical practices in pharmaceutical development and distribution across all operations.",
  },
  {
    icon: Zap,
    title: "Wide Product Range",
    description: "Comprehensive portfolio of pharmaceutical products meeting diverse healthcare needs.",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why We Stand Out</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Excellence in every aspect of pharmaceutical manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-white to-muted/30"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
