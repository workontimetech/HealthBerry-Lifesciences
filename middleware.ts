import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Specific redirects for common old URLs and Bing cached URLs
  const redirects: Record<string, string> = {
    // Old PHP pages
    '/products.php': '/products',
    '/about.php': '/about',
    '/aboutus.php': '/about',
    '/about-us.php': '/about',
    '/contact.php': '/contact',
    '/contactus.php': '/contact',
    '/contact-us.php': '/contact',
    '/careers.php': '/careers',
    '/career.php': '/careers',
    '/quality.php': '/quality',
    '/home.php': '/',
    '/index.php': '/',
    
    // Bing cached incorrect URLs (from old sitelinks)
    '/index': '/',
    '/about_us': '/about',
    '/product': '/products',
    '/career': '/careers',
    '/contact_us': '/contact',
    '/home': '/',
  }
  
  // Check for exact matches first
  if (redirects[url.pathname]) {
    url.pathname = redirects[url.pathname]
    return NextResponse.redirect(url, 301)
  }
  
  // For any other .php file, just remove the .php extension
  if (url.pathname.endsWith('.php')) {
    const newPath = url.pathname.replace('.php', '')
    url.pathname = newPath
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

// Apply middleware to all routes except Next.js internals
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|ico|webp)).*)',
  ],
}
