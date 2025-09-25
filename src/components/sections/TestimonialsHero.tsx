'use client'

import { motion } from 'framer-motion'

const TestimonialsHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear what our clients have to say about working with us and the results we've achieved together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsHero
