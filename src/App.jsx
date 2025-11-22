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
    <div className="min-h-screen relative glass-theme glass-backdrop font-glass">
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
