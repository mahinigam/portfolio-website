import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92svh] px-5 pt-32 md:px-10 md:pt-44">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-5xl"
        >


          <h1 className="text-balance text-6xl font-semibold leading-[0.9] tracking-normal text-terminal-text md:text-8xl lg:text-9xl">
            <span className="block font-xenon text-base font-medium leading-none text-zinc-500 md:text-xl">
              [hi, i'm mahi nigam]
            </span>
            <span className="mt-6 block">mahi nigam</span>
          </h1>

          <p className="mt-10 max-w-3xl text-base font-light leading-8 text-zinc-400 md:text-xl md:leading-9">
            I build deep learning pipelines, high-throughput workflows, and codebase architectures where the interface feels like an instrument: precise, quiet, and engineered to reveal signal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="grid max-w-4xl grid-cols-2 gap-px border-y border-terminal-hairline bg-terminal-hairline font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 md:grid-cols-4"
        >
          {['ML PIPELINES', 'GRAPH SYSTEMS', 'EVENT FLOWS', 'INTERFACE TOOLS'].map((item) => (
            <div key={item} className="bg-terminal-bg px-4 py-5">
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
