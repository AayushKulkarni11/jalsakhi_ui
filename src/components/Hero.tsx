import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sprout, ArrowDown, Cpu, Wifi, Database, Leaf, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'

const appImages = [
  '/images/WhatsApp Image 2026-02-22 at 12.13.31.jpeg',
  '/images/WhatsApp Image 2026-02-22 at 12.13.32 (1).jpeg',
  '/images/WhatsApp Image 2026-02-22 at 12.13.32 (2).jpeg',
  '/images/WhatsApp Image 2026-02-22 at 12.13.32.jpeg',
  '/images/WhatsApp Image 2026-02-22 at 12.13.33.jpeg',
]

export default function Hero() {
  const [particles, setParticles] = useState<{ id: number; left: number; delay: number; size: number }[]>([])
  const [currentImage, setCurrentImage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 8 + 4,
    }))
    setParticles(newParticles)
  }, [])

  // Auto-swipe functionality
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentImage((prev) => (prev + 1) % appImages.length)
    }, 3000) // Swipe every 3 seconds
    return () => clearInterval(interval)
  }, [isPaused])

  const nextImage = () => {
    setDirection(1)
    setCurrentImage((prev) => (prev + 1) % appImages.length)
  }

  const prevImage = () => {
    setDirection(-1)
    setCurrentImage((prev) => (prev - 1 + appImages.length) % appImages.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage()
      } else {
        prevImage()
      }
    }
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0.8, 0], y: [-100, 100] }}
            transition={{ duration: 8, delay: particle.delay, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full"
            style={{
              left: `${particle.left}%`,
              width: particle.size,
              height: particle.size,
              background: particle.id % 3 === 0 ? '#22C55E' : particle.id % 3 === 1 ? '#0EA5E9' : '#F59E0B',
            }}
          />
        ))}
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/4 -left-32 w-96 h-96 bg-green-200/50 dark:bg-green-500/20 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-200/50 dark:bg-blue-500/20 rounded-full blur-3xl" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/30 dark:bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 md:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 mb-6">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
                <Cpu className="w-4 h-4 text-green-600 dark:text-green-400" />
              </motion.div>
              <span className="text-green-700 dark:text-green-400 text-sm font-medium">AI-Powered Farm Assistant</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Outfit'] leading-tight mb-6 text-slate-800 dark:text-white">
              Smart Farming with <span className="gradient-text">AI Power</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
              JalSakhi is your intelligent farming companion that provides crop recommendations, soil analysis, and village-level water allocation using advanced ML technology.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('#download')} className="btn-primary inline-flex items-center justify-center gap-2">
                Download App <ArrowDown className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => scrollToSection('#features')} className="btn-secondary inline-flex items-center justify-center gap-2">
                Learn More
              </motion.button>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              {[{ icon: Wifi, label: 'IoT Connected' }, { icon: Database, label: 'Real-time Data' }, { icon: Cpu, label: 'ML Powered' }].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/60 dark:bg-slate-800/60 rounded-lg border border-green-100 dark:border-slate-700 shadow-sm">
                  <feature.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">{feature.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center lg:justify-end">
            <div className="relative">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative w-72 md:w-80 lg:w-96">
                <div className="bg-white dark:bg-slate-800 rounded-[3rem] p-4 shadow-2xl shadow-green-200/50 dark:shadow-green-900/30 border border-green-100 dark:border-slate-700">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-full w-32 h-7 mx-auto mb-4 flex items-center justify-center">
                    <div className="w-20 h-2 bg-slate-200 dark:bg-slate-600 rounded-full" />
                  </div>
                  <div 
                    className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-[2.5rem] overflow-hidden aspect-[9/19] relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    {/* App Images Carousel */}
                    <div className="w-full h-full relative">
                      <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.img
                          key={currentImage}
                          src={appImages[currentImage]}
                          alt="JalSakhi App"
                          custom={direction}
                          variants={variants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            x: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                          }}
                          className="absolute inset-0 w-full h-full object-cover"
                          drag="x"
                          dragConstraints={{ left: 0, right: 0 }}
                          dragElastic={1}
                          onDragEnd={(e, { offset, velocity }) => {
                            const swipe = Math.abs(offset.x) * velocity.x
                            if (swipe < -10000) {
                              nextImage()
                            } else if (swipe > 10000) {
                              prevImage()
                            }
                          }}
                        />
                      </AnimatePresence>
                      
                      {/* Navigation Arrows */}
                      <button 
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-800/80 flex items-center justify-center shadow-md opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-slate-800/80 flex items-center justify-center shadow-md opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                      </button>
                    </div>

                    {/* Page Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {appImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentImage ? 1 : -1)
                            setCurrentImage(index)
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImage 
                              ? 'bg-green-500 w-6' 
                              : 'bg-slate-300 dark:bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-green-200/30 dark:bg-green-900/30 blur-3xl -z-10 rounded-full" />
              </motion.div>
              <motion.div animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="absolute -left-8 top-1/4 glass dark:glass-dark rounded-2xl p-4 border border-green-200 dark:border-green-800 shadow-lg">
                <Sprout className="w-8 h-8 text-green-600 dark:text-green-400" />
              </motion.div>
              <motion.div animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="absolute -right-4 bottom-1/4 glass dark:glass-dark rounded-2xl p-4 border border-blue-200 dark:border-blue-800 shadow-lg">
                <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} onClick={() => scrollToSection('#features')} className="cursor-pointer">
          <ChevronDown className="w-8 h-8 text-slate-400 dark:text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
