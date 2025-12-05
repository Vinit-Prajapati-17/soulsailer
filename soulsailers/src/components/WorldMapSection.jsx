import { motion } from "motion/react";
import { DottedMap } from "./ui/dotted-map";
import { useEffect, useState } from "react";

const markers = [
  { lat: 28.6139, lng: 77.209, size: 0.5 }, // New Delhi (main hub)
  { lat: 19.076, lng: 72.8777, size: 0.4 }, // Mumbai
  { lat: 51.5074, lng: -0.1278, size: 0.4 }, // London
  { lat: 48.8566, lng: 2.3522, size: 0.4 }, // Paris
  { lat: 25.2048, lng: 55.2708, size: 0.4 }, // Dubai
  { lat: 1.3521, lng: 103.8198, size: 0.4 }, // Singapore
  { lat: 13.7563, lng: 100.5018, size: 0.4 }, // Bangkok
  { lat: 35.6762, lng: 139.6503, size: 0.4 }, // Tokyo
  { lat: -33.8688, lng: 151.2093, size: 0.4 }, // Sydney
  { lat: 40.7128, lng: -74.006, size: 0.4 }, // New York
];

// Flight routes connecting all orange dots
const flightRoutes = [
  // From New Delhi (hub)
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 19.076, lng: 72.8777 } }, // Delhi to Mumbai
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 51.5074, lng: -0.1278 } }, // Delhi to London
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 25.2048, lng: 55.2708 } }, // Delhi to Dubai
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 1.3521, lng: 103.8198 } }, // Delhi to Singapore
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 13.7563, lng: 100.5018 } }, // Delhi to Bangkok
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 48.8566, lng: 2.3522 } }, // Delhi to Paris
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 35.6762, lng: 139.6503 } }, // Delhi to Tokyo
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: -33.8688, lng: 151.2093 } }, // Delhi to Sydney
  { start: { lat: 28.6139, lng: 77.209 }, end: { lat: 40.7128, lng: -74.006 } }, // Delhi to New York
  // Additional connections
  { start: { lat: 19.076, lng: 72.8777 }, end: { lat: 25.2048, lng: 55.2708 } }, // Mumbai to Dubai
  { start: { lat: 51.5074, lng: -0.1278 }, end: { lat: 40.7128, lng: -74.006 } }, // London to New York
  { start: { lat: 48.8566, lng: 2.3522 }, end: { lat: 51.5074, lng: -0.1278 } }, // Paris to London
  { start: { lat: 1.3521, lng: 103.8198 }, end: { lat: -33.8688, lng: 151.2093 } }, // Singapore to Sydney
  { start: { lat: 13.7563, lng: 100.5018 }, end: { lat: 35.6762, lng: 139.6503 } }, // Bangkok to Tokyo
];

// Convert lat/lng to SVG coordinates
const projectPoint = (lat, lng, width = 150, height = 75) => {
  const x = ((lng + 180) / 360) * width;
  const y = ((90 - lat) / 180) * height;
  return { x, y };
};

// Create curved path between two points with 3D arc effect
const createCurvedPath = (start, end) => {
  const distance = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
  const arcHeight = Math.min(distance * 0.4, 20); // Dynamic arc height based on distance
  const midX = (start.x + end.x) / 2;
  const midY = Math.min(start.y, end.y) - arcHeight;
  return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
};

// Animated traveling dot component
const TravelingDot = ({ path, delay, duration }) => {
  return (
    <g className="traveling-dot-group">
      {/* Main traveling dot with glow */}
      <circle r="0.8" className="traveling-dot-glow">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={path}
        />
      </circle>
      {/* Core dot */}
      <circle r="0.4" className="traveling-dot-core">
        <animateMotion
          dur={`${duration}s`}
          repeatCount="indefinite"
          begin={`${delay}s`}
          path={path}
        />
      </circle>
      {/* Trail effect - multiple smaller dots */}
      {[0.1, 0.2, 0.3].map((trailDelay, idx) => (
        <circle
          key={idx}
          r={0.25 - idx * 0.05}
          className="traveling-dot-trail"
          style={{ opacity: 0.6 - idx * 0.15 }}
        >
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin={`${delay + trailDelay}s`}
            path={path}
          />
        </circle>
      ))}
    </g>
  );
};

export default function WorldMapSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="world-map-section">
      <div className="container">
        <div className="world-map-header">
          <p className="world-map-title">
            Global{" "}
            <span className="animated-text">
              {"Connectivity".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  style={{ display: "inline-block" }}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="world-map-subtitle">
            Connect with destinations across the globe. From India to Europe,
            Asia to Americas - explore the world with SoulSailers.
          </p>
        </div>
        <div className="dotted-map-container map-3d-perspective">
          <div className="map-gradient-overlay" />
          <DottedMap markers={markers} markerColor="#F5A623" />
          
          {/* 3D Animated Flight Paths Overlay */}
          <svg
            viewBox="0 0 150 75"
            className="flight-paths-svg"
          >
            <defs>
              {/* Orange gradient for paths */}
              <linearGradient id="orange-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0" />
                <stop offset="20%" stopColor="#F5A623" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#FF8C00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </linearGradient>
              
              {/* Glow filter for 3D effect */}
              <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              {/* Stronger glow for dots */}
              <filter id="dot-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="0.8" result="blur" />
                <feFlood floodColor="#F5A623" floodOpacity="0.8" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Radial gradient for endpoint markers */}
              <radialGradient id="endpoint-gradient">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="1" />
                <stop offset="50%" stopColor="#F5A623" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {flightRoutes.map((route, i) => {
              const startPoint = projectPoint(route.start.lat, route.start.lng);
              const endPoint = projectPoint(route.end.lat, route.end.lng);
              const pathD = createCurvedPath(startPoint, endPoint);
              const duration = 2.5 + (i % 3) * 0.5; // Varied durations
              const delay = i * 0.4;
              
              return (
                <g key={`route-${i}`} className="flight-route-group">
                  {/* Base path with subtle glow */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="rgba(245, 166, 35, 0.15)"
                    strokeWidth="0.8"
                    filter="url(#glow-filter)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      pathLength: { duration: 1.5, delay: delay * 0.5, ease: "easeOut" },
                      opacity: { duration: 0.3, delay: delay * 0.5 },
                    }}
                  />
                  
                  {/* Animated dashed path that draws */}
                  <motion.path
                    d={pathD}
                    fill="none"
                    stroke="url(#orange-path-gradient)"
                    strokeWidth="0.4"
                    strokeDasharray="1 0.5"
                    className="animated-dash-path"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      pathLength: { duration: 2, delay: delay * 0.5, ease: "easeInOut" },
                      opacity: { duration: 0.5, delay: delay * 0.5 },
                    }}
                  />
                  
                  {/* 3D Traveling dot with trail */}
                  {isVisible && (
                    <TravelingDot 
                      path={pathD} 
                      delay={delay} 
                      duration={duration}
                    />
                  )}
                  
                  {/* Start point - pulsing orange marker */}
                  <g className="endpoint-marker">
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      r="1"
                      fill="url(#endpoint-gradient)"
                      filter="url(#dot-glow)"
                    />
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      r="0.4"
                      fill="#FFD700"
                    />
                    {/* Pulse ring */}
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      r="0.8"
                      fill="none"
                      stroke="#F5A623"
                      strokeWidth="0.15"
                      className="pulse-ring"
                    >
                      <animate
                        attributeName="r"
                        from="0.8"
                        to="2.5"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.8"
                        to="0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                  
                  {/* End point - pulsing orange marker */}
                  <g className="endpoint-marker">
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      r="0.8"
                      fill="url(#endpoint-gradient)"
                      filter="url(#dot-glow)"
                    />
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      r="0.3"
                      fill="#FFD700"
                    />
                    {/* Pulse ring */}
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      r="0.6"
                      fill="none"
                      stroke="#FF8C00"
                      strokeWidth="0.1"
                      className="pulse-ring"
                    >
                      <animate
                        attributeName="r"
                        from="0.6"
                        to="2"
                        dur="2.5s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        from="0.6"
                        to="0"
                        dur="2.5s"
                        begin={`${i * 0.2}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
