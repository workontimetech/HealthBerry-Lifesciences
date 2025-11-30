import { NextResponse } from 'next/server'
import { allProducts } from '@/lib/products-data'

// IndexNow API - Instant indexing notification to search engines
// Supports Bing, Yandex, Seznam.cz, and Naver
export async function POST() {
  try {
    const baseUrl = 'https://healthberrylifesciences.com'
    
    // Generate list of all URLs
    const urls = [
      baseUrl,
      `${baseUrl}/about`,
      `${baseUrl}/products`,
      `${baseUrl}/quality`,
      `${baseUrl}/contact`,
      ...allProducts.map(p => `${baseUrl}/products/${p.id}`)
    ]

    // Submit to IndexNow (Bing)
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: 'healthberrylifesciences.com',
        key: 'your-index-now-key-here', // You need to generate this
        keyLocation: `${baseUrl}/your-index-now-key.txt`,
        urlList: urls
      })
    })

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'URLs submitted to IndexNow',
        count: urls.length 
      })
    } else {
      return NextResponse.json({ 
        success: false, 
        message: 'Failed to submit to IndexNow' 
      }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error submitting to IndexNow',
      error: String(error)
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'IndexNow API endpoint - Use POST to submit URLs',
    info: 'This endpoint notifies search engines about content updates'
  })
}
