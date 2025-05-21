
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
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 morph-bg">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ 
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="fancy-blur-layer w-96 h-96 bg-brand-purple/20 top-1/4 right-0 -translate-y-1/2"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ 
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="fancy-blur-layer w-72 h-72 bg-brand-teal/20 bottom-0 left-1/4"
            />
          </div>
        
          <div className="container mx-auto px-4">
            <AnimatedWrapper>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-oceanic">About ToolsHub</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-blur-in">
                  Empowering teams with integrated productivity solutions since 2020.
                </p>
              </motion.div>
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
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-purple-teal rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our Mission" 
                  className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3] relative z-10" 
                />
              </motion.div>
              <motion.div variants={itemVariants} className="space-y-6">
                <h2 className="text-3xl font-bold gradient-text-lavender">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  At ToolsHub, we believe that great teams deserve great tools. Our mission is to empower organizations of all sizes with intelligent, integrated solutions that enhance collaboration, streamline processes, and drive meaningful results.
                </p>
                <p className="text-lg text-gray-600">
                  We're committed to developing tools that adapt to how you work, not the other way around. By creating flexible, intuitive systems, we help teams focus on what they do best.
                </p>
                <motion.div
                  className="inline-block mt-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="#values" className="animated-border-lavender px-6 py-3 inline-block rounded-xl bg-white/80 backdrop-blur-sm shadow-sm font-medium">
                    Explore Our Values
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="values" className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text-sunset">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that drive everything we do at ToolsHub.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplicity",
                  description: "We believe powerful tools don't have to be complex. We focus on creating intuitive experiences that help teams work smarter.",
                  gradient: "from-purple-500/10 to-indigo-500/5",
                  animation: "bounce-gentle",
                  delay: 0
                },
                {
                  title: "Innovation",
                  description: "We continuously explore new technologies and approaches to solve evolving challenges faced by modern teams.",
                  gradient: "from-teal-500/10 to-emerald-500/5",
                  animation: "pulse-slow",
                  delay: 0.1
                },
                {
                  title: "Reliability",
                  description: "Your work matters. That's why we build tools you can count on, day in and day out, with robust security and dependable performance.",
                  gradient: "from-amber-500/10 to-orange-500/5",
                  animation: "breathing",
                  delay: 0.2
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: value.delay }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  className={`glass-panel p-8 backdrop-blur-sm bg-gradient-to-br ${value.gradient} animate-${value.animation}`}
                >
                  <h3 className="text-xl font-bold mb-4 gradient-text">{value.title}</h3>
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
              <h2 className="text-3xl font-bold mb-4 gradient-text-oceanic">Our Story</h2>
            </motion.div>
            
            <motion.div 
              className="max-w-4xl mx-auto space-y-8 text-lg text-gray-600"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p 
                variants={itemVariants}
                className="relative px-8 py-6 glass-panel bg-gradient-to-br from-brand-purple/5 to-indigo-500/5"
              >
                ToolsHub began in 2020 with a simple observation: teams were using too many disconnected tools, leading to fragmented workflows and lost productivity. Our founders, experienced product developers themselves, set out to create a unified platform that would bring essential productivity functions together.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="relative px-8 py-6 glass-panel bg-gradient-to-br from-brand-teal/5 to-emerald-500/5"
              >
                What started as a small suite of core tools has evolved into a comprehensive platform trusted by thousands of teams worldwide. Along the way, we've remained committed to our original vision: making work better through thoughtfully designed tools that put people first.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="relative px-8 py-6 glass-panel bg-gradient-to-br from-brand-lavender/5 to-purple-500/5"
              >
                Today, ToolsHub continues to grow, guided by feedback from our diverse community of users who inspire us to keep improving and innovating.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <a href="/contact" className="inline-block animated-border-sunset px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm font-medium text-lg hover:scale-105 transition-transform">
                Join Our Journey
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
