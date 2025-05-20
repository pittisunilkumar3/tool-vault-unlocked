
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

// Mock documentation data
const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    articles: [
      {
        id: "introduction",
        title: "Introduction to ToolsHub",
        excerpt: "An overview of the ToolsHub platform and its core features."
      },
      {
        id: "quick-start",
        title: "Quick Start Guide",
        excerpt: "Get up and running with ToolsHub in less than 10 minutes."
      },
      {
        id: "installation",
        title: "Installation & Setup",
        excerpt: "Detailed installation instructions for different environments."
      }
    ]
  },
  {
    id: "core-tools",
    title: "Core Tools",
    articles: [
      {
        id: "datasync-pro",
        title: "DataSync Pro",
        excerpt: "Learn how to use DataSync Pro for seamless data synchronization."
      },
      {
        id: "formbuilder-x",
        title: "FormBuilder X",
        excerpt: "Create powerful forms with validation and conditional logic."
      },
      {
        id: "codeassist-ai",
        title: "CodeAssist AI",
        excerpt: "Leverage AI to improve your coding efficiency and quality."
      },
      {
        id: "mediaoptimizer",
        title: "MediaOptimizer",
        excerpt: "Automatically optimize media files for web and mobile."
      }
    ]
  },
  {
    id: "integrations",
    title: "Integrations",
    articles: [
      {
        id: "api-overview",
        title: "API Overview",
        excerpt: "Introduction to the ToolsHub API and authentication."
      },
      {
        id: "webhooks",
        title: "Webhooks",
        excerpt: "Set up and manage webhooks for real-time event notifications."
      },
      {
        id: "sdk-libraries",
        title: "SDK Libraries",
        excerpt: "Official SDK libraries for various programming languages."
      }
    ]
  },
  {
    id: "deployment",
    title: "Deployment",
    articles: [
      {
        id: "cloud-deployment",
        title: "Cloud Deployment",
        excerpt: "Deploy ToolsHub to major cloud providers."
      },
      {
        id: "on-premise",
        title: "On-Premise Installation",
        excerpt: "Set up ToolsHub on your own infrastructure."
      },
      {
        id: "docker",
        title: "Docker Containers",
        excerpt: "Use Docker containers for flexible deployment options."
      }
    ]
  }
];

const Documentation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('getting-started');
  
  // Filter articles based on search query
  const filteredSections = searchQuery
    ? docSections.map(section => ({
        ...section,
        articles: section.articles.filter(article =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.articles.length > 0)
    : docSections;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentation</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to know about ToolsHub's products and services
                </p>
                
                <div className="relative max-w-lg mx-auto mt-8">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="md:col-span-1">
                  <div className="bg-gray-50 rounded-lg p-4 sticky top-24">
                    <h2 className="text-lg font-bold mb-4">Contents</h2>
                    <nav>
                      <ul className="space-y-1">
                        {docSections.map(section => (
                          <li key={section.id}>
                            <button
                              onClick={() => setSelectedSection(section.id)}
                              className={`w-full text-left px-3 py-2 rounded ${
                                selectedSection === section.id
                                  ? 'bg-brand-purple text-white'
                                  : 'hover:bg-gray-200 text-gray-700'
                              }`}
                            >
                              {section.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
                
                {/* Main content */}
                <div className="md:col-span-3">
                  {searchQuery ? (
                    <>
                      <h2 className="text-xl font-bold mb-6">Search Results</h2>
                      {filteredSections.length === 0 ? (
                        <p>No results found for "{searchQuery}"</p>
                      ) : (
                        filteredSections.map(section => (
                          <div key={section.id} className="mb-8">
                            <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                            <div className="space-y-4">
                              {section.articles.map(article => (
                                <motion.div
                                  key={article.id}
                                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-purple transition-all cursor-pointer"
                                  whileHover={{ y: -3 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <h4 className="text-lg font-medium mb-2">{article.title}</h4>
                                  <p className="text-gray-600">{article.excerpt}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))
                      )}
                    </>
                  ) : (
                    <>
                      {docSections.find(section => section.id === selectedSection) && (
                        <div>
                          <h2 className="text-2xl font-bold mb-6">
                            {docSections.find(section => section.id === selectedSection)?.title}
                          </h2>
                          <div className="space-y-4">
                            {docSections
                              .find(section => section.id === selectedSection)
                              ?.articles.map(article => (
                                <motion.div
                                  key={article.id}
                                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-purple transition-all cursor-pointer"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5 }}
                                  whileHover={{ y: -3 }}
                                >
                                  <h3 className="text-lg font-medium mb-2">{article.title}</h3>
                                  <p className="text-gray-600">{article.excerpt}</p>
                                </motion.div>
                              ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Documentation;
