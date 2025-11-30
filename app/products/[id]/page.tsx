"use client"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, MessageCircle, Package, Pill, FlaskConical, Box } from "lucide-react"
import { allProducts } from "@/lib/products-data"
import Product3DViewer from "@/components/product-3d-viewer"

// WhatsApp message handler
const handleOrderRequest = (productName: string) => {
  const whatsappNumber = "+919960560515"
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
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  const url = isMobile 
    ? `https://wa.me/${sanitized}?text=${encoded}`
    : `https://web.whatsapp.com/send?phone=${sanitized}&text=${encoded}`
  
  window.open(url, "_blank")
}

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const productId = Number(params.id)
  
  const product = allProducts.find(p => p.id === productId)
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <button
              onClick={() => router.push("/products")}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Back to Products
            </button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      {/* BreadcrumbList Schema for better site structure understanding */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://healthberrylifesciences.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Products",
                "item": "https://healthberrylifesciences.com/products"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": product.category,
                "item": `https://healthberrylifesciences.com/products?category=${product.category}`
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": `${product.name} ${product.strength}`,
                "item": `https://healthberrylifesciences.com/products/${product.id}`
              }
            ]
          })
        }}
      />
      {/* Product Schema Structured Data for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": `${product.name} ${product.strength}`,
            "description": `${product.name} (${product.composition}). ${product.form} with strength ${product.strength}. WHO-GMP certified ${product.category} medicine by Health Berry Lifesciences.`,
            "sku": `HBL-${product.id}`,
            "mpn": product.id.toString(),
            "brand": {
              "@type": "Brand",
              "name": "Health Berry Lifesciences",
              "logo": "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "Health Berry Lifesciences Pvt. Ltd.",
              "url": "https://healthberrylifesciences.com",
              "logo": "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg"
            },
            "category": product.category,
            "image": [
              `https://healthberrylifesciences.com${product.image}`,
              "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg"
            ],
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Product Name",
                "value": `${product.name} ${product.strength}`
              },
              {
                "@type": "PropertyValue",
                "name": "Composition",
                "value": product.composition
              },
              {
                "@type": "PropertyValue",
                "name": "Form",
                "value": product.form
              },
              {
                "@type": "PropertyValue",
                "name": "Strength",
                "value": product.strength
              },
              {
                "@type": "PropertyValue",
                "name": "Certification",
                "value": "WHO-GMP Certified"
              }
            ],
            "offers": {
              "@type": "Offer",
              "url": `https://healthberrylifesciences.com/products/${product.id}`,
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "seller": {
                "@type": "Organization",
                "name": "Health Berry Lifesciences Pvt. Ltd.",
                "logo": "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg"
              }
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "50"
            }
          })
        }}
      />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4 fade-in"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Products</span>
            </button>
            <div className="flex items-center gap-3 fade-in-up">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">{product.name} {product.strength}</h1>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: 3D Viewer */}
              <div className="order-2 lg:order-1 fade-in-up stagger-1">
                <div className="sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-4">Interactive 3D View</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Click and drag to rotate • Scroll to zoom
                  </p>
                  <Product3DViewer 
                    frontImage={product.image}
                    rightImage={product.image}
                    productName={product.name}
                  />
                </div>
              </div>

              {/* Right: Product Information */}
              <div className="order-1 lg:order-2 space-y-8">
                {/* Composition Section */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 border border-border fade-in-up stagger-2">
                  <div className="flex items-start gap-3 mb-4">
                    <FlaskConical className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Composition</h3>
                      <p className="text-base text-foreground leading-relaxed">{product.composition}</p>
                    </div>
                  </div>
                </div>

                {/* Product Specifications */}
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm fade-in-up stagger-3">
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <Package className="text-primary" size={24} />
                    Product Specifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between py-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        <Pill className="text-primary" size={18} />
                        <span className="font-semibold text-foreground">Form</span>
                      </div>
                      <span className="text-muted-foreground font-medium">{product.form}</span>
                    </div>
                    <div className="flex items-start justify-between py-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        <Box className="text-primary" size={18} />
                        <span className="font-semibold text-foreground">Strength</span>
                      </div>
                      <span className="text-muted-foreground font-medium">{product.strength}</span>
                    </div>
                    <div className="flex items-start justify-between py-3">
                      <div className="flex items-center gap-2">
                        <Package className="text-primary" size={18} />
                        <span className="font-semibold text-foreground">Category</span>
                      </div>
                      <span className="text-muted-foreground font-medium">{product.category}</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6 border border-border fade-in-up stagger-4">
                  <h3 className="text-lg font-bold text-foreground mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground">Quality pharmaceutical product manufactured with ethical standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground">Advanced formulations for optimal therapeutic results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground">Stringent quality control measures at every production stage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground">Available for bulk orders and distributor partnerships</span>
                    </li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleOrderRequest(product.name)}
                    className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <MessageCircle size={20} />
                    <span>Order Request via WhatsApp</span>
                  </button>
                  <button
                    onClick={() => router.push("/contact")}
                    className="flex-1 px-6 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all"
                  >
                    Contact for Details
                  </button>
                </div>

                {/* Additional Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> This product is for healthcare professional use. Please consult with our team 
                    for detailed product information, pricing, and availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="py-12 bg-gradient-to-br from-blue-50/50 to-green-50/50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              More from {product.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {allProducts
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map(relatedProduct => (
                  <div
                    key={relatedProduct.id}
                    onClick={() => router.push(`/products/${relatedProduct.id}`)}
                    className="bg-white rounded-xl border border-border p-4 hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1"
                  >
                    <div className="relative h-32 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg mb-3 overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 line-clamp-2">{relatedProduct.name}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{relatedProduct.strength}</p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
