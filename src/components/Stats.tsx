import { motion } from 'framer-motion'
import { Sprout, Droplets, TrendingUp, Users } from 'lucide-react'

const impactStats = [
  { icon: Sprout, value: '50,000+', label: 'Farmers Impacted', gradient: 'from-green-500 to-emerald-600', description: 'Active farmers using JalSakhi across India' },
  { icon: Droplets, value: '2.5M', label: 'Liters Saved', gradient: 'from-blue-500 to-cyan-600', description: 'Water conserved through smart irrigation' },
  { icon: TrendingUp, value: '35%', label: 'Yield Increase', gradient: 'from-purple-500 to-violet-600', description: 'Average yield improvement reported' },
  { icon: Users, value: '500+', label: 'Villages', gradient: 'from-amber-500 to-orange-600', description: 'Communities transformed with AI farming' },
]

export default function Stats() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-white mb-4">
            Real <span className="text-green-200">Impact</span> on Indian Farming
          </h2>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Join thousands of farmers already benefiting from AI-powered agricultural solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20 text-center group hover:bg-white/20 transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-green-100 font-semibold mb-2">{stat.label}</div>
              <p className="text-green-200 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-300" />
              <span className="text-white text-sm font-medium">Free to Use</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-blue-300" />
              <span className="text-white text-sm font-medium">No Internet Required</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <div className="w-2 h-2 rounded-full bg-purple-300" />
              <span className="text-white text-sm font-medium">Multi-language</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
