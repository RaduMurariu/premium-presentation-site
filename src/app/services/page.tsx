import { Metadata } from 'next'
import ServicesHero from '@/components/sections/ServicesHero'
import ServicesGrid from '@/components/sections/ServicesGrid'
import ProcessSection from '@/components/sections/ProcessSection'
import PricingSection from '@/components/sections/PricingSection'

export const metadata: Metadata = {
  title: 'Services - Premium Presentation Site',
  description: 'Discover our comprehensive range of premium digital services designed to elevate your business.',
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <PricingSection />
    </>
  )
}
