'use client'

import React, { useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || shouldReduceMotion) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, shouldReduceMotion])

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
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      text: "Un partener de încredere, design impecabil și rezultate rapide. Recomand cu încredere!",
      name: "Andrei Popescu",
      role: "CEO, BrandX",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 2,
      text: "Profesionalism și atenție la detalii, exact ce ne doream. Echipa a depășit așteptările noastre.",
      name: "Ioana Ionescu",
      role: "Manager, StudioY",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 3,
      text: "Soluții inovatoare și o colaborare foarte plăcută. Proiectul a fost livrat la timp și cu calitate excepțională.",
      name: "Mihai Georgescu",
      role: "Founder, StartupZ",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 4,
      text: "Experiența de lucru a fost excelentă. Echipa a înțeles perfect viziunea noastră și a transformat-o în realitate.",
      name: "Elena Dumitrescu",
      role: "Creative Director, DesignCo",
      avatar: "/api/placeholder/80/80",
      rating: 5
    },
    {
      id: 5,
      text: "Rezultatele au depășit toate așteptările. O colaborare profesională și eficientă pe toată durata proiectului.",
      name: "Alexandru Marin",
      role: "CTO, TechCorp",
      avatar: "/api/placeholder/80/80",
      rating: 5
    }
  ]

  // Get number of visible cards based on screen size
  const getVisibleCards = () => {
    if (isMobile) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [visibleCards, setVisibleCards] = useState(getVisibleCards())

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (testimonials.length - visibleCards + 1))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (testimonials.length - visibleCards + 1)) % (testimonials.length - visibleCards + 1))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  // Get visible testimonials
  const getVisibleTestimonials = () => {
    return testimonials.slice(currentSlide, currentSlide + visibleCards)
  }

  return (
    <section 
      aria-label="Testimoniale"
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
            Ce spun clienții noștri
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Experiențele lor vorbesc de la sine.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          <div 
            className="relative overflow-hidden"
            aria-roledescription="carousel"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
              }}
            >
              {Array.from({ length: Math.ceil(testimonials.length / visibleCards) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-8 ${isMobile ? 'grid-cols-1' : window.innerWidth < 1024 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                    {getVisibleTestimonials().map((testimonial, index) => (
                      <motion.div
                        key={testimonial.id}
                        variants={cardVariants}
                        whileHover="hover"
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                        aria-label={`Testimonial ${currentSlide + index + 1} din ${testimonials.length}`}
                      >
                        {/* Quote Icon */}
                        <Quote className="w-8 h-8 text-primary-600 mb-6" />

                        {/* Rating */}
                        <div className="flex space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                          "{testimonial.text}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex items-center">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600" />
                            {/* 
                              Uncomment for actual avatars:
                              <Image
                                src={testimonial.avatar}
                                alt={`Avatar ${testimonial.name}`}
                                fill
                                className="object-cover"
                                sizes="48px"
                                loading="lazy"
                              />
                            */}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                            <p className="text-gray-600 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Testimoniale anterioare"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / visibleCards) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Testimoniale următoare"
              disabled={currentSlide === Math.ceil(testimonials.length / visibleCards) - 1}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
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
            href="/testimonials"
            whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 group"
            aria-label="Vezi mai multe recenzii și testimoniale"
          >
            Vezi mai multe recenzii
            <motion.svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection

/*
INTEGRARE INSTRUCTIONS:

1. Instalează dependențele necesare (dacă nu sunt deja instalate):
   npm install framer-motion lucide-react

2. Importă componenta în pages/index.js sau pages/testimonials.js:
   import TestimonialsSection from '@/components/TestimonialsSection'
   
   export default function Home() {
     return (
       <div>
         <TestimonialsSection />
         {/* rest of your page content */}
       </div>
     )
   }

3. Pentru pagina Testimonials dedicată, poți folosi componenta în pages/testimonials.js:
   import TestimonialsSection from '@/components/TestimonialsSection'
   
   export default function Testimonials() {
     return (
       <div>
         <TestimonialsSection />
         {/* additional testimonials content */}
       </div>
     )
   }

4. Personalizează testimoniale în array-ul `testimonials`:
   - Adaugă imagini reale ale clienților în folder-ul public/
   - Actualizează textele, numele și rolurile
   - Modifică rating-urile dacă e necesar

5. Pentru imagini reale, înlocuiește placeholder-urile cu:
   <Image
     src="/testimonials/client-1.jpg"
     alt={`Avatar ${testimonial.name}`}
     fill
     className="object-cover"
     sizes="48px"
     loading="lazy"
   />

6. Caruselul se adaptează automat la dimensiunea ecranului:
   - Mobile: 1 card
   - Tablet: 2 carduri
   - Desktop: 3 carduri
*/
