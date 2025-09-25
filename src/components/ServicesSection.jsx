'use client'

import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Laptop, Settings, Phone, Star, ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: shouldReduceMotion ? {} : {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  // Services data
  const services = [
    {
      icon: Laptop,
      title: "Consultanță",
      description: "Strategii personalizate pentru succes. Analizăm nevoile tale și dezvoltăm soluții adaptate.",
      link: "/services#consulting"
    },
    {
      icon: Settings,
      title: "Dezvoltare",
      description: "Proiecte scalabile și moderne. Tehnologii de vârf pentru performanță optimă.",
      link: "/services#development"
    },
    {
      icon: Phone,
      title: "Suport",
      description: "Asistență rapidă și dedicată. Echipa noastră este mereu disponibilă pentru tine.",
      link: "/services#support"
    },
    {
      icon: Star,
      title: "Inovație",
      description: "Soluții unice și creative. Aducem idei revoluționare în fiecare proiect.",
      link: "/services#innovation"
    }
  ]

  return (
    <section 
      aria-label="Servicii"
      className="py-24 lg:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Ce oferim
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Servicii create pentru a-ți oferi o experiență premium și eficientă.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          role="list"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              className="group"
              role="listitem"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                
                {/* Icon */}
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                  className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300"
                >
                  <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* CTA Link */}
                <motion.a
                  href={service.link}
                  whileHover={shouldReduceMotion ? {} : { x: 4 }}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group/link transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 rounded-lg px-2 py-1"
                  aria-label={`Află mai multe despre ${service.title}`}
                >
                  Află mai mult
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.a
            href="/services"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 group"
            aria-label="Vezi toate serviciile noastre"
          >
            Vezi toate serviciile
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection

/*
INTEGRARE INSTRUCTIONS:

1. Instalează dependențele necesare (dacă nu sunt deja instalate):
   npm install framer-motion lucide-react

2. Importă componenta în pages/index.js sau pages/services.js:
   import ServicesSection from '@/components/ServicesSection'
   
   export default function Home() {
     return (
       <div>
         <ServicesSection />
         {/* rest of your page content */}
       </div>
     )
   }

3. Pentru pagina Services dedicată, poți folosi componenta în pages/services.js:
   import ServicesSection from '@/components/ServicesSection'
   
   export default function Services() {
     return (
       <div>
         <ServicesSection />
         {/* additional services content */}
       </div>
     )
   }

4. Personalizează serviciile în array-ul `services` pentru a reflecta ofertele companiei:
   - Modifică iconurile (folosește Lucide React icons)
   - Actualizează titlurile și descrierile
   - Ajustează link-urile pentru navigare

5. Pentru a adăuga mai multe servicii, extinde array-ul `services` cu obiecte noi:
   {
     icon: NewIcon,
     title: "Noul serviciu",
     description: "Descrierea serviciului...",
     link: "/services#new-service"
   }

6. Grid-ul se adaptează automat la numărul de servicii (1-4 coloane pe desktop).
*/
