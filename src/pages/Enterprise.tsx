
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

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
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Enterprise-grade developer tools for scaling teams
                  </h1>
                  <p className="text-lg text-gray-700 mb-8">
                    Empower your development teams with secure, scalable, and customizable 
                    tools that meet the unique needs of enterprise organizations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-gradient-to-r from-brand-purple to-brand-teal text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                      Request Demo
                    </button>
                    <button className="bg-white border border-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all">
                      Contact Sales
                    </button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <motion.img 
                    src="https://via.placeholder.com/600x400?text=Enterprise+Solutions" 
                    alt="Enterprise Solutions"
                    className="rounded-lg shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
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
                  <div key={num} className="grayscale hover:grayscale-0 transition-all">
                    <img 
                      src={`https://via.placeholder.com/150x50?text=Company+${num}`} 
                      alt={`Company ${num}`}
                      className="h-10"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Features */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Enterprise Features</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our enterprise plan includes advanced features designed for large teams 
                  and organizations with complex requirements.
                </p>
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
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Comparison */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  See how our Enterprise plan compares to our standard offerings
                </p>
              </div>
              
              <div className="overflow-x-auto">
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
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                        <td className="px-6 py-4 border-b font-medium">{row.feature}</td>
                        <td className="px-6 py-4 border-b text-center">{row.standard}</td>
                        <td className="px-6 py-4 border-b text-center">{row.pro}</td>
                        <td className="px-6 py-4 border-b text-center bg-brand-purple/5">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          
          {/* Case studies */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Enterprise Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  See how other enterprises have transformed their development workflows with ToolsHub
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    company: "TechGiant Corp",
                    quote: "ToolsHub helped us streamline our development workflow across 12 distributed teams, reducing deployment time by 40%.",
                    person: "Sarah Johnson, CTO"
                  },
                  {
                    company: "Global Finance Inc",
                    quote: "The enterprise security features allowed us to meet our strict compliance requirements while improving developer productivity.",
                    person: "Michael Chen, VP of Engineering"
                  },
                  {
                    company: "HealthTech Solutions",
                    quote: "Custom integrations with our existing systems made adoption seamless across our organization of 500+ developers.",
                    person: "Dr. Emily Rodriguez, Director of Innovation"
                  }
                ].map((testimonial, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="mb-4">
                      <img 
                        src={`https://via.placeholder.com/150x50?text=${testimonial.company}`}
                        alt={testimonial.company}
                        className="h-8"
                      />
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                    <p className="font-medium text-sm">{testimonial.person}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA section */}
          <section className="bg-gradient-to-r from-brand-purple to-brand-teal py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to empower your development teams?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Contact our enterprise sales team to discuss your specific requirements 
                  and get a customized demo for your organization.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="bg-white text-brand-purple px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
                    Schedule Demo
                  </button>
                  <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-all">
                    Contact Sales
                  </button>
                </div>
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
