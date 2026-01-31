import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'

const Work = () => {
    const projects = [
        {
            title: 'Customer Purchase Analysis',
            problem: 'Understanding customer purchase behavior across multiple touchpoints to drive business decisions.',
            approach: 'Built a complete data pipeline with MySQL ingestion, Python preprocessing, feature engineering, and regression modeling using Random Forest and Gradient Boosting.',
            insight: 'Identified key purchase drivers and customer segments that led to targeted marketing strategies.',
            result: 'Power BI dashboard delivering actionable business intelligence.',
            tags: ['Python', 'MySQL', 'Scikit-learn', 'Power BI'],
            github: 'https://github.com/mahinigam/customer_purchase_analysis',
            demo: null,
        },
        {
            title: 'AutoNote',
            problem: 'Converting lengthy documents into structured, digestible notes is time-consuming and inconsistent.',
            approach: 'Developed a Flask application leveraging Google Gemini AI for intelligent document processing with multi-format support.',
            insight: 'Smart formatting with tables and lists, plus an interactive chatbot, dramatically improves knowledge retention.',
            result: 'Cloud-deployed tool with professional glass UI serving users globally.',
            tags: ['Python', 'Flask', 'Gemini API', 'JavaScript'],
            github: 'https://github.com/mahinigam/autonote',
            demo: 'https://autonote-br91.onrender.com',
        },
        {
            title: 'Modern URL Shortener',
            problem: 'Need for a production-ready URL shortener with batch processing and comprehensive analytics.',
            approach: 'Built with React 19 and TypeScript featuring glassmorphism design, custom shortcodes, and validity control.',
            insight: 'Click analytics with geolocation tracking provides valuable insights into link performance.',
            result: 'Full-featured shortener handling up to 5 URLs simultaneously with real-time validation.',
            tags: ['React 19', 'TypeScript', 'Material-UI', 'Vite'],
            github: 'https://github.com/mahinigam/url-shortener',
            demo: 'https://url-shortener-rho-one.vercel.app',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    {/* Section header */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="cinema-label">Work</span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="cinema-heading text-3xl sm:text-4xl md:text-5xl mb-6"
                    >
                        Selected Projects
                    </motion.h2>

                    <motion.div variants={itemVariants} className="cinema-divider mb-16" />

                    {/* Projects list */}
                    <div className="space-y-24">
                        {projects.map((project, index) => (
                            <motion.article
                                key={project.title}
                                variants={itemVariants}
                                className="group"
                            >
                                {/* Project number and title */}
                                <div className="flex items-start gap-6 mb-8">
                                    <span className="text-cinema-text-muted text-sm font-mono">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="cinema-heading text-2xl sm:text-3xl mb-4 group-hover:text-cinema-text transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-xs text-cinema-text-muted px-3 py-1 border border-cinema-border rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Case study grid */}
                                <div className="ml-0 sm:ml-12 grid md:grid-cols-2 gap-6 mb-8">
                                    {/* Problem */}
                                    <div className="cinema-panel p-6">
                                        <h4 className="cinema-label mb-3">Problem</h4>
                                        <p className="cinema-body text-sm">{project.problem}</p>
                                    </div>

                                    {/* Approach */}
                                    <div className="cinema-panel p-6">
                                        <h4 className="cinema-label mb-3">Approach</h4>
                                        <p className="cinema-body text-sm">{project.approach}</p>
                                    </div>

                                    {/* Insight */}
                                    <div className="cinema-panel p-6">
                                        <h4 className="cinema-label mb-3">Insight</h4>
                                        <p className="cinema-body text-sm">{project.insight}</p>
                                    </div>

                                    {/* Result */}
                                    <div className="cinema-panel p-6 border-l-2 border-l-cinema-accent">
                                        <h4 className="cinema-label mb-3">Result</h4>
                                        <p className="text-cinema-text text-sm font-light">{project.result}</p>
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="ml-0 sm:ml-12 flex gap-6">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        className="inline-flex items-center gap-2 text-cinema-text-secondary hover:text-cinema-text transition-colors duration-300 text-sm"
                                    >
                                        <Github size={16} />
                                        <span>View Code</span>
                                        <ArrowRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                    </motion.a>

                                    {project.demo && (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ x: 4 }}
                                            className="inline-flex items-center gap-2 text-cinema-text-secondary hover:text-cinema-text transition-colors duration-300 text-sm"
                                        >
                                            <ExternalLink size={16} />
                                            <span>Live Demo</span>
                                        </motion.a>
                                    )}
                                </div>

                                {/* Separator */}
                                {index < projects.length - 1 && (
                                    <div className="mt-20 border-t border-cinema-border" />
                                )}
                            </motion.article>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Work
