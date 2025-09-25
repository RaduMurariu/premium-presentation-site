'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your
            <span className="block text-gradient">Next Project?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's work together to create something amazing. Get in touch with us today 
            and let's discuss your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
