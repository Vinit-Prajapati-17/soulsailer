import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './ParallaxGallery.css'

const Column = ({ images, y, columnIndex }) => {
  return (
    <motion.div 
      className={`parallax-column parallax-column-${columnIndex}`} 
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="parallax-image-wrapper">
          <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </motion.div>
  )
}

const ParallaxGallery = ({ images = [], title = "Photo Gallery", subtitle = "Explore the beauty" }) => {
  const galleryRef = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [scrollInitialized, setScrollInitialized] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const initTimeoutRef = useRef(null)
  const retryCountRef = useRef(0)

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  })

  const { height } = dimension

  // Original desktop parallax values, minimal on mobile
  const y1 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? height * 0.3 : height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, isMobile ? height * 0.4 : height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  // Robust scroll system initialization
  useEffect(() => {
    const initializeScrollSystem = () => {
      try {
        if (initTimeoutRef.current) {
          clearTimeout(initTimeoutRef.current);
        }

        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Force scroll event system activation
        window.scrollTo({ top: 1, behavior: 'instant' });
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        if (currentScroll > 0) {
          window.scrollTo({ top: currentScroll, behavior: 'instant' });
        }
        
        window.dispatchEvent(new Event('scroll', { bubbles: true, cancelable: true }));
        window.dispatchEvent(new Event('resize', { bubbles: true, cancelable: true }));
        
        requestAnimationFrame(() => {
          window.dispatchEvent(new Event('scroll', { bubbles: true, cancelable: true }));
          setScrollInitialized(true);
          setIsReady(true);
        });
        
      } catch (error) {
        console.warn('Scroll initialization failed:', error);
        if (retryCountRef.current < 3) {
          retryCountRef.current++;
          initTimeoutRef.current = setTimeout(initializeScrollSystem, 100 * retryCountRef.current);
        }
      }
    };

    // Multiple initialization strategies
    initializeScrollSystem();
    
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeScrollSystem);
    }
    
    window.addEventListener('load', initializeScrollSystem);
    
    const delayedInit = setTimeout(initializeScrollSystem, 50);
    const secondaryInit = setTimeout(initializeScrollSystem, 200);
    
    const handleFirstScroll = () => {
      if (!scrollInitialized) {
        setScrollInitialized(true);
        setIsReady(true);
      }
    };
    
    window.addEventListener('scroll', handleFirstScroll, { passive: true, once: true });
    
    return () => {
      clearTimeout(delayedInit);
      clearTimeout(secondaryInit);
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
      }
      document.removeEventListener('DOMContentLoaded', initializeScrollSystem);
      window.removeEventListener('load', initializeScrollSystem);
      window.removeEventListener('scroll', handleFirstScroll);
    };
  }, []);

  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth
      setDimension({ width: w, height: window.innerHeight })
      setIsMobile(w <= 768)
    }
    window.addEventListener("resize", resize)
    resize()
    return () => window.removeEventListener("resize", resize)
  }, [])

  // Expand images array if needed (repeat images to fill columns)
  const expandedImages = [...images]
  while (expandedImages.length < 12) {
    expandedImages.push(...images.slice(0, Math.min(images.length, 12 - expandedImages.length)))
  }

  // For mobile: 2 columns with 4 images each
  // For desktop: 4 columns with 3 images each
  const col1 = isMobile 
    ? [expandedImages[0], expandedImages[2], expandedImages[4], expandedImages[6]].filter(Boolean)
    : [expandedImages[0], expandedImages[4], expandedImages[8]].filter(Boolean)
  const col2 = isMobile
    ? [expandedImages[1], expandedImages[3], expandedImages[5], expandedImages[7]].filter(Boolean)
    : [expandedImages[1], expandedImages[5], expandedImages[9]].filter(Boolean)
  const col3 = [expandedImages[2], expandedImages[6], expandedImages[10]].filter(Boolean)
  const col4 = [expandedImages[3], expandedImages[7], expandedImages[11]].filter(Boolean)

  return (
    <section className="parallax-gallery-section">
      <div className="parallax-header">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          {subtitle}
        </motion.p>
      </div>

      <div ref={galleryRef} className={`parallax-gallery-container ${isMobile ? 'mobile-view' : ''}`}>
        <Column images={col1} y={y1} columnIndex={1} />
        <Column images={col2} y={y2} columnIndex={2} />
        {!isMobile && <Column images={col3} y={y3} columnIndex={3} />}
        {!isMobile && <Column images={col4} y={y4} columnIndex={4} />}
      </div>
    </section>
  )
}

export default ParallaxGallery
