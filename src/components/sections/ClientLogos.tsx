'use client'

import { motion } from 'framer-motion'

const ClientLogos = () => {
  const clients = [
    { name: 'TechCorp', logo: '/api/placeholder/150/60' },
    { name: 'StartupXYZ', logo: '/api/placeholder/150/60' },
    { name: 'BrandCo', logo: '/api/placeholder/150/60' },
    { name: 'InnovateLab', logo: '/api/placeholder/150/60' },
    { name: 'DigitalAgency', logo: '/api/placeholder/150/60' },
    { name: 'CreativeStudio', logo: '/api/placeholder/150/60' },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Leading Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with innovative companies across various industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-24 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-medium text-sm">{client.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
