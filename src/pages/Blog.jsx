import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ExternalLink, Terminal, BookOpen, Clock } from 'lucide-react'

const Blog = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Sample blog posts - in a real app, these would come from your Blogspot API
  const blogPosts = [
    {
      title: 'Getting Started with Data Science: A Beginner\'s Journey',
      excerpt: 'My personal experience diving into the world of data science, the challenges I faced, and the resources that helped me.',
      date: '2024-08-15',
      readTime: '5 min read',
      tags: ['Data Science', 'Beginners', 'Python'],
      url: 'https://mahinigam.blogspot.com/post1'
    },
    {
      title: 'Building Interactive Dashboards with Tableau',
      excerpt: 'A step-by-step guide to creating compelling data visualizations that tell a story.',
      date: '2024-08-08',
      readTime: '8 min read',
      tags: ['Tableau', 'Visualization', 'Tutorial'],
      url: 'https://mahinigam.blogspot.com/post2'
    },
    {
      title: 'Machine Learning Models: From Theory to Practice',
      excerpt: 'Understanding different ML algorithms and implementing them in real-world scenarios.',
      date: '2024-07-28',
      readTime: '12 min read',
      tags: ['Machine Learning', 'Python', 'Scikit-learn'],
      url: 'https://mahinigam.blogspot.com/post3'
    },
    {
      title: 'The Art of Data Cleaning: Tips and Tricks',
      excerpt: 'Essential techniques for preparing messy datasets for analysis and modeling.',
      date: '2024-07-20',
      readTime: '6 min read',
      tags: ['Data Cleaning', 'Pandas', 'Tips'],
      url: 'https://mahinigam.blogspot.com/post4'
    },
    {
      title: 'React Best Practices for Modern Web Development',
      excerpt: 'Key principles and patterns I\'ve learned while building scalable React applications.',
      date: '2024-07-12',
      readTime: '10 min read',
      tags: ['React', 'JavaScript', 'Best Practices'],
      url: 'https://mahinigam.blogspot.com/post5'
    },
    {
      title: 'SQL for Data Analysis: Advanced Techniques',
      excerpt: 'Beyond basic queries - window functions, CTEs, and performance optimization.',
      date: '2024-07-05',
      readTime: '15 min read',
      tags: ['SQL', 'Database', 'Analytics'],
      url: 'https://mahinigam.blogspot.com/post6'
    }
  ]

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
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green-dim text-glow-soft mb-4">
              &gt; BLOG_TERMINAL.EXE
            </h2>
            <p className="text-sm font-pixel text-retro-cyan mb-6">
              Thoughts, tutorials, and insights from my coding journey
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
                  <span className="text-retro-green text-xs font-pixel ml-2 flex items-center gap-2">
                    <Terminal size={14} />
                    BLOG_READER v2.0
                  </span>
                </div>

                {/* Terminal Content */}
                <motion.div
                  variants={terminalVariants}
                  className="bg-retro-dark p-4 font-mono text-xs space-y-2"
                >
                  <motion.div variants={lineVariants} className="text-retro-green">
                    $ whoami
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-cyan">
                    mahi@portfolio:~$ blogger & writer
                  </motion.div>
                  
                  <motion.div variants={lineVariants} className="text-retro-green">
                    $ cat blog_stats.txt
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-cyan">
                    Total Posts: {blogPosts.length}
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-cyan">
                    Categories: 6
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-cyan">
                    Est. Reading Time: 56 minutes
                  </motion.div>
                  
                  <motion.div variants={lineVariants} className="text-retro-green">
                    $ date
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-cyan">
                    {currentTime.toLocaleString()}
                  </motion.div>
                  
                  <motion.div variants={lineVariants} className="text-retro-green">
                    $ echo "Status"
                  </motion.div>
                  <motion.div variants={lineVariants} className="text-retro-pink">
                    Ready to share knowledge...
                  </motion.div>
                  
                  <motion.div variants={lineVariants} className="text-retro-green">
                    $ █
                  </motion.div>
                </motion.div>

                {/* Quick Links */}
                <div className="mt-6">
                  <h4 className="font-pixel text-xs text-retro-green mb-3">QUICK ACCESS:</h4>
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
                    <motion.a
                      whileHover={{ x: 5 }}
                      href="https://mahinigam.blogspot.com/feeds/posts/default"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-retro-cyan hover:text-retro-green transition-colors duration-200 text-xs"
                    >
                      <BookOpen size={12} />
                      RSS Feed
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <motion.div variants={containerVariants} className="space-y-6">
                {blogPosts.map((post) => (
                  <motion.article
                    key={post.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    className="retro-card pixel-corners group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-pixel text-sm text-retro-green mb-2 group-hover:text-retro-cyan transition-colors duration-200">
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
                      className="inline-flex items-center gap-2 text-retro-green hover:text-retro-cyan transition-colors duration-200 font-pixel text-xs"
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
                  <h3 className="font-pixel text-sm text-retro-green mb-4">
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
