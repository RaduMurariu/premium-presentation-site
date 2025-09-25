'use client'

import React, { useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ExternalLink, Loader2 } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const ContactSection = () => {
  const { translations } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', null
  const [errors, setErrors] = useState({})
  const shouldReduceMotion = useReducedMotion()

  // API endpoint pentru trimiterea email-urilor
  const API_ENDPOINT = '/api/contact'

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: shouldReduceMotion ? {} : {
      scale: 1.02,
      boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  // Validate form with detailed error messages
  const validateForm = () => {
    const newErrors = {}
    const { name, email, message } = formData
    
    // Name validation
    if (!name.trim()) {
      newErrors.name = 'Numele este obligatoriu'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Numele trebuie să aibă cel puțin 2 caractere'
    }
    
    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        newErrors.email = 'Vă rugăm să introduceți o adresă de email validă'
      }
    }
    
    // Message validation
    if (!message.trim()) {
      newErrors.message = 'Mesajul este obligatoriu'
    } else if (message.trim().length < 10) {
      newErrors.message = 'Mesajul trebuie să aibă cel puțin 10 caractere'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission with Nodemailer API
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrors({})
    
    try {
      // Trimite datele către API route
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
        console.error('API Error:', result.error)
      }
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Contact information
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: "+40 123 456 789",
      link: "tel:+40123456789"
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@exemplu.ro",
      link: "mailto:contact@exemplu.ro"
    },
    {
      icon: MapPin,
      title: "Adresă",
      value: "Piața Universității, București, România",
      link: "https://maps.google.com"
    }
  ]

  return (
    <section 
      aria-label="Contact"
      className="py-24 lg:py-32 bg-urban-bg-primary"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-urban-text-primary leading-tight mb-6"
          >
            {translations.contact.title} <span className="text-gradient-urban">{translations.contact.titleHighlight}</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-urban-text-secondary leading-relaxed max-w-3xl mx-auto"
          >
            {translations.contact.description}
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <motion.div
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="bg-card/80 backdrop-blur-sm border border-card/50 rounded-2xl p-8 lg:p-12 shadow-simplify-lg"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">{translations.contact.form.title}</h3>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-accent-turquoise/10 border border-accent-turquoise/30 rounded-xl flex items-center"
              >
                <CheckCircle className="w-5 h-5 text-accent-turquoise mr-3" />
                <span className="text-text-primary font-medium">{translations.contact.form.success}</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-accent-red/10 border border-accent-red/30 rounded-xl flex items-center"
              >
                <AlertCircle className="w-5 h-5 text-accent-red mr-3" />
                <span className="text-text-primary font-medium">{translations.contact.form.error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    {translations.contact.form.fields.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-turquoise focus:border-transparent transition-all duration-300 bg-card/50 text-text-primary placeholder-text-muted ${
                      errors.name 
                        ? 'border-accent-red focus:ring-accent-red' 
                        : 'border-card/50 focus:ring-accent-turquoise'
                    }`}
                    placeholder={translations.contact.form.placeholders.name}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-accent-red flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    {translations.contact.form.fields.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-turquoise focus:border-transparent transition-all duration-300 bg-card/50 text-text-primary placeholder-text-muted ${
                      errors.email 
                        ? 'border-accent-red focus:ring-accent-red' 
                        : 'border-card/50 focus:ring-accent-turquoise'
                    }`}
                    placeholder="exemplu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-accent-red flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subiect
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-card/50 rounded-xl focus:ring-2 focus:ring-accent-turquoise focus:border-transparent transition-all duration-300 bg-card/50 text-text-primary placeholder-text-muted"
                  placeholder="Subiectul mesajului (opțional)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-accent-turquoise focus:border-transparent transition-all duration-300 bg-card/50 text-text-primary placeholder-text-muted resize-none ${
                    errors.message 
                      ? 'border-accent-red focus:ring-accent-red' 
                      : 'border-card/50 focus:ring-accent-turquoise'
                  }`}
                  placeholder="Descrieți proiectul sau întrebarea dumneavoastră..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-accent-red flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={isSubmitting}
                className="w-full bg-accent-red hover:bg-accent-red/80 disabled:bg-card/30 text-text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-accent-turquoise/20 flex items-center justify-center group disabled:cursor-not-allowed hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Se trimite...
                  </>
                ) : (
                  <>
                    Trimite mesajul
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-urban-text-primary mb-8">Informații de contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-urban-bg-secondary/50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-urban-accent-teal/20 rounded-xl flex items-center justify-center group-hover:bg-urban-accent-teal transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-urban-accent-teal group-hover:text-urban-text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-urban-text-primary mb-1">{info.title}</h4>
                      <p className="text-urban-text-secondary">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Urban Map Section */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-urban-text-primary mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-urban-accent-teal" />
                Locația noastră
              </h4>
              <div className="relative w-full h-80 bg-urban-bg-secondary rounded-2xl overflow-hidden shadow-urban-lg">
                {/* Google Maps iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.123456789!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff877b6b8b8b%3A0x8b8b8b8b8b8b8b8b!2sPiata%20Universitatii%2C%20Bucuresti!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
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
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

/*
INTEGRARE INSTRUCTIONS:

1. Instalează dependențele necesare (dacă nu sunt deja instalate):
   npm install framer-motion lucide-react

2. Pentru integrarea cu EmailJS (opțional):
   npm install @emailjs/browser
   
   Apoi în componenta, înlocuiește handleSubmit cu:
   import emailjs from '@emailjs/browser'
   
   const handleSubmit = async (e) => {
     e.preventDefault()
     if (!validateForm()) return
     
     setIsSubmitting(true)
     try {
       await emailjs.send(
         'YOUR_SERVICE_ID',
         'YOUR_TEMPLATE_ID',
         formData,
         'YOUR_PUBLIC_KEY'
       )
       setSubmitStatus('success')
     } catch (error) {
       setSubmitStatus('error')
     } finally {
       setIsSubmitting(false)
     }
   }

3. Importă componenta în pages/contact.js sau pages/index.js:
   import ContactSection from '@/components/ContactSection'
   
   export default function Contact() {
     return (
       <div>
         <ContactSection />
         {/* rest of your page content */}
       </div>
     )
   }

4. Pentru Google Maps real, înlocuiește placeholder-ul cu iframe-ul Google Maps:
   - Obține embed URL din Google Maps
   - Adaugă iframe-ul în locul placeholder-ului
   - Ajustează coordonatele pentru locația ta

5. Personalizează informațiile de contact în array-ul `contactInfo`:
   - Actualizează numerele de telefon
   - Modifică adresele de email
   - Schimbă adresa fizică

6. Pentru backend integration (Nodemailer), înlocuiește handleSubmit cu:
   const handleSubmit = async (e) => {
     e.preventDefault()
     if (!validateForm()) return
     
     setIsSubmitting(true)
     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData)
       })
       
       if (response.ok) {
         setSubmitStatus('success')
       } else {
         setSubmitStatus('error')
       }
     } catch (error) {
       setSubmitStatus('error')
     } finally {
       setIsSubmitting(false)
     }
   }
*/
