import { Metadata } from 'next'
import { allProducts } from '@/lib/products-data'

type Props = {
  params: { id: string }
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const productId = Number(id)
  const product = allProducts.find(p => p.id === productId)

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    }
  }

  const productImage = product.image || '/Healthberry-Pharma-logo.jpg'
  const productUrl = `https://healthberrylifesciences.com/products/${product.id}`

  // Generate unique, comprehensive keywords for each product
  const baseKeywords = [
    product.name,
    `${product.name} ${product.strength}`,
    `${product.name} tablet`,
    `${product.name} tablets`,
    `${product.name} medicine`,
    `${product.name} ${product.form}`,
    `${product.name} manufacturer`,
    `${product.name} supplier`,
    `${product.name} supplier India`,
    `buy ${product.name}`,
    `buy ${product.name} online`,
    `${product.name} price`,
    `${product.name} price India`,
    `${product.name} wholesale`,
    `${product.name} ${product.strength} price`,
    `${product.name} ${product.strength} uses`,
  ]

  // Add composition-based keywords
  const compositionKeywords = [
    product.composition,
    `${product.composition} tablet`,
    `${product.composition} ${product.strength}`,
    ...product.composition.split(/[+,&]/).map(comp => comp.trim()).filter(c => c.length > 3),
  ]

  // Add strength-specific keywords
  const strengthKeywords = [
    product.strength,
    `${product.strength} ${product.name}`,
    `${product.strength} tablet`,
  ]

  // Add category and brand keywords
  const categoryKeywords = [
    product.category,
    `${product.category} medicines`,
    `${product.category} tablets`,
    `${product.category} drugs`,
    `${product.category} medication`,
  ]

  const brandKeywords = [
    'Health Berry Lifesciences',
    'Health Berry Pharma',
    'Healthberry products',
    'WHO-GMP certified medicines',
    'pharmaceutical manufacturer India',
    'quality medicines India',
    'pharma products India',
    'pharmaceutical supplier',
    'medicine distributor',
    'bulk order medicines',
    'PCD pharma franchise',
  ]

  return {
    title: `Buy ${product.name} ${product.strength} | ${product.composition} - Health Berry Lifesciences`,
    description: `${product.name} (${product.composition}) - ${product.form} ${product.strength}. WHO-GMP certified pharmaceutical product. Leading manufacturer & supplier of ${product.category} medicines in India. Quality assured, competitive pricing. Order now from Health Berry Lifesciences.`,
    keywords: [
      ...baseKeywords,
      ...compositionKeywords,
      ...strengthKeywords,
      ...categoryKeywords,
      ...brandKeywords,
    ],
    openGraph: {
      title: `${product.name} ${product.strength} | ${product.composition} - Health Berry Lifesciences`,
      description: `WHO-GMP certified ${product.name} ${product.strength}. ${product.composition}, ${product.form}. Quality ${product.category} medicine from leading pharmaceutical manufacturer in India. Order now!`,
      url: productUrl,
      type: 'website',
      siteName: 'Health Berry Lifesciences',
      images: [
        {
          url: `https://healthberrylifesciences.com${productImage}`,
          width: 800,
          height: 600,
          alt: `${product.name} ${product.strength} - ${product.composition}`,
        },
        {
          url: 'https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg',
          width: 600,
          height: 200,
          alt: 'Health Berry Lifesciences - Pharmaceutical Manufacturer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} ${product.strength} | ${product.category} Medicine - Health Berry Lifesciences`,
      description: `Buy ${product.name} (${product.composition}). ${product.form}, Strength: ${product.strength}. WHO-GMP certified pharmaceutical product from Health Berry Lifesciences.`,
      images: [
        `https://healthberrylifesciences.com${productImage}`,
        'https://healthberrylifesciences.com/Healthberry-Pharma-logo.jpg'
      ],
    },
    alternates: {
      canonical: productUrl,
    },
  }
}

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductLayout({ children }: Props) {
  return <>{children}</>
}
