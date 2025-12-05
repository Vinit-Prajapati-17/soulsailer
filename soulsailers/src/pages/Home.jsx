import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Compass, Calendar, Users, Star, ArrowRight } from 'lucide-react'
import { indianStates } from '../data/indianStates'
import { countries } from '../data/countries'
import HeroSection from '../components/HeroSection'
import WorldMapSection from '../components/WorldMapSection'
import '../components/WorldMapSection.css'
import './Home.css'

const DestinationCard = ({ destination, type }) => {
  return (
    <motion.div 
      className="destination-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-image">
        <img src={destination.image} alt={destination.name} loading="lazy" />
        <div className="card-overlay">
          <Link to={`/${type}/${destination.id}`} className="btn btn-primary">
            Explore <ArrowRight size={18} />
          </Link>
        </div>
      </div>
      <div className="card-content">
        <h3>{destination.name}</h3>
        <p>{destination.description?.substring(0, 80)}...</p>
        <div className="card-meta">
          <span><Calendar size={14} /> {destination.bestTime}</span>
        </div>
      </div>
    </motion.div>
  )
}

const Home = () => {
  const featuredIndian = indianStates.slice(0, 4)
  const featuredInternational = countries.slice(0, 4)

  return (
    <div className="home">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose SoulSailers?</h2>
            <p className="section-subtitle">We make travel planning effortless and exciting</p>
          </motion.div>

          <div className="features-grid">
            {[
              { icon: <Compass />, title: 'Expert Curation', desc: 'Hand-picked destinations and experiences by travel experts' },
              { icon: <Calendar />, title: 'Detailed Itineraries', desc: 'Day-by-day plans with timings, tips, and local insights' },
              { icon: <MapPin />, title: 'Local Experiences', desc: 'Authentic cultural experiences and hidden gems' },
              { icon: <Users />, title: 'Community Reviews', desc: 'Real traveler reviews and recommendations' },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <WorldMapSection />

      {/* Indian Destinations */}
      <section className="destinations section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Explore India</h2>
            <p className="section-subtitle">Discover the incredible diversity of Indian destinations</p>
            <Link to="/india" className="view-all">View All States <ArrowRight size={18} /></Link>
          </motion.div>

          <div className="destinations-grid">
            {featuredIndian.map((state, index) => (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard destination={state} type="india" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Destinations */}
      <section className="destinations section alt-bg">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">International Tours</h2>
            <p className="section-subtitle">Explore the world's most amazing destinations</p>
            <Link to="/international" className="view-all">View All Countries <ArrowRight size={18} /></Link>
          </motion.div>

          <div className="destinations-grid">
            {featuredInternational.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DestinationCard destination={country} type="international" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="tips section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Travel Tips</h2>
            <p className="section-subtitle">Expert advice for your next adventure</p>
          </motion.div>

          <div className="tips-grid">
            {[
              { title: 'Best Time to Visit India', desc: 'October to March offers pleasant weather across most regions', icon: '🌤️' },
              { title: 'Budget Planning', desc: 'Plan ₹2000-5000 per day for comfortable travel in India', icon: '💰' },
              { title: 'Packing Essentials', desc: 'Light layers, comfortable shoes, and universal adapter', icon: '🎒' },
              { title: 'Local Etiquette', desc: 'Remove shoes at temples, dress modestly at religious sites', icon: '🙏' },
            ].map((tip, index) => (
              <motion.div 
                key={index}
                className="tip-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="tip-icon">{tip.icon}</span>
                <h3>{tip.title}</h3>
                <p>{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Journey?</h2>
            <p>Let us help you plan the perfect trip. Browse our curated itineraries or contact us for personalized recommendations.</p>
            <div className="cta-buttons">
              <Link to="/itineraries" className="btn btn-orange">Browse Itineraries</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">What Travelers Say</h2>
            <p className="section-subtitle">Real experiences from our happy travelers</p>
          </motion.div>

          <div className="testimonials-grid">
            {[
              { name: 'Priya Sharma', location: 'Mumbai', text: 'SoulSailers made our Rajasthan trip absolutely magical. The itinerary was perfect!', rating: 5 },
              { name: 'Rahul Verma', location: 'Delhi', text: 'Best travel planning experience. The Kerala backwaters trip was unforgettable.', rating: 5 },
              { name: 'Anita Patel', location: 'Bangalore', text: 'Detailed itineraries with local tips made our Switzerland trip hassle-free.', rating: 5 },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--orange)" color="var(--orange)" />
                  ))}
                </div>
                <p>"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name[0]}</div>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
