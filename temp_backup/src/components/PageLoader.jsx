import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./PageLoader.css";

const BASE_URL = import.meta.env.BASE_URL;

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();
  const videoRef = useRef(null);

  useEffect(() => {
    // Skip loader on home page
    if (location.pathname === "/" || location.pathname === "") {
      setIsLoading(false);
      return;
    }

    // Show loader on route change
    setIsLoading(true);
    setFadeOut(false);

    const video = videoRef.current;
    
    const handleVideoEnd = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };

    // Wait for video to end or use fallback timer
    if (video) {
      video.currentTime = 0;
      video.play();
      video.addEventListener("ended", handleVideoEnd);
    }

    // Fallback timer in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 2000);

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className={`page-loader ${fadeOut ? "fade-out" : ""}`}>
      <div className="page-loader-content">
        <video
          ref={videoRef}
          className="page-loader-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={`${BASE_URL}Load.mp4`} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
