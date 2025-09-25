'use client'

import { motion } from 'framer-motion'

const AboutStory = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020, we started with a simple mission: to create digital experiences 
              that not only look beautiful but also deliver real value to businesses and users.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, we're proud to have worked with over 100 clients across various industries, 
              helping them achieve their digital transformation goals through innovative design 
              and cutting-edge technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
