import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Database, 
  Settings, 
  Cookie, 
  Share2, 
  Lock, 
  Baby, 
  RefreshCw, 
  Mail,
  ArrowLeft,
  ChevronDown,
  Eye,
  CheckCircle,
  User,
  Globe,
  Server
} from 'lucide-react'
import './Privacy.css'

const privacyData = [
  {
    id: 1,
    icon: <Database size={24} />,
    title: 'Information We Collect',
    content: 'We may collect information to help us understand how users interact with our Website and to improve your experience.',
    list: [
      'Your name when you contact us',
      'Email address for communication',
      'Technical data (IP address, browser type, device info)',
      'Usage data and interaction patterns',
      'Cookies and similar tracking technologies'
    ]
  },
  {
    id: 2,
    icon: <Settings size={24} />,
    title: 'How We Use Your Data',
    content: 'We use your information responsibly to enhance your experience and provide better services. We will not sell your personal information to others.',
    list: [
      'Improve the Website functionality and user experience',
      'Respond to your messages or requests promptly',
      'Analyze usage patterns to optimize performance',
      'Send important updates about our services',
      'Ensure security and prevent fraud'
    ]
  },
  {
    id: 3,
    icon: <Cookie size={24} />,
    title: 'Cookies',
    content: 'We may use cookies or similar tools to track user behavior for analytics and performance purposes. Cookies help us understand how you use our Website and allow us to remember your preferences.',
    hasCookieInfo: true
  },
  {
    id: 4,
    icon: <Share2 size={24} />,
    title: 'Sharing Your Information',
    content: 'We respect your privacy and won\'t share your personal data with outside parties except in limited circumstances:',
    list: [
      'To comply with legal obligations or court orders',
      'To partners who help us operate the Website',
      'To protect our rights and safety',
      'With your explicit consent'
    ]
  },
  {
    id: 5,
    icon: <Lock size={24} />,
    title: 'Security',
    content: 'We take reasonable steps to protect your data from loss, theft, or unauthorized access. We implement industry-standard security measures including encryption, secure servers, and regular security audits. However, no online system is 100% secure, and we cannot guarantee absolute security.'
  },
  {
    id: 6,
    icon: <Baby size={24} />,
    title: 'Children\'s Privacy',
    content: 'We do not knowingly collect information from children under 13. Our Website is not intended for children under the age of 13. If we learn we have collected data from a child under 13, we will delete it immediately. If you believe we have collected information from a child, please contact us.'
  },
  {
    id: 7,
    icon: <RefreshCw size={24} />,
    title: 'Updates to this Policy',
    content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Updated versions will appear on this page with a new "Last Updated" date. We encourage you to review this policy periodically.'
  },
  {
    id: 8,
    icon: <Mail size={24} />,
    title: 'Contact Us',
    content: 'If you have questions, concerns, or requests about privacy, we\'re here to help. You can reach out to us through our contact page or directly via email.',
    isContact: true
  }
]

const PrivacyCard = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(index === 0)

  return (
    <motion.div
      className={`privacy-card ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div 
        className="privacy-card-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="privacy-card-icon">
          {item.icon}
        </div>
        <div className="privacy-card-title">
          <span className="privacy-number">0{item.id}</span>
          <h3>{item.title}</h3>
        </div>
        <motion.div 
          className="privacy-card-toggle"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
      
      <motion.div 
        className="privacy-card-content"
        initial={false}
        animate={{ 
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="privacy-card-inner">
          <p>{item.content}</p>
          
          {item.list && (
            <ul className="privacy-list">
              {item.list.map((listItem, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CheckCircle size={16} />
                  <span>{listItem}</span>
                </motion.li>
              ))}
            </ul>
          )}

          {item.hasCookieInfo && (
            <div className="cookie-info">
              <div className="cookie-tip">
                <Settings size={18} />
                <span>You can control cookies using your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent.</span>
              </div>
            </div>
          )}
          
          {item.isContact && (
            <div className="privacy-contact-link">
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

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="privacy-hero-bg">
          <div className="privacy-gradient-orb orb-1"></div>
          <div className="privacy-gradient-orb orb-2"></div>
          <div className="privacy-gradient-orb orb-3"></div>
          <div className="privacy-grid-pattern"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="privacy-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="back-link">
              <ArrowLeft size={18} /> Back to Home
            </Link>
            
            <motion.div 
              className="privacy-icon-wrapper"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            >
              <Shield size={48} />
            </motion.div>
            
            <h1>Privacy <span className="gradient-text">Policy</span></h1>
            <p>Your privacy matters to us. Learn how we protect your data.</p>
            
            <div className="privacy-meta">
              <span className="privacy-badge">
                <Lock size={16} />
                Your Data is Safe
              </span>
              <span className="privacy-date">
                Last updated: January 6, 2026
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="privacy-trust section">
        <div className="container">
          <motion.div 
            className="trust-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="trust-item">
              <div className="trust-icon">
                <Eye size={24} />
              </div>
              <h4>Transparent</h4>
              <p>Clear about data collection</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <Lock size={24} />
              </div>
              <h4>Secure</h4>
              <p>Industry-standard protection</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <User size={24} />
              </div>
              <h4>Respectful</h4>
              <p>Your data, your control</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <Server size={24} />
              </div>
              <h4>Minimal</h4>
              <p>Only collect what we need</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="privacy-intro section">
        <div className="container">
          <motion.div 
            className="intro-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="intro-icon">
              <Shield size={32} />
            </div>
            <div className="intro-content">
              <h2>About This Privacy Policy</h2>
              <p>
                This Privacy Policy explains how SoulSailers ("we", "us", "our") collects and uses your personal information when you visit 
                <a href="https://vinit-prajapati-17.github.io/soulsailer/" target="_blank" rel="noopener noreferrer"> https://vinit-prajapati-17.github.io/soulsailer/</a>. 
                We are committed to protecting your privacy and ensuring you understand how your data is handled.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Cards */}
      <section className="privacy-content section">
        <div className="container">
          <div className="privacy-grid">
            {privacyData.map((item, index) => (
              <PrivacyCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="privacy-rights section">
        <div className="container">
          <motion.div 
            className="rights-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Your <span className="gradient-text">Rights</span></h2>
            <p>You have the right to:</p>
            <div className="rights-grid">
              <div className="right-item">
                <Globe size={20} />
                <span>Access your personal data</span>
              </div>
              <div className="right-item">
                <RefreshCw size={20} />
                <span>Request data correction</span>
              </div>
              <div className="right-item">
                <Lock size={20} />
                <span>Request data deletion</span>
              </div>
              <div className="right-item">
                <Settings size={20} />
                <span>Opt-out of communications</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="privacy-cta section">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Questions About Privacy?</h2>
            <p>We're here to help. Reach out to us with any privacy-related concerns.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-orange">Contact Us</Link>
              <Link to="/terms" className="btn btn-outline">View Terms</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
