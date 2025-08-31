import React, { useState, useEffect } from 'react'
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
            <h2 className="text-2xl md:text-3xl font-pixel text-retro-green-dim text-glow-soft mb-4">
              &gt; RESUME.PDF
            </h2>
            <p className="text-sm font-pixel text-retro-cyan mb-6">
              Download or preview my resume
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

              {/* Resume Preview - Realistic PDF thumbnail and clickable overlay */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-retro-card border-2 border-retro-green p-0 aspect-[3/4] relative overflow-hidden pixel-corners flex items-center justify-center"
                >
                  {/* PDF Thumbnail Preview */}
                  <iframe
                    src={`/${resumeFileName}#toolbar=0&navpanes=0&scrollbar=0`}
                    title="Resume Preview"
                    className="w-full h-full min-h-[350px] min-w-[250px] bg-white"
                    style={{ border: 'none', borderRadius: '8px' }}
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
