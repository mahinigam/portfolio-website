import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, BarChart3, Globe, GitBranch, Briefcase } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'DATA SCIENCE & ML',
      icon: <BarChart3 className="text-retro-blue" size={24} />,
      skills: ['Python', 'Scikit-learn', 'TensorFlow', 'PyTorch']
    },
    {
      title: 'PROGRAMMING',
      icon: <Code className="text-retro-green-dim" size={24} />,
      skills: ['Python', 'JavaScript', 'Java', 'R', 'Scala',]
    },
    {
      title: 'BIG DATA & CLOUD',
      icon: <Globe className="text-retro-pink" size={24} />,
      skills: ['AWS', 'Spark', 'Hadoop',]
    },
    {
      title: 'DATA ENGINEERING',
      icon: <Database className="text-retro-yellow" size={24} />,
      skills: ['MySQL', 'PostgreSQL', 'NoSQL']
    },
    {
      title: 'ANALYTICS & BI',
      icon: <BarChart3 className="text-retro-blue" size={24} />,
      skills: ['Power BI', 'Tableau', 'AWS QuickSight', 'Excel']
    },
    {
      title: 'DATA PROCESSING',
      icon: <GitBranch className="text-retro-pink" size={24} />,
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
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green-dim text-glow-soft mb-4 sprite">
              &gt; POWER_UPS.EXE
            </h2>
            <p className="text-sm font-pixel text-retro-blue mb-6 sprite">
              My Technical Arsenal
            </p>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="retro-card pixel-corners sprite"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="font-pixel text-sm text-retro-green-soft text-glow-subtle">
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
                        boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="skill-badge pixel-corners text-center sprite"
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
