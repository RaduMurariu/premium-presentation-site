import HeroSection from '@/components/sections/HeroSection'
import AboutPreview from '@/components/sections/AboutPreview'
import ServicesPreview from '@/components/sections/ServicesPreview'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import CTA from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <TestimonialsPreview />
      <CTA />
    </>
  )
}
