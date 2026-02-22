import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Download from './components/Download'
import Stats from './components/Stats'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Download />
      <Footer />
    </div>
  )
}

export default App
