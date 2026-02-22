import { motion } from 'framer-motion'
import { Sprout, Leaf, Award, Target, Eye, Heart } from 'lucide-react'

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

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: 'Mission', description: 'To make AI-powered farming tools accessible to every farmer in India, helping them achieve better yields with sustainable water usage through technology and education.' },
            { icon: Eye, title: 'Vision', description: 'To be the leading agricultural technology platform in India, bridging the gap between traditional farming and modern AI solutions for sustainable agriculture.' },
            { icon: Heart, title: 'Values', description: 'We believe in sustainable farming practices, data-driven decisions, empowering rural communities, and making technology accessible to every farmer.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4 shadow-lg">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
              <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">What is JalSakhi?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                JalSakhi is an AI-powered mobile application designed specifically for Indian farmers. 
                It helps optimize water usage, provides crop recommendations based on soil and weather conditions, 
                and assists village water administrators in managing water distribution efficiently.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Our goal is to help farmers maximize their yields while conserving precious water resources 
                for future generations.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Sprout, label: 'AI Crop Recommendations' },
                { icon: Leaf, label: 'Water Management' },
                { icon: Award, label: 'Soil Analysis' },
                { icon: Target, label: 'Weather Forecasting' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-green-50 dark:bg-slate-700/50 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
