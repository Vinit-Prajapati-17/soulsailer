import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FileText, 
  CheckCircle, 
  Globe, 
  Shield, 
  AlertTriangle, 
  Link as LinkIcon, 
  RefreshCw, 
  Scale, 
  Mail,
  ArrowLeft,
  ChevronDown,
  Scroll
} from 'lucide-react'
import './Terms.css'

const termsData = [
  {
    id: 1,
    icon: <CheckCircle size={24} />,
    title: 'Acceptance of Terms',
    content: 'By visiting our Website, you agree to these Terms and all applicable laws. If you don\'t agree, you must stop using the Website. Your continued use of SoulSailers constitutes your acceptance of these terms and any future modifications.'
  },
  {
    id: 2,
    icon: <Globe size={24} />,
    title: 'Use of the Website',
    content: 'You agree to use the Website only for lawful purposes and in a way that doesn\'t violate the rights of others or restrict anyone else\'s use of the Website. You are responsible for ensuring that your use complies with all applicable local, national, and international laws.'
  },
  {
    id: 3,
    icon: <Shield size={24} />,
    title: 'Intellectual Property',
    content: 'All designs, text, logos, graphics, and other content on this Website are our property or licensed to us. You may not use, reproduce, distribute, or create derivative works from any content without our express written permission.'
  },
  {
    id: 4,
    icon: <AlertTriangle size={24} />,
    title: 'User Conduct Rules',
    content: 'You must not: Use the Website for illegal activities. Try to harm, hack, or break the Website. Copy or redistribute materials from the Website without permission. Engage in any activity that could damage, disable, or impair the Website\'s functionality.',
    list: [
      'Use the Website for illegal activities',
      'Attempt to harm, hack, or disrupt the Website',
      'Copy or redistribute materials without permission',
      'Impersonate others or provide false information',
      'Upload malicious code or harmful content'
    ]
  },
  {
    id: 5,
    icon: <Scale size={24} />,
    title: 'Limitation of Liability',
    content: 'We try to keep the Website accurate and available. However, we won\'t be responsible for any losses or damages that occur from your use of the Website. This includes direct, indirect, incidental, or consequential damages arising from your access to or use of our services.'
  },
  {
    id: 6,
    icon: <LinkIcon size={24} />,
    title: 'Third-Party Links',
    content: 'Our Website may contain links to other sites. We are not responsible for the content, privacy policies, or practices of these third-party sites. We encourage you to review the terms and privacy policies of any third-party websites you visit.'
  },
  {
    id: 7,
    icon: <RefreshCw size={24} />,
    title: 'Changes to the Website or Terms',
    content: 'We can update the Website and these Terms at any time without prior notice. Changes become effective once posted on this page. Your continued use of the Website after any modifications means you accept the updated Terms.'
  },
  {
    id: 8,
    icon: <Scale size={24} />,
    title: 'Governing Law',
    content: 'These Terms are governed by the laws of India. Any disputes arising from these Terms or your use of the Website will be subject to the exclusive jurisdiction of the courts in India.'
  },
  {
    id: 9,
    icon: <Mail size={24} />,
    title: 'Contact Information',
    content: 'If you have questions about these Terms, you can contact us through our contact page or reach out directly via email. We are committed to addressing your concerns promptly.',
    isContact: true
  }
]

const TermsCard = ({ term, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0)

  return (
    <motion.div
      className={`terms-card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div 
        className="terms-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="terms-card-icon">
          {term.icon}
        </div>
        <div className="terms-card-title">
          <span className="terms-number">0{term.id}</span>
          <h3>{term.title}</h3>
        </div>
        <motion.div 
          className="terms-card-toggle"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
      
      <motion.div 
        className="terms-card-content"
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="terms-card-inner">
          <p>{term.content}</p>
          
          {term.list && (
            <ul className="terms-list">
              {term.list.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle size={16} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          )}
          
          {term.isContact && (
            <div className="terms-contact-link">
              <Link to="/contact" className="btn btn-orange">
                <Mail size={18} />
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="terms-hero-bg">
          <div className="terms-gradient-orb orb-1"></div>
          <div className="terms-gradient-orb orb-2"></div>
          <div className="terms-gradient-orb orb-3"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="terms-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="back-link">
              <ArrowLeft size={18} /> Back to Home
            </Link>
            
            <motion.div 
              className="terms-icon-wrapper"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Scroll size={48} />
            </motion.div>
            
            <h1>Terms & <span className="gradient-text">Conditions</span></h1>
            <p>Please read these terms carefully before using SoulSailers</p>
            
            <div className="terms-meta">
              <span className="terms-badge">
                <FileText size={16} />
                Legal Document
              </span>
              <span className="terms-date">
                Last updated: January 6, 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="terms-intro section">
        <div className="container">
          <motion.div 
            className="intro-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="intro-icon">
              <FileText size={32} />
            </div>
            <div className="intro-content">
              <h2>Welcome to SoulSailers</h2>
              <p>
                These Terms and Conditions ("Terms") govern your use of the website 
                <a href="https://vinit-prajapati-17.github.io/soulsailer target="_blank rel="noopener noreferrer"> https://vinit-prajapati-17.github.io/soulsailer/</a> ("Website"). 
                By accessing or using this Website, you agree to follow and be bound by these Terms. 
                If you do not agree, please do not use the Website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Cards */}
      <section className="terms-content section">
        <div className="container">
          <div className="terms-grid">
            {termsData.map((term, index) => (
              <TermsCard key={term.id} term={term} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="terms-cta section">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Have Questions?</h2>
            <p>If you have any questions about these Terms, feel free to reach out to us.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-orange">Contact Us</Link>
              <Link to="/" className="btn btn-outline">Back to Home</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms
