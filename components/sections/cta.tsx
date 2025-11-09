import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-accent to-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Explore Our Products?</h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Discover our comprehensive range of quality pharmaceutical solutions or get in touch with our team.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
          >
            Browse Products
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  )
}
