import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, BarChart3 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Customer Purchase Analysis',
      description: 'A comprehensive data science project implementing a complete data pipeline for customer purchase behavior analysis. Features MySQL data ingestion, Python preprocessing with feature engineering, exploratory data analysis with visualizations, and regression modeling using Linear Regression, Random Forest, and Gradient Boosting. Includes a Power BI dashboard for business intelligence and data-driven insights.',
      tags: ['Python', 'MySQL', 'Jupyter Notebook', 'Pandas', 'Scikit-learn', 'Power BI', 'Matplotlib', 'Seaborn'],
      github: 'https://github.com/mahinigam/customer_purchase_analysis',
      demo: '#',
      icon: <BarChart3 className="text-retro-blue" size={20} />,
      status: 'COMPLETED'
    },
    {
      title: 'AutoNote',
      description: 'A professional Flask web application that transforms documents into structured notes using Google Gemini AI. Features multi-format support (PDF, DOCX, TXT), interactive chatbot for document Q&A, smart formatting with tables and lists, multiple export options, and modern glassmorphic UI. Includes cloud-ready deployment optimized for Render with comprehensive fallback systems.',
      tags: ['Python', 'Flask', 'Google Gemini API', 'HTML/CSS', 'JavaScript'],
      github: 'https://github.com/mahinigam/autonote',
      demo: 'https://autonote-br91.onrender.com',
      icon: <Code className="text-retro-green-dim" size={20} />,
      status: 'COMPLETED'
    },
    {
      title: 'Modern URL Shortener',
      description: 'A sleek, production-ready URL shortener built with React 19 and TypeScript featuring beautiful glassmorphism design. Supports batch processing of up to 5 URLs, custom shortcodes, validity control, click analytics with geolocation tracking, and comprehensive statistics dashboard. Includes real-time validation, responsive design, and robust error handling with Material-UI components.',
      tags: ['React 19', 'TypeScript', 'Material-UI', 'Vite', 'React Router'],
      github: 'https://github.com/mahinigam/url-shortener',
      demo: 'https://url-shortener-rho-one.vercel.app',
      icon: <Code className="text-retro-pink" size={20} />,
      status: 'COMPLETED'
    },
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
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green-dim text-glow-soft mb-4 sprite">
              &gt; PROJECTS.DIR
            </h2>
            <p className="text-sm font-pixel text-retro-blue mb-6 sprite">
              A collection of my work and experiments
            </p>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                  <h3 className="font-pixel text-sm text-retro-green-soft text-glow-subtle">
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
                    className="flex items-center gap-2 text-retro-green-dim hover:text-retro-cyan transition-colors duration-200"
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
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
