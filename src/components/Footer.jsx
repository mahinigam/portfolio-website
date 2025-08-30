import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-retro-black border-t border-retro-green py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* ASCII Art Logo */}
          <div className="font-mono text-retro-green text-xs mb-8 opacity-60 text-glow sprite">
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
              <Code size={12} className="text-retro-green" />
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
                  className="text-xs font-pixel px-2 py-1 bg-retro-black border border-retro-pink text-retro-pink hover:bg-retro-pink hover:text-retro-black transition-all duration-200 cursor-pointer sprite"
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
            className="border-t border-retro-green pt-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-pixel">
              <div className="text-retro-green text-glow sprite">
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
            <div className="inline-block bg-retro-black border border-retro-green p-3 pixel-corners hover:border-retro-pink transition-colors duration-200 sprite">
              <div className="font-mono text-xs text-retro-blue">
                <div className="text-retro-green mb-1 text-glow">$ echo "Thanks for visiting!"</div>
                <div>Thanks for visiting!</div>
                <div className="text-retro-green mt-1 text-glow">$ exit</div>
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
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
