import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Droplets, ArrowRight, ChevronDown, Sprout, CloudRain, Users } from 'lucide-react'

export default function Hero() {
  const [droplets, setDroplets] = useState<{ id: number; left: number; delay: number; size: number }[]>([])

  useEffect(() => {
    const newDroplets = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 20 + 10,
    }))
    setDroplets(newDroplets)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
        {/* Water waves */}
        <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30">
          <svg
            className="absolute bottom-0 w-full animate-wave"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#0EA5E9"
              fillOpacity="0.3"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
        
        {/* Floating droplets */}
        {droplets.map((droplet) => (
          <div
            key={droplet.id}
            className="droplet"
            style={{
              left: `${droplet.left}%`,
              animationDelay: `${droplet.delay}s`,
              width: droplet.size,
              height: droplet.size,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 md:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 mb-6"
            >
              <Droplets className="w-4 h-4 text-sky-400" />
              <span className="text-sky-400 text-sm font-medium">Smart Water Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Outfit'] leading-tight mb-6"
            >
              Smart Water Management for{' '}
              <span className="gradient-text">Farmers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              JalSakhi is an end-to-end smart water management platform that delivers 
              crop water recommendations, soil moisture forecasts, and village-level 
              water allocation insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#download')}
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Download App
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#features')}
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-6"
            >
              {[
                { icon: Sprout, label: 'Crops', value: '50+' },
                { icon: CloudRain, label: 'Accuracy', value: '95%' },
                { icon: Users, label: 'Farmers', value: '10K+' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-6 h-6 text-sky-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 md:w-80 lg:w-96"
              >
                {/* Phone body */}
                <div className="bg-slate-800 rounded-[3rem] p-4 shadow-2xl shadow-sky-500/20 border border-slate-700">
                  {/* Notch */}
                  <div className="bg-slate-900 rounded-full w-32 h-7 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-20 h-2 bg-slate-800 rounded-full" />
                  </div>
                  
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-[2.5rem] overflow-hidden aspect-[9/19] relative">
                    {/* App Header */}
                    <div className="bg-sky-500/20 p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-2">
                        <Droplets className="w-6 h-6 text-sky-400" />
                        <span className="text-white font-bold">JalSakhi</span>
                      </div>
                    </div>
                    
                    {/* App Content Mockup */}
                    <div className="p-4 space-y-4">
                      <div className="bg-slate-800/50 rounded-2xl p-4">
                        <div className="text-sm text-slate-400 mb-1">Today's Water Need</div>
                        <div className="text-3xl font-bold text-sky-400">24.5 mm</div>
                        <div className="text-xs text-emerald-400">↓ 12% from yesterday</div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800/50 rounded-xl p-3">
                          <CloudRain className="w-5 h-5 text-sky-400 mb-1" />
                          <div className="text-xs text-slate-400">Soil Moisture</div>
                          <div className="text-sm font-semibold text-white">68%</div>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-3">
                          <Sprout className="w-5 h-5 text-emerald-400 mb-1" />
                          <div className="text-xs text-slate-400">Crop Status</div>
                          <div className="text-sm font-semibold text-white">Healthy</div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="absolute bottom-0 left-0 right-0 bg-slate-800/80 backdrop-blur-sm p-4 flex justify-around">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className={`w-6 h-6 rounded-full ${i === 1 ? 'bg-sky-500' : 'bg-slate-600'}`} />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-sky-500/20 blur-3xl -z-10 rounded-full" />
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -left-8 top-1/4 glass rounded-2xl p-4"
              >
                <Droplets className="w-8 h-8 text-sky-500" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4"
              >
                <Sprout className="w-8 h-8 text-emerald-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => scrollToSection('#features')}
          className="cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
