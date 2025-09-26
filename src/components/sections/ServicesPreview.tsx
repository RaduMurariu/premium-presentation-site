'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Palette, Code, Smartphone, Search, Zap, Shield, Globe, ShoppingCart, Wrench, Lightbulb } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

const ServicesPreview = () => {
  const { translations } = useLanguage()
  
  const services = [
    {
      icon: Palette,
      title: translations.services.items.webDesign.title,
      description: translations.services.items.webDesign.description,
      color: 'urban-accent-teal',
      features: translations.services.items.webDesign.features
    },
    {
      icon: ShoppingCart,
      title: translations.services.items.ecommerce.title,
      description: translations.services.items.ecommerce.description,
      color: 'urban-accent-red',
      features: translations.services.items.ecommerce.features
    },
    {
      icon: Search,
      title: translations.services.items.seo.title,
      description: translations.services.items.seo.description,
      color: 'urban-accent-yellow',
      features: translations.services.items.seo.features
    },
    {
      icon: Wrench,
      title: translations.services.items.maintenance.title,
      description: translations.services.items.maintenance.description,
      color: 'urban-accent-teal',
      features: translations.services.items.maintenance.features
    },
    {
      icon: Lightbulb,
      title: translations.services.items.consulting.title,
      description: translations.services.items.consulting.description,
      color: 'urban-accent-red',
      features: translations.services.items.consulting.features
    },
    {
      icon: Zap,
      title: translations.services.items.performance.title,
      description: translations.services.items.performance.description,
      color: 'urban-accent-yellow',
      features: translations.services.items.performance.features
    },
  ]

  return (
    <section className="section-padding bg-[#2B2B2B] relative overflow-hidden">
      {/* Urban Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.01%22%3E%3Cpath%20d%3D%22M40%2040c0-11-9-20-20-20s-20%209-20%2020%209%2020%2020%2020%2020-9%2020-20zm20%200c0-11-9-20-20-20s-20%209-20%2020%209%2020%2020%2020%2020-9%2020-20z%22/%3E%3C/g%3E%3C/svg%3E')] bg-center" />
      
      {/* Floating Urban Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-urban-accent-teal/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-urban-accent-red/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-urban-accent-yellow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Urban Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-urban-bg-tertiary/50 backdrop-blur-sm border border-urban-accent-teal/30 rounded-full px-6 py-3 mb-8"
          >
            <Zap className="w-5 h-5 text-urban-accent-teal" />
            <span className="text-urban-text-secondary font-medium">{translations.services.badge}</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-urban-text-primary mb-8 leading-tight">
            {translations.services.title}
          </h2>
          <p className="text-lg md:text-xl text-urban-text-secondary max-w-3xl mx-auto leading-relaxed">
            {translations.services.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-urban p-8 hover-lift h-full">
                {/* Urban Icon Container */}
                <div className={`w-16 h-16 bg-${service.color}/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${service.color}/30 transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className={`w-8 h-8 text-${service.color} group-hover:animate-pulse`} />
                </div>
                
                <h3 className="text-xl font-bold text-urban-text-primary mb-4 group-hover:text-gradient-urban transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-urban-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Urban Features List */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.15) + (featureIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 bg-${service.color} rounded-full`} />
                      <span className="text-urban-text-muted text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Urban Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-urban-accent-teal/5 to-urban-accent-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urban CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="card-urban p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Globe className="w-8 h-8 text-urban-accent-teal" />
              <Shield className="w-8 h-8 text-urban-accent-red" />
              <Zap className="w-8 h-8 text-urban-accent-yellow" />
            </div>
            
            <h3 className="text-3xl font-bold text-urban-text-primary mb-4">
              {translations.services.cta.title}
            </h3>
            <p className="text-urban-text-secondary mb-8 max-w-2xl mx-auto">
              {translations.services.cta.description}
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-urban-accent-teal hover:text-urban-accent-yellow font-semibold text-lg group transition-colors duration-300"
            >
              {translations.services.link}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
