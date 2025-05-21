
import React, { ReactNode } from 'react';
import { motion, Variants, AnimationProps } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
  animation?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'blur' | 'bounce' | 'flip' | 'rotate' | 'pulse' | 'none';
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  custom?: any;
  staggerChildren?: number;
  whileHover?: Variants;
  whileTap?: Variants;
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
  bounce: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 15 } }
  },
  flip: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0 }
  },
  pulse: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        yoyo: Infinity,
        repeatDelay: 0.5
      }
    }
  },
  none: {
    hidden: {},
    visible: {}
  }
};

// Hover animations
const hoverEffects = {
  grow: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  lift: {
    y: -5,
    transition: { duration: 0.2 }
  },
  glow: {
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 }
  }
};

// Tap animations
const tapEffects = {
  shrink: {
    scale: 0.95,
    transition: { duration: 0.1 }
  },
  press: {
    y: 2,
    transition: { duration: 0.1 }
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
  staggerChildren,
  whileHover,
  whileTap
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
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
