'use client'

import React from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Award, Palette, Zap, Heart } from 'lucide-react'

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // Values/benefits data
  const values = [
    {
      icon: Award,
      title: "Calitate premium",
      description: "Fiecare proiect este realizat cu atenție la detalii și standarde înalte de calitate."
    },
    {
      icon: Palette,
      title: "Design modern",
      description: "Aplicăm principiile de design contemporan pentru experiențe vizuale excepționale."
    },
    {
      icon: Zap,
      title: "Experiență fluentă",
      description: "Optimizăm performanța pentru a oferi interacțiuni rapide și intuitive."
    },
    {
      icon: Heart,
      title: "Respect pentru detalii",
      description: "Credem că detaliile fac diferența între un produs bun și unul excepțional."
    }
  ]

  return (
    <section 
      aria-label="Despre noi"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center lg:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            >
              Cine suntem
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              O echipă pasionată de inovație și design minimalist. 
              Creăm experiențe digitale care inspirează și conectează.
            </motion.p>

            {/* Values List */}
            <motion.ul
              variants={containerVariants}
              className="space-y-6 mb-10"
            >
              {values.map((value, index) => (
                <motion.li
                  key={value.title}
                  variants={listItemVariants}
                  className="flex items-start space-x-4 group"
                >
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300"
                  >
                    <value.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.a
                href="/about"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-lg group transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-200 rounded-lg px-2 py-1"
                aria-label="Află mai multe despre povestea noastră"
              >
                Află povestea noastră
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
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px]">
              {/* Placeholder for high-quality image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Echipa noastră</h3>
                    <p className="text-gray-600">Profesioniști pasionați de inovație</p>
                  </div>
                </div>
              </div>
              
              {/* 
                Uncomment and replace with actual team/about image:
                <Image
                  src="/about-team.jpg"
                  alt="Echipa noastră de profesioniști"
                  fill
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={false}
                />
              */}
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full blur-xl opacity-60"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-300 rounded-full blur-2xl opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

/*
INTEGRARE INSTRUCTIONS:

1. Instalează dependențele necesare (dacă nu sunt deja instalate):
   npm install framer-motion lucide-react

2. Importă componenta în pages/index.js sau pages/about.js:
   import AboutSection from '@/components/AboutSection'
   
   export default function Home() {
     return (
       <div>
         <AboutSection />
         {/* rest of your page content */}
       </div>
     )
   }

3. Pentru pagina About dedicată, poți folosi componenta în pages/about.js:
   import AboutSection from '@/components/AboutSection'
   
   export default function About() {
     return (
       <div>
         <AboutSection />
         {/* additional about content */}
       </div>
     )
   }

4. Adaugă imaginea echipei în public/ folder și înlocuiește placeholder-ul cu:
   <Image
     src="/about-team.jpg"
     alt="Echipa noastră de profesioniști"
     fill
     className="object-cover rounded-3xl"
     sizes="(max-width: 768px) 100vw, 50vw"
     priority={false}
   />

5. Personalizează valorile în array-ul `values` pentru a reflecta valorile companiei tale.
*/
