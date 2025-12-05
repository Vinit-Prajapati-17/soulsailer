import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIRecommendation from './components/AIRecommendation'
import ScrollToTop from './components/ScrollToTop'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import India from './pages/India'
import StatePage from './pages/StatePage'
import International from './pages/International'
import CountryPage from './pages/CountryPage'
import Itineraries from './pages/Itineraries'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className="app">
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
          </Routes>
        </main>
        <Footer />
        <AIRecommendation />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
