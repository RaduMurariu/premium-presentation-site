'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

const ContactMap = () => {
  return (
    <section className="section-padding bg-urban-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-urban-text-primary mb-6 flex items-center justify-center gap-3">
            <MapPin className="w-8 h-8 text-urban-accent-teal" />
            Find Us
          </h2>
          <p className="text-xl text-urban-text-secondary max-w-3xl mx-auto">
            Visit our office or get in touch with us. We're always happy to meet new clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-urban-bg-secondary rounded-2xl overflow-hidden shadow-urban-lg"
        >
          {/* Google Maps iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.123456789!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff877b6b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPiata%20Universitatii%2C%20Bucuresti!5e0!3m2!1sen!2sro!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația noastră - Urban Digital"
            className="rounded-2xl"
          />
          
          {/* Urban overlay with office info */}
          <div className="absolute top-4 right-4 bg-urban-bg-secondary/90 backdrop-blur-sm border border-urban-accent-teal/20 rounded-xl p-4 max-w-xs">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-urban-accent-teal" />
              <span className="text-urban-text-primary font-semibold text-sm">Urban Digital</span>
            </div>
            <p className="text-urban-text-secondary text-xs leading-relaxed">
              Piața Universității, București, România
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-urban-accent-teal hover:text-urban-accent-yellow text-xs font-medium mt-2 transition-colors duration-300"
            >
              Deschide în Google Maps
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactMap
