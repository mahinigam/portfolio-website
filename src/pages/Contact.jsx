import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageSquare, Send, MapPin, Phone } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { theme } = useTheme()
  const isRetro = theme === 'retro'
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
    
    // EmailJS configuration from environment variables
    const emailConfig = {
      serviceID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    }
    
    // Template parameters for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Mahi', // Your name
    }
    
    try {
      await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.publicKey
      )
      
      // Success
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully! Thanks for reaching out.')
    } catch (error) {
      console.error('EmailJS Error:', error)
      alert('Failed to send message. Please try again or contact me directly via email.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    {
      name: 'EMAIL',
      icon: <Mail size={20} />,
      href: 'mailto:mahi.nigam.000@gmail.com',
      color: 'text-retro-green-dim',
      description: 'mahi.nigam.000@gmail.com'
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
            {isRetro ? (
              <>
                <h2 className="text-2xl md:text-3xl font-pixel text-retro-green-dim text-glow-soft mb-4">
                  &gt; CONTACT.EXE
                </h2>
                <p className="text-sm font-pixel text-retro-cyan mb-6">
                  Let's connect and build something amazing together
                </p>
                <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
              </>
            ) : (
              <>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide text-glass-text mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg font-light text-glass-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
                  Let's connect and explore new opportunities together
                </p>
                <div className="w-32 h-0.5 bg-glass-accent mx-auto"></div>
              </>
            )}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="h-full">
              {isRetro ? (
                <div className="retro-card pixel-corners h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="text-retro-green-dim" size={24} />
                    <h3 className="font-pixel text-lg text-retro-green-dim">
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
                            className="w-4 h-4 border-2 border-retro-bg border-t-retro-green rounded-full"
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
              ) : (
                <div className="glass-card backdrop-filter backdrop-blur-xl border border-glass-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageSquare className="text-glass-accent" size={24} />
                    <h3 className="text-xl font-light tracking-wide text-glass-text">
                      Send a Message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-normal text-glass-text mb-2 tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass-input w-full"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-normal text-glass-text mb-2 tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass-input w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-normal text-glass-text mb-2 tracking-wide">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="glass-input w-full resize-none"
                        placeholder="Share your thoughts, ideas, or project details..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="glass-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-glass-text/30 border-t-glass-text rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6 h-full flex flex-col">
              {/* Social Links */}
              {isRetro ? (
                <div className="retro-card pixel-corners flex-1">
                  <h3 className="font-pixel text-lg text-retro-green-dim mb-6">
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
                          <div className="font-pixel text-xs text-retro-green-dim group-hover:text-retro-cyan transition-colors duration-200">
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
              ) : (
                <div className="glass-card backdrop-filter backdrop-blur-xl border border-glass-border p-8 flex-1">
                  <h3 className="text-xl font-light tracking-wide text-glass-text mb-6">
                    Connect With Me
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
                        className="flex items-center gap-4 p-4 bg-glass-card hover:bg-glass-card-hover border border-glass-border hover:border-glass-border-hover rounded-lg transition-all duration-300 group backdrop-filter backdrop-blur-sm"
                      >
                        <div className="text-glass-accent group-hover:text-glass-accent-light transition-colors duration-200">
                          {link.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-normal text-glass-text group-hover:text-glass-accent-light transition-colors duration-200 tracking-wide">
                            {link.name}
                          </div>
                          <div className="text-sm text-glass-text-secondary font-light">
                            {link.description}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            {isRetro ? (
              <div className="retro-card pixel-corners max-w-2xl mx-auto">
                <h3 className="font-pixel text-lg text-retro-green-dim mb-4 text-glow-soft">
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
                    href="mailto:mahi.nigam.000@gmail.com"
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
                    className="retro-button pixel-corners bg-retro-bg border-retro-cyan text-retro-cyan hover:bg-retro-cyan hover:text-retro-black"
                  >
                    <Linkedin size={16} className="mr-2" />
                    CONNECT ON LINKEDIN
                  </motion.a>
                </div>
              </div>
            ) : (
              <div className="glass-card backdrop-filter backdrop-blur-xl border border-glass-border p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-light tracking-wide text-glass-text mb-4">
                  Ready to Connect?
                </h3>
                <p className="text-glass-text-secondary mb-6 leading-relaxed font-light">
                  Whether you have a project in mind, want to collaborate, or just want to chat 
                  about data science and technology, I'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:mahi.nigam.000@gmail.com"
                    className="glass-button flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    Send Email
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com/in/mahinigam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button flex items-center justify-center gap-2"
                  >
                    <Linkedin size={16} />
                    Connect on LinkedIn
                  </motion.a>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
