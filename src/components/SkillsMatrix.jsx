import React from 'react'
import { motion } from 'framer-motion'
import { skillMatrix } from '../data/projectsData'

export default function SkillsMatrix() {
  return (
    <section id="architecture" className="px-5 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.28em] text-zinc-600">
            ARCHITECTURE_MATRIX // SKILL_INDEX
          </p>
          <h2 className="text-3xl font-medium tracking-normal text-terminal-text md:text-5xl">
            Built as functional domains, not badge inventory.
          </h2>
        </div>

        <div className="border-y border-terminal-hairline">
          {skillMatrix.map((row, index) => (
            <motion.div
              key={row.domain}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: index * 0.1, duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
              className="grid gap-5 border-b border-terminal-hairline py-7 last:border-b-0 md:grid-cols-[0.4fr_0.8fr_2fr] md:items-baseline"
            >
              <div className="font-mono text-[11px] tracking-[0.24em] text-zinc-600">{row.number}</div>
              <div className="font-mono text-[12px] font-semibold tracking-[0.22em] text-terminal-text">
                / {row.domain}
              </div>
              <div className="text-lg leading-8 text-zinc-400">
                {row.items.join(' · ')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
