
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

// Sample team data
const executiveTeam = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Co-founder & CEO",
    bio: "Alex has 15+ years of experience in software development and product management. Prior to founding ToolsHub, he was VP of Product at TechGiant Inc.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "alex@toolshub.com"
    }
  },
  {
    id: 2,
    name: "Jamie Rodriguez",
    role: "Co-founder & CTO",
    bio: "Jamie is a technology leader with expertise in cloud infrastructure and AI. Previously, she led engineering teams at several Fortune 500 companies.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "jamie@toolshub.com"
    }
  },
  {
    id: 3,
    name: "Michael Thompson",
    role: "Chief Product Officer",
    bio: "Michael brings 12 years of product development experience to ToolsHub. He's passionate about creating intuitive software that solves real problems.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "michael@toolshub.com"
    }
  }
];

const departmentLeads = [
  {
    id: 4,
    name: "Sarah Johnson",
    role: "VP of Engineering",
    bio: "Sarah leads our engineering team with a focus on scalable architecture and development best practices.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    social: {
      linkedin: "#",
      email: "sarah@toolshub.com"
    }
  },
  {
    id: 5,
    name: "David Wilson",
    role: "VP of Marketing",
    bio: "David brings creative marketing strategies that have helped ToolsHub grow its user base exponentially.",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    social: {
      linkedin: "#",
      email: "david@toolshub.com"
    }
  },
  {
    id: 6,
    name: "Lisa Patel",
    role: "VP of Customer Success",
    bio: "Lisa ensures that our customers get the most out of ToolsHub through exceptional support and education.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    social: {
      linkedin: "#",
      email: "lisa@toolshub.com"
    }
  },
  {
    id: 7,
    name: "Robert Chen",
    role: "VP of Sales",
    bio: "Robert has built our enterprise sales team from the ground up, focusing on long-term customer relationships.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    social: {
      linkedin: "#",
      email: "robert@toolshub.com"
    }
  }
];

const Team = () => {
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
              <Badge className="mb-4">Our Team</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Meet the people behind ToolsHub</h1>
              <p className="text-xl text-gray-600">We're a diverse team of designers, developers, and product specialists passionate about building tools that help people work smarter.</p>
            </div>
            
            <div className="relative w-full max-w-5xl mx-auto overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-w-16 aspect-h-7">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="ToolsHub team" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <Badge className="mb-4">Our Mission</Badge>
                <h2 className="text-3xl font-bold mb-6">Empowering productivity through innovation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At ToolsHub, we believe that powerful tools should be accessible to everyone. Our mission is to democratize access to premium productivity solutions through a simple subscription model.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We're committed to building a platform that helps individuals and teams work more efficiently, with less friction, and greater impact. By bringing together the best tools under one subscription, we're making professional-grade software more affordable and easier to use.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#6941C6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Simplicity</h3>
                      <p className="text-gray-600">We believe in making powerful tools simple to use.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#0E9C9B"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Innovation</h3>
                      <p className="text-gray-600">We continuously push the boundaries of what's possible.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#6941C6"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Customer Focus</h3>
                      <p className="text-gray-600">Everything we build starts with our users' needs.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-w-3 aspect-h-4 mt-8 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                    alt="Team brainstorming"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">Leadership</Badge>
              <h2 className="text-3xl font-bold mb-6">Executive Team</h2>
              <p className="text-lg text-gray-600">
                Meet the leaders driving ToolsHub's vision and strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {executiveTeam.map((member, index) => (
                <Card key={member.id} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-w-4 aspect-h-3">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-xl">{member.name}</h3>
                    <p className="text-brand-purple font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                  </CardContent>
                  <CardFooter className="flex gap-4 border-t border-gray-100 pt-4">
                    {member.social.twitter && (
                      <a href={member.social.twitter} aria-label={`${member.name}'s Twitter`} className="text-gray-400 hover:text-brand-purple transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} aria-label={`${member.name}'s LinkedIn`} className="text-gray-400 hover:text-brand-purple transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.email && (
                      <a href={`mailto:${member.social.email}`} aria-label={`Email ${member.name}`} className="text-gray-400 hover:text-brand-purple transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Department Leaders */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">Department Leads</Badge>
              <h2 className="text-3xl font-bold mb-6">Team Leaders</h2>
              <p className="text-lg text-gray-600">
                The talented individuals who lead our specialized departments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {departmentLeads.map((leader, index) => (
                <div key={leader.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg">{leader.name}</h3>
                    <p className="text-brand-teal font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{leader.bio}</p>
                    <div className="flex gap-3">
                      {leader.social.linkedin && (
                        <a href={leader.social.linkedin} aria-label={`${leader.name}'s LinkedIn`} className="text-gray-400 hover:text-brand-purple transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      {leader.social.email && (
                        <a href={`mailto:${leader.social.email}`} aria-label={`Email ${leader.name}`} className="text-gray-400 hover:text-brand-purple transition-colors">
                          <Mail className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 animate-fade-in">
                <Badge className="mb-4">Our Culture</Badge>
                <h2 className="text-3xl font-bold mb-6">What makes us different</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At ToolsHub, we believe that great products come from great teams. We've built a culture that values creativity, collaboration, and continuous improvement.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Remote-first philosophy</h3>
                    <p className="text-gray-600">
                      We're a fully distributed team working across 12 countries. We believe talent shouldn't be limited by geography.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Continuous learning</h3>
                    <p className="text-gray-600">
                      Every team member gets a personal development budget and dedicated learning time each week.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">Work-life balance</h3>
                    <p className="text-gray-600">
                      We focus on results, not hours. Flexible schedules and unlimited PTO help our team stay refreshed and productive.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <a href="/careers" className="group">
                      Join our team <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="col-span-2 row-span-2">
                  <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Team meeting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Team collaboration"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Remote work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="aspect-w-2 aspect-h-1 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      alt="Team building"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Our Team CTA */}
        <section className="py-16 bg-gradient-to-br from-brand-purple/10 to-brand-teal/10">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-5xl mx-auto animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4">Careers</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Join our growing team</h2>
                  <p className="text-gray-600 mb-6">
                    We're always looking for talented individuals who are passionate about building great products and making a difference.
                  </p>
                  <Button size="lg" asChild>
                    <a href="/careers">
                      View Open Positions
                    </a>
                  </Button>
                </div>
                
                <div className="rounded-lg overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Our office"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
