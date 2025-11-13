"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { AnimatedCanvas } from "@/components/ui/animated-canvas"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [scales, setScales] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const heroTopRef = useRef<HTMLDivElement>(null)
  const layer1Ref = useRef<HTMLDivElement>(null)
  const layer2Ref = useRef<HTMLDivElement>(null)
  const layer3Ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Center zoom effect for hero carousel
  useEffect(() => {
    if (!api) return
    const snaps = api.scrollSnapList()
    setScales(Array(snaps.length).fill(1))

    const calcScales = () => {
      if (!api) return
      const progress = api.scrollProgress()
      const snaps = api.scrollSnapList()
      const newScales = snaps.map((snap) => {
        // Account for loop wrap-around by checking neighbors at +/- 1
        const diff = Math.min(
          Math.abs(progress - snap),
          Math.abs(progress - (snap - 1)),
          Math.abs(progress - (snap + 1))
        )
        const distance = Math.min(1, diff * 3) // tune falloff speed
        const scale = 0.9 + (1 - distance) * 0.18 // 0.90 .. 1.08
        return Number(scale.toFixed(3))
      })
      setScales(newScales)
    }

    calcScales()
    api.on("scroll", calcScales)
    api.on("reInit", calcScales)
    api.on("select", calcScales)
    return () => {
      api.off("scroll", calcScales)
      api.off("reInit", calcScales)
      api.off("select", calcScales)
    }
  }, [api])

  // Lightweight parallax for decorative orbs (disabled on small screens)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = (e.clientX - rect.left) / rect.width - 0.5 // -0.5..0.5
    const ny = (e.clientY - rect.top) / rect.height - 0.5
    const apply = () => {
      const d1 = 15, d2 = 30, d3 = 45
      if (layer1Ref.current) layer1Ref.current.style.transform = `translate3d(${(-nx * d1).toFixed(1)}px, ${(-ny * d1).toFixed(1)}px, 0)`
      if (layer2Ref.current) layer2Ref.current.style.transform = `translate3d(${(-nx * d2).toFixed(1)}px, ${(-ny * d2).toFixed(1)}px, 0)`
      if (layer3Ref.current) layer3Ref.current.style.transform = `translate3d(${(-nx * d3).toFixed(1)}px, ${(-ny * d3).toFixed(1)}px, 0)`
      rafRef.current = null
    }
    if (!rafRef.current) rafRef.current = requestAnimationFrame(apply)
  }
  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }, [])

  const pharmaImages = [
    {
      src: "/Stability-Studies.jpg",
      alt: "Pharmaceutical laboratory testing",
    },
    {
      src: "/pharmaceutical-manufacturing-facility.jpg",
      alt: "Manufacturing Facility",
    },
    {
      src: "/download.jpeg",
      alt: "Sustainable Manufacturing",
    },
    {
      src: "/cardiovascular-medication-heart-health.jpg",
      alt: "Cardiovascular Medications",
    },
    {
      src: "/antibiotic-tablet-medication.jpg",
      alt: "Antibiotic Medications",
    },
    {
      src: "/digestive-health-medicine.jpg",
      alt: "Digestive Health Products",
    },
  ]

  return (
    <section ref={sectionRef} onMouseMove={handleMouseMove} className="relative flex items-center justify-center overflow-hidden glow-aura">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 z-0" />
  {/* Animated canvas up to hero top height (molecular style, low visibility) */}
  <AnimatedCanvas
    className="absolute inset-x-0 top-0 z-[3]"
    targetRef={heroTopRef as any}
    cursorRef={sectionRef as any}
    bubbleTrail
    bubbleColor="blue"
    bubbleIntensity="low"
    bubbleSpeed="medium"
    variant="molecule"
    opacity={0.6}
  />

      {/* Parallax Orbs */}
  <div ref={layer1Ref} className="absolute top-16 -left-8 w-80 h-80 bg-primary/15 rounded-full mix-blend-multiply blur-3xl will-change-transform z-[2]" />
  <div ref={layer2Ref} className="absolute -bottom-10 -right-8 w-96 h-96 bg-secondary/15 rounded-full mix-blend-multiply blur-3xl will-change-transform z-[2]" />
  <div ref={layer3Ref} className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-accent/10 rounded-full mix-blend-multiply blur-3xl will-change-transform z-[2]" />

      <div className="relative z-10 w-full">
        {/* Main Hero Content */}
  <div ref={heroTopRef} className="min-h-screen flex items-center justify-center">
          <div
            className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-accent/20 text-primary rounded-full text-sm font-medium scale-in">
              Leading Pharmaceutical Innovation
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight slide-in-left">
              Delivering{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Health</span>{" "}
              Building{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Trust</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed slide-in-right">
              Quality pharmaceutical manufacturing with ethical standards and advanced formulations. Trusted by
              healthcare professionals across India since 2015.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center bounce-in">
              <Link
                href="/products"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                Explore Products
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Our Pharmaceutical Excellence</h2>
              <p className="text-muted-foreground">State-of-the-art manufacturing and quality standards</p>
            </div>

            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }) as any,
              ]}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent>
                {pharmaImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <div
                        className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 will-change-transform"
                        style={{ transform: `scale(${scales[index] ?? 1})` }}
                      >
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold text-sm">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
