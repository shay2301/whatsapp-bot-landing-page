// src/components/animations/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animationConfig';

const AnimatedSection = ({ 
  children, 
  variant = fadeInUp,
  delay = 0,
  className = "",
  style = {}
}) => {
  // Add delay to variant if provided
  const variantWithDelay = delay > 0 ? {
    ...variant,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible.transition,
        delay
      }
    }
  } : variant;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true, 
        margin: "-100px", // Start animation when element is 100px from viewport
        amount: 0.2 // Trigger when 20% of element is visible
      }}
      variants={variantWithDelay}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
