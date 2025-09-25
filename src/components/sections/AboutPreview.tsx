'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, Target, Zap, Award } from 'lucide-react'

const AboutPreview = () => {
  const values = [
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Diverse expertise working together'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Cutting-edge solutions'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium quality standards'
    }
  ]

  return (
    <section id="about-preview" className="section-padding bg-[#121212] relative overflow-hidden">
      {/* Urban Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] bg-center" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Urban Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-urban-bg-tertiary/50 backdrop-blur-sm border border-urban-accent-teal/30 rounded-full px-6 py-3"
            >
              <Award className="w-5 h-5 text-urban-accent-teal" />
              <span className="text-urban-text-secondary font-medium">About Our Team</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-urban-text-primary leading-tight">
              Crafting Urban
              <span className="block text-gradient-urban">Digital</span>
              <span className="block">Excellence</span>
            </h2>
            
            <p className="text-xl text-urban-text-secondary leading-relaxed max-w-2xl">
              We are a passionate team of urban designers and developers dedicated to creating 
              exceptional digital experiences. Our approach combines cutting-edge technology 
              with sophisticated urban aesthetics and timeless design principles.
            </p>

            {/* Urban Values Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card-urban p-6 hover-lift">
                    <div className="w-12 h-12 bg-urban-accent-teal/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-urban-accent-teal/30 transition-colors">
                      <value.icon className="w-6 h-6 text-urban-accent-teal" />
                    </div>
                    <h3 className="text-lg font-bold text-urban-text-primary mb-2">{value.title}</h3>
                    <p className="text-urban-text-muted text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-urban-accent-teal hover:text-urban-accent-yellow font-semibold text-lg group transition-colors duration-300"
              >
                Discover Our Story
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Urban Image Container */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-card rounded-3xl overflow-hidden shadow-urban-lg">
                {/* Urban Pattern Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-urban-accent-teal/20 via-urban-accent-red/10 to-urban-accent-yellow/20" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center" />
                
                {/* Urban Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-urban-accent-teal/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <Users className="w-10 h-10 text-urban-accent-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-urban-text-primary mb-4">Our Team</h3>
                    <p className="text-urban-text-secondary">Urban digital innovators</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Urban Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-urban-accent-red/20 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-urban-accent-yellow/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/2 -left-4 w-16 h-16 bg-urban-accent-teal/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
