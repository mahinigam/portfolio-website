import React from 'react'
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
    <div className="min-h-screen bg-retro-black relative scanlines crt-effect">
      {/* Retro background effects */}
      <div className="fixed inset-0 bg-retro-grid bg-grid opacity-20 pointer-events-none"></div>
      <div className="fixed inset-0 bg-retro-stars bg-stars opacity-30 pointer-events-none"></div>
      
      {/* Enhanced scanline effect */}
      <div
        className="fixed w-full h-1 bg-gradient-to-r from-transparent via-retro-green to-transparent opacity-30 z-10 pointer-events-none animate-bounce-retro"
        style={{
          animation: 'moveDown 3s linear infinite'
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
