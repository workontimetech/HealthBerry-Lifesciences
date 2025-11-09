import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Health Berry Lifesciences - Quality Pharmaceutical Products",
  description:
    "Delivering Health. Building Trust. Ethical pharmaceutical manufacturing and marketing for quality medicines.",
  generator: "v0.app",
  viewport: "width=device-width, initial-scale=1",
  keywords: "pharmaceutical, medicines, health, wellness, ethical standards, manufacturing",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
