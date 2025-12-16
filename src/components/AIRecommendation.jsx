import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Send, X, MapPin, Calendar, Users } from 'lucide-react'
import './AIRecommendation.css'

const AIRecommendation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [preferences, setPreferences] = useState({
    type: '',
    duration: '',
    budget: '',
    travelers: ''
  })
  const [recommendation, setRecommendation] = useState(null)

  const travelTypes = ['Adventure', 'Relaxation', 'Cultural', 'Wildlife', 'Beach', 'Mountains']
  const durations = ['Weekend', '1 Week', '2 Weeks', 'Month+']
  const budgets = ['Budget', 'Mid-Range', 'Luxury', 'Ultra-Luxury']
  const travelerTypes = ['Solo', 'Couple', 'Family', 'Group']

  const recommendations = {
    'Adventure-Mountains': { destination: 'Himachal Pradesh', highlight: 'Trekking in Manali & Kasol' },
    'Relaxation-Beach': { destination: 'Goa', highlight: 'Beach resorts & Ayurveda' },
    'Cultural-Budget': { destination: 'Rajasthan', highlight: 'Forts, palaces & heritage' },
    'Wildlife-Family': { destination: 'Kerala', highlight: 'Periyar Wildlife Sanctuary' },
    'default': { destination: 'Kerala', highlight: 'Backwaters & beaches' }
  }

  const getRecommendation = () => {
    const key1 = `${preferences.type}-${preferences.duration}`
    const key2 = `${preferences.type}-${preferences.budget}`
    const key3 = `${preferences.type}-${preferences.travelers}`
    
    const rec = recommendations[key1] || recommendations[key2] || recommendations[key3] || recommendations['default']
    setRecommendation(rec)
    setStep(5)
  }

  const handleSelect = (field, value) => {
    setPreferences(prev => ({ ...prev, [field]: value }))
    if (step < 4) {
      setStep(step + 1)
    } else {
      getRecommendation()
    }
  }

  const reset = () => {
    setStep(1)
    setPreferences({ type: '', duration: '', budget: '', travelers: '' })
    setRecommendation(null)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button 
        className="ai-float-btn"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Sparkles size={24} />
        <span>AI Recommend</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="ai-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              className="ai-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>

              <div className="ai-header">
                <Sparkles className="ai-icon" />
                <h3>AI Travel Recommendation</h3>
                <p>Answer a few questions to get personalized suggestions</p>
              </div>

              <div className="ai-content">
                {step === 1 && (
                  <div className="ai-step">
                    <h4>What type of travel experience are you looking for?</h4>
                    <div className="options-grid">
                      {travelTypes.map(type => (
                        <button 
                          key={type}
                          className={`option-btn ${preferences.type === type ? 'selected' : ''}`}
                          onClick={() => handleSelect('type', type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="ai-step">
                    <h4>How long is your trip?</h4>
                    <div className="options-grid">
                      {durations.map(duration => (
                        <button 
                          key={duration}
                          className={`option-btn ${preferences.duration === duration ? 'selected' : ''}`}
                          onClick={() => handleSelect('duration', duration)}
                        >
                          {duration}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="ai-step">
                    <h4>What's your budget preference?</h4>
                    <div className="options-grid">
                      {budgets.map(budget => (
                        <button 
                          key={budget}
                          className={`option-btn ${preferences.budget === budget ? 'selected' : ''}`}
                          onClick={() => handleSelect('budget', budget)}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="ai-step">
                    <h4>Who are you traveling with?</h4>
                    <div className="options-grid">
                      {travelerTypes.map(type => (
                        <button 
                          key={type}
                          className={`option-btn ${preferences.travelers === type ? 'selected' : ''}`}
                          onClick={() => handleSelect('travelers', type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 5 && recommendation && (
                  <div className="ai-result">
                    <div className="result-badge">✨ Perfect Match</div>
                    <h4>{recommendation.destination}</h4>
                    <p>{recommendation.highlight}</p>
                    <div className="result-tags">
                      <span><MapPin size={14} /> {preferences.type}</span>
                      <span><Calendar size={14} /> {preferences.duration}</span>
                      <span><Users size={14} /> {preferences.travelers}</span>
                    </div>
                    <button className="btn btn-orange" onClick={reset}>
                      Get Another Recommendation
                    </button>
                  </div>
                )}
              </div>

              <div className="ai-progress">
                {[1, 2, 3, 4, 5].map(s => (
                  <div key={s} className={`progress-dot ${step >= s ? 'active' : ''}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AIRecommendation
