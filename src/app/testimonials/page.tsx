import { Metadata } from 'next'
import TestimonialsHero from '@/components/sections/TestimonialsHero'
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel'
import ClientLogos from '@/components/sections/ClientLogos'
import TestimonialsCTA from '@/components/sections/TestimonialsCTA'

export const metadata: Metadata = {
  title: 'Testimonials - Premium Presentation Site',
  description: 'Read what our clients say about our premium digital services and exceptional results.',
}

export default function Testimonials() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsCarousel />
      <ClientLogos />
      <TestimonialsCTA />
    </>
  )
}
