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
  metadataBase: new URL('https://healthberrylifesciences.com'),
  title: {
    default: "Health Berry Lifesciences Pvt. Ltd. - Leading Pharmaceutical Company in India",
    template: "%s | Health Berry Lifesciences"
  },
  description: "Health Berry Lifesciences Pvt. Ltd. is a leading pharmaceutical company in Maharashtra, India. WHO-GMP & ISO 9001:2015 certified manufacturer offering quality medicines across Anti-Diabetic, Anti-Hypertensive, Dyslipidemia, and other therapeutic segments since 2015.",
  keywords: [
    "Health Berry Lifesciences",
    "pharmaceutical company India",
    "WHO-GMP certified",
    "ISO 9001:2015 certified",
    "medicines manufacturer",
    "pharmaceutical marketing",
    "anti-diabetic medicines",
    "anti-hypertensive drugs",
    "dyslipidemia treatment",
    "quality medicines India",
    "pharmaceutical company Pune",
    "pharmaceutical company Maharashtra",
    "GMP certified pharmaceutical",
    "FSSAI approved medicines",
    // Top Product Brands
    "Sitavast-D",
    "Sitavast-M",
    "Sitavast-DM",
    "LINAFLOZ",
    "Glimberry",
    "Glimberry-M1",
    "Glimberry-M2",
    "HBTEL",
    "HBTEL 40",
    "HBTEL AM",
    "Bisoberry",
    "Cadvast",
    "Cadvast-10",
    "Cadvast-20",
    "Cadvast-EZ",
    "Cadvast CV",
    "Cadvast GOLD",
    "Cloberry",
    "Pentagard",
    "Razed DSR",
    "Amoxberry",
    "Cefropath",
    "Vitzee",
    "Vitzee D3",
    "Cadcure",
    "Preberry-NT",
    "Calvance",
    "Cosfur XT",
    // Generic Compositions
    "Dapagliflozin Sitagliptin",
    "Telmisartan Amlodipine",
    "Rosuvastatin Ezetimibe",
    "Bisoprolol Fumarate",
    "pharmaceutical third party manufacturing",
    "PCD pharma franchise"
  ],
  authors: [{ name: "Health Berry Lifesciences Pvt. Ltd." }],
  creator: "Health Berry Lifesciences Pvt. Ltd.",
  publisher: "Health Berry Lifesciences Pvt. Ltd.",
  icons: {
    icon: [
      { url: '/logo2.png' },
      { url: '/logo2.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo2.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo2.png' },
    ],
    shortcut: ['/logo2.png'],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://healthberrylifesciences.com",
    siteName: "Health Berry Lifesciences Pvt. Ltd.",
    title: "Health Berry Lifesciences - Leading Pharmaceutical Company in India",
    description: "WHO-GMP & ISO 9001:2015 certified pharmaceutical company providing quality medicines across therapeutic segments. Trusted by healthcare professionals since 2015.",
    images: [
      {
        url: "/Healthberry-Pharma-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Health Berry Lifesciences Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Berry Lifesciences - Leading Pharmaceutical Company",
    description: "WHO-GMP certified pharmaceutical company providing quality medicines across therapeutic segments.",
    images: ["/Healthberry-Pharma-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "YtByip9JY_m4vojLzFf1YcVtaYXdsjTnVp0p-CgkObA",
    other: {
      "msvalidate.01": "ADD_YOUR_BING_VERIFICATION_CODE_HERE",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Health Berry Lifesciences Pvt. Ltd.",
    "url": "https://healthberrylifesciences.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg",
      "width": 600,
      "height": 200
    },
    "image": "https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg",
    "description": "WHO-GMP & ISO 9001:2015 certified pharmaceutical company providing quality medicines across therapeutic segments. Leading manufacturer of Anti-Diabetic, Anti-Hypertensive, and Dyslipidemia medicines in India.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919960560515",
      "contactType": "Customer Service",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://healthberrylifesciences.com"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://healthberrylifesciences.com" />
        <meta name="google-site-verification" content="YtByip9JY_m4vojLzFf1YcVtaYXdsjTnVp0p-CgkObA" />
        <meta name="msvalidate.01" content="ADD_YOUR_BING_VERIFICATION_CODE_HERE" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
