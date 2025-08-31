import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Eye, ExternalLink } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

const Resume = () => {
  const { theme } = useTheme()
  const isRetro = theme === 'retro'
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
  const [fileInfo, setFileInfo] = useState({ size: null, format: null });

  useEffect(() => {
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
            <h2 className={`text-2xl md:text-3xl mb-4 ${
              isRetro 
                ? 'font-pixel text-retro-green-dim text-glow-soft' 
                : 'font-light text-glass-text tracking-wide'
            }`}>
              {isRetro ? '> RESUME.PDF' : 'Resume'}
            </h2>
            <p className={`text-sm mb-6 ${
              isRetro 
                ? 'font-pixel text-retro-cyan' 
                : 'font-light text-glass-text-secondary tracking-wide'
            }`}>
              Download or preview my resume
            </p>
            <div className={`w-32 h-0.5 mx-auto ${
              isRetro ? 'bg-retro-green' : 'bg-glass-accent'
            }`}></div>
          </motion.div>

          {/* Resume Preview Card */}
          <motion.div variants={itemVariants} className={isRetro ? "retro-card pixel-corners mb-12" : "glass-card p-8 mb-12"}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Resume Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className={isRetro ? "text-retro-cyan" : "text-glass-accent"} size={24} />
                  <h3 className={`text-lg ${
                    isRetro 
                      ? 'font-pixel text-retro-green-dim text-glow-soft' 
                      : 'font-normal text-glass-text tracking-wide'
                  }`}>
                    {isRetro ? 'MY RESUME' : 'My Resume'}
                  </h3>
                </div>

                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between">
                      <span className={isRetro ? "text-retro-cyan" : "text-glass-text-secondary font-light"}>Format:</span>
                      <span className={isRetro ? "text-retro-green-dim" : "text-glass-text font-light"}>{fileInfo.format || '...'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className={isRetro ? "text-retro-cyan" : "text-glass-text-secondary font-light"}>File Size:</span>
                      <span className={isRetro ? "text-retro-green-dim" : "text-glass-text font-light"}>{fileInfo.size ? `${fileInfo.size} KB` : '...'}</span>
                    </div>
                  </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className={isRetro ? "retro-button pixel-corners flex items-center justify-center gap-2" : "glass-button flex items-center justify-center gap-2"}
                  >
                    <Download size={16} />
                    {isRetro ? 'DOWNLOAD PDF' : 'Download PDF'}
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePreview}
                    className={isRetro 
                      ? "retro-button pixel-corners bg-retro-bg border-retro-cyan text-retro-cyan hover:bg-retro-cyan hover:text-retro-black flex items-center justify-center gap-2"
                      : "glass-button-sm flex items-center justify-center gap-2 border-glass-accent-light text-glass-accent-light hover:bg-glass-accent-light/20"
                    }
                  >
                    <Eye size={16} />
                    {isRetro ? 'PREVIEW' : 'Preview'}
                  </motion.button>
                </div>
              </div>

              {/* Resume Preview - Realistic PDF thumbnail and clickable overlay */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`aspect-[3/4] relative overflow-hidden flex items-center justify-center ${
                    isRetro 
                      ? 'bg-retro-card border-2 border-retro-green p-0 pixel-corners' 
                      : 'glass-card p-0 rounded-lg border border-glass-accent/30'
                  }`}
                >
                  {/* PDF Thumbnail Preview */}
                  <iframe
                    src={`/${resumeFileName}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Resume Preview"
                    className="w-full h-full min-h-[350px] min-w-[250px] bg-white"
                    style={{ border: 'none', borderRadius: isRetro ? '0px' : '8px' }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Resume
