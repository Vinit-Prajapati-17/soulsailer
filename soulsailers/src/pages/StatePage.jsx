import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, ArrowLeft } from 'lucide-react'
import { getStateById } from '../data/indianStates'
import ExpandableCard from '../components/ExpandableCard'
import ParallaxGallery from '../components/ParallaxGallery'
import './StatePage.css'

const StatePage = () => {
  const { stateId } = useParams()
  const state = getStateById(stateId)

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
          <img src={state.bannerImage || state.image} alt={state.name} />
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
              className="overview-attractions"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ExpandableCard attractions={state.attractions} stateId={state.id} />
            </motion.div>
          </div>
        </div>
      </section>




      {/* Photo Gallery - Parallax */}
      <ParallaxGallery 
        images={galleryImages} 
        title="Photo Gallery" 
        subtitle={`Glimpses of ${state.name}`} 
      />

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
