
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.8, 0.3]);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categoryList = ['All', ...Object.keys(categories)];
  
  // Animated wave divider
  const waveVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };
  
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Enhanced animated background with multiple layers */}
      <div className="fixed inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-white to-brand-teal/5 dark:from-gray-900/40 dark:via-gray-900 dark:to-brand-indigo/10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'], 
          }} 
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse', 
            ease: 'easeInOut' 
          }}
        />
        
        <motion.div 
          style={{ y: y1, opacity }}
          className="fancy-blur-layer w-[45vw] h-[45vw] bg-gradient-to-r from-brand-purple/15 to-brand-indigo/10 dark:from-brand-purple/10 dark:to-brand-indigo/5 top-1/4 left-1/3 animate-pulse-slow"
        />
        
        <motion.div 
          style={{ y: y2, opacity }}
          className="fancy-blur-layer w-[35vw] h-[35vw] bg-gradient-to-r from-brand-teal/15 to-blue-400/10 dark:from-brand-teal/10 dark:to-blue-400/5 top-2/3 right-1/4 animate-float"
        />
        
        <motion.div 
          className="fancy-blur-layer w-[25vw] h-[25vw] bg-gradient-to-br from-brand-amber/10 to-brand-rose/10 dark:from-brand-amber/5 dark:to-brand-rose/5 bottom-1/4 left-1/5"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <Navbar />
      <main className="flex-grow pt-24 pb-16 relative z-10">
        <AnimatedWrapper animation="zoom">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-3 relative inline-block">
                  <span className="relative z-10 gradient-text-oceanic">Our Blog</span>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-3 w-full bg-brand-teal/20 -z-0 rounded-full" 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                  />
                </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
                  Insights, tutorials, and updates from the ToolsHub team to help you make the most of our platform
                </p>
                
                {/* Search and filter bar with animation */}
                <motion.div 
                  className="max-w-3xl mx-auto mb-12 glass-panel p-4 flex flex-col md:flex-row items-center gap-4"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 sm:flex gap-2 flex-wrap">
                    {categoryList.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? 
                          "bg-gradient-to-r from-brand-purple to-brand-teal hover:opacity-90" : 
                          "hover:border-brand-teal/50"
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Featured post with enhanced animations */}
              <div className="mb-16">
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8 glass-panel overflow-hidden hover:shadow-xl transition-all animated-border"
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
                      <motion.div 
                        className="mt-6"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <span className="text-sm font-medium text-brand-purple flex items-center">
                          Read more 
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </motion.div>
                    </div>
                    <div className="order-1 md:order-2 relative overflow-hidden">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-lavender opacity-30"
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
              
              {/* Decorative wave divider */}
              <div className="relative h-24 my-16 overflow-hidden">
                <motion.div
                  className="absolute w-[200%] h-full"
                  variants={waveVariants}
                  animate="animate"
                >
                  <svg
                    className="w-full h-full text-brand-purple/10"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </motion.div>
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
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-2xl font-bold gradient-text-sunset">{category}</h2>
                    <div className="h-px bg-gradient-to-r from-brand-amber to-brand-rose flex-grow opacity-30" />
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, postIndex) => (
                      <Link to={`/blog/${post.id}`} key={post.id}>
                        <motion.div 
                          className="glass-panel overflow-hidden hover:shadow-xl transition-all h-full flex flex-col group animated-border-sunset"
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
                            <div className="absolute inset-0 bg-gradient-sunset opacity-20 group-hover:opacity-30 transition-opacity"></div>
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute bottom-4 left-4 inline-block px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-bold">
                              {post.category}
                            </div>
                          </div>
                          <div className="p-6 flex-grow">
                            <h3 className="text-xl font-bold mb-3 group-hover:text-brand-purple transition-colors">{post.title}</h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          </div>
                          <div className="px-6 pb-6 flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              <span>{post.date}</span>
                            </div>
                            <div className="text-sm text-brand-rose font-medium">
                              Read more
                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12 pt-12 relative"
              >
                {/* Decorative elements */}
                <motion.div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-teal"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "6rem", opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
                
                <h3 className="text-2xl font-bold mb-6 gradient-text">Stay Updated</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">Get the latest updates, tutorials, and insights delivered directly to your inbox.</p>
                
                <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal/50"
                  />
                  <Button 
                    className="bg-gradient-to-r from-brand-purple to-brand-teal hover:opacity-90 text-white font-medium"
                  >
                    Subscribe
                  </Button>
                </div>
                
                <motion.div 
                  className="mt-16 glass-panel p-8 animated-border-lavender"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-2 gradient-text-lavender">Want to contribute?</h3>
                      <p className="text-gray-600 mb-4">Share your expertise with our community by becoming a contributor to our blog.</p>
                    </div>
                    <div className="md:w-1/2 text-center md:text-right">
                      <Button variant="outline" className="animated-border-lavender bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
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
