
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Search, Headset, FileText, MessageCircle, LifeBuoy, Play, Book, Users, ArrowRight, ChevronRight } from "lucide-react";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">How can we help you?</h1>
              <p className="text-xl text-gray-600">Find answers, access resources, or get in touch with our support team.</p>
            </div>
            
            <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Search for answers..." 
                    className="pl-10 py-6 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit" className="absolute right-1 top-1 h-10">
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Quick Help Categories */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-md transition-all animate-fade-in">
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-brand-purple" />
                    </div>
                  </div>
                  <CardTitle>Documentation</CardTitle>
                  <CardDescription>Comprehensive guides and reference materials</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="pl-0" asChild>
                    <Link to="/docs" className="flex items-center">
                      Browse Documentation <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center">
                      <Play className="h-6 w-6 text-brand-teal" />
                    </div>
                  </div>
                  <CardTitle>Video Tutorials</CardTitle>
                  <CardDescription>Step-by-step video guides for all our tools</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="pl-0" asChild>
                    <Link to="/tutorials" className="flex items-center">
                      Watch Tutorials <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-brand-purple" />
                    </div>
                  </div>
                  <CardTitle>Community</CardTitle>
                  <CardDescription>Join discussions and share knowledge</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="pl-0" asChild>
                    <a href="#" className="flex items-center">
                      Visit Community <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center">
                      <Headset className="h-6 w-6 text-brand-teal" />
                    </div>
                  </div>
                  <CardTitle>Contact Support</CardTitle>
                  <CardDescription>Get help directly from our support team</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="link" className="pl-0" asChild>
                    <Link to="/contact" className="flex items-center">
                      Contact Us <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Popular Topics */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4">Popular Topics</Badge>
              <h2 className="text-3xl font-bold mb-6">Frequently asked questions</h2>
              <p className="text-lg text-gray-600">
                Quick answers to our most common questions and issues.
              </p>
            </div>
            
            <Tabs defaultValue="account" className="max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-4 w-full max-w-lg mx-auto mb-8">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>
              
              <TabsContent value="account" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I create a new user account?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      To create a new user account, click on the "Sign up" button in the top-right corner of any page. You'll need to provide your email address and create a secure password. After that, you'll receive a verification email to confirm your account.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I add team members to my account?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Team members can be added from your account dashboard. Navigate to "Settings" {'>'} "Team Management" and click "Invite Team Member." Enter their email address and select their role permissions. They'll receive an invitation to join your team.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I change my password?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      To change your password, log into your account and go to "Settings" {'>'} "Account Security." Click "Change Password" and follow the prompts to set a new password. For security reasons, you'll need to enter your current password first.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">What if I forgot my password?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      If you forgot your password, click on the "Log in" button and then select "Forgot Password" beneath the login form. Enter your email address, and we'll send you instructions to reset your password.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="billing" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do billing cycles work?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Your billing cycle starts on the day you subscribe and renews on the same day each month (for monthly plans) or year (for annual plans). For example, if you subscribe on the 15th, you'll be billed on the 15th of each subsequent billing period.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">Can I upgrade or downgrade my plan?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Yes, you can change your plan at any time. If you upgrade, you'll be charged the prorated difference for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I update my payment information?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      To update your payment method, go to "Settings" {'>'} "Billing & Subscription" and click "Update Payment Method." You can add a new card or select from your existing payment methods.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="tools" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I connect DataSync Pro with my CRM?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      To connect DataSync Pro with your CRM, navigate to "Tools" {'>'} "DataSync Pro" {'>'} "Connections" and click on "Add Connection." Select your CRM from the list of available integrations and follow the authentication steps to establish the connection.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I create a multi-step form in FormBuilder X?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      In FormBuilder X, create a new form and click on "Settings" {'>'} "Form Type" and select "Multi-step." You can then add sections to your form using the "Add Section" button. Each section will become a separate step in your form.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="technical" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">What browsers are supported?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      ToolsHub supports the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated to ensure optimal performance and security.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How can I export my data from ToolsHub?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      You can export your data from the "Settings" {'>'} "Data Export" section. Choose the data types you want to export and the format (CSV, JSON, or Excel). Your export will be prepared and you'll receive a download link via email.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
