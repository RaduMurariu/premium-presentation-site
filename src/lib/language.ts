import enTranslations from '../../locales/en.json'
import roTranslations from '../../locales/ro.json'

export type Language = 'en' | 'ro'
export type Translations = typeof enTranslations

export const translations: Record<Language, Translations> = {
  en: enTranslations,
  ro: roTranslations,
}

export const defaultLanguage: Language = 'en'
export const supportedLanguages: Language[] = ['en', 'ro']

/**
 * Detect user language based on browser settings and IP location
 */
export async function detectUserLanguage(): Promise<Language> {
  // First, try to detect from browser language
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0]
    if (browserLang) {
      const langCode = browserLang.split('-')[0].toLowerCase()
      if (langCode === 'ro') return 'ro'
      if (langCode === 'en') return 'en'
    }
  }

  // Fallback: try to detect from IP location (client-side)
  if (typeof window !== 'undefined') {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      
      if (data.country_code === 'RO') {
        return 'ro'
      }
    } catch (error) {
      console.log('IP detection failed, using default language')
    }
  }

  return defaultLanguage
}

/**
 * Get language from localStorage or detect automatically
 */
export function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null
  
  const stored = localStorage.getItem('preferred-language')
  if (stored && supportedLanguages.includes(stored as Language)) {
    return stored as Language
  }
  
  return null
}

/**
 * Store user's language preference
 */
export function storeLanguage(language: Language): void {
  if (typeof window === 'undefined') return
  
  localStorage.setItem('preferred-language', language)
}

/**
 * Get translations for a specific language
 */
export function getTranslations(language: Language): Translations {
  return translations[language] || translations[defaultLanguage]
}

/**
 * Get the current language from various sources
 */
export async function getCurrentLanguage(): Promise<Language> {
  // 1. Check stored preference first
  const stored = getStoredLanguage()
  if (stored) return stored

  // 2. Detect from browser/IP
  return await detectUserLanguage()
}
