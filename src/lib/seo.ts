// SEO Configuration and utilities
export const seoConfig = {
  siteName: 'SimplifyWeb',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://simplifyweb.ro',
  defaultTitle: 'SimplifyWeb - Premium Digital Solutions',
  titleTemplate: '%s | SimplifyWeb',
  description: 'SimplifyWeb offers premium digital solutions including web design, development, mobile apps, and digital marketing. Transform your business with our cutting-edge technology and sophisticated design.',
  keywords: [
    'web design',
    'web development', 
    'mobile development',
    'digital marketing',
    'SEO optimization',
    'premium websites',
    'modern design',
    'business solutions',
    'digital transformation',
    'SimplifyWeb'
  ],
  author: 'SimplifyWeb Team',
  twitter: '@simplifyweb',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SimplifyWeb',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimplifyWeb - Premium Digital Solutions',
      },
    ],
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
}

// Generate page-specific metadata
export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}) {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle
  const fullDescription = description || seoConfig.description
  const fullKeywords = [...seoConfig.keywords, ...keywords]
  const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl
  const fullImage = image ? `${seoConfig.siteUrl}${image}` : `${seoConfig.siteUrl}/og-image.jpg`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    openGraph: {
      ...seoConfig.openGraph,
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [fullImage],
    },
    robots: seoConfig.robots,
  }
}

// Generate structured data for different page types
export function generateStructuredData(type: 'organization' | 'service' | 'website' | 'contact') {
  const baseUrl = seoConfig.siteUrl

  switch (type) {
    case 'organization':
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": seoConfig.siteName,
        "description": seoConfig.description,
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "customer service",
          "email": "hello@simplifyweb.ro"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Business St",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "10001",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://facebook.com/simplifyweb",
          "https://twitter.com/simplifyweb",
          "https://linkedin.com/company/simplifyweb"
        ]
      }

    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Digital Solutions",
        "description": "Comprehensive digital services including web design, development, mobile apps, and digital marketing",
        "provider": {
          "@type": "Organization",
          "name": seoConfig.siteName
        },
        "serviceType": "Digital Marketing Services",
        "areaServed": "Worldwide"
      }

    case 'website':
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": seoConfig.siteName,
        "url": baseUrl,
        "description": seoConfig.description,
        "publisher": {
          "@type": "Organization",
          "name": seoConfig.siteName
        }
      }

    case 'contact':
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us",
        "description": "Get in touch with SimplifyWeb for your digital solutions",
        "url": `${baseUrl}/contact`,
        "mainEntity": {
          "@type": "Organization",
          "name": seoConfig.siteName,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@simplifyweb.ro"
          }
        }
      }

    default:
      return {}
  }
}