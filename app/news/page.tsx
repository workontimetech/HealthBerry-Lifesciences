"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, MapPin, Briefcase, ArrowRight } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Health Berry Launches Revolutionary Diabetes Management Program",
    date: "2025-01-15",
    category: "Product Launch",
    excerpt: "Introducing our newest pharmaceutical innovation targeting diabetes prevention and management.",
    image: "/placeholder.svg?key=news1",
    featured: true,
  },
  {
    id: 2,
    title: "Awarded 'Best Pharmaceutical Company' by Health India Awards 2024",
    date: "2025-01-10",
    category: "Award",
    excerpt: "Recognition for our commitment to quality and patient care across the nation.",
    image: "/placeholder.svg?key=news2",
    featured: true,
  },
  {
    id: 3,
    title: "Expansion into Southeast Asian Markets",
    date: "2025-01-05",
    category: "Expansion",
    excerpt: "Health Berry Lifesciences enters Thailand, Vietnam, and Malaysia with localized product lines.",
    image: "/placeholder.svg?key=news3",
    featured: false,
  },
  {
    id: 4,
    title: "Investment in R&D: New Research Center Opens",
    date: "2024-12-28",
    category: "Infrastructure",
    excerpt: "State-of-the-art research facility dedicated to developing breakthrough pharmaceutical solutions.",
    image: "/placeholder.svg?key=news4",
    featured: false,
  },
  {
    id: 5,
    title: "Community Healthcare Initiative Reaches 100,000 Beneficiaries",
    date: "2024-12-20",
    category: "CSR",
    excerpt: "Health Berry's social responsibility program provides free medicines to underprivileged communities.",
    image: "/placeholder.svg?key=news5",
    featured: false,
  },
  {
    id: 6,
    title: "Sustainability Milestone: Carbon Neutral Operations Achieved",
    date: "2024-12-15",
    category: "Sustainability",
    excerpt: "Leading the pharmaceutical industry towards environmental responsibility and green operations.",
    image: "/placeholder.svg?key=news6",
    featured: false,
  },
]

const jobOpenings = [
  {
    id: 1,
    title: "Senior Pharmaceutical Chemist",
    department: "Research & Development",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead formulation development and optimization projects",
    salary: "₹15-20 LPA",
  },
  {
    id: 2,
    title: "Quality Assurance Manager",
    department: "Quality Control",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "7+ years",
    description: "Oversee quality testing and compliance procedures",
    salary: "₹18-24 LPA",
  },
  {
    id: 3,
    title: "Sales Executive",
    department: "Sales & Marketing",
    location: "Delhi, India",
    type: "Full-time",
    experience: "2-3 years",
    description: "Drive pharmaceutical product sales in assigned territory",
    salary: "₹6-10 LPA + Commission",
  },
  {
    id: 4,
    title: "Production Supervisor",
    department: "Manufacturing",
    location: "Pune, India",
    type: "Full-time",
    experience: "4+ years",
    description: "Supervise manufacturing operations and quality standards",
    salary: "₹8-12 LPA",
  },
  {
    id: 5,
    title: "HR Manager",
    department: "Human Resources",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5+ years",
    description: "Manage recruitment, training, and employee engagement",
    salary: "₹10-14 LPA",
  },
  {
    id: 6,
    title: "Regulatory Affairs Specialist",
    department: "Regulatory",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Ensure compliance with pharmaceutical regulations",
    salary: "₹9-13 LPA",
  },
]

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedJob, setSelectedJob] = useState<number | null>(null)

  const categories = ["All", "Product Launch", "Award", "Expansion", "Infrastructure", "CSR", "Sustainability"]
  const filteredNews =
    activeFilter === "All" ? newsArticles : newsArticles.filter((article) => article.category === activeFilter)

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Latest News</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay updated with our latest achievements and join our growing team
              </p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-8">Latest News</h2>

              {/* News Filter */}
              <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      activeFilter === category
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured News */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {filteredNews
                .filter((article) => article.featured)
                .slice(0, 2)
                .map((article) => (
                  <div
                    key={article.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
                  >
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={16} />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                      >
                        Read More <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                ))}
            </div>

            {/* All News Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews
                .filter((article) => !article.featured)
                .map((article) => (
                  <div
                    key={article.id}
                    className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-semibold">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                          <Calendar size={14} />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Join Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Be part of a mission to deliver quality healthcare to millions
              </p>
            </div>

            {/* Why Join Us */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "2000+", label: "Team Members", sublabel: "Across India" },
                { number: "100%", label: "Health Insurance", sublabel: "For All Employees" },
                { number: "20+ Days", label: "Paid Leave", sublabel: "Per Year" },
                { number: "₹15L+", label: "Avg Salary", sublabel: "Industry Competitive" },
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <p className="text-3xl font-bold text-primary mb-2">{benefit.number}</p>
                  <p className="font-semibold text-foreground mb-1">{benefit.label}</p>
                  <p className="text-sm text-muted-foreground">{benefit.sublabel}</p>
                </div>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">Open Positions</h3>
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer border border-border"
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-grow">
                      <h4 className="text-xl font-bold text-foreground mb-3">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {job.experience}
                        </div>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary mb-2">{job.salary}</p>
                      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>

                  {/* Expanded Job Details */}
                  {selectedJob === job.id && (
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed mb-4">{job.description}</p>
                      <div className="space-y-3">
                        <h5 className="font-semibold text-foreground">Key Responsibilities:</h5>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                          <li>Contribute to innovative pharmaceutical solutions</li>
                          <li>Maintain highest quality and compliance standards</li>
                          <li>Collaborate with cross-functional teams</li>
                          <li>Drive continuous improvement initiatives</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-muted-foreground mb-6">Don't see the position you're looking for?</p>
              <a
                href="/contact"
                className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg transform hover:-translate-y-1"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
