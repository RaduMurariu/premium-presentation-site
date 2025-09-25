'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const PortfolioFilter = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Web Design', 'Web Development', 'Mobile Apps', 'E-commerce']

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioFilter
