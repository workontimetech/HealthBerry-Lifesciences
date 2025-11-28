"use client"

import Image from "next/image"

export default function Founder() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Founder</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Mr. Jagdish Rai
              </h3>
              <p className="text-xl text-primary font-semibold mb-6">
                Founder & CEO
              </p>
              <div className="space-y-4">
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  With two decades of experience in the pharmaceutical industry and a strong educational foundation with an MBA and Science background from premier institutes with dual specialization in Marketing and HR, our founder has been instrumental in establishing Health Berry Lifesciences in 2015.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  Under his visionary leadership, the company is progressing all over India with growing exposure to the pharma industry. His vision is to become a significant player in all therapeutic segments by providing high-quality, affordable medicines.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed text-justify">
                  At Health Berry, we strongly believe that quality is the way ahead and there is no substitute for it. At Health Berry, we commit ourselves to total customer care by delivering world-class pharmaceutical products and services.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex items-start justify-center md:justify-end md:ml-8">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
              <Image
                src="/Founderphoto2.jpg"
                alt="Founder - Health Berry Lifesciences"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}