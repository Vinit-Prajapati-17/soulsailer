import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, Sun, Camera, Download, ArrowLeft, ChevronRight } from 'lucide-react'
import { getStateById } from '../data/indianStates'
import { getItineraryByState } from '../data/itineraries'
import './StatePage.css'

const StatePage = () => {
  const { stateId } = useParams()
  const state = getStateById(stateId)
  const itineraryData = getItineraryByState(stateId)

  if (!state) {
    return (
      <div className="not-found">
        <h2>State not found</h2>
        <Link to="/india" className="btn btn-primary">Back to India</Link>
      </div>
    )
  }

  const galleryImages = state.gallery || [
    state.image,
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600',
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600',
    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600',
  ]

  return (
    <div className="state-page">
      {/* Hero */}
      <section className="state-hero">
        <div className="state-hero-bg">
          <img src={state.image} alt={state.name} />
          <div className="state-hero-overlay"></div>
        </div>
        <motion.div 
          className="state-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/india" className="back-link">
            <ArrowLeft size={18} /> Back to India
          </Link>
          <h1>{state.name}</h1>
          <p>{state.description}</p>
          <div className="state-quick-info">
            <span><MapPin size={18} /> {state.capital}</span>
            <span><Calendar size={18} /> {state.bestTime}</span>
            <span><Sun size={18} /> {state.region} India</span>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="state-overview section">
        <div className="container">
          <div className="overview-grid">
            <motion.div 
              className="overview-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>About {state.name}</h2>
              <p>{state.description}</p>
              <p>
                {state.name} is one of India's most captivating destinations, offering a perfect blend of 
                natural beauty, rich cultural heritage, and warm hospitality. From ancient temples to 
                modern cities, from serene landscapes to vibrant festivals, this state has something 
                for every traveler.
              </p>
              
              <div className="info-cards">
                <div className="info-card">
                  <Calendar className="info-icon" />
                  <div>
                    <h4>Best Time to Visit</h4>
                    <p>{state.bestTime}</p>
                  </div>
                </div>
                <div className="info-card">
                  <Clock className="info-icon" />
                  <div>
                    <h4>Suggested Duration</h4>
                    <p>5-7 days recommended</p>
                  </div>
                </div>
                <div className="info-card">
                  <MapPin className="info-icon" />
                  <div>
                    <h4>Capital City</h4>
                    <p>{state.capital}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="overview-map"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="map-placeholder">
                <MapPin size={60} />
                <p>Interactive Map</p>
                <span>Coming Soon</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Itineraries */}
      {itineraryData && (
        <section className="itineraries-section section alt-bg">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">{state.name} Itineraries</h2>
              <p className="section-subtitle">Choose from our curated travel plans</p>
            </motion.div>

            <div className="itinerary-tabs">
              {itineraryData.itineraries.map((itinerary, index) => (
                <motion.div 
                  key={index}
                  className="itinerary-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="itinerary-header">
                    <div className="days-badge">{itinerary.days} {itinerary.days === 1 ? 'Day' : 'Days'}</div>
                    <h3>{itinerary.title}</h3>
                    <div className="highlights">
                      {itinerary.highlights.map((h, i) => (
                        <span key={i}>{h}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="itinerary-schedule">
                    {itinerary.days === 1 ? (
                      itinerary.schedule.map((item, i) => (
                        <div key={i} className="schedule-item">
                          <div className="schedule-time">{item.time}</div>
                          <div className="schedule-content">
                            <p>{item.activity}</p>
                            {item.tip && <span className="tip">💡 {item.tip}</span>}
                          </div>
                        </div>
                      ))
                    ) : (
                      itinerary.schedule.map((day, i) => (
                        <div key={i} className="day-card">
                          <div className="day-header">
                            <span className="day-number">Day {day.day}</span>
                            <h4>{day.title}</h4>
                          </div>
                          <ul className="day-activities">
                            {day.activities.map((activity, j) => (
                              <li key={j}><ChevronRight size={14} /> {activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="itinerary-actions">
                    <button className="btn btn-primary">
                      <Download size={18} /> Download PDF
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      <section className="gallery-section section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Photo Gallery</h2>
            <p className="section-subtitle">Glimpses of {state.name}</p>
          </motion.div>

          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                className={`gallery-item ${index === 0 ? 'large' : ''}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={img} alt={`${state.name} ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <Camera size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="state-cta section">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Explore {state.name}?</h2>
            <p>Contact us for personalized travel planning and recommendations</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-orange">Plan My Trip</Link>
              <Link to="/itineraries" className="btn btn-outline">View All Itineraries</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default StatePage
