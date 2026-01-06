import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Download, Globe, Map } from 'lucide-react'
import { getIndianItineraries, getInternationalItineraries } from '../data/itineraries'
import './Itineraries.css'

const Itineraries = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const indianItineraries = getIndianItineraries()
  const internationalItineraries = getInternationalItineraries()

  const filteredIndian = selectedCategory === 'all' || selectedCategory === 'india' 
    ? indianItineraries 
    : []
  
  const filteredInternational = selectedCategory === 'all' || selectedCategory === 'international' 
    ? internationalItineraries 
    : []

  const handlePdfDownload = (pdfUrl, name) => {
    window.open(pdfUrl, '_blank')
  }

  return (
    <div className="itineraries-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600" alt="Itineraries" />
          <div className="page-hero-overlay"></div>
        </div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Travel Itineraries</h1>
          <p>Expertly crafted day-by-day travel plans for your perfect trip</p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="category-filters">
              <button
                className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                <Globe size={18} /> All Destinations
              </button>
              <button
                className={`category-btn ${selectedCategory === 'india' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('india')}
              >
                <Map size={18} /> India
              </button>
              <button
                className={`category-btn ${selectedCategory === 'international' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('international')}
              >
                <Globe size={18} /> International
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Itineraries */}
      {filteredIndian.length > 0 && (
        <section className="itineraries-list section">
          <div className="container">
            {selectedCategory === 'all' && (
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Map size={28} /> Explore India
              </motion.h2>
            )}
            
            <div className="itinerary-cards">
              {filteredIndian.map((state) => (
                state.itineraries.map((itinerary, index) => (
                  <motion.div 
                    key={`${state.id}-${index}`}
                    className="itinerary-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="itinerary-header">
                      <div className="days-badge">
                        <Calendar size={16} />
                        {itinerary.days} {itinerary.days === 1 ? 'Day' : 'Days'}
                      </div>
                      <h3>{itinerary.title}</h3>
                      <div className="highlights">
                        {itinerary.highlights.map((h, i) => (
                          <span key={i}>{h}</span>
                        ))}
                      </div>
                    </div>

                    <div className="itinerary-preview">
                      <div className="days-preview">
                        {itinerary.schedule.slice(0, 3).map((day, i) => (
                          <div key={i} className="day-item">
                            <span className="day-num">Day {day.day}</span>
                            <span className="day-title">{day.title}</span>
                          </div>
                        ))}
                        {itinerary.schedule.length > 3 && (
                          <p className="more-items">+{itinerary.schedule.length - 3} more days</p>
                        )}
                      </div>
                    </div>

                    <div className="itinerary-actions">
                      <Link to={`/india/${state.id}`} className="btn btn-primary">
                        View Details
                      </Link>
                      {state.pdfUrl && (
                        <button 
                          className="btn btn-outline"
                          onClick={() => handlePdfDownload(state.pdfUrl, state.name)}
                        >
                          <Download size={16} /> PDF
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))
              ))}
            </div>
          </div>
        </section>
      )}

      {/* International Itineraries */}
      {filteredInternational.length > 0 && (
        <section className="itineraries-list section international-section">
          <div className="container">
            {selectedCategory === 'all' && (
              <motion.h2 
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Globe size={28} /> International Destinations
              </motion.h2>
            )}
            
            <div className="itinerary-cards">
              {filteredInternational.map((country) => (
                country.itineraries.map((itinerary, index) => (
                  <motion.div 
                    key={`${country.id}-${index}`}
                    className="itinerary-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="itinerary-header">
                      <div className="days-badge international-badge">
                        <Calendar size={16} />
                        {itinerary.days} {itinerary.days === 1 ? 'Day' : 'Days'}
                      </div>
                      <h3>{itinerary.title}</h3>
                      <div className="highlights">
                        {itinerary.highlights.map((h, i) => (
                          <span key={i}>{h}</span>
                        ))}
                      </div>
                    </div>

                    <div className="itinerary-preview">
                      <div className="days-preview">
                        {itinerary.schedule.slice(0, 3).map((day, i) => (
                          <div key={i} className="day-item">
                            <span className="day-num">Day {day.day}</span>
                            <span className="day-title">{day.title}</span>
                          </div>
                        ))}
                        {itinerary.schedule.length > 3 && (
                          <p className="more-items">+{itinerary.schedule.length - 3} more days</p>
                        )}
                      </div>
                    </div>

                    <div className="itinerary-actions">
                      <Link to={`/international/${country.id}`} className="btn btn-primary">
                        View Details
                      </Link>
                      {country.pdfUrl && (
                        <button 
                          className="btn btn-outline"
                          onClick={() => handlePdfDownload(country.pdfUrl, country.name)}
                        >
                          <Download size={16} /> PDF
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredIndian.length === 0 && filteredInternational.length === 0 && (
        <section className="section">
          <div className="container">
            <div className="no-results">
              <h3>No itineraries found</h3>
              <p>Try selecting a different duration or category</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="itineraries-cta section">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Need a Custom Itinerary?</h2>
            <p>Our travel experts can create a personalized trip plan just for you</p>
            <Link to="/contact" className="btn btn-orange">Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Itineraries
