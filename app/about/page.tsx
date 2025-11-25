"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VisionMissionValues from "@/components/sections/vision-mission-values"
import Founder from "@/components/sections/founder"

const milestones = [
  { year: 2015, title: "Founded", description: "Health Berry Lifesciences established" },
  { year: 2017, title: "First Facility", description: "State-of-the-art manufacturing plant operational" },
  { year: 2019, title: "Expansion", description: "Expanded product portfolio to 150+ medicines" },
  { year: 2021, title: "ISO Certified", description: "Achieved ISO 9001 & GMP certification" },
  { year: 2023, title: "Market Leader", description: "Became top pharmaceutical brand in region" },
  { year: 2025, title: "Innovation Hub", description: "Launched advanced R&D center" },
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
                <h2 className="text-4xl font-bold text-foreground mb-6">About Health Berry Lifesciences Pvt. Ltd.</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Health Berry Lifesciences Pvt. Ltd. is having its operation in the pharmaceutical marketing and serving the society with a highly experienced team of professionals with extensive relationship and exposure of pharmaceutical industry for over two decades and having a vision is to become a significant player in different therapeutic segment by providing high quality therapeutic solution.
                  </p>
                  <p>
                    At Health Berry Lifesciences, we strongly believe that 'Quality' is the way ahead and there is no substitute for it.
                  </p>
                  <p>
                    The journey of Health Berry Lifesciences Pvt. Ltd. began with an aspiration to grow and excel through differentiated paths in the world of health and care for its quality products, trust, creating value to its all stakeholder.
                  </p>
                  <p>
                    At Health Berry we commit ourselves to total customer care by delivering world-class products and its services.
                  </p>
                  <p>
                    Health Berry Lifesciences Pvt. Ltd. started making its presence felt in the Indian Pharmaceutical market by adopting an ethical & professional approach. It has access to the best technical know-how in the areas of quality control and state-of-the-art formulation processes which is backed by a network of world class manufacturing units and R & D facilities in India. The manufacturing unit is designed to produce high quality, high volume formulations using cost efficient processes and has well equipped laboratories and trained personnel to ensure compliance with international quality standards as per WHO, GMP Certifications & USFDA and UKMHRA approvable process.
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

        {/* Founder Section */}
        <Founder />

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

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "40+", label: "Products", sublabel: "Pharmaceutical Solutions" },
                { number: "5L+", label: "Patients", sublabel: "Served Annually" },
                { number: "98%", label: "Satisfaction", sublabel: "Customer Rating" },
                { number: "50+", label: "Employees", sublabel: "Dedicated Team" },
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
