import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Download from './components/Download'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Download />
      <Footer />
    </div>
  )
}

export default App
