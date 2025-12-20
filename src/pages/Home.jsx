import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Compass, Calendar, Users, Star, ArrowRight, Sparkles } from 'lucide-react'
import { indianStates } from '../data/indianStates'
import { countries } from '../data/countries'
import HeroSection from '../components/HeroSection'
import './Home.css'

const BASE_URL = import.meta.env.BASE_URL;

const DestinationCard = React.memo(({ destination, type }) => {
  return (
    <motion.div 
      className="destination-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 400, damping: 25 }}
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
  );
});

DestinationCard.displayName = 'DestinationCard';

const Home = () => {
  const [heroReady, setHeroReady] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Memoize expensive calculations
  const featuredIndian = React.useMemo(() => {
    const featuredIndianIds = ['gujarat', 'meghalaya', 'kerala', 'rajasthan'];
    return featuredIndianIds.map(id => indianStates.find(s => s.id === id)).filter(Boolean);
  }, []);
  
  const featuredInternational = React.useMemo(() => countries.slice(0, 4), []);

  useEffect(() => {
    // Ensure scroll system is ready before mounting hero
    const initializeApp = () => {
      // Force scroll system activation
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      window.scrollTo({ top: 1, behavior: 'instant' });
      window.scrollTo({ top: currentScroll, behavior: 'instant' });
      
      // Dispatch events to activate scroll listeners
      window.dispatchEvent(new Event('scroll', { bubbles: true }));
      window.dispatchEvent(new Event('resize', { bubbles: true }));
      
      setIsInitialized(true);
      
      // Mount hero after scroll system is ready
      requestAnimationFrame(() => {
        setHeroReady(true);
      });
    };

    // Multiple initialization strategies
    if (document.readyState === 'complete') {
      initializeApp();
    } else {
      window.addEventListener('load', initializeApp);
      // Fallback timer
      const timer = setTimeout(initializeApp, 100);
      
      return () => {
        window.removeEventListener('load', initializeApp);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      {heroReady && isInitialized && <HeroSection />}

      {/* Features Section - Journey Path */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose <span className="gradient-text">SoulSailers?</span></h2>
            <p className="section-subtitle">Your journey to unforgettable travel starts here</p>
          </motion.div>

          <div className="features-journey">
            {/* Animated connecting path */}
            <div className="journey-path">
              <div className="journey-dot"></div>
            </div>

            <div className="features-items">
              {[
                { icon: <Compass size={50} />, title: 'Expert Curation', desc: 'Hand-picked destinations and experiences by travel experts' },
                { icon: <Calendar size={50} />, title: 'Detailed Itineraries', desc: 'Day-by-day plans with timings, tips, and local insights' },
                { icon: <MapPin size={50} />, title: 'Local Experiences', desc: 'Authentic cultural experiences and hidden gems' },
                { icon: <Users size={50} />, title: 'Community Reviews', desc: 'Real traveler reviews and recommendations' },
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="feature-node">
                    <div className="feature-pulse"></div>
                    <span className="feature-step">0{index + 1}</span>
                    <div className="feature-node-icon">{feature.icon}</div>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* India Showcase Section */}
      <section className="india-showcase">
        {/* Animated Background Elements */}
        <div className="showcase-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }} />
          ))}
        </div>
        
        <div className="showcase-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <div className="container">
          <div className="india-showcase-content">
            {/* Top Text */}
            <motion.div 
              className="india-text-top"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="india-badge">
                <Sparkles size={16} /> Incredible India
              </span>
              <h2>Discover the Soul of <span className="gradient-text">India</span></h2>
            </motion.div>
            
            {/* Center Video */}
            <motion.div 
              className="india-video-wrapper"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="video-frame">
                <div className="frame-corner frame-tl"></div>
                <div className="frame-corner frame-tr"></div>
                <div className="frame-corner frame-bl"></div>
                <div className="frame-corner frame-br"></div>
                <video 
                  className="india-showcase-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src={`${BASE_URL}video.mp4`} type="video/mp4" />
                </video>
                <img 
                  src={`${BASE_URL}logo.png`} 
                  alt="SoulSailers" 
                  className="video-logo-watermark"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="services-badge">
              <Sparkles size={16} />
              <span>Our Services</span>
            </div>
            <h2 className="section-title">Complete Travel <span className="gradient-text">Solutions</span></h2>
            <p className="section-subtitle">From planning to execution, we handle every aspect of your journey</p>
          </motion.div>

          <div className="services-grid">
            {[
              {
                title: 'Flight Booking',
                description: 'Best deals on flights',
                image: `${BASE_URL}services/flightt.jpg`
              },
              {
                title: 'Hotel Reservations',
                description: 'Quality accommodations',
                image: `${BASE_URL}services/hotell.jpg`
              },
              {
                title: 'Cab Services',
                description: 'Reliable transportation',
                image: `${BASE_URL}services/cabb.jpg`
              },
              {
                title: 'Travel Insurance',
                description: 'Comprehensive coverage',
                image: `${BASE_URL}services/insurancee.jpg`
              },
              {
                title: 'Visa Assistance',
                description: 'Expert visa guidance',
                image: `${BASE_URL}services/visaa.jpg`
              },
              {
                title: 'Passport Services',
                description: 'Passport assistance',
                image: `${BASE_URL}services/passportt.jpg`
              },
              {
                title: 'Group Tours',
                description: 'Curated group packages',
                image: `${BASE_URL}services/groupp.jpg`
              },
              {
                title: 'Solo Travel',
                description: 'Safe solo adventures',
                image: `${BASE_URL}services/soloo.jpg`
              },
              {
                title: 'Business Trips',
                description: 'Corporate travel solutions',
                image: `${BASE_URL}services/business tripss.jpg`
              },
              {
                title: 'Custom Packages',
                description: 'Personalized itineraries',
                image: `${BASE_URL}services/packagee.jpg`
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian Destinations */}
      <section className="destinations section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Explore <span className="gradient-text">India</span></h2>
            <p className="section-subtitle">Discover the incredible diversity of Indian destinations</p>
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

          <motion.div 
            className="view-all-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/india" className="view-all">View All States <ArrowRight size={18} /></Link>
          </motion.div>
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
            <h2 className="section-title">International <span className="gradient-text">Tours</span></h2>
            <p className="section-subtitle">Explore the world's most amazing destinations</p>
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

          <motion.div 
            className="view-all-wrapper"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/international" className="view-all">View All Countries <ArrowRight size={18} /></Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose SoulSailers - Interactive Cards */}
      <section className="why-choose section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="why-choose-badge">
              <Star size={16} />
              <span>Why Choose Us</span>
            </div>
            <h2 className="section-title">What Makes SoulSailers <span className="gradient-text">Different</span></h2>
            <p className="section-subtitle">Experience the difference with our personalized approach to travel</p>
          </motion.div>

          <div className="why-choose-grid">
            {[
              { 
                title: '24/7 Support', 
                desc: 'Round-the-clock assistance to ensure your journey is smooth and worry-free',
                icon: '🌟',
                stat: '24/7',
                statLabel: 'Support'
              },
              { 
                title: 'Local Expertise', 
                desc: 'Deep local knowledge and authentic experiences you won\'t find anywhere else',
                icon: '🗺️',
                stat: '50+',
                statLabel: 'Destinations'
              },
              { 
                title: 'Personalized Itineraries', 
                desc: 'Every trip is tailored to your preferences, budget, and travel style',
                icon: '✨',
                stat: '100%',
                statLabel: 'Customized'
              },
              { 
                title: 'Trusted by Thousands', 
                desc: 'Join thousands of satisfied travelers who chose SoulSailers for their adventures',
                icon: '❤️',
                stat: '5000+',
                statLabel: 'Happy Clients'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="why-choose-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="card-emoji">{feature.icon}</span>
                    <div className="card-stat">
                      <div className="stat-number">{feature.stat}</div>
                      <div className="stat-label">{feature.statLabel}</div>
                    </div>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
                <div className="card-border"></div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div 
            className="trust-indicators"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="trust-item">
              <div className="trust-icon">🔒</div>
              <span>Secure Booking</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🏅</div>
              <span>Award Winning</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">💯</div>
              <span>100% Satisfaction</span>
            </div>
            <div className="trust-item">
              <div className="trust-icon">🚀</div>
              <span>Instant Confirmation</span>
            </div>
          </motion.div>
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
            <h2>Ready to Start Your <span className="gradient-text">Journey?</span></h2>
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
            <h2 className="section-title">What Travelers <span className="gradient-text">Say</span></h2>
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
