// src/utils/animationConfig.js

// Timing standards - Apple uses slow, smooth animations
export const TIMING = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  verySlow: 1.6
};

export const EASING = {
  smooth: [0.43, 0.13, 0.23, 0.96], // Custom bezier - Apple style
  easeOut: "easeOut",
  easeInOut: "easeInOut"
};

// Fade in from bottom - for sections
export const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.smooth 
    }
  }
};

// Fade in from right - for images
export const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.smooth 
    }
  }
};

// Fade in from left - for text content
export const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: TIMING.slow, 
      ease: EASING.smooth 
    }
  }
};

// Scale in - for cards/boxes
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: TIMING.normal, 
      ease: EASING.smooth 
    }
  }
};

// Stagger container - for lists (3 steps, FAQ items, etc.)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child
      delayChildren: 0.1 // Initial delay before first child
    }
  }
};

// Stagger item - children of stagger container
export const staggerItem = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: TIMING.normal 
    }
  }
};

// Button hover - subtle lift
export const buttonHover = {
  scale: 1.02,
  y: -2,
  transition: { 
    duration: 0.3,
    ease: EASING.easeOut
  }
};

// Button tap - quick press
export const buttonTap = {
  scale: 0.98,
  transition: { 
    duration: 0.1 
  }
};

// Card hover - very subtle
export const cardHover = {
  y: -4,
  transition: { 
    duration: 0.4,
    ease: EASING.easeOut
  }
};

// Pulse animation - for primary CTA button only
export const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: EASING.easeInOut
  }
};
