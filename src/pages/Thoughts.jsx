import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const Signal = () => {
    return (
        <section id="signal" className="relative pt-32 pb-24 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
                    }}
                >
                    {/* Section label */}
                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        className="mb-4"
                    >
                        <span className="text-secondary font-label text-xs tracking-[0.3em] uppercase">Signal</span>
                    </motion.div>

                    <motion.h2
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface mb-6 leading-none"
                    >
                        Writing & Reflections
                    </motion.h2>

                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        className="w-full h-px bg-gradient-to-r from-primary/40 via-secondary/20 to-transparent mb-16" 
                    />

                    {/* Featured quote */}
                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        className="relative py-12"
                    >
                        {/* Decorative accent line — liquid conduit style */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

                        <blockquote className="pl-8 md:pl-12">
                            <p className="text-on-surface text-2xl sm:text-3xl md:text-4xl font-headline font-medium leading-tight tracking-tight">
                                "Most problems are unclear before they are difficult."
                            </p>
                        </blockquote>
                    </motion.div>

                    {/* Blog description + link */}
                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
                        className="mt-12"
                    >
                        <p className="text-on-surface-variant text-lg mb-8 leading-relaxed font-light">
                            Essays exploring technology, philosophy, and the human experience —
                            from my blog <span className="text-primary italic">Remembrance</span>.
                        </p>

                        <motion.a
                            href="https://mahinigam.blogspot.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-fixed transition-colors duration-300 text-sm font-headline font-bold tracking-wide uppercase"
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
