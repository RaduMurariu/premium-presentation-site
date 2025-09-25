'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const TestimonialsCTA = () => {
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
            Ready to Join Our
            <span className="block text-gradient">Success Stories?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's work together to create your own success story. Get in touch with us today 
            and let's discuss how we can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center group"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsCTA
