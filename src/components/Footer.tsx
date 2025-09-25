import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sparkles, Zap, Globe } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    'Urban Web Design',
    'Digital Development', 
    'Mobile Solutions',
    'Digital Growth',
    'Brand Strategy',
    'Consulting'
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'urban-accent-teal' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'urban-accent-red' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'urban-accent-yellow' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'urban-accent-teal' },
  ]

  return (
    <footer className="bg-[#121212] relative overflow-hidden">
      {/* Urban Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center" />
      
      {/* Floating Urban Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-urban-accent-teal/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-urban-accent-red/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-urban-accent-yellow/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Urban Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-urban-accent-teal" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-urban-accent-yellow rounded-full animate-ping" />
                </div>
                <h3 className="text-3xl font-black text-gradient-urban">Urban</h3>
              </div>
              
              <p className="text-urban-text-secondary leading-relaxed text-lg">
                Creating exceptional urban digital experiences with sophisticated design and cutting-edge technology.
              </p>
              
              {/* Urban Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-3 bg-urban-bg-tertiary/50 hover:bg-${social.color}/20 border border-urban-bg-quaternary/50 hover:border-${social.color}/30 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-teal`}
                    aria-label={social.name}
                  >
                    <social.icon className={`w-5 h-5 text-urban-text-muted hover:text-${social.color} transition-colors duration-300`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-urban-text-primary flex items-center gap-2">
                <Zap className="w-5 h-5 text-urban-accent-teal" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-urban-text-secondary hover:text-urban-accent-teal transition-colors duration-300 font-medium group flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-urban-accent-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urban Services */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-urban-text-primary flex items-center gap-2">
                <Globe className="w-5 h-5 text-urban-accent-red" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-urban-text-secondary hover:text-urban-accent-red transition-colors duration-300 font-medium cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Urban Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-urban-text-primary flex items-center gap-2">
                <MapPin className="w-5 h-5 text-urban-accent-yellow" />
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-urban-accent-teal/20 rounded-lg flex items-center justify-center group-hover:bg-urban-accent-teal/30 transition-colors">
                    <Mail className="w-5 h-5 text-urban-accent-teal" />
                  </div>
                  <div>
                    <p className="text-urban-text-muted text-sm">Email</p>
                    <p className="text-urban-text-primary font-medium">hello@urban.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-urban-accent-red/20 rounded-lg flex items-center justify-center group-hover:bg-urban-accent-red/30 transition-colors">
                    <Phone className="w-5 h-5 text-urban-accent-red" />
                  </div>
                  <div>
                    <p className="text-urban-text-muted text-sm">Phone</p>
                    <p className="text-urban-text-primary font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-urban-accent-yellow/20 rounded-lg flex items-center justify-center group-hover:bg-urban-accent-yellow/30 transition-colors">
                    <MapPin className="w-5 h-5 text-urban-accent-yellow" />
                  </div>
                  <div>
                    <p className="text-urban-text-muted text-sm">Location</p>
                    <p className="text-urban-text-primary font-medium">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urban Bottom Bar */}
        <div className="border-t border-urban-bg-quaternary/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-4">
              <p className="text-urban-text-muted text-sm">
                © {currentYear} Urban Digital. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-urban-accent-teal rounded-full animate-pulse" />
                <span className="text-urban-text-muted text-xs">Made with urban passion</span>
              </div>
            </div>
            
            <div className="flex space-x-8 text-sm">
              <Link 
                href="/privacy" 
                className="text-urban-text-muted hover:text-urban-accent-teal transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-urban-text-muted hover:text-urban-accent-red transition-colors duration-300 font-medium"
              >
                Terms of Service
              </Link>
              <Link 
                href="/cookies" 
                className="text-urban-text-muted hover:text-urban-accent-yellow transition-colors duration-300 font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
