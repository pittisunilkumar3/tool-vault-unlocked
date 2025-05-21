
import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import ScrollToTop from '@/components/ScrollToTop';

const PricingPage = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacityTrans = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.8, 0.2]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Animated background elements */}
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
            className="fancy-blur-layer w-[40vw] h-[40vw] bg-brand-teal/15 top-1/4 right-1/4"
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
            className="fancy-blur-layer w-[35vw] h-[35vw] bg-brand-lavender/15 bottom-1/4 left-1/4"
          />
        </motion.div>
      </div>
      
      <Navbar />
      <ScrollToTop />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4">
            <AnimatedWrapper animation="fade" delay={0.2} className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text-lavender">Simple, transparent pricing</h1>
              <p className="text-xl text-gray-600 mb-8">Choose the plan that's right for you. All plans include a 14-day free trial.</p>
              <div className="h-1 w-24 bg-gradient-to-r from-brand-lavender to-brand-purple mx-auto rounded-full"></div>
            </AnimatedWrapper>
          </div>
        </section>
        
        {/* Pricing Section */}
        <AnimatedWrapper animation="slide-up" delay={0.4}>
          <Pricing />
        </AnimatedWrapper>
        
        {/* FAQ Section */}
        <AnimatedWrapper animation="slide-up" delay={0.6}>
          <FAQ />
        </AnimatedWrapper>
        
        {/* Enterprise Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-panel p-10 relative overflow-hidden animated-border-lavender">
              <AnimatedWrapper animation="fade" delay={0.2}>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Need a custom plan?</h2>
                  <p className="text-gray-600 text-lg">We offer custom solutions for large teams and enterprises</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Enterprise Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-brand-purple text-lg">✓</span>
                        <span>Dedicated account manager</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-purple text-lg">✓</span>
                        <span>Custom integrations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-purple text-lg">✓</span>
                        <span>SSO & advanced security</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-purple text-lg">✓</span>
                        <span>Premium SLA & support</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-brand-purple text-lg">✓</span>
                        <span>Custom contract terms</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Get in touch</h3>
                    <p className="text-gray-600">Our team is ready to help you find the right solution for your business.</p>
                    <div className="flex items-center justify-center md:justify-start">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-brand-lavender to-brand-purple text-white px-6 py-3 rounded-lg font-medium shadow-lg"
                      >
                        Contact our sales team
                      </motion.button>
                    </div>
                  </div>
                </div>
              </AnimatedWrapper>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-lavender/10 rounded-full blur-xl"></div>
              <div className="absolute top-10 -left-10 w-32 h-32 bg-brand-purple/5 rounded-full"></div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <AnimatedWrapper animation="fade" delay={0.4}>
          <CTA />
        </AnimatedWrapper>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
