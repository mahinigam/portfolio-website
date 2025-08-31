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
                  <span className="text-retro-green-dim text-xs font-pixel ml-2 text-glow-soft sprite">TERMINAL</span>
                </div>
                <div className="bg-retro-card p-4 font-pixel text-xs border border-retro-green">
                  <div className="text-retro-green-dim mb-2 text-glow-soft">$ whoami</div>
                  <div className="text-retro-blue mb-4">
                    user: mahi_nigam<br />
                    status: student<br />
                    location: india<br />
                    university: galgotias_university<br />
                    focus: data_science & machine_learning
                  </div>
                  
                  <div className="text-retro-green-dim mb-2 text-glow-soft">$ cat expertise.txt</div>
                  <div className="text-retro-pink mb-4">
                    • Data Science & Machine Learning<br />
                    • Big Data Processing & Analytics<br />
                    • Cloud Computing & AWS<br />
                    • Data Visualization & BI<br />
                    • Statistical Analysis & Modeling
                  </div>
                  
                  <div className="text-retro-green-dim mb-2 text-glow-soft">$ echo $MISSION</div>
                  <div className="text-retro-blue">
                    "Passionate About Turning Data into Impact"
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
                  I'm a student at Galgotias University with expertise in machine learning 
                  and big data processing. A charming blend of technical skills and philosophical curiosity, 
                  I enjoy good coffee, cracking jokes, and deep conversations about life.
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
                  Currently developing advanced ML models, data pipelines, and analytics solutions 
                  using Python, AWS, and modern big data technologies like Spark and Hadoop.
                </p>
              </div>

              <div className="retro-card pixel-corners sprite">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="text-retro-pink" size={20} />
                  <h3 className="font-pixel text-sm text-retro-green-soft text-glow-subtle">WHEN NOT CODING</h3>
                </div>
                <p className="text-xs text-retro-blue">
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
