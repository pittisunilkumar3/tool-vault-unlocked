
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Tools from '@/components/Tools';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const animationContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  
  // Create parallax effect values
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacityTrans = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.8, 0.2]);

  useEffect(() => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
    
    // Add smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const element = document.querySelector(anchor.hash);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col relative overflow-x-hidden"
      initial="hidden"
      animate="show"
      variants={animationContainer}
    >
      {/* Enhanced animated background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <motion.div 
          style={{ y: backgroundY, opacity: opacityTrans }} 
          className="absolute top-0 left-0 w-full h-full"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="fancy-blur-layer w-[40vw] h-[40vw] bg-brand-purple/15 top-1/4 right-1/4"
          />
          <motion.div 
            animate={{ 
              scale: [1.1, 1, 1.1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="fancy-blur-layer w-[35vw] h-[35vw] bg-brand-teal/15 bottom-1/4 left-1/4"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="fancy-blur-layer w-[30vw] h-[30vw] bg-brand-lavender/10 top-1/3 left-2/3"
          />
        </motion.div>
      </div>
      
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <Features />
        <Tools />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
