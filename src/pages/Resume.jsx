import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Eye, ExternalLink } from 'lucide-react'

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const resumeFileName = 'resume-mahi-nigam.pdf';
  const [fileInfo, setFileInfo] = React.useState({ size: null, format: null });

  React.useEffect(() => {
    // Fetch the file and get its size
    fetch(`/${resumeFileName}`)
      .then(res => {
        if (!res.ok) throw new Error('Resume file not found');
        return res.blob();
      })
      .then(blob => {
        const sizeKB = (blob.size / 1024).toFixed(1);
        const format = resumeFileName.split('.').pop().toUpperCase();
        setFileInfo({ size: sizeKB, format });
      })
      .catch(() => {
        setFileInfo({ size: 'N/A', format: 'N/A' });
      });
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/${resumeFileName}`;
    link.download = 'Mahi_Nigam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = () => {
    window.open(`/${resumeFileName}`, '_blank');
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green-dim text-glow-soft mb-4">
              &gt; RESUME.PDF
            </h2>
            <p className="text-sm font-pixel text-retro-cyan mb-6">
              Download or preview my latest resume
            </p>
            <div className="w-32 h-0.5 bg-retro-green mx-auto"></div>
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div variants={itemVariants} className="retro-card pixel-corners mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Resume Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-retro-cyan" size={24} />
                  <h3 className="font-pixel text-lg text-retro-green-dim text-glow-soft">
                    MY RESUME
                  </h3>
                </div>

                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between">
                      <span className="text-retro-cyan">Format:</span>
                      <span className="text-retro-green-dim">{fileInfo.format || '...'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-retro-cyan">File Size:</span>
                      <span className="text-retro-green-dim">{fileInfo.size ? `${fileInfo.size} KB` : '...'}</span>
                    </div>
                  </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="retro-button pixel-corners flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    DOWNLOAD PDF
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePreview}
                    className="retro-button pixel-corners bg-retro-bg border-retro-cyan text-retro-cyan hover:bg-retro-cyan hover:text-retro-black flex items-center justify-center gap-2"
                  >
                    <Eye size={16} />
                    PREVIEW
                  </motion.button>
                </div>
              </div>

              {/* Resume Preview */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-retro-card border-2 border-retro-green p-6 aspect-[3/4] relative overflow-hidden pixel-corners"
                >
                  {/* Mock resume content */}
                  <div className="space-y-3 text-xs">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-retro-green/20 border border-retro-green mx-auto mb-2 pixel-corners"></div>
                      <div className="h-2 bg-retro-green/60 rounded mb-1"></div>
                      <div className="h-1 bg-retro-cyan/60 rounded w-3/4 mx-auto"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="h-1 bg-retro-green/40 rounded"></div>
                      <div className="h-1 bg-retro-cyan/40 rounded w-4/5"></div>
                      <div className="h-1 bg-retro-pink/40 rounded w-3/5"></div>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <div className="h-1 bg-retro-purple/40 rounded w-2/3"></div>
                      <div className="h-1 bg-retro-yellow/40 rounded"></div>
                      <div className="h-1 bg-retro-green/40 rounded w-4/5"></div>
                    </div>
                    
                    <div className="space-y-2 mt-4">
                      <div className="h-1 bg-retro-cyan/40 rounded w-3/4"></div>
                      <div className="h-1 bg-retro-pink/40 rounded w-5/6"></div>
                      <div className="h-1 bg-retro-green/40 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  {/* Preview overlay */}
                  <div className="absolute inset-0 bg-retro-dark/80 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <Eye className="text-retro-green-dim mx-auto mb-2" size={24} />
                      <p className="text-xs font-pixel text-retro-green-dim">CLICK TO PREVIEW</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="retro-card pixel-corners text-center">
              <h4 className="font-pixel text-sm text-retro-green-soft mb-3">EXPERIENCE</h4>
              <p className="text-xs text-retro-cyan">
                Academic projects, internships, and hands-on experience in Data Science and Web Development
              </p>
            </div>
            
            <div className="retro-card pixel-corners text-center">
              <h4 className="font-pixel text-sm text-retro-green-soft mb-3">EDUCATION</h4>
              <p className="text-xs text-retro-cyan">
                Currently pursuing degree at Galgotias University with focus on Computer Science
              </p>
            </div>
            
            <div className="retro-card pixel-corners text-center">
              <h4 className="font-pixel text-sm text-retro-green-soft mb-3">SKILLS</h4>
              <p className="text-xs text-retro-cyan">
                Python, Data Analysis, Machine Learning, React, Node.js, and more
              </p>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="retro-card pixel-corners">
            <div className="text-center">
              <h3 className="font-pixel text-sm text-retro-green-soft mb-4 text-glow-subtle">
                &gt; ADDITIONAL_INFO.TXT
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-xs">
                <div>
                  <h4 className="font-pixel text-retro-cyan mb-3">WHAT YOU'LL FIND:</h4>
                  <ul className="space-y-2 text-retro-green-dim text-left">
                    <li>• Detailed project descriptions</li>
                    <li>• Technical skills and proficiencies</li>
                    <li>• Academic achievements</li>
                    <li>• Certifications and courses</li>
                    <li>• Contact information</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-pixel text-retro-cyan mb-3">FORMATS AVAILABLE:</h4>
                  <ul className="space-y-2 text-retro-green-dim text-left">
                    <li>• PDF (Recommended)</li>
                    <li>• Online version (This portfolio)</li>
                    <li>• LinkedIn profile</li>
                    <li>• Plain text version</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-retro-green">
                <p className="text-retro-cyan text-xs">
                  Need a different format or have questions? 
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href="#contact"
                    className="text-retro-pink hover:text-retro-cyan transition-colors duration-200 ml-1"
                  >
                    Get in touch!
                  </motion.a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
