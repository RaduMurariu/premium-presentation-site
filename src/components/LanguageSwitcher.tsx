'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Language } from '../lib/language'

interface LanguageSwitcherProps {
  className?: string
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'ro' : 'en'
    setLanguage(newLanguage)
  }

  const getButtonText = () => {
    return language === 'en' ? 'RO' : 'EN'
  }

  const getButtonTitle = () => {
    return language === 'en' 
      ? 'Switch to Romanian' 
      : 'Switch to English'
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      title={getButtonTitle()}
      className={`
        relative px-4 py-2 rounded-xl font-semibold text-sm
        bg-card/50 backdrop-blur-sm border border-accent-turquoise/20
        hover:bg-accent-turquoise/20 hover:border-accent-turquoise/40
        text-text-primary hover:text-accent-turquoise
        transition-all duration-300 hover:scale-105 hover:shadow-turquoise
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <span className="text-lg font-bold">{getButtonText()}</span>
        <motion.div
          className="w-2 h-2 bg-accent-turquoise rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </span>
      
      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent-turquoise/10 to-accent-yellow/10 rounded-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

export default LanguageSwitcher
