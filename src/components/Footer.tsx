import { motion } from 'framer-motion'
import { Sprout, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'About Us', href: '#about' },
  { name: 'Download', href: '#download' },
]

const services = [
  { name: 'Crop Recommendations', href: '#' },
  { name: 'Water Management', href: '#' },
  { name: 'Soil Analysis', href: '#' },
  { name: 'Village Administration', href: '#' },
]

const contact = [
  { icon: Mail, text: 'hello@jalsakhi.in' },
  { icon: Phone, text: '+91 98765 43210' },
  { icon: MapPin, text: 'Bangalore, Karnataka, India' },
]

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                <Sprout className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-['Outfit']">
                <span className="text-green-400">Jal</span>
                <span className="text-white">Sakhi</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering Indian farmers with AI-powered agricultural solutions for sustainable farming and water conservation.
            </p>
            <div className="flex gap-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-slate-800 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-green-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-green-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href={service.href} className="text-slate-400 hover:text-green-400 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-slate-400">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          className="pt-8 border-t border-slate-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 JalSakhi. All rights reserved. Made with ❤️ for Indian Farmers
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-green-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
