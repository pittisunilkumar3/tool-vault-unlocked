
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Star, Quote, ArrowRight } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Industries",
    quote: "DataSync Pro has revolutionized how we handle our multi-platform data strategy. We've reduced sync errors by 95% and saved countless hours of manual work. The team at ToolsHub has been incredibly responsive whenever we've needed assistance.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    category: "DataSync Pro",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Digital Marketing Director",
    company: "Global Retail Solutions",
    quote: "Managing inventory across our 12 sales channels was a nightmare before DataSync Pro. Now everything stays in perfect sync automatically. Our team can focus on strategy instead of troubleshooting data issues.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    category: "DataSync Pro",
    rating: 5
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Event Manager",
    company: "EventPro Conferences",
    quote: "We've increased our event registration completion rate by 67% after switching to FormBuilder X. The conditional logic feature has been a game-changer for us, allowing us to create dynamic forms that adapt to different types of registrations.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    category: "FormBuilder X",
    rating: 5
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Head of Talent Acquisition",
    company: "Recruitment Solutions",
    quote: "As a recruiting firm, we need sophisticated forms that can handle complex application processes. FormBuilder X delivers exactly what we need and more. The analytics dashboard helps us optimize our forms continuously.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    category: "FormBuilder X",
    rating: 4
  },
  {
    id: 5,
    name: "Thomas Weber",
    role: "Lead Software Engineer",
    company: "Innovative Software Solutions",
    quote: "CodeAssist AI feels like having a senior developer looking over your shoulder at all times. It's caught numerous potential issues before they made it to code review. The time savings alone have paid for our subscription many times over.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    category: "CodeAssist AI",
    rating: 5
  },
  {
    id: 6,
    name: "Sophia Kim",
    role: "CTO",
    company: "TechStart Mobile Apps",
    quote: "As a tech lead, I've seen a measurable improvement in code quality across our team since implementing CodeAssist AI. Our PR review cycles are much shorter now, and junior developers are learning faster with the contextual suggestions.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    category: "CodeAssist AI",
    rating: 5
  },
  {
    id: 7,
    name: "Jessica Martinez",
    role: "E-commerce Director",
    company: "Fashion Forward Online",
    quote: "Our e-commerce site has over 10,000 product images. MediaOptimizer reduced our page load times by 65% while maintaining image quality. Our conversion rate improved almost immediately after implementation.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    category: "MediaOptimizer",
    rating: 5
  },
  {
    id: 8,
    name: "Robert Chen",
    role: "Content Manager",
    company: "Travel Panoramas",
    quote: "As a travel blog with high-resolution photography, we struggled with page speed. MediaOptimizer solved that problem completely while actually improving how our images look on different devices. The batch processing feature is a huge timesaver.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "MediaOptimizer",
    rating: 4
  }
];

// Featured case studies
const caseStudies = [
  {
    id: "techcorp",
    company: "TechCorp Industries",
    title: "How TechCorp Streamlined Data Management with DataSync Pro",
    description: "TechCorp reduced manual data entry by 95% and eliminated sync errors across their enterprise systems.",
    metrics: [
      { label: "Hours Saved Weekly", value: "120+" },
      { label: "ROI", value: "480%" },
      { label: "Sync Errors", value: "Reduced by 95%" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "DataSync Pro"
  },
  {
    id: "eventpro",
    company: "EventPro Conferences",
    title: "EventPro Boosts Registration Completion by 67% with FormBuilder X",
    description: "Learn how EventPro used conditional logic and multi-step forms to streamline their event registration process.",
    metrics: [
      { label: "Completion Rate", value: "+67%" },
      { label: "Average Fill Time", value: "-42%" },
      { label: "Customer Satisfaction", value: "+45%" }
    ],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1712&q=80",
    category: "FormBuilder X"
  },
  {
    id: "techstart",
    company: "TechStart Mobile Apps",
    title: "TechStart Improves Code Quality and Development Speed with CodeAssist AI",
    description: "How an app development company leveraged AI to improve code quality and onboard junior developers faster.",
    metrics: [
      { label: "Dev Productivity", value: "+35%" },
      { label: "Bug Reduction", value: "42%" },
      { label: "Onboarding Time", value: "-50%" }
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "CodeAssist AI"
  }
];

const categories = ["All", "DataSync Pro", "FormBuilder X", "CodeAssist AI", "MediaOptimizer"];

const Testimonials = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <Badge className="mb-4">Success Stories</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">What our customers say</h1>
              <p className="text-xl text-gray-600">See how organizations of all sizes are transforming their workflows with ToolsHub.</p>
            </div>
          </div>
        </section>
        
        {/* Featured Testimonial */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-2xl overflow-hidden animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 md:p-16 flex flex-col justify-center">
                  <Quote className="h-12 w-12 text-brand-purple/20 mb-6" />
                  <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8 italic">
                    "DataSync Pro has revolutionized how we handle our multi-platform data strategy. We've reduced sync errors by 95% and saved countless hours of manual work."
                  </p>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src="https://randomuser.me/api/portraits/women/28.jpg" 
                      alt="Sarah Johnson" 
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-lg">Sarah Johnson</p>
                      <p className="text-gray-600">CTO, TechCorp Industries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-fit">
                    Read the full case study
                  </Button>
                </div>
                <div className="md:order-first">
                  <div className="h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                      alt="TechCorp Industries"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* All Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Customer Testimonials</h2>
              <p className="text-lg text-gray-600">
                Read what our customers have to say about their experience with our tools.
              </p>
            </div>
            
            <Tabs defaultValue="All" className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-5">
                  {categories.map(category => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map(category => (
                <TabsContent key={category} value={category} className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials
                      .filter(t => category === "All" || t.category === category)
                      .map((testimonial, index) => (
                        <Card key={testimonial.id} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          <CardContent className="p-8">
                            <Quote className="h-10 w-10 text-brand-purple/20 mb-6" />
                            <p className="text-lg text-gray-700 mb-8 italic">
                              "{testimonial.quote}"
                            </p>
                            
                            <div className="flex items-center gap-4 mb-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <div>
                                <p className="font-bold">{testimonial.name}</p>
                                <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                              <Badge variant="outline">{testimonial.category}</Badge>
                            </div>
                          </CardContent>
                        </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">Success Stories</Badge>
              <h2 className="text-3xl font-bold mb-6">Featured case studies</h2>
              <p className="text-lg text-gray-600">
                Dive deeper into how our customers achieved impressive results with ToolsHub.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id} 
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={study.image} 
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-4">{study.category}</Badge>
                    <h3 className="font-bold text-xl mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-6">{study.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-2xl font-bold text-brand-purple">{metric.value}</p>
                          <p className="text-xs text-gray-500">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      Read Case Study <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg">View All Case Studies</Button>
            </div>
          </div>
        </section>
        
        {/* Testimonial Video */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <Badge className="mb-4">Customer Story</Badge>
                <h2 className="text-3xl font-bold mb-6">Hear from our customers</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Watch how TechCorp Industries transformed their data management strategy with DataSync Pro, resulting in a 95% reduction in sync errors and significant time savings.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Challenge</h3>
                      <p className="text-gray-600">Managing data across multiple systems with frequent synchronization errors.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Solution</h3>
                      <p className="text-gray-600">Implemented DataSync Pro to automate synchronization between all systems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center mt-0.5">
                      <CheckCircleIcon className="h-5 w-5 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Results</h3>
                      <p className="text-gray-600">95% reduction in sync errors and 120+ hours saved weekly on manual data management.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Button>
                    Watch the Full Story
                  </Button>
                </div>
              </div>
              
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-brand-purple flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform">
                        <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 0C4.477 0 0 4.477 0 10c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm3.536 10.535l-5 3A1 1 0 017 12.5v-6a1 1 0 011.536-.835l5 3a1 1 0 010 1.67z" />
                        </svg>
                      </div>
                    </div>
                    <img 
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                      alt="Video thumbnail"
                      className="w-full h-full object-cover opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-brand-purple to-brand-teal text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 bg-white/20 hover:bg-white/30 text-white">By the Numbers</Badge>
              <h2 className="text-3xl font-bold mb-6">The impact of ToolsHub</h2>
              <p className="text-xl">
                See the collective results our customers are achieving with our platform.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
                <p className="text-sm md:text-base">Average reduction in sync errors</p>
              </div>
              
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">67%</p>
                <p className="text-sm md:text-base">Increase in form completion rates</p>
              </div>
              
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">35%</p>
                <p className="text-sm md:text-base">Boost in developer productivity</p>
              </div>
              
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">42%</p>
                <p className="text-sm md:text-base">Faster page load times</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Submit Your Story CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center animate-fade-in">
              <Badge className="mb-4">Share Your Experience</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Have a success story with ToolsHub?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We'd love to hear about your experience and how our tools have helped transform your workflow.
              </p>
              <Button size="lg" className="mx-auto">
                Submit Your Story
              </Button>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

// Custom CheckCircle icon for consistent styling
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default Testimonials;
