import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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

  const pillars = [
    {
      title: 'Patterns',
      description: 'I look for recurring behavior before writing a single line of logic. Patterns tell the truth faster than opinions do. Once visible, they guide everything else.',
    },
    {
      title: 'Systems',
      description: 'I build things that keep working long after deployment. Good systems reduce friction quietly and make complexity feel natural. The best ones are almost invisible.',
    },
    {
      title: 'Clarity',
      description: "Data becomes powerful only when someone can understand it in seconds. I design outputs — dashboards, models, tools — that explain themselves without instruction. Insight should feel obvious in hindsight.",
    },
    {
      title: 'Craft',
      description: 'I care about how something is built as much as what it does. Clean structure, thoughtful decisions, and deliberate iteration create work that lasts. Speed matters, but precision stays.',
    },
  ]

  return (
    <section id="thinking" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="cinema-label">Thinking</span>
          </motion.div>

          {/* Section title */}
          <motion.h2
            variants={itemVariants}
            className="cinema-heading text-3xl sm:text-4xl md:text-5xl mb-6"
          >
            What I Think About
          </motion.h2>

          {/* Divider */}
          <motion.div variants={itemVariants} className="cinema-divider mb-12" />

          {/* Lead-in paragraph */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="cinema-body text-lg max-w-3xl">
              I don't see technology as code alone; I see it as behavior made visible.
              Every dataset, system, or interface is a story about how people decide, move,
              and interact. My work begins with curiosity — not "what should I build," but
              "what is actually happening here?"
            </p>
          </motion.div>

          {/* Thematic pillars */}
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="pillar-card"
              >
                <h3 className="font-display text-xl font-medium text-cinema-text mb-3 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="cinema-body text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
