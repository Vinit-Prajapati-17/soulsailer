import { useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { pathname } = useLocation()

  // Scroll to top on route change - use useLayoutEffect for immediate execution
  useLayoutEffect(() => {
    // Disable smooth scroll temporarily for instant scroll
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Re-enable smooth scroll after a brief delay
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth'
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname])

  // Show button when page is scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop
