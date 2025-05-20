
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';

// Mock blog post data - in a real app, this would come from an API
const blogPostsData = [
  {
    id: "1",
    title: "Introducing DataSync Pro: The Future of Data Synchronization",
    content: `
      <p>Data synchronization has always been a complex challenge for developers. Ensuring that information stays consistent across multiple platforms, devices, and user sessions is critical for modern applications, but historically has required significant custom development work.</p>
      
      <p>Today, we're excited to announce DataSync Pro, our comprehensive solution to these challenges.</p>
      
      <h2>What is DataSync Pro?</h2>
      
      <p>DataSync Pro is a robust data synchronization service that makes it easy to keep information consistent across web, mobile, and desktop applications. It handles the complex parts of multi-source data management automatically, including:</p>
      
      <ul>
        <li>Real-time synchronization across all connected platforms</li>
        <li>Intelligent conflict resolution when changes occur simultaneously</li>
        <li>Offline support with automatic reconciliation when connectivity returns</li>
        <li>End-to-end encryption to ensure data security throughout the sync process</li>
        <li>Customizable sync rules and scheduling options</li>
      </ul>
      
      <h2>How It Works</h2>
      
      <p>DataSync Pro utilizes a combination of event-driven architecture and Conflict-free Replicated Data Types (CRDTs) to ensure that all data operations are eventually consistent, even in complex distributed systems.</p>
      
      <p>When integrated into your application, DataSync Pro provides a simple API that handles the synchronization logic automatically. Your team can focus on building features instead of managing complex data synchronization operations.</p>
      
      <h2>Real-world Applications</h2>
      
      <p>Companies using our beta release have already seen impressive results:</p>
      
      <ul>
        <li>A project management tool reduced sync-related bugs by 87% after integration</li>
        <li>A collaborative document editing platform improved editor performance by 35%</li>
        <li>A healthcare application achieved HIPAA compliance while maintaining responsive sync across providers</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>DataSync Pro is available today for all ToolsHub subscribers. You can integrate it with your existing applications through our comprehensive SDK available for all major platforms and frameworks.</p>
      
      <p>Check out our documentation for integration guides, or schedule a demo with our team to see how DataSync Pro can solve your specific synchronization challenges.</p>
    `,
    date: "May 15, 2025",
    author: {
      name: "Alex Chen",
      role: "Product Manager",
      avatar: "https://via.placeholder.com/150?text=AC"
    },
    category: "Product Updates",
    image: "https://via.placeholder.com/1200x600?text=DataSync+Pro"
  },
  {
    id: "2",
    title: "5 Ways to Optimize Your Form Validation Strategy",
    content: `
      <p>Form validation is an essential aspect of web development that directly impacts user experience and data integrity. When implemented well, it guides users seamlessly through form completion. When done poorly, it frustrates users and leads to abandonment.</p>
      
      <p>In this post, we'll explore five proven strategies to optimize form validation for better user experience and higher conversion rates.</p>
      
      <h2>1. Validate in Real-Time</h2>
      
      <p>Traditional form validation waits until the user submits the form to display errors. Modern best practices favor real-time validation that provides immediate feedback as users complete each field.</p>
      
      <p>Real-time validation has several advantages:</p>
      <ul>
        <li>Users receive immediate feedback, reducing frustration</li>
        <li>Errors can be corrected progressively, rather than all at once</li>
        <li>Successful validation can be visually confirmed, building confidence</li>
      </ul>
      
      <h2>2. Use Clear, Specific Error Messages</h2>
      
      <p>Generic error messages like "Invalid input" provide little guidance for users. Instead, provide specific instructions that help them correct the issue:</p>
      
      <ul>
        <li>Instead of "Invalid email," try "Please enter a valid email address (example@domain.com)"</li>
        <li>Instead of "Password error," try "Password must contain at least 8 characters, including a number and a special character"</li>
      </ul>
      
      <h2>3. Implement Progressive Disclosure</h2>
      
      <p>For complex forms, consider implementing progressive disclosure—showing validation rules only when the user begins interacting with a field. This maintains a clean interface while still providing guidance when needed.</p>
      
      <p>FormBuilder X's conditional validation feature makes this easy to implement without custom coding.</p>
      
      <h2>4. Optimize for Mobile</h2>
      
      <p>Mobile users face unique challenges when completing forms, including limited screen space and touch keyboards. Optimize your validation for mobile by:</p>
      
      <ul>
        <li>Using appropriate input types (email, tel, number) to trigger the right mobile keyboard</li>
        <li>Ensuring error messages are visible without scrolling</li>
        <li>Making touch targets large enough for accurate interaction</li>
        <li>Using inline validation that doesn't obscure other form fields</li>
      </ul>
      
      <h2>5. Balance Security and Usability</h2>
      
      <p>While strict validation rules improve data integrity and security, they can also create unnecessary friction. Find the right balance by:</p>
      
      <ul>
        <li>Only collecting information that's truly necessary</li>
        <li>Using appropriate validation strength for different types of data</li>
        <li>Allowing flexibility in format for non-critical fields (phone numbers, names)</li>
        <li>Providing clear guidance for strict validation requirements</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Effective form validation balances usability and data integrity. By implementing these strategies, you can create forms that guide users successfully through completion while ensuring the data you collect is accurate and useful.</p>
      
      <p>Our FormBuilder X tool implements all these best practices by default, making it easy to create forms that convert better and frustrate less. Check out our documentation for integration guides, or try the live demo to see these principles in action.</p>
    `,
    date: "May 8, 2025",
    author: {
      name: "Maya Johnson",
      role: "UX Specialist",
      avatar: "https://via.placeholder.com/150?text=MJ"
    },
    category: "Best Practices",
    image: "https://via.placeholder.com/1200x600?text=Form+Validation"
  }
];

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPostsData.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <p>We couldn't find the blog post you're looking for.</p>
          <Link to="/blog" className="text-brand-purple hover:underline mt-4 inline-block">
            Return to blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-brand-purple hover:underline mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Back to all posts
              </Link>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-sm font-medium text-brand-purple mb-2">{post.category}</div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex items-center mb-8">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium">{post.author.name}</div>
                    <div className="text-sm text-gray-500">
                      {post.author.role} • {post.date}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full rounded-xl mb-10 shadow-md"
                />
                
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <div className="border-t border-gray-200 mt-12 pt-8">
                  <h3 className="text-xl font-bold mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="text-gray-600 hover:text-brand-purple transition-colors">Twitter</button>
                    <button className="text-gray-600 hover:text-brand-purple transition-colors">Facebook</button>
                    <button className="text-gray-600 hover:text-brand-purple transition-colors">LinkedIn</button>
                    <button className="text-gray-600 hover:text-brand-purple transition-colors">Copy link</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
