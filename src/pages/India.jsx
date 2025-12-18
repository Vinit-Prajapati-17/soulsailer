import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Calendar, ArrowRight, Filter } from 'lucide-react'
import { indianStates } from '../data/indianStates'
import './India.css'

const India = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')

  const regions = ['all', 'North', 'South', 'East', 'West', 'Central', 'Northeast']

  const filteredStates = indianStates.filter(state => {
    const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRegion = selectedRegion === 'all' || state.region === selectedRegion
    return matchesSearch && matchesRegion
  })

  return (
    <div className="india-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600" alt="India" />
          <div className="page-hero-overlay"></div>
        </div>
        <motion.div 
          className="page-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Explore India</h1>
          <p>Discover the incredible diversity of 28 states and 8 union territories</p>
        </motion.div>
      </section>

      {/* Compact Filter Bar */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-wrapper">
            <div className="filters-bar">
              <div className="search-filter">
                <Search size={16} />
                <input 
                  type="text"
                  placeholder="Search states..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="clear-search" onClick={() => setSearchQuery('')}>×</button>
                )}
              </div>
              
              <div className="region-filters">
                <div className="filter-pills">
                  {regions.map(region => (
                    <button
                      key={region}
                      className={`filter-pill ${selectedRegion === region ? 'active' : ''}`}
                      onClick={() => setSelectedRegion(region)}
                    >
                      {region === 'all' ? 'All' : region}
                    </button>
                  ))}
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </section>

      {/* States Grid */}
      <section className="states-section section">
        <div className="container">

          <div className="states-grid">
            {filteredStates.map((state, index) => (
              <motion.div
                key={state.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link to={`/india/${state.id}`} className="state-card">
                  <div className="state-image">
                    <img src={state.image} alt={state.name} loading="lazy" />
                  </div>
                  <div className="state-content">
                    <h3>{state.name}</h3>
                    <p>{state.description}</p>
                    <div className="state-info">
                      <div className="info-row">
                        <MapPin size={14} />
                        <span>{state.capital}</span>
                      </div>
                      <div className="info-row">
                        <Calendar size={14} />
                        <span>{state.bestTime}</span>
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

export default India
