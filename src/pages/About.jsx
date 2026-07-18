import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="journal" className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <header className="mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] tracking-[0.15em] text-outline uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#e9c400]"></span>
            Cognitive Framework
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-[60px] lg:text-[72px] font-headline font-bold tracking-tighter text-on-surface mb-8 leading-tight"
          >
            How I Think About<br className="hidden md:block" /> Hard Problems
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[700px] text-[18px] md:text-[20px] text-white/65 leading-[1.7] font-light mb-12"
          >
            I don't separate disciplines — I use them to triangulate. Data Science tells me what is happening. Applied ML tells me what will happen. Full-stack engineering lets me ship the answer. Game Theory tells me why it matters — because real systems involve agents with incentives, not just rows in a dataset.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-[700px] h-px bg-white/10 mb-16"
          ></motion.div>

          {/* Technical Obsessions Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl items-stretch"
          >
            <div className="p-8 md:p-10 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-surface-container-low/40 to-surface-container-lowest glass-refraction border border-outline-variant/10 border-l-[3px] border-l-primary hover:border-outline-variant/30 hover:border-l-primary transition-all duration-700 group shadow-lg hover:shadow-[0_20px_50px_rgba(233,196,0,0.05)] h-full flex flex-col justify-start">
              <h3 className="text-primary font-label tracking-[0.2em] uppercase text-[11px] mb-4">
                End-To-End Systems
              </h3>
              <p className="text-[16px] text-white/75 leading-relaxed font-light">
                Most people hand off at the model. I don't. I care about the entire chain — from raw data to deployed product — because insight that never ships is just a notebook. I build full-stack because context changes what you build, and I want to hold all of it.
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-2xl md:rounded-[2rem] bg-gradient-to-br from-surface-container-low/40 to-surface-container-lowest glass-refraction border border-outline-variant/10 border-l-[3px] border-l-secondary hover:border-outline-variant/30 hover:border-l-secondary transition-all duration-700 group shadow-lg hover:shadow-[0_20px_50px_rgba(171,201,238,0.05)] h-full flex flex-col justify-start">
              <h3 className="text-secondary font-label tracking-[0.2em] uppercase text-[11px] mb-4">
                Applied Game Theory
              </h3>
              <p className="text-[16px] text-white/75 leading-relaxed font-light">
                Incentives are architecture. Whether it's ad auction design, adversarial ML, or how competitors price in real time — I study systems where the agents push back. The math of decision-making under conflict is where data science gets genuinely interesting.
              </p>
            </div>
          </motion.div>
        </header>
      </div>
    </section>
  )
}

export default About
