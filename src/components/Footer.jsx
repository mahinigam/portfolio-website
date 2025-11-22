import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee, Gamepad2 } from 'lucide-react'



const Footer = () => {
  const currentYear = new Date().getFullYear()

  const isRetro = false

  return (
    <footer className="py-12 px-4 glass-nav border-t border-glass-border">
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
            className={`flex items-center justify-center gap-2 text-xs mb-6 ${isRetro ? 'font-pixel text-retro-blue sprite' : 'font-light text-glass-text tracking-wide'
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
            className={`pt-6 ${isRetro ? 'border-t border-retro-green' : 'border-t border-glass-border'
              }`}
          >
            <div className={`flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${isRetro ? 'font-pixel' : 'font-light tracking-wide'
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
            <div className={`inline-block px-6 py-4 transition-colors duration-200 ${isRetro
              ? 'retro-card border-2 border-retro-green hover:border-retro-pink sprite'
              : 'glass-card hover:glass-card-hover'
              }`}>
              <div className={`text-xs text-center leading-relaxed ${isRetro ? 'font-pixel text-retro-blue' : 'font-light text-glass-text-secondary tracking-wide'
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
        </motion.div>
      </div>

    </footer>
  )
}

export default Footer
