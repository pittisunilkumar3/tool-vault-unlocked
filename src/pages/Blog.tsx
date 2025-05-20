
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';

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
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
              <p className="text-lg text-gray-600 mb-12">
                Insights, tutorials, and updates from the ToolsHub team
              </p>
              
              {/* Featured post */}
              <div className="mb-16">
                <Link to={`/blog/${blogPosts[0].id}`}>
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8 bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="order-2 md:order-1 p-8">
                      <div className="text-sm font-medium text-brand-purple mb-2">{blogPosts[0].category}</div>
                      <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
                      <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{blogPosts[0].date}</span>
                        <span className="mx-2">•</span>
                        <span>By {blogPosts[0].author}</span>
                      </div>
                    </div>
                    <div className="order-1 md:order-2">
                      <img 
                        src={blogPosts[0].image} 
                        alt={blogPosts[0].title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </Link>
              </div>
              
              {/* All blog posts by category */}
              {Object.entries(categories).map(([category, posts], index) => (
                <div key={category} className="mb-16">
                  <h2 className="text-2xl font-bold mb-6">{category}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, postIndex) => (
                      <Link to={`/blog/${post.id}`} key={post.id}>
                        <motion.div 
                          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all h-full flex flex-col"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + postIndex * 0.05 }}
                          whileHover={{ y: -5 }}
                        >
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6 flex-grow">
                            <div className="text-sm font-medium text-brand-purple mb-2">{post.category}</div>
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
                </div>
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
