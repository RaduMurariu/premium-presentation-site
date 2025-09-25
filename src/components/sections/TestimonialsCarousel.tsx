'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      company: 'TechCorp',
      content: 'Working with this team was an absolute pleasure. They delivered beyond our expectations and helped us achieve a 300% increase in online conversions. Their attention to detail and commitment to quality is unmatched.',
      rating: 5,
      image: '/api/placeholder/100/100',
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartupXYZ',
      company: 'StartupXYZ',
      content: 'Professional, creative, and reliable. They took our vision and turned it into something even better than we imagined. The project was delivered on time and within budget.',
      rating: 5,
      image: '/api/placeholder/100/100',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, BrandCo',
      company: 'BrandCo',
      content: 'The team\'s expertise in both design and development is impressive. They created a website that not only looks amazing but also performs exceptionally well. Highly recommend their services.',
      rating: 5,
      image: '/api/placeholder/100/100',
    },
    {
      name: 'David Kim',
      role: 'CTO, InnovateLab',
      company: 'InnovateLab',
      content: 'Outstanding work! They understood our complex requirements and delivered a solution that exceeded all our expectations. The ongoing support has been excellent.',
      rating: 5,
      image: '/api/placeholder/100/100',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <Quote className="w-12 h-12 text-primary-600 mb-6 mx-auto" />
            
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 text-center">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mr-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-primary-600 font-medium">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel
