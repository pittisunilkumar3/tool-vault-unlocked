
import React, { ReactNode } from 'react';
import { motion, Variants, AnimationProps } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'blur' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  custom?: any;
  staggerChildren?: number;
}

const animations: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  'slide-up': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  blur: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    visible: { opacity: 1, filter: 'blur(0px)' }
  },
  none: {
    hidden: {},
    visible: {}
  }
};

const AnimatedWrapper = ({
  children,
  delay = 0,
  animation = 'slide-up',
  duration = 0.5,
  className = '',
  once = true,
  amount = 0.2,
  custom,
  staggerChildren
}: AnimatedWrapperProps) => {
  
  // Add transition with optional staggering effect
  const transition = staggerChildren
    ? {
        duration,
        delay, 
        ease: 'easeOut',
        staggerChildren,
      }
    : {
        duration,
        delay, 
        ease: 'easeOut'
      };
  
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once, margin: '-100px', amount }}
      variants={animations[animation]}
      transition={transition}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
