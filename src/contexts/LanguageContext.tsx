'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Language, getCurrentLanguage, getTranslations, storeLanguage, Translations } from '../lib/language'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  translations: Translations
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isLoading, setIsLoading] = useState(true)
  const [translations, setTranslations] = useState<Translations>(getTranslations('en'))

  // Initialize language on mount
  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const detectedLanguage = await getCurrentLanguage()
        setLanguageState(detectedLanguage)
        setTranslations(getTranslations(detectedLanguage))
      } catch (error) {
        console.error('Failed to detect language:', error)
        setLanguageState('en')
        setTranslations(getTranslations('en'))
      } finally {
        setIsLoading(false)
      }
    }

    initializeLanguage()
  }, [])

  // Update translations when language changes
  useEffect(() => {
    setTranslations(getTranslations(language))
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    storeLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      translations,
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
