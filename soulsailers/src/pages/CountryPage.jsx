import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, DollarSign, Clock, ArrowLeft, Plane, Camera } from 'lucide-react'
import { getCountryById, continents } from '../data/countries'
import ExpandableCard from '../components/ExpandableCard'
import './CountryPage.css'

const CountryPage = () => {
  const { countryId } = useParams()
  const country = getCountryById(countryId)

  if (!country) {
    return (
      <div className="not-found">
        <h2>Country not found</h2>
        <Link to="/international" className="btn btn-primary">Back to International</Link>
      </div>
    )
  }

  const continent = continents.find(c => c.id === country.continent)

  const galleryImages = country.gallery || [
    country.image,
    'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600',
    'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600',
    'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600',
    'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600',
  ]

  return (
    <div className="country-page">
      {/* Hero */}
      <section className="country-hero">
        <div className="country-hero-bg">
          <img src={country.image} alt={country.name} />
          <div className="country-hero-overlay"></div>
        </div>
        <motion.div 
          className="country-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/international" className="back-link">
            <ArrowLeft size={18} /> Back to International
          </Link>
          <div className="country-badge">{continent?.icon} {continent?.name}</div>
          <h1>{country.name}</h1>
          <p>{country.description}</p>
          <div className="country-quick-info">
            <span><MapPin size={18} /> {country.capital}</span>
            <span><Calendar size={18} /> {country.bestTime}</span>
            <span><DollarSign size={18} /> {country.costRange}</span>
          </div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="country-overview section">
        <div className="container">
          <div className="overview-grid">
            <motion.div 
              className="overview-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>About {country.name}</h2>
              <p>{country.description}</p>
              <p>
                {country.name} offers travelers an incredible mix of experiences, from world-famous 
                landmarks to hidden local gems. Whether you're seeking adventure, culture, relaxation, 
                or culinary delights, this destination has something special waiting for you.
              </p>
              
              <div className="info-cards">
                <div className="info-card">
                  <Calendar className="info-icon" />
                  <div>
                    <h4>Best Time to Visit</h4>
                    <p>{country.bestTime}</p>
                  </div>
                </div>
                <div className="info-card">
                  <DollarSign className="info-icon" />
                  <div>
                    <h4>Budget Range</h4>
                    <p>{country.costRange}</p>
                  </div>
                </div>
                <div className="info-card">
                  <Clock className="info-icon" />
                  <div>
                    <h4>Suggested Duration</h4>
                    <p>7-10 days recommended</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ExpandableCard attractions={country.attractions} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="country-gallery section alt-bg">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Photo Gallery</h2>
            <p className="section-subtitle">Glimpses of {country.name}</p>
          </motion.div>

          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={img} alt={`${country.name} ${index + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <Camera size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="country-cta section">
        <div className="container">
          <motion.div 
            className="cta-box"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Plane className="cta-icon" />
            <h2>Ready to Visit {country.name}?</h2>
            <p>Let us help you plan the perfect international trip</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-orange">Plan My Trip</Link>
              <Link to="/international" className="btn btn-outline">Explore More Countries</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CountryPage
