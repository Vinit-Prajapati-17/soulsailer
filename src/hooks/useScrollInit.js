import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to ensure scroll-based animations work properly on first load
 * Fixes the issue where Framer Motion scroll listeners aren't initialized
 */
export const useScrollInit = () => {
  const [scrollInitialized, setScrollInitialized] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const initTimeoutRef = useRef(null);
  const retryCountRef = useRef(0);

  const initializeScrollSystem = useCallback(() => {
    try {
      // Clear any existing timeout
      if (initTimeoutRef.current) {
        clearTimeout(initTimeoutRef.current);
      }

      // Store current scroll position
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
      // Force scroll event system activation with tiny movement (0→1→0)
      window.scrollTo({ top: 1, behavior: 'instant' });
      window.scrollTo({ top: 0, behavior: 'instant' });
      
      // Restore original position if user had scrolled
      if (currentScroll > 0) {
        window.scrollTo({ top: currentScroll, behavior: 'instant' });
      }
      
      // Dispatch scroll and resize events to activate listeners
      window.dispatchEvent(new Event('scroll', { bubbles: true, cancelable: true }));
      window.dispatchEvent(new Event('resize', { bubbles: true, cancelable: true }));
      
      // Use requestAnimationFrame to ensure events are processed
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('scroll', { bubbles: true, cancelable: true }));
        setScrollInitialized(true);
        setIsReady(true);
      });
      
    } catch (error) {
      console.warn('Scroll initialization failed:', error);
      // Retry with exponential backoff (max 3 attempts)
      if (retryCountRef.current < 3) {
        retryCountRef.current++;
        initTimeoutRef.current = setTimeout(initializeScrollSystem, 100 * retryCountRef.current);
      }
    }
  }, []);

  useEffect(() => {
    // Multiple initialization strategies for maximum compatibility
    
    // Strategy 1: Immediate initialization
    initializeScrollSystem();
    
    // Strategy 2: DOM ready state
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initializeScrollSystem);
    }
    
    // Strategy 3: Window load event (fallback)
    window.addEventListener('load', initializeScrollSystem);
    
    // Strategy 4: Delayed initialization for SPA routing
    const delayedInit = setTimeout(initializeScrollSystem, 50);
    const secondaryInit = setTimeout(initializeScrollSystem, 200);
    
    // Strategy 5: First scroll event listener
    const handleFirstScroll = () => {
      if (!scrollInitialized) {
        setScrollInitialized(true);
        setIsReady(true);
      }
    };
    
    window.addEventListener('scroll', handleFirstScroll, { passive: true, once: true });
    
    // Cleanup function
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

  return {
    scrollInitialized,
    isReady,
    initializeScrollSystem
  };
};

export default useScrollInit;