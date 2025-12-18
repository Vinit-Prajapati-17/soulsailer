import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react'
import { indianStates } from '../data/indianStates'
import './Navbar.css'

const BASE_URL = import.meta.env.BASE_URL;

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isIndiaMenuOpen, setIsIndiaMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsIndiaMenuOpen(false)
  }, [location])

  const regions = {
    north: indianStates.filter(s => s.region === 'North'),
    south: indianStates.filter(s => s.region === 'South'),
    east: indianStates.filter(s => s.region === 'East'),
    west: indianStates.filter(s => s.region === 'West'),
    central: indianStates.filter(s => s.region === 'Central'),
    northeast: indianStates.filter(s => s.region === 'Northeast'),
  }

  const hotPlaces = [
    { id: 'gujarat', name: 'Gujarat' },
    { id: 'goa', name: 'Goa' },
    { id: 'rajasthan', name: 'Rajasthan' },
    { id: 'maharastra', name: 'Maharastra' },
    { id: 'himachal-pradesh', name: 'Shimla & Manali' },
    

  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img 
            src={theme === 'light' ? `${BASE_URL}White logo.png` : `${BASE_URL}logo.png`} 
            alt="SoulSailers - Where Planning Meets Perfection" 
            className="logo-image" 
          />
        </Link>

        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          
          <div 
            className="nav-dropdown"
            onMouseEnter={() => setIsIndiaMenuOpen(true)}
            onMouseLeave={() => setIsIndiaMenuOpen(false)}
          >
            <Link to="/india" className={location.pathname.includes('/india') ? 'active' : ''}>
              India <ChevronDown size={16} />
            </Link>

            <AnimatePresence>
              {isIndiaMenuOpen && (
                <motion.div 
                  className="mega-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mega-menu-content">
                    {Object.entries(regions).map(([region, states]) => (
                      <div key={region} className="mega-menu-column">
                        <h4>{region.charAt(0).toUpperCase() + region.slice(1)} India</h4>
                        <ul>
                          {states.map(state => (
                            <li key={state.id}>
                              <Link to={`/india/${state.id}`}>{state.name}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mega-menu-hot-places">
                    <div className="mega-menu-column hot-places-column">
                      <h4>🔥 Hot Places</h4>
                      <ul className="hot-places-list">
                        {hotPlaces.map(place => (
                          <li key={place.id}>
                            <Link to={`/india/${place.id}`}>{place.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/international" className={location.pathname.includes('/international') ? 'active' : ''}>
            International
          </Link>
          <Link to="/itineraries" className={location.pathname === '/itineraries' ? 'active' : ''}>
            Itineraries
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <Link to="/">Home</Link>
            <Link to="/india">India</Link>
            <Link to="/international">International</Link>
            <Link to="/itineraries">Itineraries</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
