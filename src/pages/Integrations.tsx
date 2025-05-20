
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

// Mock integrations data
const integrations = [
  {
    id: "1",
    name: "GitHub",
    category: "Version Control",
    description: "Connect your repositories to automate workflows and synchronize data.",
    icon: "https://via.placeholder.com/80?text=GitHub",
    popular: true
  },
  {
    id: "2",
    name: "Slack",
    category: "Communication",
    description: "Get notifications and updates directly in your Slack channels.",
    icon: "https://via.placeholder.com/80?text=Slack",
    popular: true
  },
  {
    id: "3",
    name: "AWS",
    category: "Cloud Services",
    description: "Integrate with AWS services for storage, compute, and more.",
    icon: "https://via.placeholder.com/80?text=AWS",
    popular: true
  },
  {
    id: "4",
    name: "Jira",
    category: "Project Management",
    description: "Sync issues and track progress between ToolsHub and Jira.",
    icon: "https://via.placeholder.com/80?text=Jira",
    popular: true
  },
  {
    id: "5",
    name: "VS Code",
    category: "Development Tools",
    description: "Use our extension to access ToolsHub features directly in your editor.",
    icon: "https://via.placeholder.com/80?text=VS+Code",
    popular: false
  },
  {
    id: "6",
    name: "Google Cloud",
    category: "Cloud Services",
    description: "Connect with Google Cloud Platform services for seamless integration.",
    icon: "https://via.placeholder.com/80?text=GCP",
    popular: false
  },
  {
    id: "7",
    name: "Azure",
    category: "Cloud Services",
    description: "Deploy and manage your applications on Microsoft Azure.",
    icon: "https://via.placeholder.com/80?text=Azure",
    popular: false
  },
  {
    id: "8",
    name: "Notion",
    category: "Documentation",
    description: "Connect your Notion workspace to sync documentation and notes.",
    icon: "https://via.placeholder.com/80?text=Notion",
    popular: false
  },
  {
    id: "9",
    name: "Figma",
    category: "Design",
    description: "Import designs and assets directly from your Figma projects.",
    icon: "https://via.placeholder.com/80?text=Figma",
    popular: false
  },
  {
    id: "10",
    name: "GitLab",
    category: "Version Control",
    description: "Connect your GitLab repositories for seamless integration.",
    icon: "https://via.placeholder.com/80?text=GitLab",
    popular: false
  },
  {
    id: "11",
    name: "Firebase",
    category: "Development Tools",
    description: "Integrate with Firebase for authentication, storage, and more.",
    icon: "https://via.placeholder.com/80?text=Firebase",
    popular: false
  },
  {
    id: "12",
    name: "Shopify",
    category: "E-commerce",
    description: "Connect your Shopify store for e-commerce integration.",
    icon: "https://via.placeholder.com/80?text=Shopify",
    popular: false
  }
];

const categories = [...new Set(integrations.map(item => item.category))];

const Integrations = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter integrations based on search query and category
  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Integrations</h1>
              <p className="text-lg text-gray-600 mb-8">
                Connect ToolsHub with your favorite tools and services
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search integrations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                >
                  <option value="All">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Popular integrations */}
              {selectedCategory === 'All' && searchQuery === '' && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Popular Integrations</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {integrations
                      .filter(integration => integration.popular)
                      .map(integration => (
                        <motion.div
                          key={integration.id}
                          className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-purple transition-all cursor-pointer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ y: -5 }}
                        >
                          <div className="flex items-center mb-4">
                            <img
                              src={integration.icon}
                              alt={integration.name}
                              className="w-12 h-12 mr-4"
                            />
                            <div>
                              <h3 className="text-lg font-bold">{integration.name}</h3>
                              <span className="text-sm text-gray-500">{integration.category}</span>
                            </div>
                          </div>
                          <p className="text-gray-600">{integration.description}</p>
                          <button className="mt-4 text-brand-purple font-medium hover:underline">
                            Learn more
                          </button>
                        </motion.div>
                      ))}
                  </div>
                </div>
              )}
              
              {/* All integrations */}
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {searchQuery || selectedCategory !== 'All' 
                    ? `${filteredIntegrations.length} integration${filteredIntegrations.length !== 1 ? 's' : ''} found` 
                    : 'All Integrations'}
                </h2>
                
                {filteredIntegrations.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-600">No integrations found matching your criteria.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All');
                      }}
                      className="mt-4 text-brand-purple hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredIntegrations.map((integration, index) => (
                      <motion.div
                        key={integration.id}
                        className="bg-white p-6 rounded-lg border border-gray-200 hover:border-brand-purple transition-all cursor-pointer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center mb-4">
                          <img
                            src={integration.icon}
                            alt={integration.name}
                            className="w-12 h-12 mr-4"
                          />
                          <div>
                            <h3 className="text-lg font-bold">{integration.name}</h3>
                            <span className="text-sm text-gray-500">{integration.category}</span>
                          </div>
                        </div>
                        <p className="text-gray-600">{integration.description}</p>
                        <button className="mt-4 text-brand-purple font-medium hover:underline">
                          Learn more
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Build your own integration */}
              <div className="mt-16 bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 p-8 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Don't see what you need?</h2>
                    <p className="text-gray-700">
                      Build your own integration using our extensive API and developer tools.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-gradient-to-r from-brand-purple to-brand-teal text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                      View API Docs
                    </button>
                    <button className="bg-white border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
                      Request Integration
                    </button>
                  </div>
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

export default Integrations;
