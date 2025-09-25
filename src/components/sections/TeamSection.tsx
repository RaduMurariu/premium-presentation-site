'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github } from 'lucide-react'

const TeamSection = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      image: '/api/placeholder/300/300',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented individuals behind our success, dedicated to creating amazing digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-20" />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a
                  href={member.social.linkedin}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={member.social.github}
                  className="p-2 bg-gray-100 rounded-lg hover:bg-primary-600 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
