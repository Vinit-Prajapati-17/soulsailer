import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export const HeroParallax = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollInitialized, setScrollInitialized] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const initTimeoutRef = useRef(null);
  const retryCountRef = useRef(0);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Robust scroll system initialization
  const initializeScrollSystem = useCallback(() => {
    try {
      // Clear any existing timeout
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
      }

      // Force scroll event system activation with multiple approaches
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Method 1: Tiny scroll movement (0→1→0)
      window.scrollTo({ top: 1, behavior: 'instant' });
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Method 2: Restore original position if user had scrolled
      if (currentScroll > 0) {
        window.scrollTo({ top: currentScroll, behavior: 'instant' });
      }
      
      // Method 3: Force scroll events
      window.dispatchEvent(new Event('scroll', { bubbles: true, cancelable: true }));
      window.dispatchEvent(new Event('resize', { bubbles: true, cancelable: true }));
      
      // Method 4: RequestAnimationFrame for next frame
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('scroll', { bubbles: true, cancelable: true }));
        setScrollInitialized(true);
        setIsReady(true);
      });
      
    } catch (error) {
      console.warn('Scroll initialization failed:', error);
      // Retry with exponential backoff
      if (retryCountRef.current < 3) {
        retryCountRef.current++;
        initTimeoutRef.current = setTimeout(initializeScrollSystem, 100 * retryCountRef.current);
      }
    }
  }, []);

  // Multiple initialization strategies
  useEffect(() => {
    // Strategy 1: Immediate initialization
    initializeScrollSystem();
    
    // Strategy 2: DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeScrollSystem);
    }
    
    // Strategy 3: Window load (fallback)
    window.addEventListener('load', initializeScrollSystem);
    
    // Strategy 4: Delayed initialization for SPA routing
    const delayedInit = setTimeout(initializeScrollSystem, 50);
    const secondaryInit = setTimeout(initializeScrollSystem, 200);
    
    // Strategy 5: Scroll listener activation
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
  }, [initializeScrollSystem]);

  // Intersection observer for visibility-based reinitialization
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!scrollInitialized || !isReady) {
              // Reinitialize when hero becomes visible
              setTimeout(initializeScrollSystem, 16); // Next frame
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [initializeScrollSystem, scrollInitialized, isReady]);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Initial offset for cards to start from the right position
  const initialOffset = isMobile ? 200 : 400;

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [initialOffset, isMobile ? 500 + initialOffset : 1000 + initialOffset]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [-initialOffset, isMobile ? -500 - initialOffset : -1000 - initialOffset]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 10 : 15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? 10 : 20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [isMobile ? -400 : -700, isMobile ? 100 : 200]),
    springConfig
  );

  // Force initial values when scroll system isn't ready
  useEffect(() => {
    if (!isReady || !scrollInitialized) {
      // Set initial transform values immediately
      const initialRotateX = isMobile ? 10 : 15;
      const initialRotateZ = isMobile ? 10 : 20;
      const initialTranslateY = isMobile ? -400 : -700;
      
      rotateX.set(initialRotateX);
      rotateZ.set(initialRotateZ);
      translateY.set(initialTranslateY);
      opacity.set(0.2);
      translateX.set(1);
      translateXReverse.set(1);
    }
  }, [isReady, scrollInitialized, isMobile, rotateX, rotateZ, translateY, opacity, translateX, translateXReverse]);

  return (
    <div
      ref={ref}
      style={{
        height: isMobile ? "180vh" : "230vh",
        paddingTop: isMobile ? "120px" : "180px",
        paddingBottom: isMobile ? "80px" : "150px",
        overflowX: "hidden",
        overflowY: "visible",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignSelf: "auto",
        perspective: "1000px",
        transformStyle: "preserve-3d",
        background: "var(--bg-primary)",
        width: "100%",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <Header isMobile={isMobile} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
        }}
        initial={{
          rotateX: isMobile ? 10 : 15,
          rotateZ: isMobile ? 10 : 20,
          translateY: isMobile ? -400 : -700,
          opacity: 0.2,
        }}
        animate={isReady ? {} : {
          rotateX: isMobile ? 10 : 15,
          rotateZ: isMobile ? 10 : 20,
          translateY: isMobile ? -400 : -700,
          opacity: 0.2,
        }}
        transition={{
          duration: 0.1,
          ease: "linear"
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: isMobile ? "12px" : "20px",
            marginBottom: isMobile ? "12px" : "20px",
            willChange: "transform",
            contain: "layout style paint",
          }}
        >
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: isMobile ? "12px" : "20px",
            marginBottom: isMobile ? "12px" : "20px",
            willChange: "transform",
            contain: "layout style paint",
          }}
        >
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: isMobile ? "12px" : "20px",
            willChange: "transform",
            contain: "layout style paint",
          }}
        >
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = ({ isMobile }) => {
  return (
    <div
      style={{
        maxWidth: "1280px",
        position: "relative",
        margin: "0 auto",
        paddingTop: isMobile ? "20px" : "40px",
        paddingBottom: isMobile ? "40px" : "80px",
        paddingLeft: isMobile ? "15px" : "16px",
        paddingRight: isMobile ? "15px" : "16px",
        width: "100%",
        left: 0,
        top: 0,
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "1.75rem" : "clamp(2rem, 5vw, 4.5rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.1,
          opacity: 1,
        }}
      >
        Explore The World With <br />
        
        <span
          style={{
            background: "linear-gradient(135deg, var(--orange) 0%, #FF8C42 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
                        SoulSailers
        </span>
      </h1>
      <p
        style={{
          maxWidth: "672px",
          fontSize: isMobile ? "0.9rem" : "clamp(1rem, 2vw, 1.25rem)",
          marginTop: isMobile ? "20px" : "32px",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
        }}
      >
        Discover breathtaking destinations across India and around the globe.
        From the majestic Himalayas to tropical beaches, ancient temples to modern cities.
        Your perfect adventure awaits.
      </p>
    </div>
  );
};

export const ProductCard = React.memo(({ product, translate, isMobile }) => {
  return (
    <motion.div
      style={{
        x: translate,
        height: isMobile ? "160px" : "240px",
        width: isMobile ? "220px" : "320px",
        position: "relative",
        flexShrink: 0,
        borderRadius: isMobile ? "10px" : "12px",
        overflow: "hidden",
        willChange: "transform",
        backfaceVisibility: "hidden",
        pointerEvents: "none",
      }}
      key={product.title}
    >
      <div
        style={{
          display: "block",
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: 0,
            borderRadius: isMobile ? "10px" : "12px",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
          alt={product.title}
          loading="lazy"
          decoding="async"
        />
      </div>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';

export default HeroParallax;
