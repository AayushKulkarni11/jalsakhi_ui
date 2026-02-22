import { motion } from 'framer-motion'
import { Sprout, Leaf, Award, Users, Cpu, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: '50K+', label: 'Farmers Served', gradient: 'from-green-500 to-emerald-600' },
  { icon: Cpu, value: '12+', label: 'AI Models', gradient: 'from-blue-500 to-cyan-600' },
  { icon: Globe, value: '500+', label: 'Villages', gradient: 'from-purple-500 to-violet-600' },
  { icon: Award, value: '98%', label: 'Accuracy', gradient: 'from-amber-500 to-orange-600' },
]

const timeline = [
  { year: '2023', title: 'Foundation', description: 'JalSakhi started with a vision to revolutionize Indian agriculture through AI.' },
  { year: '2024', title: 'AI Integration', description: 'Launched ML models for crop recommendations and soil moisture forecasting.' },
  { year: '2025', title: 'Scale Up', description: 'Expanded to 500+ villages with real-time water management solutions.' },
  { year: '2026', title: 'Innovation', description: 'Introduced village-level water allocation optimizer and advanced analytics.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 mb-4">
            <Leaf className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">About JalSakhi</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-slate-800 dark:text-white mb-4">
            Empowering Indian <span className="gradient-text">Farmers</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We combine cutting-edge AI technology with deep understanding of Indian agriculture to help farmers increase yields and conserve water.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-lg text-center"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-1">{stat.value}</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">Our Journey</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-green-500 dark:bg-green-400" />
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-green-200 dark:bg-green-800" style={{ transform: 'translateY(7px)' }} />
                )}
                <div className="pt-6">
                  <div className="text-green-600 dark:text-green-400 font-bold mb-2">{item.year}</div>
                  <div className="text-slate-800 dark:text-white font-semibold mb-2">{item.title}</div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { icon: Sprout, title: 'Mission', description: 'To make AI-powered farming tools accessible to every farmer in India, helping them achieve better yields with sustainable water usage.' },
            { icon: Leaf, title: 'Vision', description: 'To be the leading agricultural technology platform in India, bridging the gap between traditional farming and modern AI solutions.' },
            { icon: Award, title: 'Values', description: 'We believe in sustainable farming, data-driven decisions, and empowering rural communities through technology and knowledge.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
