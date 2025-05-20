
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
  useEffect(() => {
    // Ensure page starts at the top
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial="hidden"
      animate="show"
      variants={animationContainer}
    >
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
