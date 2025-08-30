import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-retro-dark relative scanlines">
      {/* Retro background effects */}
      <div className="fixed inset-0 bg-retro-grid bg-grid opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-retro-stars bg-stars opacity-30 pointer-events-none"></div>
      
      {/* Scanline effect */}
      <motion.div
        className="fixed w-full h-1 bg-gradient-to-r from-transparent via-retro-green to-transparent opacity-20 z-10 pointer-events-none"
        animate={{
          y: ['0vh', '100vh']
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Main content */}
      <div className="relative z-20">
        <Navbar />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
