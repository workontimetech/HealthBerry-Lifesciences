"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { allProducts } from "@/lib/products-data"
import { TiltCard } from "@/components/ui/tilt-card"

// Select featured products from different categories
const featuredProducts = [
  allProducts[0], // Sitavast-D (Anti-Diabetic)
  allProducts[6], // HBTEL 40 (Anti-Hypertensive)
  allProducts[12], // Cadvast-10 (Dyslipidemia)
  allProducts[19], // Pentagard 40 (PPI's)
  allProducts[22], // Amoxberry-625 (Anti-Infective)
  allProducts[25], // Vitzee Tablets (Supplements)
]

const getCategoryIcon = (category: string) => {
  const icons: Record<string, string> = {
    "Anti-Diabetic": "🧬",
    "Anti-Hypertensive": "❤️",
    "Dyslipidemia": "🫀",
    "Antiplatelet": "⚡",
    "PPI's": "🍽️",
    "Anti-Infective": "🛡️",
    "Supplements": "✨",
  }
  return icons[category] || "💊"
}

export default function Products() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Featured Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of quality pharmaceutical solutions
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }) as any,
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {featuredProducts.map((product, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link href={`/products/${product.id}`}>
                  <TiltCard className="h-full">
                    <div className="group glow-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col cursor-pointer">
                    {/* Product Image */}
                    {product.image && (
                      <div className="relative h-64 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{product.category}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        <span className="font-semibold">Composition:</span> {product.composition}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-semibold">{product.form}</span> • {product.strength}
                      </p>
                      <div className="mt-auto">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          View Details <ArrowRight size={16} />
                        </span>
                      </div>
                    </div>
                    </div>
                  </TiltCard>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Browse All Products <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
