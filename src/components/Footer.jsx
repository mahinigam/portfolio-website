import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee, Gamepad2 } from 'lucide-react'
import SnakeGame from './SnakeGame'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showSnakeGame, setShowSnakeGame] = useState(false)

  return (
    <footer className="bg-retro-bg border-t border-retro-green py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* ASCII Art Logo */}
          <div className="font-pixel text-retro-green-dim text-xs mb-8 opacity-60 text-glow-soft sprite">
            <pre className="whitespace-pre-wrap">
{`    ╔═══════════════════════════════════╗
    ║        THANK YOU FOR VISITING     ║
    ║              MAHI.EXE             ║
    ╚═══════════════════════════════════╝`}
            </pre>
          </div>

          {/* Made with love section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-xs font-pixel text-retro-blue mb-6 sprite"
          >
            <span>CRAFTED WITH</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={12} className="text-retro-pink" />
            </motion.div>
            <span>AND</span>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code size={12} className="text-retro-green-dim" />
            </motion.div>
            <span>POWERED BY</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Coffee size={12} className="text-retro-yellow" />
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xs font-pixel text-retro-blue mb-2 sprite">
              BUILT WITH:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['REACT', 'TAILWINDCSS', 'FRAMER MOTION', 'LUCIDE ICONS', 'VITE'].map((tech) => (
                <span
                  key={tech}
                  className="retro-button pixel-corners sprite text-xs font-pixel"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Copyright and Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="border-t border-retro-green pt-6 bg-retro-card pixel-corners"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-pixel">
              <div className="text-retro-green-dim text-glow-soft font-pixel sprite">
                © {currentYear} MAHI NIGAM. ALL RIGHTS RESERVED.
              </div>
              
              <div className="flex gap-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#home"
                  className="text-retro-blue hover:text-retro-yellow transition-colors duration-200 sprite"
                >
                  HOME
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/mahinigam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-blue hover:text-retro-yellow transition-colors duration-200 sprite"
                >
                  GITHUB
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://mahinigam.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-blue hover:text-retro-yellow transition-colors duration-200 sprite"
                >
                  BLOG
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Terminal-style signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="inline-block bg-retro-card border-2 border-retro-green p-3 pixel-corners hover:border-retro-pink transition-colors duration-200 sprite">
              <div className="font-pixel text-xs text-retro-blue">
                <div className="text-retro-green-dim mb-1 text-glow-soft">$ echo "Thanks for visiting!"</div>
                <div>Thanks for visiting!</div>
                <div className="text-retro-green-dim mt-1 text-glow-soft">$ exit</div>
              </div>
            </div>
          </motion.div>

          {/* Floating particles for decoration */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-retro-green rounded-full opacity-30"
              style={{
                left: `${20 + i * 30}%`,
                bottom: `${10 + i * 5}px`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.7,
              }}
            />
          ))}

          {/* Snake Game Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute bottom-4 right-4"
          >
            <motion.button
              onClick={() => setShowSnakeGame(true)}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative p-2 bg-retro-card border border-retro-green text-retro-green-dim hover:border-retro-pink hover:text-retro-pink transition-all duration-200 pixel-corners sprite"
              title="Play Snake? 🐍"
            >
              <Gamepad2 size={16} />
              
              {/* Hover tooltip */}
              <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-retro-card border border-retro-green text-retro-green-dim text-xs font-pixel opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap sprite">
                Play Snake? 🐍
                <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-retro-green"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-retro-green opacity-0 group-hover:opacity-20 transition-opacity duration-200 pixel-corners"></div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Snake Game Modal */}
      <SnakeGame 
        isOpen={showSnakeGame} 
        onClose={() => setShowSnakeGame(false)} 
      />
    </footer>
  )
}

export default Footer
