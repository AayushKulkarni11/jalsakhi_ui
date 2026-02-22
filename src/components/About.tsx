import { motion } from 'framer-motion'
import { Brain, Server, Smartphone, Database, Leaf, Globe, CheckCircle } from 'lucide-react'

const technologies = [
  { icon: Brain, name: 'ML Models', desc: 'FastAPI microservices for predictions' },
  { icon: Server, name: 'Local Gateway', desc: 'Node.js secure proxy server' },
  { icon: Smartphone, name: 'Mobile App', desc: 'React Native (Expo)' },
  { icon: Database, name: 'Data Storage', desc: 'MongoDB backend' },
]

export default function About() {
  return (
    <section id="about" className="section bg-slate-800/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4"
            >
              About Us
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Outfit'] mb-6">
              Revolutionizing Water{' '}
              <span className="gradient-text">Management</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              JalSakhi is an end-to-end smart water management platform designed specifically 
              for farmers and village administrators. We combine cutting-edge ML technology with 
              intuitive mobile interfaces to deliver actionable insights.
            </p>

            {/* Mission points */}
            <div className="space-y-4">
              {[
                'Empowering farmers with data-driven water recommendations',
                'Optimizing village-level water allocation',
                'Promoting sustainable agricultural practices',
                'Making advanced technology accessible to rural communities',
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-300">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main visual */}
            <div className="relative">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
              
              {/* Card content */}
              <div className="relative glass rounded-3xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold font-['Outfit'] mb-6 text-white">
                  Our Technology Stack
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-800/50 rounded-xl p-4 hover:bg-slate-800 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center mb-3">
                        <tech.icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div className="font-semibold text-white text-sm">{tech.name}</div>
                      <div className="text-xs text-slate-400">{tech.desc}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {['FastAPI', 'React Native', 'Node.js', 'Python', 'TypeScript'].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 border border-sky-500/30"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-sky-400" />
                  <span className="text-sm font-medium text-white">PAN India</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 border border-emerald-500/30"
              >
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-medium text-white">Sustainable</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
