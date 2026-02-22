import { motion } from 'framer-motion'
import { Sprout, Droplets, BarChart3, Users, Cpu, MapPin, Wind, Thermometer } from 'lucide-react'

const features = [
  { icon: Sprout, title: 'Crop Recommendations', description: 'AI-powered crop suggestions based on soil type, climate zone, and water availability for optimal yield.', gradient: 'from-green-500 to-emerald-600' },
  { icon: Droplets, title: 'Water Management', description: 'Smart water allocation and irrigation scheduling to maximize efficiency and reduce wastage.', gradient: 'from-blue-500 to-cyan-600' },
  { icon: BarChart3, title: 'Yield Analytics', description: 'Comprehensive analytics dashboard with historical data, trends, and predictive insights.', gradient: 'from-purple-500 to-violet-600' },
  { icon: Users, title: 'Village Administration', description: 'Tools for village-level water distribution management and farmer coordination.', gradient: 'from-amber-500 to-orange-600' },
  { icon: Cpu, title: 'Soil Moisture AI', description: 'Advanced ML models forecast soil moisture levels helping you plan irrigation precisely.', gradient: 'from-rose-500 to-pink-600' },
  { icon: MapPin, title: 'Geo-Mapping', description: 'Interactive maps showing farms, reservoirs, and water distribution networks across villages.', gradient: 'from-teal-500 to-emerald-600' },
  { icon: Wind, title: 'Weather Integration', description: 'Real-time weather data integration for accurate predictions and planning.', gradient: 'from-indigo-500 to-blue-600' },
  { icon: Thermometer, title: 'Climate Zones', description: 'Agro-climatic zone analysis customized for Indian farming conditions.', gradient: 'from-red-500 to-orange-600' },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 mb-4"
          >
            <Sprout className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">Powerful Features</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-slate-800 dark:text-white mb-4">
            Everything You Need for <span className="gradient-text">Smart Farming</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Comprehensive tools designed specifically for Indian farmers and village administrators.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
              <Sprout className="w-5 h-5 text-green-600 dark:text-green-400" />
              <span className="text-green-700 dark:text-green-400 font-medium">12+ AI Models</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-200 dark:border-blue-800">
              <Droplets className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-blue-700 dark:text-blue-400 font-medium">Real-time Data</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-purple-50 dark:bg-purple-900/20 rounded-full border border-purple-200 dark:border-purple-800">
              <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-purple-700 dark:text-purple-400 font-medium">Village Scale</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
