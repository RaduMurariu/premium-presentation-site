import { Metadata } from 'next'
import AboutHero from '@/components/sections/AboutHero'
import AboutStory from '@/components/sections/AboutStory'
import TeamSection from '@/components/sections/TeamSection'
import ValuesSection from '@/components/sections/ValuesSection'

export const metadata: Metadata = {
  title: 'About Us - Premium Presentation Site',
  description: 'Learn about our story, values, and the team behind our premium digital experiences.',
}

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      <TeamSection />
    </>
  )
}
