import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Terminal, BookOpen, Clock } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Blog = () => {
  const { theme } = useTheme()
  const isRetro = theme === 'retro'
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
            <h2 className={`text-2xl md:text-3xl mb-4 ${
              isRetro 
                ? 'font-pixel text-retro-green-dim text-glow-soft sprite' 
                : 'font-light text-glass-text tracking-wide'
            }`}>
              {isRetro ? '> BLOG_TERMINAL.EXE' : 'Blog'}
            </h2>
            <p className={`text-sm mb-6 ${
              isRetro 
                ? 'font-pixel text-retro-cyan' 
                : 'font-light text-glass-text-secondary tracking-wide'
            }`}>
              Thoughts and insights from my coding journey
            </p>
            <div className={`w-32 h-0.5 mx-auto ${
              isRetro ? 'bg-retro-green' : 'bg-glass-accent'
            }`}></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Blog Information Interface */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className={isRetro ? "retro-card pixel-corners sticky top-24" : "glass-card p-6 sticky top-24"}>
                {isRetro ? (
                  <>
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-retro-pink"></div>
                      <div className="w-3 h-3 rounded-full bg-retro-yellow"></div>
                      <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                      <span className="text-xs ml-2 flex items-center gap-2 text-retro-green-dim font-pixel">
                        <Terminal size={14} />
                        BLOG_READER v2.0
                      </span>
                    </div>

                    {/* Terminal Content */}
                    <motion.div
                      variants={terminalVariants}
                      className="p-4 font-mono text-xs space-y-2 bg-retro-bg"
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
                      <h4 className="text-xs mb-3 font-pixel text-retro-green-soft">
                        QUICK ACCESS:
                      </h4>
                      <div className="space-y-2">
                        <motion.a
                          whileHover={{ x: 5 }}
                          href="https://mahinigam.blogspot.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 transition-colors duration-200 text-xs text-retro-cyan hover:text-retro-green"
                        >
                          <ExternalLink size={12} />
                          Visit Full Blog
                        </motion.a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Professional Blog Information Dashboard */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-glass-accent/10">
                        <BookOpen className="w-5 h-5 text-glass-accent" />
                      </div>
                      <div>
                        <h3 className="font-normal text-glass-text tracking-wide">Blog Overview</h3>
                        <p className="text-sm text-glass-text-secondary font-light">Writing & Development Insights</p>
                      </div>
                    </div>

                    {/* Author Section */}
                    <motion.div variants={terminalVariants} className="space-y-4">
                      <motion.div variants={lineVariants} className="border-l-2 border-glass-accent/30 pl-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-glass-accent"></div>
                          <span className="text-sm font-light text-glass-text-secondary tracking-wide">Author</span>
                        </div>
                        <p className="font-normal text-glass-text">Mahi Nigam</p>
                        <p className="text-sm text-glass-text-secondary font-light italic">Blogger & Developer</p>
                      </motion.div>

                      {/* Statistics Grid */}
                      <motion.div variants={lineVariants} className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 rounded-lg bg-glass-accent/5 border border-glass-accent/10">
                          <div className="text-lg font-normal text-glass-accent">
                            {isLoading ? '...' : error ? '0' : blogPosts.length}
                          </div>
                          <div className="text-xs text-glass-text-secondary font-light tracking-wide">Articles</div>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-glass-accent/5 border border-glass-accent/10">
                          <div className="text-lg font-normal text-glass-accent">
                            {isLoading ? '...' : error ? '0' : [...new Set(blogPosts.flatMap(post => post.tags))].length}
                          </div>
                          <div className="text-xs text-glass-text-secondary font-light tracking-wide">Topics</div>
                        </div>
                      </motion.div>

                      {/* Reading Time */}
                      <motion.div variants={lineVariants} className="flex items-center gap-3 p-3 rounded-lg bg-glass-accent/5 border border-glass-accent/10">
                        <Clock className="w-4 h-4 text-glass-accent" />
                        <div>
                          <p className="text-sm font-normal text-glass-text">
                            {isLoading ? 'Loading...' : error ? '0' : blogPosts.reduce((total, post) => total + parseInt(post.readTime), 0)} min
                          </p>
                          <p className="text-xs text-glass-text-secondary font-light">Total Reading Time</p>
                        </div>
                      </motion.div>

                      {/* Last Updated */}
                      <motion.div variants={lineVariants} className="flex items-center gap-3 p-3 rounded-lg bg-glass-accent/5 border border-glass-accent/10">
                        <Calendar className="w-4 h-4 text-glass-accent" />
                        <div>
                          <p className="text-sm font-normal text-glass-text">
                            {currentTime.toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric', 
                              year: 'numeric' 
                            })}
                          </p>
                          <p className="text-xs text-glass-text-secondary font-light">Last Updated</p>
                        </div>
                      </motion.div>

                      {/* Status Indicator */}
                      <motion.div variants={lineVariants} className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-glass-accent/5 to-glass-accent/10 border border-glass-accent/20">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                        <p className="text-sm font-light text-glass-text italic">
                          Ready to share knowledge & insights
                        </p>
                      </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <div className="mt-6">
                      <h4 className="text-xs mb-3 font-normal text-glass-text tracking-wide">
                        Quick Access
                      </h4>
                      <div className="space-y-2">
                        <motion.a
                          whileHover={{ x: 5 }}
                          href="https://mahinigam.blogspot.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 transition-colors duration-200 text-xs text-glass-text-secondary hover:text-glass-accent"
                        >
                          <ExternalLink size={12} />
                          Visit Full Blog
                        </motion.a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <motion.div variants={containerVariants} className="space-y-6">
                {isLoading ? (
                  <div className={isRetro ? "retro-card pixel-corners text-center" : "glass-card p-6 text-center"}>
                    <div className={`text-sm mb-4 ${
                      isRetro 
                        ? 'text-retro-yellow font-pixel' 
                        : 'text-glass-accent font-light tracking-wide'
                    }`}>
                      {isRetro ? '> LOADING_BLOG_POSTS.EXE' : 'Loading Blog Posts...'}
                    </div>
                    <div className={`text-xs ${
                      isRetro ? 'text-retro-cyan' : 'text-glass-text-secondary font-light'
                    }`}>
                      Fetching latest articles from the blogosphere...
                    </div>
                  </div>
                ) : error ? (
                  <div className={isRetro ? "retro-card pixel-corners text-center" : "glass-card p-6 text-center"}>
                    <div className={`text-sm mb-4 ${
                      isRetro 
                        ? 'text-retro-pink font-pixel' 
                        : 'text-gray-400 font-light tracking-wide'
                    }`}>
                      {isRetro ? '> CONNECTION_ERROR.LOG' : 'Connection Error'}
                    </div>
                    <div className={`text-xs mb-4 ${
                      isRetro ? 'text-retro-cyan' : 'text-glass-text-secondary font-light'
                    }`}>
                      {error}. Showing cached blog posts instead.
                    </div>
                  </div>
                ) : null}
                
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    className={isRetro ? "retro-card pixel-corners group" : "glass-card p-6 group"}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className={`text-sm mb-2 transition-colors duration-200 ${
                          isRetro 
                            ? 'font-pixel text-retro-green-soft group-hover:text-retro-cyan' 
                            : 'font-normal text-glass-text group-hover:text-glass-accent tracking-wide'
                        }`}>
                          {post.title}
                        </h3>
                        
                        <div className={`flex items-center gap-4 text-xs mb-3 ${
                          isRetro ? 'text-retro-pink' : 'text-glass-text-secondary font-light'
                        }`}>
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

                    <p className={`text-xs mb-4 leading-relaxed ${
                      isRetro ? 'text-retro-cyan' : 'text-glass-text-secondary font-light'
                    }`}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-1 border ${
                            isRetro 
                              ? 'font-pixel bg-retro-bg border-retro-purple text-retro-purple' 
                              : 'font-light tracking-wide bg-glass-accent/10 border-glass-accent text-glass-accent'
                          }`}
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
                      className={`inline-flex items-center gap-2 transition-colors duration-200 text-xs ${
                        isRetro 
                          ? 'text-retro-green-dim hover:text-retro-cyan font-pixel' 
                          : 'text-glass-text hover:text-glass-accent font-light tracking-wide'
                      }`}
                    >
                      {isRetro ? 'READ_MORE.TXT' : 'Read More'}
                      <ExternalLink size={12} />
                    </motion.a>
                  </motion.article>
                ))}
              </motion.div>

              {/* View All Posts CTA */}
              <motion.div variants={itemVariants} className="mt-12 text-center">
                <div className={isRetro ? "retro-card pixel-corners" : "glass-card p-6"}>
                  <h3 className={`text-sm mb-4 ${
                    isRetro 
                      ? 'font-pixel text-retro-green-soft' 
                      : 'font-normal text-glass-text tracking-wide'
                  }`}>
                    {isRetro ? '> EXPLORE_MORE.DIR' : 'Explore More'}
                  </h3>
                  <p className={`text-xs mb-6 ${
                    isRetro ? 'text-retro-cyan' : 'text-glass-text-secondary font-light'
                  }`}>
                    These are just a few of my latest posts. Visit my blog to explore 
                    more articles, tutorials, and insights from my learning journey.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://mahinigam.blogspot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isRetro ? "retro-button pixel-corners inline-flex items-center gap-2" : "glass-button inline-flex items-center gap-2"}
                  >
                    <BookOpen size={16} />
                    {isRetro ? 'VISIT FULL BLOG' : 'Visit Full Blog'}
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
