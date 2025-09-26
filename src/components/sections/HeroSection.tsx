'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Zap } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

const HeroSection = () => {
  const { translations } = useLanguage()
  const scrollToNext = () => {
    const nextSection = document.getElementById('about-preview')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
            <section className="relative min-h-screen flex items-center justify-center bg-simplify-gradient overflow-hidden">
              {/* SimplifyWeb Background Elements */}
              <div className="absolute inset-0 bg-simplify-gradient">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center opacity-20" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-turquoise/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-red/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent-yellow/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-accent-turquoise/10 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
                  {/* SimplifyWeb Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-accent-turquoise/30 rounded-full px-6 py-3 mb-8"
                  >
                    <Sparkles className="w-5 h-5 text-accent-turquoise" />
                    <span className="text-text-secondary font-medium">{translations.hero.badge}</span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary mb-8 leading-tight"
                  >
                    {translations.hero.title}
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
                  >
                    {translations.hero.subtitle}
                  </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="/contact"
              className="btn-primary text-lg px-10 py-5 group inline-block"
            >
              <span className="flex items-center gap-3">
                <Zap className="w-5 h-5 group-hover:animate-pulse" />
                {translations.hero.cta1}
              </span>
            </a>
            <a
              href="/portfolio"
              className="btn-secondary text-lg px-10 py-5 inline-block"
            >
              {translations.hero.cta2}
            </a>
          </motion.div>

                  {/* SimplifyWeb Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-turquoise mb-2">500+</div>
                      <div className="text-text-muted text-sm">{translations.hero.stats.projects}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-red mb-2">98%</div>
                      <div className="text-text-muted text-sm">{translations.hero.stats.success}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-accent-yellow mb-2">24/7</div>
                      <div className="text-text-muted text-sm">{translations.hero.stats.support}</div>
                    </div>
                  </motion.div>
        </motion.div>
      </div>

              {/* SimplifyWeb Scroll Indicator */}
              <motion.button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-turquoise hover:text-accent-yellow transition-colors group"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm font-medium text-text-muted group-hover:text-text-secondary transition-colors">
                    {translations.hero.scrollText}
                  </span>
                  <ChevronDown className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
              </motion.button>
    </section>
  )
}

export default HeroSection
