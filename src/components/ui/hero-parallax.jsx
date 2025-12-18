import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export const HeroParallax = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollInitialized, setScrollInitialized] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fix for scroll-based animations initialization
  useEffect(() => {
    const initializeScrollSystem = () => {
      // Force tiny scroll movement (0→1→0) to activate scroll event system
      window.scrollTo(0, 1);
      window.scrollTo(0, 0);
      
      // Dispatch scroll event to ensure Framer Motion detects it
      window.dispatchEvent(new Event('scroll', { bubbles: true }));
      
      setScrollInitialized(true);
    };

    // Initialize after component mounts
    const timer = setTimeout(initializeScrollSystem, 100);
    
    // Add scroll listener to ensure system stays active
    const handleScroll = () => {
      if (!scrollInitialized) {
        setScrollInitialized(true);
      }
    };

    // Add window load listener as fallback
    const handleLoad = () => {
      if (!scrollInitialized) {
        setTimeout(initializeScrollSystem, 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, [scrollInitialized]);

  // Intersection observer to reinitialize scroll system when hero becomes visible
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !scrollInitialized) {
            // Reinitialize scroll system when hero becomes visible
            setTimeout(() => {
              window.scrollTo(0, 1);
              window.scrollTo(0, 0);
              window.dispatchEvent(new Event('scroll', { bubbles: true }));
              setScrollInitialized(true);
            }, 50);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [scrollInitialized]);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? 500 : 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, isMobile ? -500 : -1000]),
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

  // Force initial values when scroll system isn't initialized
  useEffect(() => {
    if (!scrollInitialized) {
      rotateX.set(isMobile ? 10 : 15);
      rotateZ.set(isMobile ? 10 : 20);
      translateY.set(isMobile ? -400 : -700);
      opacity.set(0.2);
      translateX.set(0);
      translateXReverse.set(0);
    }
  }, [scrollInitialized, isMobile, rotateX, rotateZ, translateY, opacity, translateX, translateXReverse]);

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
      }}
      whileHover={{
        y: isMobile ? -5 : -10,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      key={product.title}
    >
      <a
        href={product.link}
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            height: "100%",
            width: "100%",
            opacity: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            pointerEvents: "none",
            transition: "opacity 0.3s ease",
            borderRadius: isMobile ? "10px" : "12px",
          }}
          className="card-overlay"
        />
        <h2
          style={{
            position: "absolute",
            bottom: isMobile ? "8px" : "12px",
            left: isMobile ? "8px" : "12px",
            opacity: 0,
            color: "white",
            fontSize: isMobile ? "0.85rem" : "1rem",
            fontWeight: 600,
            transition: "opacity 0.3s ease",
          }}
          className="card-title"
        >
          {product.title}
        </h2>
      </a>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';

export default HeroParallax;
