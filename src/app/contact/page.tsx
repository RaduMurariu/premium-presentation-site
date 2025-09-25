import { Metadata } from 'next'
import ContactHero from '@/components/sections/ContactHero'
import ContactForm from '@/components/sections/ContactForm'
import ContactInfo from '@/components/sections/ContactInfo'
import ContactMap from '@/components/sections/ContactMap'

export const metadata: Metadata = {
  title: 'Contact - Premium Presentation Site',
  description: 'Get in touch with us for your next premium digital project. We are here to help.',
}

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactMap />
    </>
  )
}
