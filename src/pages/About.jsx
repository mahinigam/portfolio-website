import React from 'react'
import { motion } from 'framer-motion'
import { User, MapPin, Calendar, Heart } from 'lucide-react'

const About = () => {
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
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green-dim text-glow-soft mb-4 sprite">
              &gt; ABOUT_ME.EXE
            </h2>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Terminal-style info card */}
            <motion.div variants={itemVariants} className="retro-card pixel-corners">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-retro-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                  <span className="text-retro-green text-xs font-pixel ml-2 text-glow sprite">TERMINAL</span>
                </div>
                <div className="bg-retro-black p-4 font-mono text-xs border border-retro-green">
                  <div className="text-retro-green mb-2 text-glow">$ whoami</div>
                  <div className="text-retro-blue mb-4">
                    user: mahi_nigam<br />
                    status: aspiring_data_scientist<br />
                    location: india<br />
                    university: galgotias_university<br />
                    passion: data_science & web_development
                  </div>
                  
                  <div className="text-retro-green mb-2 text-glow">$ cat interests.txt</div>
                  <div className="text-retro-pink mb-4">
                    • Machine Learning & AI<br />
                    • Data Visualization<br />
                    • Web Development<br />
                    • Problem Solving<br />
                    • Continuous Learning
                  </div>
                  
                  <div className="text-retro-green mb-2 text-glow">$ echo $GOALS</div>
                  <div className="text-retro-blue">
                    "Transforming data into insights and ideas into reality"
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal info cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="retro-card pixel-corners sprite">
                <div className="flex items-center gap-3 mb-3">
                  <User className="text-retro-blue" size={20} />
                  <h3 className="font-pixel text-sm text-retro-green-soft text-glow-subtle">PROFILE</h3>
                </div>
                <p className="text-xs text-retro-blue leading-relaxed">
                  I'm a passionate student at Galgotias University with a deep interest in Data Science 
                  and Full-Stack Development. I love exploring data patterns, building predictive models, 
                  and creating intuitive web applications that solve real-world problems.
                </p>
              </div>

              <div className="retro-card pixel-corners sprite">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-retro-pink" size={20} />
                  <h3 className="font-pixel text-sm text-retro-green-soft text-glow-subtle">LOCATION</h3>
                </div>
                <p className="text-xs text-retro-blue">
                  Based in India, open to remote opportunities worldwide
                </p>
              </div>

              <div className="retro-card pixel-corners sprite">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="text-retro-yellow" size={20} />
                  <h3 className="font-pixel text-sm text-retro-green-soft text-glow-subtle">CURRENTLY</h3>
                </div>
                <p className="text-xs text-retro-blue">
                  Pursuing my degree while building projects and expanding my skillset in 
                  Machine Learning, Data Analysis, and Modern Web Technologies.
                </p>
              </div>

              <div className="retro-card pixel-corners sprite">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="text-retro-pink" size={20} />
                  <h3 className="font-pixel text-sm text-retro-green-soft text-glow-subtle">WHEN NOT CODING</h3>
                </div>
                <p className="text-xs text-retro-blue">
                  You'll find me reading tech blogs, exploring new datasets, playing retro games, 
                  or writing about my learning journey on my blog.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'PROJECTS', value: '15+' },
              { label: 'TECHNOLOGIES', value: '10+' },
              { label: 'BLOG POSTS', value: '8+' },
              { label: 'COFFEE CUPS', value: '∞' }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="retro-card pixel-corners text-center sprite"
              >
                <div className="text-lg md:text-xl font-pixel text-retro-green mb-2 text-glow">
                  {stat.value}
                </div>
                <div className="text-xs font-pixel text-retro-blue">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
