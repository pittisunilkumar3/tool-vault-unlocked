
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedWrapper from '@/components/AnimatedWrapper';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, MessageSquare, Users } from 'lucide-react';
import FAQ from '@/components/FAQ';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const officeLocations = [
    {
      name: "San Francisco HQ",
      address: "123 Innovation Way, San Francisco, CA 94107",
      phone: "+1 (555) 123-4567",
      email: "sf@toolshub.com",
      hours: "Monday - Friday: 9am - 5pm PST"
    },
    {
      name: "New York Office",
      address: "456 Tech Avenue, New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@toolshub.com",
      hours: "Monday - Friday: 9am - 5pm EST"
    },
    {
      name: "London Office",
      address: "789 Digital Lane, London, UK EC1V 9FR",
      phone: "+44 (0) 20 7123 4567",
      email: "london@toolshub.com",
      hours: "Monday - Friday: 9am - 5pm GMT"
    }
  ];

  const supportTeam = [
    {
      name: "Sarah Johnson",
      role: "Customer Support Lead",
      email: "sarah.j@toolshub.com",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&q=80"
    },
    {
      name: "Michael Chen",
      role: "Technical Support Specialist",
      email: "michael.c@toolshub.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80"
    },
    {
      name: "Olivia Rodriguez",
      role: "Enterprise Solutions Manager",
      email: "olivia.r@toolshub.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&q=80"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <AnimatedWrapper>
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  We're here to help with any questions, feedback, or support you might need. Reach out to our team using any of the methods below.
                </p>
              </div>
              
              {/* Hero Contact Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <AnimatedWrapper animation="fade" delay={0.1}>
                  <Card className="h-full hover:shadow-md transition-shadow border-t-4 border-t-brand-purple">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="bg-brand-purple/10 p-3 rounded-full mb-4">
                          <Phone className="h-6 w-6 text-brand-purple" />
                        </div>
                        <CardTitle className="mb-2">Call Us</CardTitle>
                        <p className="text-gray-500 mb-4">Our support team is available 24/7</p>
                        <a href="tel:+15551234567" className="text-brand-purple font-semibold hover:underline">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedWrapper>
                
                <AnimatedWrapper animation="fade" delay={0.2}>
                  <Card className="h-full hover:shadow-md transition-shadow border-t-4 border-t-brand-teal">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="bg-brand-teal/10 p-3 rounded-full mb-4">
                          <Mail className="h-6 w-6 text-brand-teal" />
                        </div>
                        <CardTitle className="mb-2">Email Us</CardTitle>
                        <p className="text-gray-500 mb-4">Send us a message anytime</p>
                        <a href="mailto:hello@toolshub.com" className="text-brand-teal font-semibold hover:underline">
                          hello@toolshub.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedWrapper>
                
                <AnimatedWrapper animation="fade" delay={0.3}>
                  <Card className="h-full hover:shadow-md transition-shadow border-t-4 border-t-brand-indigo">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center p-4">
                        <div className="bg-brand-indigo/10 p-3 rounded-full mb-4">
                          <MapPin className="h-6 w-6 text-brand-indigo" />
                        </div>
                        <CardTitle className="mb-2">Visit Us</CardTitle>
                        <p className="text-gray-500 mb-4">Our headquarters location</p>
                        <p className="text-gray-700">
                          123 Innovation Way<br />
                          San Francisco, CA 94107
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedWrapper>
              </div>
              
              {/* Contact Form and Info Section */}
              <div className="grid md:grid-cols-2 gap-12 mb-20">
                <AnimatedWrapper animation="slide-left" delay={0.2}>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales Question</option>
                          <option value="feedback">Product Feedback</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="billing">Billing Issue</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-brand-purple to-brand-teal text-white font-medium py-3 px-6 rounded-md hover:opacity-90 transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  </div>
                </AnimatedWrapper>
                
                <AnimatedWrapper animation="slide-right" delay={0.3}>
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg shadow-sm h-full">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Our Support Channels</h3>
                          <div className="flex items-start space-x-4 mb-3">
                            <div className="bg-brand-purple/10 p-2 rounded-full mt-1">
                              <MessageSquare className="h-5 w-5 text-brand-purple" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Live Chat</p>
                              <p className="text-gray-600">Available 24/7 through our dashboard</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-4 mb-3">
                            <div className="bg-brand-teal/10 p-2 rounded-full mt-1">
                              <Phone className="h-5 w-5 text-brand-teal" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Priority Support</p>
                              <p className="text-gray-600">Enterprise customers: +1 (555) 987-6543</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Business Inquiries</h3>
                          <div className="flex items-start space-x-4 mb-3">
                            <div className="bg-brand-indigo/10 p-2 rounded-full mt-1">
                              <Mail className="h-5 w-5 text-brand-indigo" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Sales</p>
                              <p className="text-brand-indigo">sales@toolshub.com</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-4 mb-3">
                            <div className="bg-brand-lavender/10 p-2 rounded-full mt-1">
                              <Users className="h-5 w-5 text-brand-lavender" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-700">Partnerships</p>
                              <p className="text-brand-lavender">partners@toolshub.com</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Hours</h3>
                          <p className="text-gray-600">
                            Customer Support: 24/7<br />
                            Sales: Monday - Friday, 9am - 5pm PST<br />
                            Office: Monday - Friday, 9am - 6pm PST
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="font-medium text-gray-700 mb-3">Follow Us</h3>
                        <div className="flex space-x-4">
                          <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">Twitter</a>
                          <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">LinkedIn</a>
                          <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">GitHub</a>
                          <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">Instagram</a>
                          <a href="#" className="text-gray-500 hover:text-brand-purple transition-colors">YouTube</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedWrapper>
              </div>

              {/* Office Locations */}
              <AnimatedWrapper animation="fade" delay={0.2} className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Office Locations</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {officeLocations.map((office, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl">{office.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <MapPin className="h-5 w-5 text-brand-purple shrink-0 mt-0.5" />
                            <p>{office.address}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-brand-teal shrink-0" />
                            <p>{office.phone}</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-brand-indigo shrink-0" />
                            <p>{office.email}</p>
                          </div>
                          <div className="pt-2 border-t border-gray-100">
                            <p className="text-sm text-gray-600">{office.hours}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Team Section */}
              <AnimatedWrapper animation="fade" delay={0.3} className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Support Team</h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                  Our dedicated support team is here to help you with any questions or issues you might have.
                  Feel free to reach out directly to our specialists.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {supportTeam.map((member, index) => (
                    <AnimatedWrapper key={index} animation="fade" delay={0.1 * index} className="text-center">
                      <div className="mb-4">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                      <p className="text-brand-purple mb-2">{member.role}</p>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="inline-flex items-center text-gray-600 hover:text-brand-purple"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        {member.email}
                      </a>
                    </AnimatedWrapper>
                  ))}
                </div>
              </AnimatedWrapper>

              {/* Map Section */}
              <AnimatedWrapper animation="fade" delay={0.3} className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
                <div className="rounded-xl overflow-hidden shadow-md h-80 w-full bg-gray-200">
                  {/* Placeholder for a map - in a real app, this would be an interactive map component */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <p className="text-gray-500">Interactive Map Placeholder</p>
                  </div>
                </div>
              </AnimatedWrapper>

              {/* FAQ Section */}
              <div className="mb-20">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                  Got questions? We've got answers. If you don't find what you're looking for, 
                  feel free to reach out to our support team.
                </p>
                
                <div className="max-w-3xl mx-auto">
                  <FAQ />
                </div>
              </div>

              {/* CTA Section */}
              <AnimatedWrapper animation="fade" delay={0.4}>
                <div className="bg-gradient-to-r from-brand-purple/10 to-brand-teal/10 rounded-2xl p-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
                  <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                    Join thousands of companies that trust our tools for their business needs.
                    Start your free trial today.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button 
                      className="bg-brand-purple hover:bg-brand-indigo text-white"
                      size="lg"
                    >
                      Start Free Trial
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-brand-purple text-brand-purple hover:bg-brand-purple/10"
                      size="lg"
                    >
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
              </AnimatedWrapper>
            </div>
          </div>
        </AnimatedWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
