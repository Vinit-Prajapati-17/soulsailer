import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelers: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    // Simulate form submission
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', destination: '', travelers: '', message: '' })
  }

  const contactInfo = [
    { icon: <MapPin />, title: 'Visit Us', info: '123 Travel Street, Mumbai, Maharashtra 400001, India' },
    { icon: <Phone />, title: 'Call Us', info: '+91 98765 43210' },
    { icon: <Mail />, title: 'Email Us', info: 'hello@soulsailers.com' },
    { icon: <Clock />, title: 'Working Hours', info: 'Mon - Sat: 9:00 AM - 7:00 PM' },
  ]

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?w=1600" alt="Contact" />
          <div className="page-hero-overlay"></div>
        </div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact Us</h1>
          <p>Let's plan your perfect journey together</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <p>
                Have questions about a destination? Need help planning your trip? 
                Our travel experts are here to help you create unforgettable experiences.
              </p>

              <div className="info-list">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="info-icon">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="ai-widget">
                <MessageCircle size={24} />
                <div>
                  <h4>AI Travel Assistant</h4>
                  <p>Get instant recommendations powered by AI</p>
                </div>
                <button className="btn btn-primary">Chat Now</button>
              </div>
            </motion.div>


            {/* Contact Form */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {isSubmitted ? (
                <div className="success-message">
                  <CheckCircle size={60} />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
                  <button className="btn btn-primary" onClick={() => setIsSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Plan Your Trip</h3>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.name ? 'error' : ''}
                      />
                      {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? 'error' : ''}
                      />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="travelers">Number of Travelers</label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="1">Solo</option>
                        <option value="2">Couple</option>
                        <option value="3-5">3-5 People</option>
                        <option value="6+">6+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="destination">Preferred Destination</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g., Rajasthan, Kerala, Thailand"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel plans, preferences, and any specific requirements..."
                      rows="5"
                      className={errors.message ? 'error' : ''}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-orange submit-btn">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-placeholder">
          <MapPin size={60} />
          <h3>Find Us on Map</h3>
          <p>123 Travel Street, Mumbai, Maharashtra</p>
        </div>
      </section>
    </div>
  )
}

export default Contact
