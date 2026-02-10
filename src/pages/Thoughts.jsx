import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Signal = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section id="signal" className="py-32 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {/* Section label */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="cinema-label">Signal</span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="cinema-heading text-3xl sm:text-4xl md:text-5xl mb-6"
                    >
                        Writing & Reflections
                    </motion.h2>

                    <motion.div variants={itemVariants} className="cinema-divider mb-16" />

                    {/* Featured quote */}
                    <motion.div
                        variants={itemVariants}
                        className="relative py-12"
                    >
                        {/* Decorative accent line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cinema-accent/40 to-transparent" />

                        <blockquote className="pl-8 md:pl-12">
                            <p className="text-cinema-text text-2xl sm:text-3xl md:text-4xl font-display font-medium leading-tight tracking-tight">
                                "Most problems are unclear before they are difficult."
                            </p>
                        </blockquote>
                    </motion.div>

                    {/* Blog description + link */}
                    <motion.div variants={itemVariants} className="mt-12">
                        <p className="cinema-body text-lg mb-8">
                            Essays exploring technology, philosophy, and the human experience —
                            from my blog <span className="text-cinema-warm italic">Remembrance</span>.
                        </p>

                        <motion.a
                            href="https://mahinigam.blogspot.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center gap-2 text-cinema-accent hover:text-cinema-accent-light transition-colors duration-300 text-sm font-medium tracking-wide"
                        >
                            <span>Read on Remembrance</span>
                            <ArrowUpRight size={16} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Signal
