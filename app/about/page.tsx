"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, Users, Zap, Heart } from "lucide-react"
import VisionMissionValues from "@/components/sections/vision-mission-values"

const teamMembers = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Founder & Chairman",
    bio: "Visionary leader with 25+ years in pharmaceutical industry",
    image: "/professional-man-doctor.jpg",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Chief Medical Officer",
    bio: "Expert in pharmaceutical formulation and quality control",
    image: "/professional-woman-doctor.jpg",
  },
  {
    name: "Amit Patel",
    role: "Head of Operations",
    bio: "Strategic leader managing manufacturing excellence",
    image: "/professional-man-executive.jpg",
  },
  {
    name: "Dr. Anjali Verma",
    role: "Director of Research & Development",
    bio: "Innovation-driven expert in drug development",
    image: "/professional-woman-scientist.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Chief Financial Officer",
    bio: "Finance and sustainability strategist",
    image: "/professional-man-business.jpg",
  },
  {
    name: "Neha Desai",
    role: "Head of Quality Assurance",
    bio: "Ensuring highest standards of pharmaceutical quality",
    image: "/professional-woman-engineer.jpg",
  },
]

const milestones = [
  { year: 2015, title: "Founded", description: "Health Berry Lifesciences established" },
  { year: 2017, title: "First Facility", description: "State-of-the-art manufacturing plant operational" },
  { year: 2019, title: "Expansion", description: "Expanded product portfolio to 150+ medicines" },
  { year: 2021, title: "ISO Certified", description: "Achieved ISO 9001 & GMP certification" },
  { year: 2023, title: "Market Leader", description: "Became top pharmaceutical brand in region" },
  { year: 2025, title: "Innovation Hub", description: "Launched advanced R&D center" },
]

const values = [
  {
    icon: Heart,
    title: "Patient First",
    description: "Every decision driven by patient safety and wellness",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "Uncompromising standards in every product",
  },
  {
    icon: Users,
    title: "Team Trust",
    description: "Empowering our people to innovate and grow",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Continuous research and development",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">About Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Delivering Quality Healthcare Through Ethical Pharmaceutical Innovation
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Health Berry Lifesciences was founded in 2015 with a singular mission: to make quality healthcare
                    accessible to every Indian household. What began as a small operation with a dedicated team has
                    grown into a trusted pharmaceutical powerhouse.
                  </p>
                  <p>
                    Our journey has been marked by unwavering commitment to excellence, ethical practices, and patient
                    welfare. Today, we serve millions of patients across India with a portfolio of over 200
                    pharmaceutical products.
                  </p>
                  <p>
                    We believe that health is a fundamental right, and our responsibility is to provide affordable,
                    effective medicines without compromising on quality or safety.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/pharmaceutical-manufacturing-facility.jpg"
                  alt="Our manufacturing facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission Values Section */}
        <VisionMissionValues />

        {/* Milestones */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Journey</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-border"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <p className="text-3xl font-bold text-primary mb-2">{milestone.year}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to pharmaceutical excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "200+", label: "Products", sublabel: "Pharmaceutical Solutions" },
                { number: "5M+", label: "Patients", sublabel: "Served Annually" },
                { number: "98%", label: "Satisfaction", sublabel: "Customer Rating" },
                { number: "2000+", label: "Employees", sublabel: "Dedicated Team" },
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

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Join Our Mission</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Be part of a team that's transforming healthcare in India
            </p>
            <a
              href="/careers"
              className="inline-flex px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all hover:shadow-lg"
            >
              Explore Careers
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
