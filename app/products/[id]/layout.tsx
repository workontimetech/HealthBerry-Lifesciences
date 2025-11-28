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

  return {
    title: `Buy ${product.name} | ${product.composition} - Health Berry Lifesciences`,
    description: `${product.name} (${product.composition}) - ${product.form} ${product.strength}. WHO-GMP certified pharmaceutical product. Leading manufacturer & supplier of ${product.category} medicines in India. Quality assured, competitive pricing. Order now from Health Berry Lifesciences.`,
    keywords: [
      product.name,
      `${product.name} tablet`,
      `${product.name} medicine`,
      `${product.name} manufacturer`,
      `${product.name} supplier India`,
      `buy ${product.name}`,
      `${product.name} price`,
      `${product.name} wholesale`,
      product.composition,
      ...product.composition.split(/[+,]/).map(comp => comp.trim()),
      product.category,
      `${product.category} medicines`,
      `${product.category} tablets`,
      product.strength,
      product.form,
      'WHO-GMP certified medicines',
      'pharmaceutical manufacturer India',
      'Health Berry Lifesciences',
      'quality medicines India',
      'pharma products India',
      'pharmaceutical supplier',
      'medicine distributor',
      'bulk order medicines',
      'PCD pharma franchise',
    ],
    openGraph: {
      title: `${product.name} | ${product.composition} - Health Berry Lifesciences`,
      description: `WHO-GMP certified ${product.name}. ${product.composition}, ${product.form} ${product.strength}. Quality ${product.category} medicine from leading pharmaceutical manufacturer in India.`,
      url: productUrl,
      type: 'website',
      siteName: 'Health Berry Lifesciences',
      images: [
        {
          url: `https://healthberrylifesciences.com${productImage}`,
          width: 800,
          height: 600,
          alt: `${product.name} - ${product.composition} - Health Berry Lifesciences`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | ${product.category} Medicine`,
      description: `${product.composition}. ${product.form}, Strength: ${product.strength}. WHO-GMP certified pharmaceutical product.`,
      images: [`https://healthberrylifesciences.com${productImage}`],
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
