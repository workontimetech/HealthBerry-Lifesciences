"use client"

import { Shield, Award, CheckSquare } from "lucide-react"

const certifications = [
  { icon: Shield, title: "GMP", description: "Good Manufacturing Practice" },
  { icon: Award, title: "ISO 9001:2015", description: "Quality Management" },
  { icon: CheckSquare, title: "WHO", description: "WHO Guidelines Compliant" },
  { icon: Shield, title: "FSSAI", description: "Food & Drug Authority" },
]

export default function Certifications() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Industry Certifications</h2>
          <p className="text-center text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            Recognized and certified by leading international and national standards bodies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center hover:border-primary/50 hover:bg-white/20 transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
