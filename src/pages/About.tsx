
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 right-0 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>
          </div>
        
          <div className="container mx-auto px-4">
            <AnimatedWrapper>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About ToolsHub</h1>
              <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
                Empowering teams with integrated productivity solutions since 2020.
              </p>
            </AnimatedWrapper>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 gap-16 items-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={itemVariants}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our Mission" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" 
                />
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  At ToolsHub, we believe that great teams deserve great tools. Our mission is to empower organizations of all sizes with intelligent, integrated solutions that enhance collaboration, streamline processes, and drive meaningful results.
                </p>
                <p className="text-lg text-gray-600">
                  We're committed to developing tools that adapt to how you work, not the other way around. By creating flexible, intuitive systems, we help teams focus on what they do best.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that drive everything we do at ToolsHub.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity",
                  description: "We believe powerful tools don't have to be complex. We focus on creating intuitive experiences that help teams work smarter."
                },
                {
                  title: "Innovation",
                  description: "We continuously explore new technologies and approaches to solve evolving challenges faced by modern teams."
                },
                {
                  title: "Reliability",
                  description: "Your work matters. That's why we build tools you can count on, day in and day out, with robust security and dependable performance."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
                >
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            </motion.div>
            
            <motion.div 
              className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p variants={itemVariants}>
                ToolsHub began in 2020 with a simple observation: teams were using too many disconnected tools, leading to fragmented workflows and lost productivity. Our founders, experienced product developers themselves, set out to create a unified platform that would bring essential productivity functions together.
              </motion.p>
              <motion.p variants={itemVariants}>
                What started as a small suite of core tools has evolved into a comprehensive platform trusted by thousands of teams worldwide. Along the way, we've remained committed to our original vision: making work better through thoughtfully designed tools that put people first.
              </motion.p>
              <motion.p variants={itemVariants}>
                Today, ToolsHub continues to grow, guided by feedback from our diverse community of users who inspire us to keep improving and innovating.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
