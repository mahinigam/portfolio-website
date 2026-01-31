import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar } from 'lucide-react'

const Thoughts = () => {
    const [blogPosts, setBlogPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    // Fetch blog posts from Blogspot RSS feed
    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                setIsLoading(true)
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://mahinigam.blogspot.com/feeds/posts/default')

                if (!response.ok) throw new Error('Failed to fetch')

                const data = await response.json()

                const transformedPosts = data.items?.slice(0, 4).map(item => ({
                    title: item.title,
                    excerpt: item.description.replace(/<[^>]*>/g, '').substring(0, 180) + '...',
                    date: new Date(item.pubDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    }),
                    url: item.link
                })) || []

                setBlogPosts(transformedPosts)
            } catch (err) {
                console.error('Error fetching blog posts:', err)
                setBlogPosts([])
            } finally {
                setIsLoading(false)
            }
        }

        fetchBlogPosts()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    }

    return (
        <section id="thoughts" className="py-32 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {/* Section header */}
                    <motion.div variants={itemVariants} className="mb-4">
                        <span className="cinema-label">Thoughts</span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="cinema-heading text-3xl sm:text-4xl md:text-5xl mb-6"
                    >
                        Writing & Reflections
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="cinema-body text-lg mb-6 max-w-2xl"
                    >
                        Essays exploring technology, philosophy, and the human experience.
                        These are thoughts from my blog "Remembrance."
                    </motion.p>

                    <motion.div variants={itemVariants} className="cinema-divider mb-16" />

                    {/* Blog posts */}
                    {isLoading ? (
                        <motion.div
                            variants={itemVariants}
                            className="text-cinema-text-muted text-center py-12"
                        >
                            Loading thoughts...
                        </motion.div>
                    ) : blogPosts.length === 0 ? (
                        <motion.div
                            variants={itemVariants}
                            className="text-cinema-text-muted text-center py-12"
                        >
                            No posts available at the moment.
                        </motion.div>
                    ) : (
                        <div className="space-y-8">
                            {blogPosts.map((post, index) => (
                                <motion.article
                                    key={post.title}
                                    variants={itemVariants}
                                    className="group"
                                >
                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-6 -mx-6 rounded-lg hover:bg-cinema-surface/50 transition-all duration-500"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                                            {/* Date */}
                                            <div className="flex items-center gap-2 text-cinema-text-muted text-sm shrink-0">
                                                <Calendar size={14} />
                                                <span>{post.date}</span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1">
                                                <h3 className="text-xl text-cinema-text font-light mb-3 group-hover:text-cinema-text transition-colors duration-300 flex items-start gap-2">
                                                    <span>{post.title}</span>
                                                    <ArrowUpRight
                                                        size={18}
                                                        className="opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 shrink-0 text-cinema-text-secondary"
                                                    />
                                                </h3>
                                                <p className="cinema-body text-sm line-clamp-2">
                                                    {post.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    </a>

                                    {index < blogPosts.length - 1 && (
                                        <div className="border-t border-cinema-border mt-8" />
                                    )}
                                </motion.article>
                            ))}
                        </div>
                    )}

                    {/* View all link */}
                    <motion.div variants={itemVariants} className="mt-16 text-center">
                        <motion.a
                            href="https://mahinigam.blogspot.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="cinema-button-ghost inline-flex items-center gap-2"
                        >
                            <span>Read All Posts</span>
                            <ArrowUpRight size={16} />
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Thoughts
