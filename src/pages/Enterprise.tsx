
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Shield, Users, Server, LineChart, BadgeCheck, Headset, Rocket, ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Enterprise = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          {/* Hero section */}
          <section className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10">
            <div className="container mx-auto px-4 py-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h1 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    Enterprise-grade developer tools for scaling teams
                  </motion.h1>
                  <motion.p 
                    className="text-lg text-gray-700 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    Empower your development teams with secure, scalable, and customizable 
                    tools that meet the unique needs of enterprise organizations.
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <Button className="bg-gradient-to-r from-brand-purple to-brand-teal text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                      Request Demo
                    </Button>
                    <Button variant="outline" className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
                      Contact Sales
                    </Button>
                  </motion.div>
                </div>
                <div className="hidden md:block">
                  <motion.img 
                    src="https://via.placeholder.com/600x400?text=Enterprise+Solutions" 
                    alt="Enterprise Solutions"
                    className="rounded-lg shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* Trusted by */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-xl font-medium text-center text-gray-500 mb-8">Trusted by leading enterprises</h2>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {[1, 2, 3, 4, 5].map(num => (
                  <motion.div 
                    key={num} 
                    className="grayscale hover:grayscale-0 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * num }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <img 
                      src={`https://via.placeholder.com/150x50?text=Company+${num}`} 
                      alt={`Company ${num}`}
                      className="h-10"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Features */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Enterprise Features
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Our enterprise plan includes advanced features designed for large teams 
                  and organizations with complex requirements.
                </motion.p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Advanced Security",
                    description: "Enterprise-grade security with SSO, SAML, role-based access control, and audit logs.",
                    icon: "🔒"
                  },
                  {
                    title: "Dedicated Infrastructure",
                    description: "Isolated infrastructure with guaranteed uptime SLAs and performance metrics.",
                    icon: "🏢"
                  },
                  {
                    title: "Custom Integrations",
                    description: "Connect with your existing tools and systems through our enterprise API and webhooks.",
                    icon: "🔄"
                  },
                  {
                    title: "Advanced Analytics",
                    description: "Comprehensive usage analytics and reporting for team performance optimization.",
                    icon: "📊"
                  },
                  {
                    title: "Premium Support",
                    description: "Dedicated account manager, 24/7 priority support, and implementation assistance.",
                    icon: "👨‍💼"
                  },
                  {
                    title: "Training & Onboarding",
                    description: "Customized training sessions and comprehensive onboarding for your teams.",
                    icon: "🎓"
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* New Security Section */}
          <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src="https://via.placeholder.com/600x400?text=Enterprise+Security" 
                    alt="Enterprise Security"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-6 gradient-text-oceanic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Enterprise-Grade Security
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Your data security is our top priority. Our enterprise solutions come with comprehensive 
                    security features that meet the strictest compliance requirements.
                  </motion.p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "SOC 2 Type II Compliance", icon: <Shield className="h-5 w-5 text-brand-teal" /> },
                      { title: "GDPR & HIPAA Compliant", icon: <CheckCircle2 className="h-5 w-5 text-brand-teal" /> },
                      { title: "256-bit AES Encryption", icon: <Shield className="h-5 w-5 text-brand-teal" /> },
                      { title: "99.99% Uptime SLA", icon: <Server className="h-5 w-5 text-brand-teal" /> }
                    ].map((item, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                      >
                        <div className="bg-white p-2 rounded-full shadow-sm">
                          {item.icon}
                        </div>
                        <p className="text-gray-700 font-medium pt-1">{item.title}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Link to="/contact" className="inline-flex items-center text-brand-teal hover:text-brand-purple transition-colors">
                      Learn more about our security compliance
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Scalability Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <motion.h2 
                    className="text-3xl font-bold mb-6 gradient-text-lavender"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Scale With Confidence
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-gray-700 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Our infrastructure is built to grow with your organization. From thousands to millions of users,
                    our platform scales seamlessly without compromising performance.
                  </motion.p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                      { title: "Elastic Scaling", value: "Instant" },
                      { title: "Max Concurrent Users", value: "Unlimited" },
                      { title: "Global CDN", value: "200+ Regions" },
                      { title: "API Rate Limits", value: "Custom" }
                    ].map((stat, index) => (
                      <motion.div 
                        key={index} 
                        className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <p className="text-gray-500 text-sm">{stat.title}</p>
                        <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Button className="bg-brand-indigo hover:bg-brand-purple text-white">
                      Performance Benchmarks
                      <LineChart className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="order-first md:order-last"
                >
                  <img 
                    src="https://via.placeholder.com/600x400?text=Enterprise+Scaling" 
                    alt="Enterprise Scaling"
                    className="rounded-lg shadow-lg"
                  />
                </motion.div>
              </div>
            </div>
          </section>
          
          {/* Comparison */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Compare Plans
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  See how our Enterprise plan compares to our standard offerings
                </motion.p>
              </div>
              
              <motion.div 
                className="overflow-x-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 border-b-2 text-left">Features</th>
                      <th className="px-6 py-4 border-b-2 text-center">Standard</th>
                      <th className="px-6 py-4 border-b-2 text-center">Professional</th>
                      <th className="px-6 py-4 border-b-2 text-center bg-brand-purple/5">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Users", standard: "Up to 5", pro: "Up to 20", enterprise: "Unlimited" },
                      { feature: "Storage", standard: "10 GB", pro: "100 GB", enterprise: "Custom" },
                      { feature: "Support", standard: "Email", pro: "Priority Email & Chat", enterprise: "Dedicated Support" },
                      { feature: "API Access", standard: "Limited", pro: "Full Access", enterprise: "Enhanced Access" },
                      { feature: "Custom Integrations", standard: "❌", pro: "Limited", enterprise: "✓" },
                      { feature: "SSO/SAML", standard: "❌", pro: "❌", enterprise: "✓" },
                      { feature: "Dedicated Infrastructure", standard: "❌", pro: "❌", enterprise: "✓" },
                      { feature: "SLA", standard: "❌", pro: "99.9% uptime", enterprise: "99.99% uptime" }
                    ].map((row, index) => (
                      <motion.tr 
                        key={index} 
                        className={index % 2 === 0 ? 'bg-gray-50' : ''}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
                      >
                        <td className="px-6 py-4 border-b font-medium">{row.feature}</td>
                        <td className="px-6 py-4 border-b text-center">{row.standard}</td>
                        <td className="px-6 py-4 border-b text-center">{row.pro}</td>
                        <td className="px-6 py-4 border-b text-center bg-brand-purple/5">{row.enterprise}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>
          
          {/* Deployment Options Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl font-bold mb-4 gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Flexible Deployment Options
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Choose the deployment option that best fits your organization's requirements
                </motion.p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Cloud Hosted",
                    description: "Our fully managed cloud solution with enterprise-grade SLAs and 24/7 monitoring.",
                    features: ["Zero maintenance", "Automatic updates", "Managed backups", "Multi-region availability"],
                    icon: <Server className="h-10 w-10 text-brand-purple" />
                  },
                  {
                    title: "Private Cloud",
                    description: "Dedicated infrastructure within our cloud platform for enhanced security and isolation.",
                    features: ["Dedicated resources", "Custom network policies", "Enhanced security controls", "Geographic data selection"],
                    icon: <Building2 className="h-10 w-10 text-brand-teal" />
                  },
                  {
                    title: "On-Premises",
                    description: "Deploy within your own data center or private cloud environment for maximum control.",
                    features: ["Complete data sovereignty", "Internal network access", "Custom security integration", "Air-gapped installation"],
                    icon: <Shield className="h-10 w-10 text-brand-indigo" />
                  }
                ].map((option, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                  >
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6">
                      <div className="bg-white p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-sm">
                        {option.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-700 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-brand-teal mr-2 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <Button variant="outline" className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Case studies */}
          <section className="py-16 bg-gradient-to-r from-brand-purple/5 to-brand-teal/5">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <motion.h2 
                  className="text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Enterprise Success Stories
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  See how other enterprises have transformed their development workflows with ToolsHub
                </motion.p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    company: "TechGiant Corp",
                    quote: "ToolsHub helped us streamline our development workflow across 12 distributed teams, reducing deployment time by 40%.",
                    person: "Sarah Johnson, CTO",
                    logo: "https://via.placeholder.com/150x50?text=TechGiant"
                  },
                  {
                    company: "Global Finance Inc",
                    quote: "The enterprise security features allowed us to meet our strict compliance requirements while improving developer productivity.",
                    person: "Michael Chen, VP of Engineering",
                    logo: "https://via.placeholder.com/150x50?text=GlobalFinance"
                  },
                  {
                    company: "HealthTech Solutions",
                    quote: "Custom integrations with our existing systems made adoption seamless across our organization of 500+ developers.",
                    person: "Dr. Emily Rodriguez, Director of Innovation",
                    logo: "https://via.placeholder.com/150x50?text=HealthTech"
                  }
                ].map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="mb-4 h-12 flex items-center">
                      <img 
                        src={testimonial.logo}
                        alt={testimonial.company}
                        className="h-8"
                      />
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <p className="font-medium text-sm">{testimonial.person}</p>
                      <Button variant="ghost" size="sm" className="text-brand-purple hover:text-brand-indigo">
                        Case Study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button className="bg-white border border-brand-purple text-brand-purple hover:bg-brand-purple/5">
                  View All Case Studies
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </section>
          
          {/* Enterprise Security Compliance Badges */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  Enterprise-grade compliance and security
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  Our products meet the highest standards of security and compliance
                </motion.p>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {["GDPR", "HIPAA", "SOC2", "ISO27001", "PCI-DSS"].map((badge, index) => (
                  <motion.div 
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="bg-gray-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-2">
                      <BadgeCheck className="h-10 w-10 text-brand-indigo" />
                    </div>
                    <p className="font-medium">{badge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Enterprise Support */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 gradient-text-sunset">Enterprise Support</h2>
                    <p className="text-lg text-gray-700 mb-6">
                      Our enterprise customers receive white-glove support from dedicated account teams
                      that understand your business and technical needs.
                    </p>
                    
                    <div className="space-y-6">
                      <motion.div 
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="bg-brand-amber/10 p-3 rounded-full">
                          <Headset className="h-6 w-6 text-brand-amber" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">24/7 Priority Support</h3>
                          <p className="text-gray-600">
                            Get help whenever you need it with guaranteed response times as short as 15 minutes.
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <div className="bg-brand-purple/10 p-3 rounded-full">
                          <Users className="h-6 w-6 text-brand-purple" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Dedicated Account Team</h3>
                          <p className="text-gray-600">
                            Your dedicated account manager and technical specialists understand your unique needs.
                          </p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <div className="bg-brand-teal/10 p-3 rounded-full">
                          <Rocket className="h-6 w-6 text-brand-teal" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-1">Onboarding & Training</h3>
                          <p className="text-gray-600">
                            Comprehensive implementation assistance and custom training for your teams.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className="mt-8">
                      <Button className="bg-gradient-to-r from-brand-amber to-brand-rose text-white">
                        Learn About Enterprise Support
                      </Button>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    className="bg-white rounded-lg shadow-lg p-6 border border-gray-100"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-2xl font-bold mb-4 text-center">Support SLA</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between py-3 border-b">
                            <span className="font-medium">Critical Issues</span>
                            <span className="font-semibold text-brand-purple">15 min response</span>
                          </div>
                          <div className="flex justify-between py-3 border-b">
                            <span className="font-medium">High Priority</span>
                            <span className="font-semibold text-brand-purple">1 hour response</span>
                          </div>
                          <div className="flex justify-between py-3 border-b">
                            <span className="font-medium">Normal Priority</span>
                            <span className="font-semibold text-brand-purple">4 hour response</span>
                          </div>
                          <div className="flex justify-between py-3 border-b">
                            <span className="font-medium">Low Priority</span>
                            <span className="font-semibold text-brand-purple">8 hour response</span>
                          </div>
                          <div className="flex justify-between py-3">
                            <span className="font-medium">Support Hours</span>
                            <span className="font-semibold text-brand-purple">24/7/365</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="bg-gradient-to-r from-brand-purple to-brand-teal py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <motion.h2 
                  className="text-3xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to empower your development teams?
                </motion.h2>
                <motion.p 
                  className="text-lg mb-8 opacity-90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Contact our enterprise sales team to discuss your specific requirements 
                  and get a customized demo for your organization.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <Button className="bg-white text-brand-purple hover:bg-gray-100">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="bg-transparent border border-white text-white hover:bg-white/10">
                    Contact Sales
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Enterprise;
