import { Metadata } from 'next'
import PortfolioHero from '@/components/sections/PortfolioHero'
import PortfolioGrid from '@/components/sections/PortfolioGrid'
import PortfolioFilter from '@/components/sections/PortfolioFilter'
import PortfolioCTA from '@/components/sections/PortfolioCTA'

export const metadata: Metadata = {
  title: 'Portfolio - Premium Presentation Site',
  description: 'Explore our portfolio of premium digital projects and see the quality of our work.',
}

export default function Portfolio() {
  return (
    <>
      <PortfolioHero />
      <PortfolioFilter />
      <PortfolioGrid />
      <PortfolioCTA />
    </>
  )
}
