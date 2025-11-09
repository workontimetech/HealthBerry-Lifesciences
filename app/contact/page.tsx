"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: "Office No.2, S. No 40/2, Near Sinhgad College",
      sublabel: "Kondhawa Budruk, Pune, Maharashtra 411048",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@healthberrylifesciences.com",
      sublabel: "sales@healthberrylifesciences.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday 9:00 AM - 6:00 PM",
      sublabel: "Saturday 10:00 AM - 2:00 PM",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our team. We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div
                    key={index}
                    className="text-center p-8 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:shadow-lg transition-all"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground font-semibold mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.sublabel}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Send us a Message</h2>
              <p className="text-muted-foreground text-center mb-10">
                Fill out the form below and we'll get back to you as soon as possible
              </p>

              {submitted && (
                <div className="mb-8 p-4 bg-secondary/10 border border-secondary text-secondary rounded-lg text-center">
                  Thank you for your message! We'll be in touch soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input"
                      placeholder="+91 XXXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="Product Inquiry">Product Inquiry</option>
                      <option value="Distributor">Distributor Inquiry</option>
                      <option value="Quality">Quality & Compliance</option>
                      <option value="Employment">Employment</option>
                      <option value="Partnership">Partnership Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-input resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Departments Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Contact Our Departments</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  department: "Sales & Distribution",
                  email: "sales@healthberrylifesciences.com",
                  focus: "Product orders & distributor inquiries",
                },
                {
                  department: "Quality & Compliance",
                  email: "quality@healthberrylifesciences.com",
                  focus: "Regulatory & quality assurance",
                },
                {
                  department: "Human Resources",
                  email: "hrd@healthberrylifesciences.com",
                  focus: "Job opportunities & recruitment",
                },
              ].map((dept, index) => (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-xl hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">{dept.department}</h3>
                  <p className="text-muted-foreground mb-6">{dept.focus}</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-primary flex-shrink-0" />
                      <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Visit Us</h2>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30278.673330369384!2d73.87666737213364!3d18.445837144943944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea8ac13964ff%3A0xcc43bd59b82a78d5!2sHealth%20Berry%20Lifesciences%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1762605240587!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location - Health Berry Lifesciences Pvt. Ltd."
                className="w-full"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://www.google.com/maps/dir//Office+No.2,+S.+No+40%2F2,+Near+Sinhgad+College,+Kondhwa+Budruk,+Pune,+Maharashtra+411048"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
