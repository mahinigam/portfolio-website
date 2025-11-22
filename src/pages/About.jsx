import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Heart } from 'lucide-react'


const About = () => {
  const isRetro = false

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className={`text-2xl md:text-3xl mb-4 ${isRetro
                ? 'font-pixel text-retro-green-dim text-glow-soft sprite'
                : 'font-light text-glass-text tracking-wide'
              }`}>
              {isRetro ? '> ABOUT_ME.EXE' : 'About Me'}
            </h2>
            <div className={`w-32 h-0.5 mx-auto ${isRetro ? 'bg-retro-green' : 'bg-glass-accent'
              }`}></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Information */}
            <motion.div variants={itemVariants} className={
              isRetro ? 'retro-card pixel-corners' : 'glass-card p-6'
            }>
              {isRetro ? (
                <>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-retro-pink"></div>
                      <div className="w-3 h-3 rounded-full bg-retro-yellow"></div>
                      <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                      <span className="text-xs ml-2 text-retro-green-dim font-pixel text-glow-soft sprite">
                        TERMINAL
                      </span>
                    </div>
                    <div className="p-4 text-xs bg-retro-card font-pixel border border-retro-green">
                      <div className="mb-2 text-retro-green-dim text-glow-soft">
                        $ whoami
                      </div>
                      <div className="mb-4 text-retro-blue">
                        user: mahi_nigam<br />
                        status: student<br />
                        location: india<br />
                        university: galgotias_university<br />
                        focus: data_science & machine_learning
                      </div>

                      <div className="mb-2 text-retro-green-dim text-glow-soft">
                        $ cat expertise.txt
                      </div>
                      <div className="mb-4 text-retro-pink">
                        • Data Science & Machine Learning<br />
                        • Big Data Processing & Analytics<br />
                        • Cloud Computing & AWS<br />
                        • Data Visualization & BI<br />
                        • Statistical Analysis & Modeling
                      </div>

                      <div className="mb-2 text-retro-green-dim text-glow-soft">
                        $ echo $MISSION
                      </div>
                      <div className="text-retro-blue">
                        "Passionate About Turning Data into Impact"
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Professional Profile Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-glass-accent/10">
                      <User className="w-6 h-6 text-glass-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-normal text-glass-text tracking-wide">Mahi Nigam</h3>
                      <p className="text-sm text-glass-text-secondary font-light">Data Science Student & ML Enthusiast</p>
                    </div>
                  </div>

                  {/* Personal Information Grid */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-glass-accent/5 border border-glass-accent/10">
                      <MapPin className="w-4 h-4 text-glass-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-normal text-glass-text">India</p>
                        <p className="text-xs text-glass-text-secondary font-light">Current Location</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-glass-accent/5 border border-glass-accent/10">
                      <Calendar className="w-4 h-4 text-glass-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-normal text-glass-text">Galgotias University</p>
                        <p className="text-xs text-glass-text-secondary font-light">Academic Institution</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-glass-accent/5 border border-glass-accent/10">
                      <Heart className="w-4 h-4 text-glass-accent flex-shrink-0" />
                      <div>
                        <p className="text-sm font-normal text-glass-text">Data Science & Machine Learning</p>
                        <p className="text-xs text-glass-text-secondary font-light">Primary Focus</p>
                      </div>
                    </div>
                  </div>

                  {/* Expertise Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-normal text-glass-text tracking-wide mb-3">Core Expertise</h4>
                    <div className="space-y-2">
                      {[
                        'Data Science & Machine Learning',
                        'Big Data Processing & Analytics',
                        'Cloud Computing & AWS',
                        'Data Visualization & BI',
                        'Statistical Analysis & Modeling'
                      ].map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-glass-accent"></div>
                          <span className="text-sm font-light text-glass-text-secondary">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mission Statement */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-glass-accent/5 to-glass-accent/10 border border-glass-accent/20">
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-8 bg-glass-accent rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="text-sm font-normal text-glass-text mb-1">Mission</h4>
                        <p className="text-sm font-light text-glass-text-secondary italic">
                          "Passionate About Turning Data into Impact"
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>

            {/* Personal info cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className={isRetro ? 'retro-card pixel-corners sprite' : 'glass-card p-6'}>
                <div className="flex items-center gap-3 mb-3">
                  <User className={isRetro ? 'text-retro-blue' : 'text-glass-accent'} size={20} />
                  <h3 className={`text-sm ${isRetro
                      ? 'font-pixel text-retro-green-soft text-glow-subtle'
                      : 'font-normal text-glass-text tracking-wide'
                    }`}>
                    PROFILE
                  </h3>
                </div>
                <p className={`text-xs leading-relaxed ${isRetro ? 'text-retro-blue' : 'text-glass-text-secondary font-light'
                  }`}>
                  I'm a student at Galgotias University with expertise in machine learning
                  and big data processing. A charming blend of technical skills and philosophical curiosity,
                  I enjoy good coffee, cracking jokes, and deep conversations about life.
                </p>
              </div>

              <div className={isRetro ? 'retro-card pixel-corners sprite' : 'glass-card p-6'}>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className={isRetro ? 'text-retro-pink' : 'text-glass-accent-light'} size={20} />
                  <h3 className={`text-sm ${isRetro
                      ? 'font-pixel text-retro-green-soft text-glow-subtle'
                      : 'font-normal text-glass-text tracking-wide'
                    }`}>
                    LOCATION
                  </h3>
                </div>
                <p className={`text-xs ${isRetro ? 'text-retro-blue' : 'text-glass-text-secondary font-light'
                  }`}>
                  Based in India, open to remote opportunities worldwide
                </p>
              </div>

              <div className={isRetro ? 'retro-card pixel-corners sprite' : 'glass-card p-6'}>
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className={isRetro ? 'text-retro-yellow' : 'text-glass-accent-dark'} size={20} />
                  <h3 className={`text-sm ${isRetro
                      ? 'font-pixel text-retro-green-soft text-glow-subtle'
                      : 'font-normal text-glass-text tracking-wide'
                    }`}>
                    CURRENTLY
                  </h3>
                </div>
                <p className={`text-xs ${isRetro ? 'text-retro-blue' : 'text-glass-text-secondary font-light'
                  }`}>
                  Currently developing advanced ML models, data pipelines, and analytics solutions
                  using Python, AWS, and modern big data technologies like Spark and Hadoop.
                </p>
              </div>

              <div className={isRetro ? 'retro-card pixel-corners sprite' : 'glass-card p-6'}>
                <div className="flex items-center gap-3 mb-3">
                  <Heart className={isRetro ? 'text-retro-pink' : 'text-glass-accent-light'} size={20} />
                  <h3 className={`text-sm ${isRetro
                      ? 'font-pixel text-retro-green-soft text-glow-subtle'
                      : 'font-normal text-glass-text tracking-wide'
                    }`}>
                    WHEN NOT CODING
                  </h3>
                </div>
                <p className={`text-xs ${isRetro ? 'text-retro-blue' : 'text-glass-text-secondary font-light'
                  }`}>
                  You'll find me writing philosophical reflections on my blog "Remembrance",
                  exploring human nature and life's complexities, or experimenting with new ML algorithms
                  and contributing to open source projects.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
