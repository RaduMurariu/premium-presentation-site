'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../contexts/LanguageContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { translations } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: translations.common.home, href: '/' },
    { name: translations.common.about, href: '/about' },
    { name: translations.common.services, href: '/services' },
    { name: translations.common.portfolio, href: '/portfolio' },
    { name: translations.common.testimonials, href: '/testimonials' },
    { name: translations.common.contact, href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-effect-dark shadow-simplify-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* SimplifyWeb Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 text-2xl md:text-3xl font-black text-text-primary hover:bg-gradient-to-r hover:from-accent-turquoise hover:to-accent-yellow hover:bg-clip-text hover:text-transparent transition-all duration-300 group"
          >
            <div className="relative">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-accent-turquoise group-hover:animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-yellow rounded-full animate-ping" />
            </div>
            <span className="bg-gradient-to-r from-accent-turquoise to-accent-yellow bg-clip-text text-transparent">SimplifyWeb</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-text-secondary hover:text-text-primary transition-all duration-300 font-medium group"
              >
                <span className="relative z-10">{item.name}</span>
                {/* SimplifyWeb hover effect */}
                <div className="absolute inset-0 bg-card/50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent-turquoise group-hover:w-8 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* SimplifyWeb CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <button className="btn-primary text-sm px-6 py-3">
              {translations.hero.cta1}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-card/50 hover:bg-card/80 border border-accent-turquoise/20 hover:border-accent-turquoise/40 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-text-primary" />
            )}
          </button>
        </div>

        {/* SimplifyWeb Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-effect-card rounded-2xl mt-4 p-6 border border-accent-turquoise/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center justify-between px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-card/50 rounded-xl transition-all duration-300 font-medium"
                >
                  <span>{item.name}</span>
                  <div className="w-2 h-2 bg-accent-turquoise rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
              
              {/* Mobile CTA & Language Switcher */}
              <div className="pt-4 mt-4 border-t border-card/50 space-y-4">
                <LanguageSwitcher className="w-full justify-center" />
                <button className="w-full btn-primary text-center">
                  {translations.hero.cta1}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
