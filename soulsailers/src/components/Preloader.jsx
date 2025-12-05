import { useState, useEffect, useRef } from "react";
import "./Preloader.css";

export default function Preloader({ onComplete }) {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
        onComplete?.();
      }, 500);
    };

    // Fallback timer in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      handleVideoEnd();
    }, 8000);

    if (video) {
      video.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (video) {
        video.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <div className="preloader-content">
        <div className="preloader-video-wrapper">
          <video
            ref={videoRef}
            className="preloader-video"
            autoPlay
            muted
            playsInline
          >
            <source src="/Preloder.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="preloader-logo">
          <img src="/logo.png" alt="SoulSailers" className="preloader-logo-img" />
        </div>
      </div>
    </div>
  );
}
