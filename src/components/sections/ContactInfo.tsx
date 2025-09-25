'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'hello@premium.com',
      action: 'mailto:hello@premium.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 9am to 6pm',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: '123 Business St, New York, NY 10001',
      action: 'https://maps.google.com',
    },
  ]

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {contactDetails.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.action}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <contact.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                <p className="text-gray-600 text-sm mb-1">{contact.description}</p>
                <p className="text-primary-600 font-medium">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="flex items-center space-x-3 mb-6">
          <Clock className="w-6 h-6 text-primary-600" />
          <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
        </div>
        
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <motion.div
              key={schedule.day}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
            >
              <span className="text-gray-700">{schedule.day}</span>
              <span className="text-gray-900 font-medium">{schedule.hours}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
        <div className="flex items-center space-x-3 mb-4">
          <MessageCircle className="w-6 h-6 text-primary-600" />
          <h3 className="text-xl font-semibold text-gray-900">Quick Response</h3>
        </div>
        <p className="text-gray-700 mb-4">
          We typically respond to all inquiries within 24 hours. For urgent matters, 
          please call us directly.
        </p>
        <div className="flex items-center space-x-2 text-primary-600">
          <Calendar className="w-5 h-5" />
          <span className="font-medium">Response time: 24 hours</span>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo
