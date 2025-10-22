// src/components/animations/AnimatedButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { buttonHover, buttonTap, pulseAnimation } from '../../utils/animationConfig';

const AnimatedButton = ({ 
  children, 
  onClick, 
  style = {},
  className = "",
  isPrimary = false,
  enablePulse = false,
  ...props 
}) => {
  return (
    <motion.button
      whileHover={buttonHover}
      whileTap={buttonTap}
      animate={enablePulse && isPrimary ? pulseAnimation : {}}
      onClick={onClick}
      style={style}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedButton;
