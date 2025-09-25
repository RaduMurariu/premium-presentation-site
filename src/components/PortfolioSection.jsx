'use client'

import React, { useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const PortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Check if mobile for carousel
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  // Portfolio data
  const projects = [
    {
      id: 1,
      title: "Website modern",
      description: "Design responsiv și minimalist pentru o experiență premium.",
      image: "/api/placeholder/600/400",
      alt: "Website modern cu design responsiv",
      link: "/portfolio/website-modern",
      category: "Web Design"
    },
    {
      id: 2,
      title: "Aplicație mobilă",
      description: "Performanță și interfață curată pentru utilizatori moderni.",
      image: "/api/placeholder/600/400",
      alt: "Aplicație mobilă cu interfață curată",
      link: "/portfolio/mobile-app",
      category: "Mobile Development"
    },
    {
      id: 3,
      title: "Branding complet",
      description: "Identitate vizuală premium care reflectă valorile companiei.",
      image: "/api/placeholder/600/400",
      alt: "Branding complet cu identitate vizuală premium",
      link: "/portfolio/branding-complet",
      category: "Branding"
    },
    {
      id: 4,
      title: "Platformă e-commerce",
      description: "Experiență fluentă de cumpărare cu design intuitiv.",
      image: "/api/placeholder/600/400",
      alt: "Platformă e-commerce cu design intuitiv",
      link: "/portfolio/ecommerce-platform",
      category: "E-commerce"
    },
    {
      id: 5,
      title: "Dashboard analitic",
      description: "Interfață complexă pentru analiza datelor în timp real.",
      image: "/api/placeholder/600/400",
      alt: "Dashboard analitic cu interfață complexă",
      link: "/portfolio/analytics-dashboard",
      category: "Web Development"
    },
    {
      id: 6,
      title: "Landing page premium",
      description: "Design elegant pentru conversii optimizate și impact maxim.",
      image: "/api/placeholder/600/400",
      alt: "Landing page premium cu design elegant",
      link: "/portfolio/landing-page",
      category: "Web Design"
    }
  ]

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 2))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(projects.length / 2)) % Math.ceil(projects.length / 2))
  }

  // Get visible projects for carousel
  const getVisibleProjects = () => {
    if (!isMobile) return projects
    const start = currentSlide * 2
    return projects.slice(start, start + 2)
  }

  return (
    <section 
      aria-label="Portofoliu"
      className="py-24 lg:py-32 bg-white"
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
            Portofoliul nostru
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Proiecte realizate cu atenție la detalii și design premium.
          </motion.p>
        </motion.div>

        {/* Portfolio Grid/Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
                role="listitem"
              >
                {/* Project Image */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-20" />
                  {/* 
                    Uncomment for actual images:
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  */}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  variants={overlayVariants}
                  initial="hidden"
                  whileHover="visible"
                  className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 opacity-90">{project.description}</p>
                    <motion.a
                      href={project.link}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
                      aria-label={`Vezi detalii despre ${project.title}`}
                    >
                      Detalii
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <motion.div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-2 gap-4 px-4">
                      {projects.slice(slideIndex * 2, slideIndex * 2 + 2).map((project) => (
                        <motion.div
                          key={project.id}
                          variants={cardVariants}
                          className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
                        >
                          <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-20" />
                          </div>

                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white p-4">
                              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                              <motion.a
                                href={project.link}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center bg-white text-gray-900 px-3 py-2 rounded-lg font-medium text-sm"
                                aria-label={`Vezi detalii despre ${project.title}`}
                              >
                                Detalii
                                <ExternalLink className="ml-1 w-3 h-3" />
                              </motion.a>
                            </div>
                          </div>

                          <div className="absolute top-2 left-2">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                              {project.category}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200"
                aria-label="Proiecte anterioare"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200"
                aria-label="Proiecte următoare"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Global CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-16"
        >
          <motion.a
            href="/portfolio"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 group"
            aria-label="Vezi tot portofoliul nostru"
          >
            Vezi tot portofoliul
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection

/*
INTEGRARE INSTRUCTIONS:

1. Instalează dependențele necesare (dacă nu sunt deja instalate):
   npm install framer-motion lucide-react

2. Importă componenta în pages/index.js sau pages/portfolio.js:
   import PortfolioSection from '@/components/PortfolioSection'
   
   export default function Home() {
     return (
       <div>
         <PortfolioSection />
         {/* rest of your page content */}
       </div>
     )
   }

3. Pentru pagina Portfolio dedicată, poți folosi componenta în pages/portfolio.js:
   import PortfolioSection from '@/components/PortfolioSection'
   
   export default function Portfolio() {
     return (
       <div>
         <PortfolioSection />
         {/* additional portfolio content */}
       </div>
     )
   }

4. Personalizează proiectele în array-ul `projects`:
   - Adaugă imagini reale în folder-ul public/
   - Actualizează titlurile, descrierile și link-urile
   - Modifică categoriile pentru a reflecta serviciile tale

5. Pentru imagini reale, înlocuiește placeholder-urile cu:
   <Image
     src="/portfolio/project-1.jpg"
     alt="Descrierea proiectului"
     fill
     className="object-cover"
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     loading="lazy"
   />

6. Caruselul pe mobile se activează automat când ecranul este mai mic de 768px.
*/
