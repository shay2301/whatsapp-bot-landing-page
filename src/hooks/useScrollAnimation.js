// src/hooks/useScrollAnimation.js
import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.2) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true, // Only animate once
    rootMargin: '-50px' // Start animation 50px before element is visible
  });

  return { ref, inView };
};
