"use client"

import type React from "react"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-slate-800">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/logo2.png" 
                alt="Health Berry Lifesciences" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering Health. Building Trust. Quality pharmaceutical products manufactured with ethical standards and
              advanced formulations.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Cardiovascular"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Cardiovascular
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Antibiotics"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  Antibiotics
                </Link>
              </li>
              <li>
                <Link href="/products?category=Vitamins" className="text-gray-400 hover:text-primary transition-colors">
                  Vitamins & Minerals
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-gray-400 hover:text-primary transition-colors">
                  Quality & Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Office No.2, S. No 40/2</p>
                  <p className="text-sm text-gray-400">Near Sinhgad College</p>
                  <p className="text-sm text-gray-400">Kondhawa Budruk, Pune, Maharashtra 411048</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                <div className="text-xs">
                  <a
                    href="mailto:info@healthberrylifesciences.com"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    info@healthberrylifesciences.com
                  </a>
                  <a
                    href="mailto:sales@healthberrylifesciences.com"
                    className="text-gray-400 hover:text-primary transition-colors block"
                  >
                    sales@healthberrylifesciences.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for updates and health tips.</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:border-primary transition-colors text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Subscribe
              </button>
              {subscribed && <p className="text-green-400 text-xs mt-2">Thank you for subscribing!</p>}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-b border-slate-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 Health Berry Lifesciences Pvt. Ltd. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 justify-start md:justify-end text-gray-400 text-sm">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookie-policy" className="hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link href="/compliance" className="hover:text-primary transition-colors">
                Compliance
              </Link>
            </div>
          </div>
        </div>

        {/* Creator Credits */}
        <div className="py-6 text-center">
          <p className="text-gray-400 text-sm">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/atharv-patil-539710233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Atharv Patil
            </a>
            {" "}&{" "}
            <a
              href="https://www.linkedin.com/in/rushikesh-bandiwadekar-9114a42a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Rushikesh Bandiwadekar
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
