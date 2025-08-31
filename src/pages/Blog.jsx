import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Terminal, BookOpen, Clock } from 'lucide-react'

const Blog = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [blogPosts, setBlogPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Fetch blog posts from Blogspot RSS feed
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setIsLoading(true)
        // Using a CORS proxy to fetch RSS feed
        const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://mahinigam.blogspot.com/feeds/posts/default')
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts')
        }
        
        const data = await response.json()
        
        // Transform RSS data to our format
        const transformedPosts = data.items?.slice(0, 3).map(item => ({
          title: item.title,
          excerpt: item.description.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          date: new Date(item.pubDate).toISOString().split('T')[0],
          readTime: Math.ceil(item.description.replace(/<[^>]*>/g, '').split(' ').length / 200) + ' min read',
          tags: item.categories?.slice(0, 3) || ['Blog'],
          url: item.link
        })) || []
        
        setBlogPosts(transformedPosts)
      } catch (err) {
        console.error('Error fetching blog posts:', err)
        setError('Failed to load blog posts')
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
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const terminalVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="blog" className="py-20 px-4">
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
              &gt; BLOG_TERMINAL.EXE
            </h2>
            <p className="text-sm font-pixel text-retro-cyan mb-6">
              Thoughts and insights from my coding journey
            </p>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Terminal Interface */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="retro-card pixel-corners sticky top-24">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-retro-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                  <span className="text-retro-green-dim text-xs font-pixel ml-2 flex items-center gap-2">
                    <Terminal size={14} />
                    BLOG_READER v2.0
                  </span>
                </div>

                {/* Terminal Content */}
                <motion.div
                  variants={terminalVariants}
                  className="bg-retro-bg p-4 font-mono text-xs space-y-2"
                >
                  <motion.div variants={lineVariants} className="text-retro-green-dim">
                    $ whoami
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-cyan">
                    mahi@portfolio:~$ blogger & writer
                  </motion.div>
                  
                  <motion.div variants={lineVariants} className="text-retro-green-dim">
                    $ cat blog_stats.txt
                  </motion.div>
                  {isLoading ? (
                    <motion.div variants={lineVariants} className="text-retro-yellow">
                      Loading blog data...
                    </motion.div>
                  ) : error ? (
                    <motion.div variants={lineVariants} className="text-retro-pink">
                      Error: {error}
                    </motion.div>
                  ) : (
                    <>
                      <motion.div variants={lineVariants} className="text-retro-cyan">
                        Total Posts: {blogPosts.length}
                      </motion.div>
                      <motion.div variants={lineVariants} className="text-retro-cyan">
                        Categories: {[...new Set(blogPosts.flatMap(post => post.tags))].length}
                      </motion.div>
                      <motion.div variants={lineVariants} className="text-retro-cyan">
                        Est. Reading Time: {blogPosts.reduce((total, post) => total + parseInt(post.readTime), 0)} minutes
                      </motion.div>
                    </>
                  )}
                  
                  <motion.div variants={lineVariants} className="text-retro-green-dim">
                    $ date
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-cyan">
                    {currentTime.toLocaleString()}
                  </motion.div>
                  
                  <motion.div variants={lineVariants} className="text-retro-green-dim">
                    $ echo "Status"
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-pink">
                    Ready to share knowledge...
                  </motion.div>
                  
                  <motion.div variants={lineVariants} className="text-retro-green-dim">
                    $ █
                  </motion.div>
                </motion.div>

                {/* Quick Links */}
                <div className="mt-6">
                  <h4 className="font-pixel text-xs text-retro-green-soft mb-3">QUICK ACCESS:</h4>
                  <div className="space-y-2">
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="https://mahinigam.blogspot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-retro-cyan hover:text-retro-green transition-colors duration-200 text-xs"
                    >
                      <ExternalLink size={12} />
                      Visit Full Blog
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <motion.div variants={containerVariants} className="space-y-6">
                {isLoading ? (
                  <div className="retro-card pixel-corners text-center">
                    <div className="text-retro-yellow font-pixel text-sm mb-4">
                      &gt; LOADING_BLOG_POSTS.EXE
                    </div>
                    <div className="text-retro-cyan text-xs">
                      Fetching latest articles from the blogosphere...
                    </div>
                  </div>
                ) : error ? (
                  <div className="retro-card pixel-corners text-center">
                    <div className="text-retro-pink font-pixel text-sm mb-4">
                      &gt; CONNECTION_ERROR.LOG
                    </div>
                    <div className="text-retro-cyan text-xs mb-4">
                      {error}. Showing cached blog posts instead.
                    </div>
                  </div>
                ) : null}
                
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    className="retro-card pixel-corners group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-pixel text-sm text-retro-green-soft mb-2 group-hover:text-retro-cyan transition-colors duration-200">
                          {post.title}
                        </h3>
                        
                        <div className="flex items-center gap-4 text-xs text-retro-pink mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-retro-cyan mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-pixel px-2 py-1 bg-retro-bg border border-retro-purple text-retro-purple"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Read More Link */}
                    <motion.a
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-retro-green-dim hover:text-retro-cyan transition-colors duration-200 font-pixel text-xs"
                    >
                      READ_MORE.TXT
                      <ExternalLink size={12} />
                    </motion.a>
                  </motion.article>
                ))}
              </motion.div>

              {/* View All Posts CTA */}
              <motion.div variants={itemVariants} className="mt-12 text-center">
                <div className="retro-card pixel-corners">
                  <h3 className="font-pixel text-sm text-retro-green-soft mb-4">
                    &gt; EXPLORE_MORE.DIR
                  </h3>
                  <p className="text-xs text-retro-cyan mb-6">
                    These are just a few of my latest posts. Visit my blog to explore 
                    more articles, tutorials, and insights from my learning journey.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://mahinigam.blogspot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-button pixel-corners inline-flex items-center gap-2"
                  >
                    <BookOpen size={16} />
                    VISIT FULL BLOG
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
