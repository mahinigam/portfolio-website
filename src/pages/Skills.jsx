import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, BarChart3, Globe, GitBranch, Briefcase } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Skills = () => {
  const { theme } = useTheme()
  const isRetro = theme === 'retro'
  const skillCategories = [
    {
      title: 'DATA SCIENCE & ML',
      icon: <BarChart3 className={isRetro ? "text-retro-blue" : "text-glass-accent"} size={24} />,
      skills: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'PROGRAMMING',
      icon: <Code className={isRetro ? "text-retro-green-dim" : "text-glass-accent-light"} size={24} />,
      skills: ['Python', 'JavaScript', 'Java', 'R', 'Scala',]
    },
    {
      title: 'BIG DATA & CLOUD',
      icon: <Globe className={isRetro ? "text-retro-pink" : "text-glass-accent-dark"} size={24} />,
      skills: ['AWS', 'Spark', 'Hadoop',]
    },
    {
      title: 'DATA ENGINEERING',
      icon: <Database className={isRetro ? "text-retro-yellow" : "text-glass-accent"} size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'NoSQL']
    },
    {
      title: 'ANALYTICS & BI',
      icon: <BarChart3 className={isRetro ? "text-retro-blue" : "text-glass-accent-light"} size={24} />,
      skills: ['Power BI', 'Tableau', 'AWS QuickSight', 'Excel']
    },
    {
      title: 'DATA PROCESSING',
      icon: <GitBranch className={isRetro ? "text-retro-pink" : "text-glass-accent-dark"} size={24} />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'NLTK']
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
            <h2 className={`text-2xl md:text-3xl mb-4 ${
              isRetro 
                ? 'font-pixel text-retro-green-dim text-glow-soft sprite' 
                : 'font-light text-glass-text tracking-wide'
            }`}>
              {isRetro ? '> POWER_UPS.EXE' : 'Skills'}
            </h2>
            <p className={`text-sm mb-6 ${
              isRetro 
                ? 'font-pixel text-retro-blue sprite' 
                : 'font-light text-glass-text-secondary tracking-wide'
            }`}>
              {isRetro ? 'My Technical Arsenal' : 'My Technical Arsenal'}
            </p>
            <div className={`w-32 h-0.5 mx-auto ${
              isRetro ? 'bg-retro-green' : 'bg-glass-accent'
            }`}></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className={isRetro ? "retro-card pixel-corners sprite" : "glass-card p-6"}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className={`text-sm ${
                    isRetro 
                      ? 'font-pixel text-retro-green-soft text-glow-subtle' 
                      : 'font-normal text-glass-text tracking-wide'
                  }`}>
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
                        boxShadow: isRetro 
                          ? '0 0 20px rgba(57, 255, 20, 0.3)' 
                          : '0 0 20px rgba(255, 255, 255, 0.2)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-center ${
                        isRetro 
                          ? 'skill-badge pixel-corners sprite' 
                          : 'glass-button-sm font-light tracking-wide'
                      }`}
                      style={{
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
