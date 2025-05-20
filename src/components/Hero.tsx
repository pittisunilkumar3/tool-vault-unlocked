
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Star } from "lucide-react";
import { Link } from 'react-router-dom';

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const features = [
    "Seamless Integration",
    "Smart Automation",
    "Advanced Analytics",
    "Secure Collaboration"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative pt-28 lg:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-0 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left space-y-8">
            <div className="inline-block animate-fade-in">
              <motion.span 
                className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium flex items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center justify-center bg-brand-purple text-white rounded-full w-5 h-5">
                  <Star className="w-3 h-3" />
                </span>
                <span>Introducing ToolsHub Pro Subscription</span>
              </motion.span>
            </div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              All the tools you need, <br />
              <span className="relative">
                <span className="absolute -z-10 top-1/2 left-0 h-4 w-full bg-brand-teal/20 -translate-y-1/2 transform skew-x-12"></span>
                <span className="gradient-text">in one place</span>
              </span>
            </motion.h1>
            
            <motion.div
              className="relative h-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="text-xl text-gray-600 absolute transition-transform duration-500 w-full text-center lg:text-left" style={{ transform: `translateY(${activeFeature * -32}px)` }}>
                {features.map((feature, index) => (
                  <div key={index} className="h-8 flex items-center justify-center lg:justify-start">
                    <span className="text-brand-teal mr-2">✓</span> {feature}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Access premium productivity tools with a simple subscription. Boost your workflow and save money with our curated collection.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Button size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-brand-purple to-brand-teal hover:opacity-90 transition-all">
                Get started <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link to="/tools/1">
                <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                  View demo <Play className="ml-1 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <img className="inline-block h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500 text-white border-2 border-white text-xs font-medium">+5K</span>
                </div>
                <span>Trusted by 10,000+ professionals worldwide</span>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="absolute -top-8 -left-8 w-20 h-20 bg-brand-purple/10 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-teal/10 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-purple to-brand-teal"></div>
                <div className="p-1">
                  <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-100">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs text-gray-500 mx-auto">ToolsHub Dashboard</div>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
                    alt="ToolsHub Dashboard" 
                    className="w-full h-72 object-cover object-center"
                  />
                </div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Analytics</p>
                    <p className="text-xs text-gray-500">Updated now</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Projects</span>
                    <span className="text-xs font-medium">24</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-purple w-2/3 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-[200px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="text-sm font-medium mb-1">Productivity Score</div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-500">This week</span>
                  <span className="text-xs font-medium text-green-600">+12%</span>
                </div>
                <div className="flex gap-1 h-6">
                  <div className="w-1/5 bg-brand-purple/20 rounded"></div>
                  <div className="w-2/5 bg-brand-purple/40 rounded"></div>
                  <div className="w-3/5 bg-brand-purple/60 rounded"></div>
                  <div className="w-4/5 bg-brand-purple/80 rounded"></div>
                  <div className="w-full bg-brand-purple rounded"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-24 pt-10 border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by innovative companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <svg className="h-6 text-gray-400" viewBox="0 0 168 48" fill="currentColor"><path d="M168 40.8V7.2H0v33.6h168z" fill="none"></path><path d="M110.5 13.3c3.5 0 5.9 2.3 5.9 5.9s-2.3 6.1-5.9 6.1h-7.9v6.9h-4.2V13.3h12.1zm-7.9 8.2h7.4c1 0 2.2-.9 2.2-2.3s-1.2-2.3-2.2-2.3h-7.4v4.6zM123.8 32.2l-7.1-18.9h4.2l4.7 13.9 4.6-13.9h4.2l-7 18.9h-3.6zM84 32.2V13.3h4.1v18.9H84zM42.1 13.3c3.3 0 5.9 1.1 8.2 3.4l-2.8 3.2C46 18.5 44.2 18 42 18c-3.5 0-6 2.2-6 6.3 0 4.2 2.2 6.7 6 6.7 2.3 0 4.4-.9 5.7-2.4l2.4 2.8c-2.4 2.3-5.1 3.7-8.7 3.7-6.6 0-10.2-4.5-10.2-10.6.2-6.6 4.2-11.2 10.9-11.2zM68.9 28.6c2.6 0 5.1-1.2 6.2-2.7l2.8 2.6c-2.2 2.6-5.5 4.1-9.2 4.1-7.1-.1-10.9-4.7-10.9-10.8 0-6 4.1-10.5 10.2-10.5 6.7 0 10.1 4.9 9.8 11.7H62.3c.6 3.3 2.9 5.6 6.6 5.6zm4.7-9.3c-.4-3-2.2-5.3-5.9-5.3-3.2 0-5.5 1.8-6.1 5.3h12zM16.3 39.9c-3.4 0-5.9-1.2-7.9-3l2.4-2.9c1.5 1.4 3.1 2.2 5.4 2.2 2.9 0 4.7-1.3 4.7-3.6s-1.3-3.7-6.5-3.7v-3.1c4.6 0 5.9-1.4 5.9-3.4s-1.7-3.4-4.2-3.4c-2 0-3.5.9-4.9 2.1l-2.4-2.9c2-1.9 4.3-3 7.5-3 5 0 8.3 2.4 8.3 6.6 0 2.6-1.3 4.4-4.2 5.5 3.1 1 4.8 2.9 4.8 5.9-.1 4.8-3.8 7.7-8.9 7.7zM96.5 32.2V22.7c0-3.9-1.9-5.8-4.4-5.8s-4.5 1.9-4.5 5.8v9.5h-4.1V13.3h4.1v1.8c1.4-1.5 3.4-2.2 5.8-2.2 4.6 0 7.2 3.5 7.2 9.2v10.1h-4.1z"></path></svg>
            <svg className="h-6 text-gray-400" viewBox="0 0 168 48" fill="currentColor"><path d="M168 40.8V7.2H0v33.6h168z" fill="none"></path><path d="M60.9 37.9V13.1H42.1v4.3h14.4v16.2H41.4v4.3h19.5zM119.5 37.9V13.1h-18.8v4.3h14.4v16.2H99.9v4.3h19.6zM90.8 26.9c0-7.7-5.9-14-13.2-14s-13.2 6.3-13.2 14 5.9 14 13.2 14 13.2-6.3 13.2-14zm-22 0c0-5.4 3.9-9.8 8.8-9.8s8.8 4.4 8.8 9.8-3.9 9.8-8.8 9.8-8.8-4.4-8.8-9.8zM149.9 13.1v2.6c-1.6-2-4-3.1-6.6-3.1-6.2 0-11.2 5.5-11.2 12.3 0 6.7 5 12.3 11.2 12.3 2.6 0 5-1.1 6.6-3.1v2.6h4.2V13.1h-4.2zm-5.8 19.8c-4.1 0-7.5-3.6-7.5-8.1s3.4-8.1 7.5-8.1 7.5 3.6 7.5 8.1-3.4 8.1-7.5 8.1zM24.9 44.1c-13.3 0-20.7-13-20.7-13l3.1-2.9s6.4 11.4 17.6 11.4 17.6-11.4 17.6-11.4l3.1 2.9c-.1 0-7.5 13-20.7 13z"></path></svg>
            <svg className="h-5 text-gray-400" viewBox="0 0 168 48" fill="currentColor"><path d="M168 40.8V7.2H0v33.6h168z" fill="none"></path><path d="M84 12.3L68.5 35.7h-4.1L78.9 12H58.7v-4.1h42.1V12h-17l15.5 23.7h4.1L89 12.3zM54.3 23.2c0 7.3-5.9 13.4-13.4 13.4s-13.4-6-13.4-13.4S33.3 9.8 40.9 9.8c7.4 0 13.4 6.1 13.4 13.4zM113.7 27V36h-4.1v-9.1l-15.9-14.9h5.4l12.5 12 12.5-12h5.4zM145.4 36V7.8h22.1v4.1h-18v7.3h18v4.1h-18v8.6h18v4.1z"></path></svg>
            <svg className="h-5 text-gray-400" viewBox="0 0 168 48" fill="currentColor"><path d="M168 40.8V7.2H0v33.6h168z" fill="none"></path><path d="M49.5 23.8c0-5.9-4.5-10.4-10.4-10.4s-10.4 4.6-10.4 10.4c0 5.9 4.5 10.4 10.4 10.4s10.4-4.5 10.4-10.4zm3.7 0c0 7.9-6.2 14.1-14.1 14.1S25 31.7 25 23.8 31.3 9.7 39.1 9.7s14.1 6.3 14.1 14.1zM63 24.1v13.1h-3.7V9.9h3.7v13.1l12.6-13.1h4.9l-13.4 13.6L81 37.2h-4.8z"></path><path d="M79.9 29h10.4c-.7 2.8-3.4 5-6.3 5.1-3.8 0-6.8-3.1-6.8-6.7 0-3.5 3-6.7 6.9-6.7 2.6 0 4.8 1.7 5.9 3.7l3.5-1.7c-1.8-3.5-5.5-5.8-9.3-5.8-5.9 0-10.6 4.7-10.6 10.5S78.4 38 84.2 38c5.4 0 10.1-4.2 10.7-9.4l.1-.8H79.9V29zM115.5 13.8H103v7.9h12.5v3.8H103v7.9h12.5v3.8H99.3V10h16.2v3.8zM132.1 17.6h9.3v3.8H132v11.7c0 1.4 1.1 2.4 2.5 2.4h6.8v3.8h-6.8c-3.5 0-6.3-2.8-6.3-6.2V10h3.8v7.6z"></path></svg>
            <svg className="h-8 text-gray-400" viewBox="0 0 168 48" fill="currentColor"><path d="M168 40.8V7.2H0v33.6h168z" fill="none"></path><path d="M25.2 31h5.7c5.3 0 8.3-3.3 8.3-7.7 0-4.4-3-7.8-8.3-7.8h-9.7v21.8h4v-6.3zm0-11.3h6c2.2 0 4 1.7 4 3.6 0 1.9-1.8 3.6-4 3.6h-6v-7.2zM49.3 26.6l-3.6-12h-4.2l5.7 17.7h4.1l5.7-17.7h-4.2zM64.9 14.6h-3.8v17.7h3.8zM63 9.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-.9 2.2-2.2c0-1.1-1-2.2-2.2-2.2zM79.3 28.6c0-4.1-8.5-2.8-8.5-6.3 0-1.1 1-1.9 2.8-1.9 1.8 0 3.3.6 4.8 1.6l1.7-2.5c-1.9-1.4-4.1-2-6.5-2-3.6 0-6.6 1.9-6.6 5.1 0 4.6 8.5 2.7 8.5 6.5 0 1.2-1.1 2.1-3.3 2.1-2 0-4-.8-5.6-2.3l-1.7 2.6c2 1.8 4.7 2.7 7.3 2.7 4 0 7.1-1.9 7.1-5.6zM92.4 14.1c-5.6 0-9.6 4.1-9.6 9.3 0 5.1 4 9.3 9.6 9.3s9.6-4.1 9.6-9.3c0-5.1-4-9.3-9.6-9.3zm0 3.6c3.3 0 5.7 2.5 5.7 5.7s-2.4 5.7-5.7 5.7c-3.3 0-5.7-2.5-5.7-5.7s2.3-5.7 5.7-5.7zM142.1 15.5c-1.8-1-3.8-1.4-6-1.4-6.7 0-11.6 5-11.6 11.5s4.9 11.5 11.6 11.5c2.2 0 4.2-.5 6-1.4v-7.8h-7.3v3.7h3.4v2.1c-.6.2-1.4.3-2.1.3-4.2 0-7.3-3.3-7.3-8.5 0-5.1 3.1-8.5 7.3-8.5.7 0 1.5.1 2.1.3v2.1h-3.4v3.7h7.3v-7.6zM153 14.6h-3.8v17.7h3.8zM151.1 9.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2 2.2-.9 2.2-2.2c0-1.1-1-2.2-2.2-2.2zM119.9 14.1c-5.6 0-9.6 4.1-9.6 9.3 0 5.1 4 9.3 9.6 9.3s9.6-4.1 9.6-9.3c0-5.1-4-9.3-9.6-9.3zm0 3.6c3.3 0 5.7 2.5 5.7 5.7s-2.4 5.7-5.7 5.7c-3.3 0-5.7-2.5-5.7-5.7s2.3-5.7 5.7-5.7z"></path></svg>
            <svg className="h-6 text-gray-400" viewBox="0 0 168 48" fill="currentColor"><path d="M168 40.8V7.2H0v33.6h168z" fill="none"></path><path d="M25.5 26.3c0-4.1 3.2-7.3 7.2-7.3s7.3 3.2 7.3 7.3c0 4-3.3 7.2-7.3 7.2-4 0-7.2-3.2-7.2-7.2zm17.7 0c0-6-4.6-10.6-10.5-10.6-5.9 0-10.4 4.6-10.4 10.6 0 5.9 4.5 10.5 10.4 10.5 5.9 0 10.5-4.6 10.5-10.5zM62.8 33.7c-1.3.9-2.7 1.6-4.4 1.6-4 0-7.2-3.2-7.2-7.2 0-3.9 3.2-7.1 7.2-7.1 1.7 0 3.1.6 4.4 1.6v-4.8c-1.4-.7-2.9-1.1-4.4-1.1-5.9 0-10.4 4.6-10.4 10.6 0 5.9 4.5 10.5 10.4 10.5 1.5 0 3-.3 4.4-1v-3.1zM68.6 15.7h3.2v21.1h-3.2zM85.5 33.7c-1.3.9-2.7 1.6-4.4 1.6-4 0-7.2-3.2-7.2-7.2 0-3.9 3.2-7.1 7.2-7.1 1.7 0 3.1.6 4.4 1.6v-4.8c-1.4-.7-2.9-1.1-4.4-1.1-5.9 0-10.4 4.6-10.4 10.6 0 5.9 4.5 10.5 10.4 10.5 1.5 0 3-.3 4.4-1v-3.1zM91 36.8h3.2V15.7H91zM112.2 21h10.4v-3.2h-14.1v3.2h3.7zM138.8 27.6v9.3h-3.2v-9.3l-8.9-11.9h3.8l6.8 9.2 6.8-9.2h3.8z"></path></svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
