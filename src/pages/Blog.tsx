
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';

// Motion variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Mock blog post data - in a real app, this would come from an API
const blogPosts = [
  {
    id: "1",
    title: "Introducing DataSync Pro: The Future of Data Synchronization",
    excerpt: "Learn how our newest tool is changing the way developers handle cross-platform data synchronization with smart conflict resolution.",
    date: "May 15, 2025",
    author: "Alex Chen",
    category: "Product Updates",
    image: "https://via.placeholder.com/800x450?text=DataSync+Pro"
  },
  {
    id: "2",
    title: "5 Ways to Optimize Your Form Validation Strategy",
    excerpt: "Discover best practices for creating user-friendly form validation that improves conversion rates while maintaining data integrity.",
    date: "May 8, 2025",
    author: "Maya Johnson",
    category: "Best Practices",
    image: "https://via.placeholder.com/800x450?text=Form+Validation"
  },
  {
    id: "3",
    title: "The Role of AI in Modern Development Workflows",
    excerpt: "How AI-powered tools like CodeAssist are revolutionizing the way developers write, refactor, and maintain code.",
    date: "April 27, 2025",
    author: "Raj Patel",
    category: "Technology Trends",
    image: "https://via.placeholder.com/800x450?text=AI+Development"
  },
  {
    id: "4",
    title: "Media Optimization Techniques for Faster Web Performance",
    excerpt: "Learn how to effectively compress and serve images, videos, and audio files without compromising quality.",
    date: "April 15, 2025",
    author: "Sophie Kim",
    category: "Performance",
    image: "https://via.placeholder.com/800x450?text=Media+Optimization"
  },
  {
    id: "5",
    title: "Building Accessible Forms Everyone Can Use",
    excerpt: "A comprehensive guide to ensuring your web forms are accessible to all users, including those with disabilities.",
    date: "April 3, 2025",
    author: "Marcus Brown",
    category: "Accessibility",
    image: "https://via.placeholder.com/800x450?text=Accessibility"
  },
  {
    id: "6",
    title: "Enterprise Integration Patterns with ToolsHub",
    excerpt: "How large organizations are using our platform to streamline development workflows and improve team collaboration.",
    date: "March 22, 2025",
    author: "Elena Rodriguez",
    category: "Case Studies",
    image: "https://via.placeholder.com/800x450?text=Enterprise+Integration"
  }
];

const Blog = () => {
  // Group blog posts by category
  const categories: Record<string, typeof blogPosts> = {};
  blogPosts.forEach(post => {
    if (!categories[post.category]) {
      categories[post.category] = [];
    }
    categories[post.category].push(post);
  });

  // Parallax effect for background
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.6, 0.3]);
  
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 -z-10 morph-bg">
        <motion.div 
          style={{ y: y1, opacity }}
          className="fancy-blur-layer w-[40vw] h-[40vw] bg-brand-purple/15 top-1/4 left-1/3"
        />
        <motion.div 
          style={{ y: y2, opacity }}
          className="fancy-blur-layer w-[30vw] h-[30vw] bg-brand-teal/15 top-2/3 right-1/4"
        />
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper animation="zoom">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text">Blog</h1>
                <p className="text-lg text-gray-600 mb-12">
                  Insights, tutorials, and updates from the ToolsHub team
                </p>
              </motion.div>
              
              {/* Featured post with enhanced animations */}
              <div className="mb-16">
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8 glass-panel overflow-hidden hover:shadow-xl transition-all"
                    whileHover={{ y: -5, scale: 1.01 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="order-2 md:order-1 p-8">
                      <div className="inline-block px-3 py-1 rounded-full bg-brand-purple/15 text-brand-purple text-sm font-medium mb-2">{blogPosts[0].category}</div>
                      <h2 className="text-2xl font-bold mb-4 gradient-text-lavender">{blogPosts[0].title}</h2>
                      <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{blogPosts[0].date}</span>
                        <span className="mx-2">•</span>
                        <span>By {blogPosts[0].author}</span>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-purple-teal opacity-30"
                        animate={{ 
                          opacity: [0.2, 0.3, 0.2],
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                        }} 
                        transition={{ 
                          duration: 15,
                          ease: "easeInOut",
                          repeat: Infinity
                        }}
                      />
                      <img 
                        src={blogPosts[0].image} 
                        alt={blogPosts[0].title}
                        className="w-full h-64 md:h-full object-cover relative z-10"
                      />
                    </div>
                  </motion.div>
                </Link>
              </div>
              
              {/* All blog posts by category with enhanced animations */}
              {Object.entries(categories).map(([category, posts], index) => (
                <motion.div 
                  key={category} 
                  className="mb-16"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <h2 className="text-2xl font-bold mb-6 gradient-text-sunset">{category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, postIndex) => (
                      <Link to={`/blog/${post.id}`} key={post.id}>
                        <motion.div 
                          className="glass-panel overflow-hidden hover:shadow-xl transition-all h-full flex flex-col"
                          variants={itemVariants}
                          whileHover={{ 
                            y: -5,
                            transition: { 
                              type: "spring", 
                              stiffness: 300
                            }
                          }}
                        >
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-lavender opacity-20"></div>
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 inline-block px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          </div>
                          <div className="px-6 pb-6 text-sm text-gray-500">
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <span>By {post.author}</span>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <a href="#" className="inline-block animated-border-oceanic px-8 py-4 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm font-medium text-lg hover:scale-105 transition-transform">
                  Subscribe to our Newsletter
                </a>
              </motion.div>
            </div>
          </div>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
