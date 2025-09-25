'use client'

import { motion } from 'framer-motion'

const ContactHero = () => {
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
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your next project? Let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
