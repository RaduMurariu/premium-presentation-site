import { NextSeoProps } from 'next-seo'

export const defaultSEO: NextSeoProps = {
  title: 'Premium Presentation Site',
  description: 'A premium presentation website with Apple-like design, featuring modern UI/UX, responsive design, and exceptional user experience.',
  canonical: 'https://premium-presentation-site.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://premium-presentation-site.com',
    siteName: 'Premium Presentation Site',
    title: 'Premium Presentation Site',
    description: 'A premium presentation website with Apple-like design, featuring modern UI/UX, responsive design, and exceptional user experience.',
    images: [
      {
        url: 'https://premium-presentation-site.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Presentation Site',
      },
    ],
  },
  twitter: {
    handle: '@premiumsite',
    site: '@premiumsite',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#0ea5e9',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
}

export const homeSEO: NextSeoProps = {
  ...defaultSEO,
  title: 'Premium Presentation Site - Modern Digital Solutions',
  description: 'Creating exceptional digital experiences with premium design and cutting-edge technology. Professional web design, development, and digital solutions.',
}

export const aboutSEO: NextSeoProps = {
  ...defaultSEO,
  title: 'About Us - Premium Presentation Site',
  description: 'Learn about our story, values, and the team behind our premium digital experiences. We are passionate about creating exceptional digital solutions.',
}

export const servicesSEO: NextSeoProps = {
  ...defaultSEO,
  title: 'Services - Premium Digital Solutions',
  description: 'Discover our comprehensive range of premium digital services including web design, development, mobile apps, and SEO optimization.',
}

export const portfolioSEO: NextSeoProps = {
  ...defaultSEO,
  title: 'Portfolio - Our Premium Digital Projects',
  description: 'Explore our portfolio of premium digital projects and see the quality of our work. From web design to mobile development.',
}

export const testimonialsSEO: NextSeoProps = {
  ...defaultSEO,
  title: 'Client Testimonials - Premium Presentation Site',
  description: 'Read what our clients say about our premium digital services and exceptional results. Real feedback from satisfied customers.',
}

export const contactSEO: NextSeoProps = {
  ...defaultSEO,
  title: 'Contact Us - Get In Touch',
  description: 'Get in touch with us for your next premium digital project. We are here to help you achieve your digital goals.',
}
