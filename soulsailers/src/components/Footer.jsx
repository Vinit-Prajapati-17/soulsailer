import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 800,0 1000,50 C1200,100 1350,0 1440,50 L1440,100 L0,100 Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src="/logo.png" alt="SoulSailers - Where Planning Meets Perfection" className="footer-logo-image" />
              </Link>
              <p className="footer-desc">
                Your trusted travel companion for exploring India and the world. 
                We craft unforgettable journeys with expert planning and local insights.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                <a href="#" aria-label="Youtube"><Youtube size={20} /></a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/india">Explore India</Link></li>
                <li><Link to="/international">International</Link></li>
                <li><Link to="/itineraries">Itineraries</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-links">
              <h4>Popular Destinations</h4>
              <ul>
                <li><Link to="/india/rajasthan">Rajasthan</Link></li>
                <li><Link to="/india/kerala">Kerala</Link></li>
                <li><Link to="/india/goa">Goa</Link></li>
                <li><Link to="/international/thailand">Thailand</Link></li>
                <li><Link to="/international/switzerland">Switzerland</Link></li>
                <li><Link to="/international/japan">Japan</Link></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <MapPin size={18} />
                  <span>123 Travel Street, Mumbai, India</span>
                </li>
                <li>
                  <Phone size={18} />
                  <span>+91 98765 43210</span>
                </li>
                <li>
                  <Mail size={18} />
                  <span>hello@soulsailers.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SoulSailers. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
