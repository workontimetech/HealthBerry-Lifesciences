"use client"

import { useState } from "react"
import Image from "next/image"
import { TiltCard } from "@/components/ui/tilt-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Search, MessageCircle } from "lucide-react"
import { categories, allProducts } from "@/lib/products-data"

// WhatsApp message handler (pre‑typed structured inquiry including product name)
const handleOrderRequest = (productName: string) => {
  const whatsappNumber = "+919960560515" // Display form; api.whatsapp.com uses digits only
  const sanitized = whatsappNumber.replace(/[^\d]/g, "")
  const intro = "Hello Health Berry Lifesciences Team,";
  const body = `I'd like to enquire about: *${productName}*`;
  const request = [
    "Please share:",
    "• Pack size & MRP",
    "• MOQ for order",
    "• Current availability / lead time",
    "• Any distributor scheme (if applicable)",
  ].join("\n")
  const closing = "Thank you."
  const message = [intro, body, request, closing].join("\n\n")
  const encoded = encodeURIComponent(message)
  
  // Detect mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  
  // Use WhatsApp app on mobile, WhatsApp Web on desktop
  const url = isMobile 
    ? `https://wa.me/${sanitized}?text=${encoded}` // Mobile: Opens WhatsApp app
    : `https://web.whatsapp.com/send?phone=${sanitized}&text=${encoded}` // Desktop: Opens WhatsApp Web
  
  // Open in new window
  window.open(url, "_blank")
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All Products")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = activeCategory === "All Products" || product.category === activeCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.composition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Group products by category
  const groupedProducts = categories
    .filter((cat) => cat.name !== "All Products")
    .reduce((acc: Record<string, typeof allProducts>, cat) => {
      acc[cat.name] = allProducts.filter((p) => p.category === cat.name)
      return acc
    }, {})

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Our Products</h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
                Delivering Health. Building Trust.
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
                Explore our comprehensive range of quality pharmaceutical products across 7 therapeutic segments
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="sticky top-16 z-40 bg-white border-b border-border shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search products by name or composition..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-input border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="bg-white border-b border-border py-4 sticky top-24 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto gap-2 pb-2 md:pb-0 md:flex-wrap md:gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.name
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeCategory === "All Products" ? (
              // View all products in categorized sections
              <div className="space-y-16">
                {categories
                  .filter((cat) => cat.name !== "All Products")
                  .map((category, idx) => {
                    const categoryProducts = allProducts.filter((p) => p.category === category.name)
                    return (
                      <div key={category.id} className={`animate-fade-in-up stagger-${(idx % 6) + 1}`}>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="text-3xl">{category.icon}</span>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{category.name}</h2>
                          <span className="ml-auto text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {categoryProducts.length} products
                          </span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                          {categoryProducts.map((product, pIdx) => (
                            <ProductCard
                              key={product.id}
                              product={product}
                              delay={pIdx}
                              onOrderRequest={handleOrderRequest}
                            />
                          ))}
                        </div>
                      </div>
                    )
                  })}
              </div>
            ) : (
              // View filtered products
              <>
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
                  </p>
                </div>
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredProducts.map((product, idx) => (
                      <ProductCard key={product.id} product={product} delay={idx} onOrderRequest={handleOrderRequest} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <p className="text-xl font-semibold text-foreground mb-2">No products found</p>
                    <p className="text-muted-foreground">Try adjusting your search or filter</p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Need More Information?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our team or directly message us on WhatsApp to discuss specific products, bulk orders, and
              distributor partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg transform hover:-translate-y-1"
              >
                Contact Us
              </a>
              <button
                onClick={() => handleOrderRequest("General Inquiry")}
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
              >
                <MessageCircle className="inline mr-2" size={20} />
                Message on WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// Product Card Component
function ProductCard({ 
  product, 
  delay, 
  onOrderRequest 
}: { 
  product: typeof allProducts[0]; 
  delay: number; 
  onOrderRequest: (productName: string) => void 
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <TiltCard className={`stagger-${(delay % 6) + 1}`}>
      <div
        className={`group glow-card bg-white rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover-lift`}
        style={{ animationDelay: `${delay * 0.05}s` }}
      >
      {/* Product Image */}
      {product.image && (
        <div className="relative h-48 md:h-56 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}

      {/* Product Header with Category */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-3 border-b border-border/50">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest">{product.category}</p>
            <h3 className="text-base md:text-lg font-bold text-foreground mt-1 group-hover:text-primary transition-colors line-clamp-2">
              {product.name}
            </h3>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-xs font-semibold text-primary uppercase mt-0.5">Comp:</span>
            <p className="text-sm text-muted-foreground line-clamp-2">{product.composition}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/50">
            <div>
              <p className="text-xs text-muted-foreground font-semibold">Form</p>
              <p className="text-sm font-semibold text-foreground">{product.form}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-semibold">Strength</p>
              <p className="text-sm font-semibold text-foreground">{product.strength}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onOrderRequest(product.name)}
          className="w-full mt-4 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group/btn"
        >
          <MessageCircle size={18} className="group-hover/btn:scale-110 transition-transform" />
          <span>Order Request</span>
        </button>
      </div>
      </div>
    </TiltCard>
  )
}
