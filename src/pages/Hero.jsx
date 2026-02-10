import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
    const scrollToThinking = () => {
        const element = document.querySelector('#thinking')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="cinema-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
                >
                    MAHI NIGAM
                </motion.h1>

                {/* Evocative line */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-cinema-text-secondary text-lg sm:text-xl md:text-2xl font-light tracking-wide animate-breathe"
                >
                    I study patterns until they explain themselves.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={scrollToThinking}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="scroll-indicator"
                >
                    <span>Scroll</span>
                    <ChevronDown size={16} />
                </motion.button>
            </motion.div>
        </section>
    )
}

export default Hero
