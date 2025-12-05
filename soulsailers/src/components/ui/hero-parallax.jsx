import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export const HeroParallax = ({ products }) => {
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
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      style={{
        height: "230vh",
        paddingTop: "180px",
        paddingBottom: "150px",
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
      <Header />
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
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            gap: "20px",
          }}
        >
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div
      style={{
        maxWidth: "1280px",
        position: "relative",
        margin: "0 auto",
        paddingTop: "40px",
        paddingBottom: "80px",
        paddingLeft: "16px",
        paddingRight: "16px",
        width: "100%",
        left: 0,
        top: 0,
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 4.5rem)",
          fontWeight: 700,
          color: "var(--text-primary)",
          lineHeight: 1.1,
        }}
      >
        Explore The World <br />
        <span
          style={{
            background: "linear-gradient(135deg, var(--orange) 0%, #FF8C42 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          With SoulSailers
        </span>
      </h1>
      <p
        style={{
          maxWidth: "672px",
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          marginTop: "32px",
          color: "var(--text-secondary)",
          lineHeight: 1.8,
        }}
      >
        Discover breathtaking destinations across India and around the globe.
        From the majestic Himalayas to tropical beaches, ancient temples to modern cities.
        Your perfect adventure awaits.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
        height: "240px",
        width: "320px",
        position: "relative",
        flexShrink: 0,
        borderRadius: "12px",
        overflow: "hidden",
      }}
      whileHover={{
        y: -10,
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
            borderRadius: "12px",
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
            borderRadius: "12px",
          }}
          className="card-overlay"
        />
        <h2
          style={{
            position: "absolute",
            bottom: "12px",
            left: "12px",
            opacity: 0,
            color: "white",
            fontSize: "1rem",
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
