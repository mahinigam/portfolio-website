import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  
  const isRetro = theme === 'retro'

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'BLOG', href: '#blog' },
    { name: 'RESUME', href: '#resume' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isRetro 
          ? 'bg-retro-bg/90 backdrop-blur-sm border-b border-retro-green' 
          : 'glass-nav'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Theme Toggle Button - Far Left */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`flex items-center space-x-2 ${
              isRetro 
                ? 'theme-toggle text-white' // Glass style in retro mode
                : 'text-retro-blue hover:text-retro-pink font-pixel text-xs sprite bg-retro-bg/50 backdrop-blur-sm border border-retro-blue hover:border-retro-pink px-3 py-2 rounded transition-all duration-300' // Retro style in glass mode
            }`}
            title={`Switch to ${isRetro ? 'Glass' : 'Retro'} theme`}
          >
            <span className={isRetro ? 'text-xs' : 'hidden sm:inline'}>
              {isRetro ? 'Glass' : 'RETRO'}
            </span>
          </motion.button>

          {/* Logo - Center */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`font-pixel cursor-pointer ${
              isRetro 
                ? 'text-retro-green-dim text-glow-soft sprite text-sm' 
                : 'text-white glass-text-glow text-xl'
            }`}
            onClick={() => scrollToSection('#home')}
          >
            {isRetro ? '<MAHI.EXE>' : 'MAHI'}
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`flex items-center ${isRetro ? 'space-x-4' : 'space-x-2'}`}>
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={isRetro ? 'nav-link font-pixel sprite' : 'glass-nav-link'}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={isRetro 
                ? 'text-retro-green-dim hover:text-retro-pink transition-colors duration-200 sprite' 
                : 'text-white hover:text-glass-accent-light transition-colors duration-200'
              }
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden ${
          isRetro 
            ? 'bg-retro-card border-t border-retro-green' 
            : 'glass-card border-t border-glass-border'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.href)}
              className={`block px-3 py-2 w-full text-left ${
                isRetro 
                  ? 'nav-link font-pixel sprite' 
                  : 'glass-nav-link'
              }`}
            >
              {isRetro ? `> ${item.name}` : item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navbar
