import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export const HeroParallax = ({ products }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

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
      }}
    >
      <Header isMobile={isMobile} />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: isMobile ? "12px" : "20px",
            marginBottom: isMobile ? "12px" : "20px",
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

export const ProductCard = ({ product, translate, isMobile }) => {
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
      }}
      whileHover={{
        y: isMobile ? -5 : -10,
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
          }}
          alt={product.title}
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
};

export default HeroParallax;
