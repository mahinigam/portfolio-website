import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageSquare, Send, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      // In a real app, you'd handle the form submission here
      alert('Message sent! Thanks for reaching out.')
    }, 2000)
  }

  const socialLinks = [
    {
      name: 'EMAIL',
      icon: <Mail size={20} />,
      href: 'mailto:mahi.nigam@example.com',
      color: 'text-retro-green',
      description: 'mahi.nigam@example.com'
    },
    {
      name: 'GITHUB',
      icon: <Github size={20} />,
      href: 'https://github.com/mahinigam',
      color: 'text-retro-cyan',
      description: '@mahinigam'
    },
    {
      name: 'LINKEDIN',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/mahinigam',
      color: 'text-retro-pink',
      description: '/in/mahinigam'
    },
    {
      name: 'BLOG',
      icon: <MessageSquare size={20} />,
      href: 'https://mahinigam.blogspot.com',
      color: 'text-retro-purple',
      description: 'mahinigam.blogspot.com'
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green text-glow mb-4">
              &gt; CONTACT.EXE
            </h2>
            <p className="text-sm font-pixel text-retro-cyan mb-6">
              Let's connect and build something amazing together
            </p>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="retro-card pixel-corners">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="text-retro-green" size={24} />
                  <h3 className="font-pixel text-lg text-retro-green">
                    SEND_MESSAGE.FORM
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-pixel text-xs text-retro-cyan mb-2">
                      NAME:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="retro-input w-full pixel-corners"
                      placeholder="Enter your name..."
                    />
                  </div>

                  <div>
                    <label className="block font-pixel text-xs text-retro-cyan mb-2">
                      EMAIL:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="retro-input w-full pixel-corners"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-pixel text-xs text-retro-cyan mb-2">
                      MESSAGE:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="retro-input w-full pixel-corners resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="retro-button pixel-corners w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-retro-dark border-t-retro-green rounded-full"
                        />
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        TRANSMIT_MESSAGE
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Social Links */}
              <div className="retro-card pixel-corners">
                <h3 className="font-pixel text-lg text-retro-green mb-6">
                  SOCIAL_NETWORKS.DIR
                </h3>
                
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-retro-bg border border-retro-green hover:border-retro-cyan transition-all duration-200 pixel-corners group"
                    >
                      <div className={`${link.color} group-hover:text-retro-cyan transition-colors duration-200`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-pixel text-xs text-retro-green group-hover:text-retro-cyan transition-colors duration-200">
                          {link.name}
                        </div>
                        <div className="text-xs text-retro-cyan">
                          {link.description}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="retro-card pixel-corners">
                <h3 className="font-pixel text-lg text-retro-green mb-6">
                  QUICK_INFO.TXT
                </h3>
                
                <div className="space-y-4 text-xs">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-retro-cyan" size={16} />
                    <div>
                      <div className="text-retro-green">LOCATION:</div>
                      <div className="text-retro-cyan">India (Open to remote work)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="text-retro-pink" size={16} />
                    <div>
                      <div className="text-retro-green">AVAILABILITY:</div>
                      <div className="text-retro-cyan">Available for opportunities</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MessageSquare className="text-retro-purple" size={16} />
                    <div>
                      <div className="text-retro-green">RESPONSE TIME:</div>
                      <div className="text-retro-cyan">Usually within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Status */}
              <div className="retro-card pixel-corners">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-retro-pink"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-yellow"></div>
                  <div className="w-3 h-3 rounded-full bg-retro-green"></div>
                  <span className="text-retro-green text-xs font-pixel ml-2">STATUS</span>
                </div>
                
                <div className="bg-retro-dark p-4 font-mono text-xs space-y-2">
                  <div className="text-retro-green">$ status --check</div>
                  <div className="text-retro-cyan">● ONLINE</div>
                  <div className="text-retro-cyan">● ACCEPTING NEW PROJECTS</div>
                  <div className="text-retro-cyan">● OPEN TO COLLABORATIONS</div>
                  <div className="text-retro-green">$ echo "Let's build something amazing!"</div>
                  <div className="text-retro-pink">Let's build something amazing!</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="retro-card pixel-corners max-w-2xl mx-auto">
              <h3 className="font-pixel text-lg text-retro-green mb-4">
                &gt; READY_TO_CONNECT.BAT
              </h3>
              <p className="text-sm text-retro-cyan mb-6">
                Whether you have a project in mind, want to collaborate, or just want to chat 
                about data science and technology, I'd love to hear from you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:mahi.nigam@example.com"
                  className="retro-button pixel-corners"
                >
                  <Mail size={16} className="mr-2" />
                  SEND EMAIL
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/mahinigam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button pixel-corners bg-retro-bg border-retro-cyan text-retro-cyan hover:bg-retro-cyan hover:text-retro-dark"
                >
                  <Linkedin size={16} className="mr-2" />
                  CONNECT ON LINKEDIN
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
