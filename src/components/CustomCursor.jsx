import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './CustomCursor.css'

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  // Smooth spring animation
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if device has touch capability
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) {
      setIsVisible(false)
      return
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, .btn, [role="button"], input, textarea, select, .destination-card, .service-card, .country-card, .state-card, .card-image, .gallery-item'
      )
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    addHoverListeners()
    
    const observer = new MutationObserver(() => addHoverListeners())
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      observer.disconnect()
    }
  }, [cursorX, cursorY, isVisible])

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  return (
    <div className={`custom-cursor-wrapper ${isVisible ? 'visible' : ''}`}>
      {/* Main cursor - Airplane */}
      <motion.div
        className={`cursor-plane ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="plane-icon"
        >
          <path 
            d="M2 2L22 12.5L12 15L9.5 22L2 2Z" 
            fill="currentColor"
          />
          <path 
            d="M2 2L12 15" 
            stroke="var(--bg-primary)" 
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className={`cursor-trail ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </div>
  )
}

export default CustomCursor
