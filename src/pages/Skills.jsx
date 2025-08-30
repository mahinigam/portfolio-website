import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, BarChart3, Globe, GitBranch, Briefcase } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'DATA SCIENCE',
      icon: <BarChart3 className="text-retro-cyan" size={24} />,
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau']
    },
    {
      title: 'PROGRAMMING',
      icon: <Code className="text-retro-green" size={24} />,
      skills: ['Python', 'JavaScript', 'SQL', 'HTML/CSS', 'C++', 'Java']
    },
    {
      title: 'WEB DEVELOPMENT',
      icon: <Globe className="text-retro-pink" size={24} />,
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Framer Motion']
    },
    {
      title: 'DATABASES',
      icon: <Database className="text-retro-purple" size={24} />,
      skills: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis']
    },
    {
      title: 'TOOLS & PLATFORMS',
      icon: <GitBranch className="text-retro-yellow" size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Docker', 'Linux']
    },
    {
      title: 'PRODUCTIVITY',
      icon: <Briefcase className="text-retro-cyan" size={24} />,
      skills: ['Google Workspace', 'Excel', 'PowerBI', 'Figma', 'Notion', 'Slack']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green text-glow mb-4">
              &gt; POWER_UPS.EXE
            </h2>
            <p className="text-sm font-pixel text-retro-cyan mb-6">
              My Technical Arsenal
            </p>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="retro-card pixel-corners"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="font-pixel text-sm text-retro-green">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="skill-badge pixel-corners text-center"
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Level indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-pixel text-retro-cyan">LVL:</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: (index * 0.1) + (i * 0.05) }}
                        className={`w-2 h-2 ${
                          i < 3 + (index % 3) ? 'bg-retro-green' : 'bg-retro-card'
                        } border border-retro-green`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-xl font-pixel text-retro-green text-center mb-8">
              &gt; LEARNING_JOURNEY.LOG
            </h3>
            
            <div className="max-w-3xl mx-auto">
              <div className="retro-card pixel-corners">
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex gap-4">
                    <span className="text-retro-green">[2024]</span>
                    <span className="text-retro-cyan">
                      Started Data Science journey with Python & Machine Learning
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-retro-green">[2024]</span>
                    <span className="text-retro-cyan">
                      Mastered data visualization with Matplotlib, Seaborn & Tableau
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-retro-green">[2024]</span>
                    <span className="text-retro-cyan">
                      Built multiple web applications using React & Node.js
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-retro-green">[2024]</span>
                    <span className="text-retro-cyan">
                      Currently exploring Advanced ML algorithms & Deep Learning
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-retro-pink">[NEXT]</span>
                    <span className="text-retro-pink">
                      Planning to dive into Cloud Computing & DevOps...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Fun Stats */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="retro-card pixel-corners max-w-2xl mx-auto">
              <h4 className="font-pixel text-sm text-retro-green mb-4">
                &gt; FUN_STATS.JSON
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <div className="text-retro-cyan font-pixel mb-1">LINES OF CODE</div>
                  <div className="text-retro-green">50,000+</div>
                </div>
                <div>
                  <div className="text-retro-cyan font-pixel mb-1">DATASETS ANALYZED</div>
                  <div className="text-retro-green">25+</div>
                </div>
                <div>
                  <div className="text-retro-cyan font-pixel mb-1">HOURS CODING</div>
                  <div className="text-retro-green">1,000+</div>
                </div>
                <div>
                  <div className="text-retro-cyan font-pixel mb-1">BUGS FIXED</div>
                  <div className="text-retro-green">∞</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
