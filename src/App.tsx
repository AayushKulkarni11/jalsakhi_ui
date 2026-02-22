import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Download from './components/Download'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Features />
        <About />
        <Stats />
        <Download />
        <Footer />
      </div>
    </div>
  )
}

export default App
