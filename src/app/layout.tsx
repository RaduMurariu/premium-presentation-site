import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import SchemaMarkup from '@/components/SchemaMarkup'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SimplifyWeb - Premium Digital Solutions',
    template: '%s | SimplifyWeb'
  },
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
  authors: [{ name: 'SimplifyWeb Team' }],
  creator: 'SimplifyWeb',
  publisher: 'SimplifyWeb',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://simplifyweb.ro',
    siteName: 'SimplifyWeb',
    title: 'SimplifyWeb - Premium Digital Solutions',
    description: 'Transform your business with our premium digital solutions including web design, development, and digital marketing.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimplifyWeb - Premium Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimplifyWeb - Premium Digital Solutions',
    description: 'Transform your business with our premium digital solutions.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Analytics />
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
