import { useState, useEffect, useMemo } from 'react';

/**
 * 🎯 Custom hook לזיהוי מסכים וניהול רספונסיביות
 * תומך במגוון רחב של מכשירים ומסכים
 */
export const useResponsive = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  const [screenInfo, setScreenInfo] = useState({
    pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
    orientation: typeof window !== 'undefined' && window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
  });

  // 📱 זיהוי מובייל חזק ומדויק
  const detectMobile = () => {
    if (typeof window === 'undefined') return false;
    
    // בדיקה לפי User Agent
    const isMobileUserAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // בדיקה לפי touch support
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // בדיקה לפי רוחב מסך
    const isMobileWidth = dimensions.width <= 768;
    
    // אם אחד מהתנאים מתקיים + רוחב קטן = מובייל
    return (isMobileUserAgent || (isTouchDevice && isMobileWidth));
  };

  // 🖥️ זיהוי סוגי מכשירים
  const breakpoints = useMemo(() => {
    const { width } = dimensions;
    const mobile = detectMobile();
    
    return {
      isMobile: mobile || width <= 768,
      isTablet: !mobile && width > 768 && width <= 1024,
      isLaptop: width > 1024 && width <= 1366,
      isDesktop: width > 1366 && width <= 1920,
      isLargeScreen: width > 1920 && width <= 2560,
      isXLarge: width > 2560 && width <= 3840,
      isUltraWide: width > 3840,
      
      // מידע נוסף שימושי
      isSmallMobile: mobile && width <= 375,
      isMediumMobile: mobile && width > 375 && width <= 428,
      isLargeMobile: mobile && width > 428 && width <= 768,
      
      // אוריינטציה
      isPortrait: screenInfo.orientation === 'portrait',
      isLandscape: screenInfo.orientation === 'landscape',
      
      // רזולוציה
      isRetina: screenInfo.pixelRatio >= 2,
      is4K: width >= 3840 && dimensions.height >= 2160
    };
  }, [dimensions, screenInfo]);

  // 📊 עדכון מידות בזמן אמת
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      
      setScreenInfo({
        pixelRatio: window.devicePixelRatio || 1,
        orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
      });
    };

    // Debounce לביצועים טובים יותר
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  /**
   * 🎨 פונקציה לקבלת ערך רספונסיבי
   * מקבלת אובייקט עם ערכים שונים לכל breakpoint
   */
  const getResponsiveValue = (values) => {
    const { 
      isMobile, 
      isTablet, 
      isLaptop, 
      isDesktop, 
      isLargeScreen,
      isXLarge,
      isUltraWide 
    } = breakpoints;

    // בדיקה לפי סדר עדיפות
    if (isMobile && values.mobile !== undefined) return values.mobile;
    if (isTablet && values.tablet !== undefined) return values.tablet;
    if (isLaptop && values.laptop !== undefined) return values.laptop;
    if (isDesktop && values.desktop !== undefined) return values.desktop;
    if (isLargeScreen && values.large !== undefined) return values.large;
    if (isXLarge && values.xlarge !== undefined) return values.xlarge;
    if (isUltraWide && values.ultrawide !== undefined) return values.ultrawide;

    // Fallback chain - מהגדול לקטן
    if (isUltraWide) {
      return values.xlarge || values.large || values.desktop || values.laptop || values.tablet || values.mobile;
    }
    if (isXLarge) {
      return values.large || values.desktop || values.laptop || values.tablet || values.mobile;
    }
    if (isLargeScreen) {
      return values.desktop || values.laptop || values.tablet || values.mobile;
    }
    if (isDesktop) {
      return values.laptop || values.tablet || values.mobile;
    }
    if (isLaptop) {
      return values.tablet || values.mobile;
    }

    // Default fallback
    return values.mobile || values.tablet || values.laptop || values.desktop;
  };

  /**
   * 📏 פונקציה לחישוב גודל גופן רספונסיבי
   */
  const getResponsiveFontSize = (baseSize, scale = {}) => {
    const defaultScale = {
      mobile: 1,
      tablet: 1.1,
      laptop: 1.2,
      desktop: 1.25,
      large: 1.3,
      xlarge: 1.35,
      ultrawide: 1.4
    };

    const currentScale = getResponsiveValue({ ...defaultScale, ...scale });
    const size = parseFloat(baseSize) * currentScale;
    
    // מגביל גודל מקסימלי לקריאות
    const maxSize = parseFloat(baseSize) * 1.5;
    return `${Math.min(size, maxSize)}rem`;
  };

  /**
   * 📦 פונקציה לחישוב padding רספונסיבי
   */
  const getResponsivePadding = (multiplier = 1) => {
    const basePadding = {
      mobile: 1 * multiplier,
      tablet: 2 * multiplier,
      laptop: 3 * multiplier,
      desktop: 4 * multiplier,
      large: 5 * multiplier,
      xlarge: 6 * multiplier,
      ultrawide: 7 * multiplier
    };

    return `${getResponsiveValue(basePadding)}rem`;
  };

  /**
   * 📐 פונקציה לחישוב רוחב container
   */
  const getContainerMaxWidth = () => {
    const maxWidths = {
      mobile: '100%',
      tablet: '720px',
      laptop: '1140px',
      desktop: '1320px',
      large: '1600px',
      xlarge: '2000px',
      ultrawide: '2400px'
    };

    return getResponsiveValue(maxWidths);
  };

  return {
    // Breakpoints
    ...breakpoints,
    
    // Dimensions
    width: dimensions.width,
    height: dimensions.height,
    
    // Screen info
    pixelRatio: screenInfo.pixelRatio,
    orientation: screenInfo.orientation,
    
    // Helper functions
    getResponsiveValue,
    getResponsiveFontSize,
    getResponsivePadding,
    getContainerMaxWidth
  };
};

/**
 * 📊 קבועים נפוצים לשימוש
 */
export const RESPONSIVE_CONSTANTS = {
  // גדלי כפתורים
  BUTTON_HEIGHTS: {
    mobile: '3rem',
    tablet: '3.5rem',
    laptop: '4rem',
    desktop: '4rem'
  },
  
  // מרווחים בין אלמנטים
  SPACING: {
    mobile: '1rem',
    tablet: '1.5rem',
    laptop: '2rem',
    desktop: '2.5rem'
  },
  
  // גדלי אייקונים
  ICON_SIZES: {
    mobile: '1.5rem',
    tablet: '2rem',
    laptop: '2.5rem',
    desktop: '3rem'
  },
  
  // Border radius
  BORDER_RADIUS: {
    mobile: '0.5rem',
    tablet: '0.75rem',
    laptop: '1rem',
    desktop: '1.25rem'
  }
};

export default useResponsive;