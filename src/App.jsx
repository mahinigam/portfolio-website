import React from 'react'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './pages/Hero'
import About from './pages/About'
import NeuralMap from './components/NeuralMap'
import Signal from './pages/Thoughts'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-cinema-bg text-cinema-text font-body relative">
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Ambient background */}
      <div className="cinema-ambient" />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <NeuralMap />
          <Signal />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
