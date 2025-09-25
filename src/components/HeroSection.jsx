'use client'

import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, Play } from 'lucide-react'

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  
  // Parallax transforms for background layers
  const backgroundY = useTransform(scrollY, [0, 500], [0, -150])
  const foregroundY = useTransform(scrollY, [0, 500], [0, -75])
  const textY = useTransform(scrollY, [0, 500], [0, -50])

  // Scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Open demo modal (placeholder function)
  const openDemo = () => {
    // Implement your demo modal logic here
    console.log('Opening demo modal...')
  }

  // Handle video load
  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const buttonVariants = {
    hover: {
      scale: shouldReduceMotion ? 1 : 1.05,
      boxShadow: shouldReduceMotion ? "none" : "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  const scrollCueVariants = {
    bounce: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section 
      aria-label="Hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Background Video Layer - Hidden on mobile for performance */}
      <div className="absolute inset-0 hidden lg:block">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Placeholder for video background - replace with actual video */}
          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 opacity-20" />
          {/* 
            Uncomment and replace with actual video:
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/hero-poster.jpg"
              onLoadedData={handleVideoLoad}
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.webm" type="video/webm" />
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
          */}
        </motion.div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-primary-50/40" />

      {/* Parallax Product Image Layer */}
      <motion.div
        style={{ y: foregroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-32 h-32 bg-primary-200/30 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-300/20 rounded-full blur-lg" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 container mx-auto px-6 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Experiența premium pentru{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                afacerea ta
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Design minimalist. Animații fluide. Conversii mai bune.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={scrollToServices}
                aria-label="Află mai multe despre serviciile noastre"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 min-h-[44px] flex items-center justify-center"
              >
                Află mai mult
              </motion.button>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={openDemo}
                aria-label="Vezi demo interactiv"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 min-h-[44px] flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Vezi demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Product Image/Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px]">
              {/* Placeholder for product image - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl shadow-2xl">
                <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">Product Preview</p>
                  </div>
                </div>
              </div>
              
              {/* 
                Uncomment and replace with actual product image:
                <Image
                  src="/hero-product.png"
                  alt="Product preview"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              */}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Cue */}
      <motion.button
        variants={scrollCueVariants}
        animate={shouldReduceMotion ? "initial" : "bounce"}
        onClick={scrollToServices}
        aria-label="Scroll to services section"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            scrollToServices()
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 rounded-full p-2"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>

      {/* Locomotive Scroll Data Attributes (for locomotive-scroll integration) */}
      {/* 
        To use with locomotive-scroll, add these data attributes:
        - data-scroll on the main section
        - data-scroll-speed on parallax elements
        - data-scroll-direction on scroll elements
        
        Example:
        <section data-scroll data-scroll-speed="0.5">
          <div data-scroll data-scroll-speed="-0.5">Parallax element</div>
        </section>
      */}
    </section>
  )
}

export default HeroSection

/*
INTEGRARE INSTRUCTIONS:

1. Instalează dependențele necesare:
   npm install framer-motion lucide-react

2. Pentru locomotive-scroll (opțional):
   npm install locomotive-scroll

3. Importă componenta în pages/index.js sau app/page.js:
   import HeroSection from '@/components/HeroSection'
   
   export default function Home() {
     return (
       <div>
         <HeroSection />
         {/* rest of your page content */}
       </div>
     )
   }

4. Pentru locomotive-scroll, inițializează în layout sau _app.js:
   import { useEffect } from 'react'
   import LocomotiveScroll from 'locomotive-scroll'
   
   useEffect(() => {
     const scroll = new LocomotiveScroll({
       el: document.querySelector('[data-scroll-container]'),
       smooth: true
     })
   }, [])

5. Adaugă id="services" la secțiunea services pentru scroll-to functionality.
*/
