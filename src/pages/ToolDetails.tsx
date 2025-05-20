
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';

// Mock tool data - in a real app, this would come from an API
const toolsData = [
  {
    id: "1",
    name: "DataSync Pro",
    description: "Seamlessly synchronize data across multiple platforms with intelligent conflict resolution.",
    features: [
      "Real-time synchronization across platforms",
      "Intelligent conflict resolution",
      "Automated backup and recovery",
      "End-to-end encryption",
      "Custom sync rules and scheduling"
    ],
    pricing: "$19/month",
    image: "https://via.placeholder.com/600x400?text=DataSync+Pro"
  },
  {
    id: "2",
    name: "FormBuilder X",
    description: "Create complex, interactive forms with drag-and-drop simplicity and powerful validation rules.",
    features: [
      "Intuitive drag-and-drop interface",
      "Advanced validation rules",
      "Conditional logic for dynamic forms",
      "Secure data submission and storage",
      "Comprehensive analytics dashboard"
    ],
    pricing: "$15/month",
    image: "https://via.placeholder.com/600x400?text=FormBuilder+X"
  },
  {
    id: "3",
    name: "CodeAssist AI",
    description: "AI-powered code completion and refactoring suggestions that learn from your coding style.",
    features: [
      "Intelligent code completion",
      "Automated refactoring suggestions",
      "Bug detection and fixes",
      "Performance optimization recommendations",
      "Integration with major IDEs"
    ],
    pricing: "$29/month",
    image: "https://via.placeholder.com/600x400?text=CodeAssist+AI"
  },
  {
    id: "4",
    name: "MediaOptimizer",
    description: "Automatically optimize images, videos, and audio files for web and mobile without losing quality.",
    features: [
      "Batch processing for multiple files",
      "Content-aware optimization algorithms",
      "Format conversion and transcoding",
      "Adaptive compression based on device",
      "CDN integration for global delivery"
    ],
    pricing: "$12/month",
    image: "https://via.placeholder.com/600x400?text=MediaOptimizer"
  }
];

const ToolDetails = () => {
  const { toolId } = useParams();
  const tool = toolsData.find(t => t.id === toolId);
  
  if (!tool) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Tool not found</h1>
          <p>We couldn't find the tool you're looking for.</p>
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
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <motion.img 
                    src={tool.image} 
                    alt={tool.name}
                    className="rounded-lg shadow-lg w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                <div className="md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{tool.name}</h1>
                    <p className="text-xl text-gray-700 mb-6">{tool.description}</p>
                    <div className="mb-6">
                      <span className="inline-block bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full font-medium">
                        {tool.pricing}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <button className="bg-gradient-to-r from-brand-purple to-brand-teal text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                        Get Started
                      </button>
                      <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
                        Watch Demo
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                      <span className="text-brand-teal text-xl">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ToolDetails;
