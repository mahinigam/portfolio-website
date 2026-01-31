import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/mahinigam', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/mahinigam', label: 'LinkedIn' },
    { icon: <Mail size={18} />, href: 'mailto:mahi.nigam.000@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-16 px-6 border-t border-cinema-border">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-cinema-bg via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8"
        >
          {/* Closing statement */}
          <p className="text-cinema-text-muted text-sm tracking-wide">
            Building with intention. Always learning.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="text-cinema-text-muted hover:text-cinema-text transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-cinema-text-muted text-xs tracking-wider">
            © {currentYear} Mahi Nigam
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
