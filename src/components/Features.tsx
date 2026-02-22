import { motion } from 'framer-motion'
import { Droplets, CloudRain, MapPin, MessageCircle, ChevronRight, TrendingUp, Shield } from 'lucide-react'

const features = [
  {
    icon: Droplets,
    title: 'Crop Water Recommendations',
    description: 'Get precise water requirement predictions for your crops based on weather, soil conditions, and growth stage.',
    color: 'sky',
  },
  {
    icon: CloudRain,
    title: 'Soil Moisture Forecasting',
    description: 'Real-time soil moisture analysis with 7-day forecasts to optimize irrigation schedules and prevent water stress.',
    color: 'emerald',
  },
  {
    icon: MapPin,
    title: 'Village Water Allocation',
    description: 'AI-powered water distribution system that ensures fair allocation across villages based on needs and availability.',
    color: 'amber',
  },
  {
    icon: MessageCircle,
    title: 'Smart Chatbot Assistant',
    description: '24/7 conversational assistant to answer farming queries, provide recommendations, and guide through the app.',
    color: 'violet',
  },
  {
    icon: TrendingUp,
    title: 'Analytics Dashboard',
    description: 'Comprehensive insights into water usage patterns, crop performance, and resource optimization opportunities.',
    color: 'rose',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with local gateway support for offline-capable operations in remote areas.',
    color: 'cyan',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Features() {
  return (
    <section id="features" className="section bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-sky-500/10 text-sky-400 text-sm font-medium mb-4"
          >
            Features
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Outfit'] mb-4">
            Everything You Need for{' '}
            <span className="gradient-text">Smart Farming</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to help farmers maximize yields while conserving water resources.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full card-hover border border-slate-700/50 hover:border-sky-500/30">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  feature.color === 'sky' ? 'bg-sky-500/20 text-sky-400' :
                  feature.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                  feature.color === 'amber' ? 'bg-amber-500/20 text-amber-400' :
                  feature.color === 'violet' ? 'bg-violet-500/20 text-violet-400' :
                  feature.color === 'rose' ? 'bg-rose-500/20 text-rose-400' :
                  'bg-cyan-500/20 text-cyan-400'
                }`}>
                  <feature.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold font-['Outfit'] mb-3 text-white group-hover:text-sky-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute bottom-6 right-6"
                >
                  <ChevronRight className="w-5 h-5 text-sky-400" />
                </motion.div>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                feature.color === 'sky' ? 'bg-sky-500/20' :
                feature.color === 'emerald' ? 'bg-emerald-500/20' :
                feature.color === 'amber' ? 'bg-amber-500/20' :
                feature.color === 'violet' ? 'bg-violet-500/20' :
                feature.color === 'rose' ? 'bg-rose-500/20' :
                'bg-cyan-500/20'
              } blur-xl`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
