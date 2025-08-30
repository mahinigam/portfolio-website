import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Home = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  
  const text = "Hi, I'm Mahi Nigam"
  const tagline = "Aspiring Data Scientist & Full-Stack Developer"

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex])
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Main title with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-pixel text-retro-green text-glow mb-4">
            {currentText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 text-retro-yellow`}>
              _
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: text.length * 0.1 + 0.5, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm md:text-base lg:text-lg font-pixel text-retro-blue text-glow-blue mb-2">
            {tagline}
          </p>
          <p className="text-xs md:text-sm font-pixel text-retro-pink text-glow-pink">
            Student at Galgotias University
          </p>
        </motion.div>

        {/* ASCII Art decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: text.length * 0.1 + 1, duration: 0.8 }}
          className="mb-12 text-retro-blue font-mono text-xs md:text-sm opacity-80 text-glow-blue"
        >
          <pre className="whitespace-pre-wrap">
{`    ╔═══════════════════════════════════╗
    ║           LOADING...              ║
    ║  ████████████████████████████████ ║
    ║           100% COMPLETE           ║
    ╚═══════════════════════════════════╝`}
          </pre>
        </motion.div>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: text.length * 0.1 + 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="retro-button pixel-corners sprite"
          >
            EXPLORE PORTFOLIO
          </motion.button>
          
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="retro-button pixel-corners bg-retro-blue border-retro-pink text-retro-black hover:bg-retro-yellow hover:text-retro-black sprite"
          >
            GET IN TOUCH
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: text.length * 0.1 + 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToAbout}
            className="text-retro-green hover:text-retro-pink transition-colors duration-200 sprite"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-retro-blue rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}
    </section>
  )
}

export default Home
