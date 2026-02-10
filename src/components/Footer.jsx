import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-6 border-t border-cinema-border">
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-cinema-text-muted text-xs tracking-wider">
            © {currentYear} Mahi Nigam
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
