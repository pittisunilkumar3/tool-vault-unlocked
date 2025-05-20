
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About ToolsHub</h1>
              <p className="text-lg text-gray-700 mb-8">
                We're on a mission to help developers and businesses build better software, faster.
              </p>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Founded in 2023, ToolsHub emerged from a simple observation: developers 
                  waste too much time switching between disconnected tools and platforms.
                </p>
                
                <p>
                  Our team of experienced developers and designers came together to create 
                  a unified ecosystem of development tools that work seamlessly together, 
                  eliminating friction and boosting productivity.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Our Philosophy</h2>
                
                <p>
                  We believe that great software should be both powerful and approachable.
                  Our products are built with this philosophy at their core - delivering 
                  professional-grade capabilities with intuitive interfaces that make complex
                  tasks feel simple.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment</h2>
                
                <p>
                  We're committed to continuous improvement and innovation. We work closely 
                  with our user community to understand their needs and iterate on our products.
                  Your feedback directly shapes our roadmap.
                </p>
              </div>
            </div>
          </section>
          
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-3">Quality First</h3>
                    <p className="text-gray-600">We never compromise on quality. Every feature is thoroughly tested and refined.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-3">User-Centered</h3>
                    <p className="text-gray-600">We design for real people solving real problems, not theoretical users.</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-lg shadow-md"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-3">Constant Growth</h3>
                    <p className="text-gray-600">We're always learning, improving, and pushing the boundaries of what's possible.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default About;
