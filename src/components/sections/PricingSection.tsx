'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$2,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Website Design',
        'Up to 5 Pages',
        'Basic SEO Setup',
        '3 Months Support',
        'Mobile Optimization',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$5,999',
      description: 'Ideal for growing businesses',
      features: [
        'Custom Web Application',
        'Up to 10 Pages',
        'Advanced SEO',
        '6 Months Support',
        'Analytics Integration',
        'Content Management System',
        'E-commerce Integration',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Full-Stack Development',
        'Unlimited Pages',
        'Custom Features',
        '12 Months Support',
        'Advanced Analytics',
        'API Development',
        'Third-party Integrations',
        'Dedicated Project Manager',
      ],
      popular: false,
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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your project. All plans include our quality guarantee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-2 border-primary-600 scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {plan.price}
                </div>
                {plan.price !== 'Custom' && (
                  <p className="text-gray-500">one-time payment</p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
