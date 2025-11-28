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
    title: `${product.name} - ${product.composition} | Health Berry Lifesciences`,
    description: `${product.name}: ${product.composition}. ${product.form} with strength ${product.strength}. Quality ${product.category} medicine from Health Berry Lifesciences. WHO-GMP certified pharmaceutical product. Available for bulk orders and distributor partnerships.`,
    keywords: [
      product.name,
      product.composition,
      product.category,
      `${product.name} tablet`,
      `${product.name} medicine`,
      `buy ${product.name}`,
      `${product.name} manufacturer`,
      `${product.name} supplier`,
      product.category.toLowerCase(),
      'WHO-GMP certified',
      'pharmaceutical products India',
      'Health Berry Lifesciences',
      ...product.composition.split(' + ').map(comp => comp.trim()),
    ],
    openGraph: {
      title: `${product.name} - ${product.category} Medicine`,
      description: `${product.composition}. ${product.form}, Strength: ${product.strength}. WHO-GMP certified pharmaceutical product.`,
      url: productUrl,
      type: 'website',
      images: [
        {
          url: productImage,
          width: 800,
          height: 600,
          alt: `${product.name} - Health Berry Lifesciences`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - ${product.category}`,
      description: `${product.composition}. Strength: ${product.strength}`,
      images: [productImage],
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
