import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Sales Dashboard',
      description: 'Interactive dashboard analyzing sales patterns, customer behavior, and revenue trends using Python and Tableau.',
      tags: ['Python', 'Pandas', 'Tableau', 'Data Analysis'],
      github: 'https://github.com/mahinigam',
      demo: '#',
      icon: <BarChart3 className="text-retro-blue" size={20} />,
      status: 'COMPLETED'
    },
    {
      title: 'Movie Recommendation System',
      description: 'ML-powered recommendation engine using collaborative filtering and content-based algorithms.',
      tags: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
      github: 'https://github.com/mahinigam',
      demo: '#',
      icon: <Code className="text-retro-green" size={20} />,
      status: 'COMPLETED'
    },
    {
      title: 'Stock Price Predictor',
      description: 'Time series forecasting model predicting stock prices using LSTM neural networks.',
      tags: ['Python', 'TensorFlow', 'Keras', 'NumPy'],
      github: 'https://github.com/mahinigam',
      demo: '#',
      icon: <BarChart3 className="text-retro-pink" size={20} />,
      status: 'IN PROGRESS'
    },
    {
      title: 'Portfolio Website',
      description: 'Retro-themed personal portfolio built with React, TailwindCSS, and Framer Motion.',
      tags: ['React', 'TailwindCSS', 'Framer Motion', 'JavaScript'],
      github: 'https://github.com/mahinigam',
      demo: '#',
      icon: <Code className="text-retro-yellow" size={20} />,
      status: 'COMPLETED'
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'K-means clustering analysis to segment customers based on purchasing behavior and demographics.',
      tags: ['Python', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/mahinigam',
      demo: '#',
      icon: <Database className="text-retro-pink" size={20} />,
      status: 'COMPLETED'
    },
    {
      title: 'Weather Data Visualizer',
      description: 'Interactive web app displaying weather patterns and climate trends with beautiful visualizations.',
      tags: ['React', 'D3.js', 'API Integration', 'Chart.js'],
      github: 'https://github.com/mahinigam',
      demo: '#',
      icon: <BarChart3 className="text-retro-blue" size={20} />,
      status: 'COMPLETED'
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

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green text-glow mb-4 sprite">
              &gt; PROJECTS.DIR
            </h2>
            <p className="text-sm font-pixel text-retro-blue mb-6 sprite">
              A collection of my work and experiments
            </p>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="retro-card pixel-corners group relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 text-xs font-pixel border ${
                  project.status === 'COMPLETED' 
                    ? 'border-retro-green text-retro-green' 
                    : 'border-retro-yellow text-retro-yellow'
                }`}>
                  {project.status}
                </div>

                {/* Project Icon */}
                <div className="flex items-center gap-3 mb-4">
                  {project.icon}
                  <h3 className="font-pixel text-sm text-retro-green">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs text-retro-cyan mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-pixel px-2 py-1 bg-retro-bg border border-retro-pink text-retro-pink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-retro-green hover:text-retro-cyan transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-xs font-pixel">CODE</span>
                  </motion.a>
                  
                  {project.demo !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-retro-pink hover:text-retro-cyan transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-xs font-pixel">DEMO</span>
                    </motion.a>
                  )}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-retro-green/5 to-retro-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="retro-card pixel-corners max-w-2xl mx-auto">
              <h3 className="font-pixel text-sm text-retro-green mb-4">
                &gt; MORE_PROJECTS.AVAILABLE
              </h3>
              <p className="text-xs text-retro-cyan mb-6">
                Want to see more? Check out my GitHub for additional projects, 
                contributions, and code experiments.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/mahinigam"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button pixel-corners inline-flex items-center gap-2"
              >
                <Github size={16} />
                VIEW ALL REPOSITORIES
              </motion.a>
            </div>
          </motion.div>

          {/* Project Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'TOTAL PROJECTS', value: '15+' },
                { label: 'LANGUAGES USED', value: '8' },
                { label: 'FRAMEWORKS', value: '12+' },
                { label: 'COMMITS THIS YEAR', value: '500+' }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="retro-card pixel-corners text-center"
                >
                  <div className="text-lg font-pixel text-retro-green mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-pixel text-retro-cyan">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
