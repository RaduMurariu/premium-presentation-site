'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const PortfolioGrid = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced features and seamless user experience.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure and intuitive mobile banking application for iOS and Android.',
      image: '/api/placeholder/600/400',
      tags: ['React Native', 'Firebase', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional corporate website with modern design and excellent performance.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'SaaS Dashboard',
      category: 'Web Development',
      description: 'Comprehensive dashboard for managing business operations and analytics.',
      image: '/api/placeholder/600/400',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Restaurant App',
      category: 'Mobile Development',
      description: 'Food delivery and restaurant management mobile application.',
      image: '/api/placeholder/600/400',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Creative portfolio website showcasing design and development skills.',
      image: '/api/placeholder/600/400',
      tags: ['Gatsby', 'GraphQL', 'Contentful'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 opacity-20" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid
