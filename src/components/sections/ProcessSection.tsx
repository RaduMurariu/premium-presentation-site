'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Code, Rocket } from 'lucide-react'

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience through comprehensive research.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Based on our findings, we develop a tailored strategy and create detailed project plans.',
    },
    {
      number: '03',
      icon: Code,
      title: 'Development',
      description: 'Our team brings your vision to life with cutting-edge technology and best practices.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch',
      description: 'We launch your project and provide ongoing support to ensure continued success.',
    },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery and client satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-primary-200 transform translate-x-1/2" />
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-6xl font-bold text-primary-100 absolute -top-4 left-1/2 transform -translate-x-1/2">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
