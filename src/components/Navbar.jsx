import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const navItems = [
  { name: 'ARCH', href: '#architecture' },
  { name: 'WORK', href: '#work' },
  { name: 'OUT', href: '#outro' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href) => {
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className={`fixed left-0 top-0 z-30 w-full border-b px-5 py-4 terminal-transition md:px-10 ${
        scrolled ? 'border-terminal-hairline bg-terminal-bg' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection('#hero')}
          className="font-mono text-[11px] font-semibold tracking-[0.28em] text-terminal-text terminal-transition hover:text-white"
        >
          MN//SYS
        </button>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToSection(item.href)}
              className="font-mono text-[10px] tracking-[0.24em] text-zinc-500 terminal-transition hover:text-terminal-text"
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
          className="text-zinc-500 terminal-transition hover:text-terminal-text md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 pt-5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => scrollToSection(item.href)}
                  className="border-t border-terminal-hairline py-4 text-left font-mono text-[11px] tracking-[0.24em] text-zinc-400"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
