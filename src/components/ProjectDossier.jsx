import React, { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'

const ProjectDossier = ({ project, onClose }) => {
    // Close on ESC
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose()
    }, [onClose])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [handleKeyDown])

    // Close on backdrop click
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose()
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="dossier-overlay"
            onClick={handleBackdropClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="dossier-card"
            >
                {/* Close button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="absolute top-4 right-4 text-cinema-text-muted hover:text-cinema-text transition-colors duration-300 p-1"
                    aria-label="Close"
                >
                    <X size={20} />
                </motion.button>

                {/* Project indicator dot */}
                <div
                    className="w-3 h-3 rounded-full mb-6"
                    style={{
                        backgroundColor: project.color,
                        boxShadow: `0 0 20px ${project.color}40`,
                    }}
                />

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-cinema-text mb-4 tracking-tight pr-8">
                    {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-xs text-cinema-text-muted px-3 py-1 border border-cinema-border rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Narrative */}
                <p className="cinema-body text-base leading-relaxed mb-8">
                    {project.narrative}
                </p>

                {/* Links */}
                <div className="flex gap-6">
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        className="inline-flex items-center gap-2 text-cinema-accent hover:text-cinema-accent-light transition-colors duration-300 text-sm font-medium"
                    >
                        <Github size={16} />
                        <span>View Code</span>
                    </motion.a>

                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ x: 3 }}
                            className="inline-flex items-center gap-2 text-cinema-warm hover:text-cinema-text transition-colors duration-300 text-sm font-medium"
                        >
                            <ExternalLink size={16} />
                            <span>Live Demo</span>
                        </motion.a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ProjectDossier
