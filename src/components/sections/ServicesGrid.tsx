'use client'

import { motion } from 'framer-motion'
import { Palette, Code, Smartphone, Search, BarChart3, Shield } from 'lucide-react'

const ServicesGrid = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Beautiful, responsive designs that captivate your audience and drive conversions.',
      features: ['Responsive Design', 'UI/UX Design', 'Brand Identity', 'Prototyping'],
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast, secure, and scalable web applications built with modern technologies.',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your visibility and organic traffic with proven SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Content Strategy'],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Data-driven insights to optimize your digital presence and performance.',
      features: ['Google Analytics', 'Conversion Tracking', 'Performance Reports', 'A/B Testing'],
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Keep your digital assets secure and running smoothly with ongoing support.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', '24/7 Monitoring'],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end digital solutions tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
