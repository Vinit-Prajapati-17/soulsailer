import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, Download, ChevronRight, Filter } from 'lucide-react'
import { getAllItineraries } from '../data/itineraries'
import './Itineraries.css'

const Itineraries = () => {
  const [selectedDuration, setSelectedDuration] = useState('all')
  const allItineraries = getAllItineraries()

  const durations = ['all', '1', '3', '5', '7']

  const filteredItineraries = allItineraries.map(state => ({
    ...state,
    itineraries: state.itineraries.filter(it => 
      selectedDuration === 'all' || it.days.toString() === selectedDuration
    )
  })).filter(state => state.itineraries.length > 0)

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

      {/* Compact Filter Bar */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="duration-filters">
              <div className="filter-pills">
                {durations.map(duration => (
                  <button
                    key={duration}
                    className={`filter-pill ${selectedDuration === duration ? 'active' : ''}`}
                    onClick={() => setSelectedDuration(duration)}
                  >
                    {duration === 'all' ? 'All' : `${duration} Day${duration !== '1' ? 's' : ''}`}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Itineraries */}
      <section className="itineraries-list section">
        <div className="container">
          {filteredItineraries.map((state, stateIndex) => (
            <motion.div 
              key={state.id}
              className="state-itineraries"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stateIndex * 0.1 }}
            >
              <div className="state-header">
                <h2><MapPin size={24} /> {state.name}</h2>
                <Link to={`/india/${state.id}`} className="view-state">
                  View Destination <ChevronRight size={18} />
                </Link>
              </div>

              <div className="itinerary-cards">
                {state.itineraries.map((itinerary, index) => (
                  <motion.div 
                    key={index}
                    className="itinerary-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
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
                      {itinerary.days === 1 ? (
                        <div className="schedule-preview">
                          {itinerary.schedule.slice(0, 3).map((item, i) => (
                            <div key={i} className="schedule-item">
                              <span className="time">{item.time}</span>
                              <span className="activity">{item.activity}</span>
                            </div>
                          ))}
                          {itinerary.schedule.length > 3 && (
                            <p className="more-items">+{itinerary.schedule.length - 3} more activities</p>
                          )}
                        </div>
                      ) : (
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
                      )}
                    </div>

                    <div className="itinerary-actions">
                      <Link to={`/india/${state.id}`} className="btn btn-primary">
                        View Full Itinerary
                      </Link>
                      <button className="btn btn-outline">
                        <Download size={16} /> PDF
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {filteredItineraries.length === 0 && (
            <div className="no-results">
              <h3>No itineraries found</h3>
              <p>Try selecting a different duration</p>
            </div>
          )}
        </div>
      </section>

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
