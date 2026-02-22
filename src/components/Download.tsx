import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Mail, Send } from 'lucide-react'

export default function Download() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="download" className="section bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Download Info */}
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
              className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4"
            >
              Download Now
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Outfit'] mb-6">
              Get Started with{' '}
              <span className="gradient-text">JalSakhi</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Download the JalSakhi mobile app and start optimizing your water management 
              today. Available on Android with iOS coming soon.
            </p>

            {/* Download Options */}
            <div className="space-y-4">
              {/* Google Play Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/50 rounded-2xl p-4 w-full md:w-auto transition-all"
              >
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Get it on</div>
                  <div className="text-lg font-semibold text-white">Google Play</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 ml-auto" />
              </motion.button>

              {/* Coming Soon iOS */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 bg-slate-800/30 border border-slate-700/30 rounded-2xl p-4 w-full md:w-auto opacity-60"
              >
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Coming soon on</div>
                  <div className="text-lg font-semibold text-white">App Store</div>
                </div>
              </motion.div>
            </div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-4 glass rounded-2xl inline-flex items-center gap-4"
            >
              <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                {/* QR Code placeholder */}
                <div className="w-16 h-16 bg-slate-900 rounded-sm p-1">
                  <div className="grid grid-cols-4 gap-0.5">
                    {Array(16).fill(0).map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          [0, 1, 2, 3, 4, 5, 6, 10, 15].includes(i)
                            ? 'bg-slate-800'
                            : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-white">Scan to Download</div>
                <div className="text-sm text-slate-400">Open camera and scan</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-['Outfit'] text-white">Contact Us</h3>
                  <p className="text-sm text-slate-400">Get in touch for support or inquiries</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? 'bg-emerald-500 text-white'
                      : 'bg-sky-500 hover:bg-sky-400 text-white'
                  }`}
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
