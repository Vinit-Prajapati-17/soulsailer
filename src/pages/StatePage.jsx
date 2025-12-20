import { useParams, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Calendar, Clock, ArrowLeft, Download, Eye } from 'lucide-react'
import { getStateById } from '../data/indianStates'
import { getCountryById } from '../data/countries'
import ExpandableCard from '../components/ExpandableCard'
import ParallaxGallery from '../components/ParallaxGallery'
import './StatePage.css'

const BASE_URL = import.meta.env.BASE_URL;

// PDF mapping for states that have PDFs available
const statePDFMapping = {
  'andhra-pradesh': 'Andhra pradesh.pdf',
  'arunachal-pradesh': 'Arunachal Pradesh.pdf',
  'assam': 'assam.pdf',
  'delhi': 'Delhi.pdf',
  'goa': 'Goa.pdf',
  'haryana': 'Haryana.pdf',
  'himachal-pradesh': 'Himachal.pdf',
  'jammu-kashmir': 'Jammu.pdf',
  'karnataka': 'karnataka.pdf',
  'kerala': 'kerala.pdf',
  'maharashtra': 'Maharashtra.pdf',
  'manipur': 'Manipur.pdf',
  'meghalaya': 'meghayalaya.pdf',
  'mizoram': 'Mizoram.pdf',
  'nagaland': 'Nagaland.pdf',
  'odisha': 'odisha.pdf',
  'punjab': 'Punjab Travel Plan.pdf',
  'rajasthan': 'Rajasthan.pdf',
  'sikkim': 'Sikkim.pdf',
  'telangana': 'talangana.pdf',
  'tamil-nadu': 'Tamil nadu.pdf',
  'tripura': 'tripura.pdf',
  'uttar-pradesh': 'Uttar pradesh.pdf',
  'uttarakhand': 'Uttrakhand .pdf',
  'west-bengal': 'west bengal.pdf'
}

// PDF mapping for international destinations
const internationalPDFMapping = {
  'andaman-nicobar': 'andaman.pdf',
  'bali': 'bali.pdf',
  'uae': 'dubai.pdf',
  'lakshadweep': 'lakshadweep.pdf',
  'malaysia': 'malasiya.pdf',
  'maldives': 'maldives.pdf',
  'singapore': 'singapore.pdf',
  'thailand': 'thailand.pdf',
  'vietnam': 'vietnam.pdf'
}

// Multiple PDFs for Gujarat state
const gujaratPDFs = [
  { name: 'Ahmedabad & Surendranagar', file: 'Ahmedabad & Surendranagar.pdf' },
  { name: 'Amreli & Bhavnagar', file: 'Amreli & Bhavnagar.pdf' },
  { name: 'Anand & Kheda', file: 'Anand & Kheda.pdf' },
  { name: 'Devbhumi Dwarka & Jamnagar', file: 'Devbhumi Dwarka & Jamnagar.pdf' },
  { name: 'Gandhinagar, Mehsana & Sabarkantha', file: 'Gandhinagar, Mehsana & Sabarkantha.pdf' },
  { name: 'Gir Somnath & Diu', file: 'Gir Somnath & Diu.pdf' },
  { name: 'Junagadh & Porbandar', file: 'Junagadh & Porbandar.pdf' },
  { name: 'Kutch & Morbi', file: 'Kutch & Morbi.pdf' },
  { name: 'North Gujarat', file: 'North Gujarat.pdf' },
  { name: 'Panchmahal, Dahod & Mahisagar', file: 'Panchmahal, Dahod & Mahisagar.pdf' },
  { name: 'Rajkot & Botad', file: 'Rajkot & Botad.pdf' }
]

const StatePage = () => {
  const { stateId } = useParams()
  const location = useLocation()
  const isInternational = location.pathname.includes('/international/')
  
  // Get state/country data based on type
  const state = isInternational ? getCountryById(stateId) : getStateById(stateId)

  if (!state) {
    return (
      <div className="not-found">
        <h2>{isInternational ? 'Country' : 'State'} not found</h2>
        <Link to={isInternational ? "/international" : "/india"} className="btn btn-primary">
          Back to {isInternational ? 'International' : 'India'}
        </Link>
      </div>
    )
  }

  // Check if PDF is available
  const pdfFileName = isInternational 
    ? internationalPDFMapping[stateId]
    : statePDFMapping[stateId]
  
  const pdfUrl = pdfFileName 
    ? `${BASE_URL}${isInternational ? 'internationaldetails' : 'indiaDetails'}/${pdfFileName}` 
    : null
  
  // Check if this is Gujarat (multiple PDFs) - only for Indian states
  const isGujarat = !isInternational && stateId === 'gujarat'
  const gujaratPDFUrls = isGujarat ? gujaratPDFs.map(pdf => ({
    ...pdf,
    url: `${BASE_URL}indiaDetails/Gujarat/${pdf.file}`
  })) : []

  const handleViewPDF = (url) => {
    if (url) {
      window.open(url, '_blank')
    }
  }

  const handleDownloadPDF = (url, filename) => {
    if (url) {
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
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
          <motion.div 
            className="state-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="container-inner">
              <Link to={isInternational ? "/international" : "/india"} className="back-link">
                <ArrowLeft size={18} /> Back to {isInternational ? 'International' : 'India'}
              </Link>
            </div>
          </motion.div>
        </div>
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

              {/* PDF Section - Only show if PDF is available */}
              {(pdfUrl || isGujarat) && (
                <motion.div 
                  className="pdf-section"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3>Travel Guide{isGujarat ? 's' : ''}</h3>
                  <p>
                    {isGujarat 
                      ? `Explore detailed travel guides for different regions of ${state.name}`
                      : `Download or view our detailed travel guide for ${state.name}`
                    }
                  </p>
                  
                  {/* Single PDF for other states */}
                  {pdfUrl && !isGujarat && (
                    <div className="pdf-buttons">
                      <button 
                        onClick={() => handleViewPDF(pdfUrl)}
                        className="btn btn-outline pdf-btn"
                      >
                        <Eye size={18} />
                        View PDF
                      </button>
                      <button 
                        onClick={() => handleDownloadPDF(pdfUrl, pdfFileName)}
                        className="btn btn-orange pdf-btn"
                      >
                        <Download size={18} />
                        Download PDF
                      </button>
                    </div>
                  )}
                  
                  {/* Multiple PDFs for Gujarat */}
                  {isGujarat && (
                    <div className="gujarat-pdfs-grid">
                      {gujaratPDFUrls.map((pdf, index) => (
                        <motion.div 
                          key={index}
                          className="gujarat-pdf-card"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <h4>{pdf.name}</h4>
                          <div className="pdf-card-buttons">
                            <button 
                              onClick={() => handleViewPDF(pdf.url)}
                              className="btn btn-outline pdf-card-btn"
                            >
                              <Eye size={16} />
                              View
                            </button>
                            <button 
                              onClick={() => handleDownloadPDF(pdf.url, pdf.file)}
                              className="btn btn-orange pdf-card-btn"
                            >
                              <Download size={16} />
                              Download
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
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
