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
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const expertise = [
    'Machine Learning & AI',
    'Data Science',
    'Big Data Engineering',
    'Cloud Computing (AWS)',
    'Analytics & BI',
  ]

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section label */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="cinema-label">About</span>
          </motion.div>

          {/* Section title */}
          <motion.h2
            variants={itemVariants}
            className="cinema-heading text-3xl sm:text-4xl md:text-5xl mb-6"
          >
            Building at the intersection of data and insight
          </motion.h2>

          {/* Divider */}
          <motion.div variants={itemVariants} className="cinema-divider mb-12" />

          {/* Narrative paragraphs */}
          <motion.div variants={itemVariants} className="space-y-6 mb-12">
            <p className="cinema-body text-lg">
              Mahi Nigam is a data scientist and systems thinker with a deep curiosity for understanding how complex
              systems behave—whether technical, social, or somewhere in between. His work is grounded in the belief
              that meaningful solutions begin with sharper questions.
            </p>

            <p className="cinema-body text-lg">
              His work spans machine learning, big data processing, and cloud infrastructure, but his real interest
              lies in the thinking behind the tools: patterns, edge cases, and the decisions that shape outcomes.
              He approaches problems with analytical rigor while remaining open to unexpected answers.
            </p>

            <p className="cinema-body text-lg">
              Outside of technical work, he writes philosophical reflections on his blog “Remembrance,” exploring
              themes of human nature, technology, and meaning. He is drawn to ideas that exist at the boundary of
              engineering and philosophy—where systems meet stories.
            </p>
          </motion.div>

          {/* Expertise tags */}
          <motion.div variants={itemVariants}>
            <h3 className="cinema-label mb-4">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {expertise.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="px-4 py-2 text-sm text-cinema-text-secondary border border-cinema-border rounded-full hover:border-cinema-accent/40 hover:text-cinema-text transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Philosophy block */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 border-l-2 border-cinema-accent bg-gradient-to-r from-cinema-accent/5 to-transparent"
          >
            <p className="text-cinema-text text-lg md:text-xl font-light italic leading-relaxed">
              "The goal isn't to be the smartest in the room. It's to build things that matter,
              learn from every failure, and leave systems better than I found them."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
