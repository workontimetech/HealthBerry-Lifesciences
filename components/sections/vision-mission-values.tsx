"use client"

import type React from "react"

import { useState } from "react"
import { Eye, Zap, Leaf, Heart, ChevronDown } from "lucide-react"
import { TiltCard } from "@/components/ui/tilt-card"

interface MottoItem {
  icon: React.ElementType
  title: string
  color: string
  textColor: string
  description: string
  fullDescription: string
}

const mottoItems: MottoItem[] = [
  {
    icon: Eye,
    title: "Vision",
    color: "bg-red-50",
    textColor: "text-red-600",
    description:
      "To become the most admired pharmaceutical company by doctors, patients, employees and all channel partners",
    fullDescription:
      "Our vision is to be recognized as the most trusted and admired pharmaceutical company by providing utmost quality medicines, ethical practices, and exceptional patient care. We aspire to set industry standards in innovation, safety, and accessibility.",
  },
  {
    icon: Zap,
    title: "Mission",
    color: "bg-orange-50",
    textColor: "text-orange-600",
    description:
      "To become a leading pharmaceutical company integrated in all therapy segments which will be recognized globally",
    fullDescription:
      "We are committed to becoming a global pharmaceutical leader by delivering innovative, high-quality medicines across all therapeutic segments. Our mission is to improve healthcare outcomes and make medicines accessible to patients worldwide.",
  },
  {
    icon: Leaf,
    title: "Values",
    color: "bg-green-50",
    textColor: "text-green-600",
    description:
      "We conduct our business with honesty, integrity, and mutual respect for those with whom we have relationships",
    fullDescription:
      "We conduct our business with unwavering honesty and integrity. We believe in maintaining mutual respect with all stakeholders - patients, employees, partners, and communities. These values guide every decision we make.",
  },
  {
    icon: Heart,
    title: "Culture",
    color: "bg-teal-50",
    textColor: "text-teal-600",
    description:
      "At Health Berry we have created a culture of growth, caring for people & a culture of creative optimism",
    fullDescription:
      "We foster a culture of continuous growth and innovation where every team member is empowered to excel. Our workplace is built on caring for people, supporting their development, and embracing creative optimism in solving healthcare challenges.",
  },
]

export default function VisionMissionValues() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Philosophy</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that define Health Berry Lifesciences
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-12">
          {mottoItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="h-full">
                <TiltCard className="h-full">
                  <div
                    className={`glow-card group relative rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-xl border border-white/50 hover:border-white ${item.color} h-full flex flex-col`}
                    onClick={() => setExpandedId(expandedId === item.title ? null : item.title)}
                  >
                    <div className="p-8 flex flex-col h-full min-h-[380px]">
                  {/* Circular Icon */}
                      <div className="flex justify-center mb-6">
                    <div
                      className={`w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-2 ${item.textColor} border-opacity-20 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-10 h-10 ${item.textColor}`} />
                    </div>
                  </div>

                  {/* Title */}
                      <h3 className={`text-2xl font-bold text-center ${item.textColor} mb-4`}>{item.title}</h3>

                  {/* Description */}
                      <p className="text-center text-gray-700 text-sm leading-relaxed flex-grow">{item.description}</p>

                  {/* Expand Indicator */}
                      <div className="flex justify-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${expandedId === item.title ? "rotate-180" : ""}`}
                    />
                  </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            )
          })}
        </div>

        {/* Mobile Accordion View */}
        <div className="lg:hidden space-y-4">
          {mottoItems.map((item) => {
            const Icon = item.icon
            const isExpanded = expandedId === item.title

            return (
              <div
                key={item.title}
                className={`rounded-xl overflow-hidden border border-white/50 transition-all ${item.color}`}
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : item.title)}
                  className="w-full p-6 flex items-center gap-4 hover:bg-white/50 transition-colors"
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border-2 ${item.textColor} border-opacity-20`}
                  >
                    <Icon className={`w-7 h-7 ${item.textColor}`} />
                  </div>

                  {/* Title and Description */}
                  <div className="flex-1 text-left">
                    <h3 className={`text-lg font-bold ${item.textColor}`}>{item.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 border-t border-white/30">
                    <p className="text-gray-700 leading-relaxed">{item.fullDescription}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
