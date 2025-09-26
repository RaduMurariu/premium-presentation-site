export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SimplifyWeb",
    "description": "Premium digital solutions including web design, development, mobile apps, and digital marketing",
    "url": "https://simplifyweb.ro",
    "logo": "https://simplifyweb.ro/logo.png",
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
    ],
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "geoRadius": "1000000"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Solutions",
    "description": "Comprehensive digital services including web design, development, mobile apps, and digital marketing",
    "provider": {
      "@type": "Organization",
      "name": "SimplifyWeb"
    },
    "serviceType": "Digital Marketing Services",
    "areaServed": "Worldwide",
    "offers": [
      {
        "@type": "Offer",
        "name": "Web Design",
        "description": "Premium web design services with modern aesthetics"
      },
      {
        "@type": "Offer", 
        "name": "Web Development",
        "description": "Custom web development with cutting-edge technology"
      },
      {
        "@type": "Offer",
        "name": "Mobile Development", 
        "description": "Native and cross-platform mobile app development"
      },
      {
        "@type": "Offer",
        "name": "Digital Marketing",
        "description": "SEO optimization and digital growth strategies"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SimplifyWeb",
    "url": "https://simplifyweb.ro",
    "description": "Premium digital solutions for modern businesses",
    "publisher": {
      "@type": "Organization",
      "name": "SimplifyWeb"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://simplifyweb.ro/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}

