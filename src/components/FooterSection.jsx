'use client'

import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'

const FooterSection = () => {
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const linkVariants = {
    hover: shouldReduceMotion ? {} : {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const iconVariants = {
    hover: shouldReduceMotion ? {} : {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  // Navigation links
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' }
  ]

  // Social media links
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com',
      ariaLabel: 'Urmărește-ne pe Facebook'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      ariaLabel: 'Urmărește-ne pe Instagram'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      ariaLabel: 'Urmărește-ne pe LinkedIn'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com',
      ariaLabel: 'Urmărește-ne pe Twitter'
    }
  ]

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      text: 'contact@brandulmeu.ro',
      href: 'mailto:contact@brandulmeu.ro',
      ariaLabel: 'Trimite-ne un email'
    },
    {
      icon: Phone,
      text: '+40 123 456 789',
      href: 'tel:+40123456789',
      ariaLabel: 'Sună-ne'
    },
    {
      icon: MapPin,
      text: 'București, România',
      href: 'https://maps.google.com',
      ariaLabel: 'Vezi locația noastră'
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer 
      aria-label="Footer"
      className="bg-gray-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          
          {/* Brand/Logo Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <Link 
              href="/" 
              className="inline-block mb-6"
              aria-label="Acasă - Brandul Meu"
            >
              <h3 className="text-2xl font-bold text-white">
                Brandul Meu
              </h3>
            </Link>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              Creăm experiențe digitale premium care transformă viziunea în realitate.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.text}
                  href={contact.href}
                  variants={itemVariants}
                  whileHover="hover"
                  className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group"
                  aria-label={contact.ariaLabel}
                >
                  <contact.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Navigare</h4>
            <nav className="space-y-3" role="navigation" aria-label="Footer navigation">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-300 hover:underline underline-offset-4 decoration-primary-500"
                    aria-label={`Navighează la ${link.name}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Services Links */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Servicii</h4>
            <div className="space-y-3">
              {[
                'Web Design',
                'Dezvoltare Web',
                'Aplicații Mobile',
                'Branding',
                'SEO',
                'Consultanță'
              ].map((service, index) => (
                <motion.p
                  key={service}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-400 text-sm"
                >
                  {service}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Urmărește-ne</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup (Optional) */}
            <div className="mt-6">
              <h5 className="text-sm font-medium text-white mb-3">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-3">
                Primește ultimele noutăți și oferte speciale.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email-ul tău"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <motion.button
                  whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-r-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm font-medium"
                  aria-label="Abonează-te la newsletter"
                >
                  Abonează
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Brandul Meu. Toate drepturile rezervate.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Politica de confidențialitate"
              >
                Confidențialitate
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Termeni și condiții"
              >
                Termeni
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Politica de cookies"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default FooterSection

/*
INTEGRARE INSTRUCTIONS:

1. Instalează dependențele necesare (dacă nu sunt deja instalate):
   npm install framer-motion lucide-react

2. Importă componenta în layout-ul principal sau în pages/_app.js:
   import FooterSection from '@/components/FooterSection'
   
   export default function MyApp({ Component, pageProps }) {
     return (
       <div>
         <Component {...pageProps} />
         <FooterSection />
       </div>
     )
   }

3. Pentru Next.js cu App Router, adaugă în layout.tsx:
   import FooterSection from '@/components/FooterSection'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <FooterSection />
         </body>
       </html>
     )
   }

4. Personalizează conținutul:
   - Modifică numele brandului în "Brandul Meu"
   - Actualizează link-urile de navigare în array-ul `navigationLinks`
   - Schimbă link-urile de social media în array-ul `socialLinks`
   - Actualizează informațiile de contact în array-ul `contactInfo`

5. Pentru logo real, înlocuiește textul cu:
   import Image from 'next/image'
   
   <Image
     src="/logo.svg"
     alt="Brandul Meu"
     width={120}
     height={40}
     className="h-10 w-auto"
   />

6. Pentru newsletter integration, adaugă funcționalitate în handleSubmit:
   const handleNewsletterSubmit = async (e) => {
     e.preventDefault()
     // Integrează cu serviciul de newsletter preferat
   }
*/
