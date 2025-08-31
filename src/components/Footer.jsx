import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee, Gamepad2 } from 'lucide-react'
import SnakeGame from './SnakeGame'
import { useTheme } from '../hooks/useTheme'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [showSnakeGame, setShowSnakeGame] = useState(false)
  const { theme } = useTheme()
  const isRetro = theme === 'retro'

  return (
    <footer className={`py-12 px-4 ${
      isRetro ? 'bg-retro-bg border-t border-retro-green' : 'glass-nav border-t border-glass-border'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* ASCII Art Logo - Only show in retro theme */}
          {isRetro && (
            <div className="font-pixel text-retro-green-dim text-xs mb-8 opacity-60 text-glow-soft sprite">
              <pre className="whitespace-pre-wrap">
{`    ╔═══════════════════════════════════╗
    ║        THANK YOU FOR VISITING     ║
    ║              MAHI.EXE             ║
    ╚═══════════════════════════════════╝`}
              </pre>
            </div>
          )}

          {/* Made with love section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={`flex items-center justify-center gap-2 text-xs mb-6 ${
              isRetro ? 'font-pixel text-retro-blue sprite' : 'font-light text-glass-text tracking-wide'
            }`}
          >
            <span>{isRetro ? 'CRAFTED WITH' : 'Crafted with'}</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={12} className={isRetro ? 'text-retro-pink' : 'text-red-500'} />
            </motion.div>
            <span>{isRetro ? 'AND' : 'and'}</span>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code size={12} className={isRetro ? 'text-retro-green-dim' : 'text-blue-400'} />
            </motion.div>
            <span>{isRetro ? 'POWERED BY' : 'powered by'}</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Coffee size={12} className={isRetro ? 'text-retro-yellow' : 'text-amber-400'} />
            </motion.div>
          </motion.div>

          {/* Copyright and Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className={`pt-6 ${
              isRetro ? 'border-t border-retro-green' : 'border-t border-glass-border'
            }`}
          >
            <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${
              isRetro ? 'font-pixel' : 'font-light tracking-wide'
            }`}>
              <div className={isRetro 
                ? 'text-retro-green-dim text-glow-soft font-pixel sprite' 
                : 'text-glass-text-secondary font-light'
              }>
                © {currentYear} MAHI NIGAM. ALL RIGHTS RESERVED.
              </div>
              
              <div className="flex gap-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#home"
                  className={isRetro 
                    ? 'text-retro-blue hover:text-retro-yellow transition-colors duration-200 sprite' 
                    : 'text-glass-text hover:text-glass-accent transition-colors duration-200 font-light tracking-wide'
                  }
                >
                  HOME
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/mahinigam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isRetro 
                    ? 'text-retro-blue hover:text-retro-yellow transition-colors duration-200 sprite' 
                    : 'text-glass-text hover:text-glass-accent transition-colors duration-200 font-light tracking-wide'
                  }
                >
                  GITHUB
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://mahinigam.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isRetro 
                    ? 'text-retro-blue hover:text-retro-yellow transition-colors duration-200 sprite' 
                    : 'text-glass-text hover:text-glass-accent transition-colors duration-200 font-light tracking-wide'
                  }
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
            <div className={`inline-block px-6 py-4 transition-colors duration-200 ${
              isRetro 
                ? 'retro-card border-2 border-retro-green hover:border-retro-pink sprite' 
                : 'glass-card hover:glass-card-hover'
            }`}>
              <div className={`text-xs text-center leading-relaxed ${
                isRetro ? 'font-pixel text-retro-blue' : 'font-light text-glass-text-secondary tracking-wide'
              }`}>
                {isRetro && (
                  <>
                    <div className="text-retro-green-dim mb-2 text-glow-soft">$ echo "Thanks for visiting!"</div>
                    <div className="mb-2">Thanks for visiting!</div>
                    <div className="text-retro-green-dim text-glow-soft">$ exit</div>
                  </>
                )}
                {!isRetro && (
                  <div className="text-glass-text font-light tracking-wide">Thanks for visiting!</div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Floating particles for decoration - Only in retro theme */}
          {isRetro && [...Array(3)].map((_, i) => (
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

          {/* Snake Game Easter Egg - Retro only */}
          {isRetro && (
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
                className={`group relative p-2 transition-all duration-200 ${
                  isRetro 
                    ? 'bg-retro-card border border-retro-green text-retro-green-dim hover:border-retro-pink hover:text-retro-pink pixel-corners sprite' 
                    : 'glass-button'
                }`}
                title="Play Snake Game"
              >
                <Gamepad2 size={16} />
                
                {/* Hover tooltip */}
                <div className={`absolute bottom-full right-0 mb-2 px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap ${
                  isRetro 
                    ? 'bg-retro-card border border-retro-green text-retro-green-dim font-pixel sprite' 
                    : 'glass-card text-glass-text font-medium'
                }`}>
                  Play Snake Game
                  {isRetro && (
                    <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-retro-green"></div>
                  )}
                </div>

                {/* Glow effect - Only in retro theme */}
                {isRetro && (
                  <div className="absolute inset-0 bg-retro-green opacity-0 group-hover:opacity-20 transition-opacity duration-200 pixel-corners"></div>
                )}
              </motion.button>
            </motion.div>
          )}
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
