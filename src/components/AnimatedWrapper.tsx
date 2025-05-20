
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedWrapperProps {
  children: ReactNode;
  delay?: number;
}

const AnimatedWrapper = ({ children, delay = 0 }: AnimatedWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
