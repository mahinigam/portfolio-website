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
              I'm a data scientist and student at Galgotias University with a deep curiosity for understanding
              how systems work—whether they're technical, social, or somewhere in between. I believe the
              best solutions come from asking better questions.
            </p>

            <p className="cinema-body text-lg">
              My work spans machine learning, big data processing, and cloud computing. But beyond the
              tools, I'm drawn to the thinking behind them: the patterns, the edge cases, the decisions
              that shape outcomes. I approach problems with rigor but stay open to unexpected answers.
            </p>

            <p className="cinema-body text-lg">
              When I'm not immersed in data, you'll find me writing philosophical reflections on my blog
              "Remembrance", exploring ideas about human nature, or contributing to open source projects
              that push the boundaries of what's possible.
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
