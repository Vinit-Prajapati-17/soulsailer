import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialButtons from './components/SocialButtons'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import India from './pages/India'
import StatePage from './pages/StatePage'
import International from './pages/International'
import CountryPage from './pages/CountryPage'
import Itineraries from './pages/Itineraries'
import About from './pages/About'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)
  const [scrollSystemReady, setScrollSystemReady] = useState(false)

  // Initialize scroll system at app level
  useEffect(() => {
    const initializeScrollSystem = () => {
      try {
        // Force scroll event system activation
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({ top: 1, behavior: 'instant' });
        window.scrollTo({ top: currentScroll, behavior: 'instant' });
        
        // Dispatch events to ensure scroll listeners are active
        window.dispatchEvent(new Event('scroll', { bubbles: true }));
        window.dispatchEvent(new Event('resize', { bubbles: true }));
        
        setScrollSystemReady(true);
      } catch (error) {
        console.warn('App-level scroll initialization failed:', error);
        setScrollSystemReady(true); // Continue anyway
      }
    };

    // Initialize immediately and on load
    initializeScrollSystem();
    window.addEventListener('load', initializeScrollSystem);
    
    return () => {
      window.removeEventListener('load', initializeScrollSystem);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      {!isLoading && <PageLoader />}
      {!isLoading && <CustomCursor />}
      <div className={`app ${!isLoading ? 'custom-cursor-active' : ''}`} style={{ display: isLoading ? 'none' : 'block' }}>
        {scrollSystemReady && (
          <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/india" element={<India />} />
                <Route path="/india/:stateId" element={<StatePage />} />
                <Route path="/international" element={<International />} />
                <Route path="/international/:countryId" element={<CountryPage />} />
                <Route path="/itineraries" element={<Itineraries />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
              </Routes>
            </main>
            <Footer />
            <SocialButtons />
            <ScrollToTop />
          </>
        )}
      </div>
    </>
  )
}

export default App
