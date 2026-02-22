import { motion } from 'framer-motion'
import { Download as DownloadIcon, Smartphone, Tablet, Monitor, Star, Play } from 'lucide-react'

const platforms = [
  { icon: Smartphone, label: 'Mobile', description: 'iOS & Android', available: true },
  { icon: Tablet, label: 'Tablet', description: 'iPad & Android', available: true },
  { icon: Monitor, label: 'Web', description: 'Browser Access', available: false },
]

const reviews = [
  { name: 'Ramesh Kumar', location: 'Madhya Pradesh', text: 'JalSakhi helped me increase my wheat yield by 40%. The AI recommendations are spot on!', rating: 5 },
  { name: 'Sunita Devi', location: 'Maharashtra', text: 'The water management feature saved us thousands of liters this season. Highly recommended!', rating: 5 },
  { name: 'Praveen Singh', location: 'Uttar Pradesh', text: 'As a village admin, managing water distribution has become so much easier with this app.', rating: 5 },
]

export default function DownloadSection() {
  return (
    <section id="download" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 dark:bg-green-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 mb-4">
            <DownloadIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-green-700 dark:text-green-400 text-sm font-medium">Download Now</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold font-['Outfit'] text-slate-800 dark:text-white mb-4">
            Get JalSakhi <span className="gradient-text">Everywhere</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Available on all your devices. Start your smart farming journey today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-lg text-center group hover:shadow-xl transition-all"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${platform.available ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-slate-200 dark:bg-slate-700'} shadow-lg group-hover:scale-110 transition-transform`}>
                <platform.icon className={`w-10 h-10 ${platform.available ? 'text-white' : 'text-slate-400'}`} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{platform.label}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{platform.description}</p>
              {platform.available ? (
                <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-medium">
                  <Play className="w-3 h-3" /> Available
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 rounded-full text-sm font-medium">
                  Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Farming?</h3>
            <p className="text-green-100 mb-8 max-w-xl mx-auto">Download JalSakhi now and join 50,000+ farmers already benefiting from AI-powered agriculture.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
                <DownloadIcon className="w-5 h-5" />
                Download for Android
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-semibold border border-white/30 hover:bg-white/30 transition-all">
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-green-100">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 rating from 10,000+ reviews</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-8">What Farmers Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-700"
              >
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 dark:text-white text-sm">{review.name}</div>
                    <div className="text-slate-500 dark:text-slate-400 text-xs">{review.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
