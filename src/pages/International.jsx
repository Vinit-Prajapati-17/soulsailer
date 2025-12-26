import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Calendar, ArrowRight } from 'lucide-react'
import { continents, countries } from '../data/countries'
import './International.css'

const International = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <div className="international-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600" alt="International" />
          <div className="page-hero-overlay"></div>
        </div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>International Tours</h1>
          <p>Explore the world's most amazing destinations</p>
        </motion.div>
      </section>

      {/* Search */}
      <section className="search-section">
        <div className="container">
          <div className="search-bar">
            <Search size={20} />
            <input 
              type="text"
              placeholder="Search countries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="countries-section section">
        <div className="container">
          <div className="countries-count">
            Showing {filteredCountries.length} countries
          </div>
          <div className="countries-grid">
            {filteredCountries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/international/${country.id}`} className="country-card">
                  <div className="country-image">
                    <img src={country.image} alt={country.name} loading="lazy" />
                  </div>
                  <div className="country-content">
                    <h3>{country.name}</h3>
                    <p>{country.description}</p>
                    <div className="country-info">
                      <div className="info-row">
                        <MapPin size={14} />
                        <span>{country.capital}</span>
                      </div>
                      <div className="info-row">
                        <Calendar size={14} />
                        <span>{country.bestTime}</span>
                      </div>
                    </div>
                    <span className="explore-link">
                      Explore <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default International
