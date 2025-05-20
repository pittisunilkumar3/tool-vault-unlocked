
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
                      Team members can be added from your account dashboard. Navigate to "Settings" > "Team Management" and click "Invite Team Member." Enter their email address and select their role permissions. They'll receive an invitation to join your team.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I change my password?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      To change your password, log into your account and go to "Settings" > "Account Security." Click "Change Password" and follow the prompts to set a new password. For security reasons, you'll need to enter your current password first.
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
                      To update your payment method, go to "Settings" > "Billing & Subscription" and click "Update Payment Method." You can add a new card or select from your existing payment methods.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">What happens when my free trial ends?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      When your free trial ends, your account will automatically transition to the plan you selected during signup. If you don't want to continue, make sure to cancel your subscription before the trial period ends to avoid being charged.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="tools" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I access the tools included in my subscription?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Once logged in, you can access all tools included in your subscription from your dashboard. Click on the tool icon to launch it, or use the Tools dropdown in the main navigation menu.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">Are there limits to how much I can use each tool?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Usage limits vary by subscription plan. Starter plans include basic usage limits, while Pro and Enterprise plans offer higher or unlimited usage. You can view your current usage and limits in your account dashboard.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">Can I share my work with team members?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Yes, you can share your work with team members who have been added to your account. Each tool has sharing options available through the "Share" button within the tool interface. You can control permissions for each shared item.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How often are new tools or features added?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      We typically add new tools quarterly and release feature updates to existing tools monthly. Pro and Enterprise subscribers get early access to new tools and features before they're available to other subscription tiers.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="technical" className="animate-fade-in">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">What browsers are supported?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      ToolsHub supports the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience and security.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">Can I use ToolsHub on mobile devices?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Yes, ToolsHub is fully responsive and works on mobile devices. However, for complex tools like DataSync Pro or CodeAssist AI, we recommend using a desktop for the best experience and full functionality.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">How do I report a bug or technical issue?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      To report a bug or technical issue, go to your account dashboard and click "Report an Issue" or contact our support team directly. Please include as much detail as possible, including screenshots and steps to reproduce the issue.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4" className="bg-white rounded-lg px-6 shadow-sm">
                    <AccordionTrigger className="py-4">Is there a desktop application available?</AccordionTrigger>
                    <AccordionContent className="pb-4 text-gray-600">
                      Currently, ToolsHub is a web-based platform without native desktop applications. However, you can create a shortcut on your desktop using your browser's "Create Shortcut" feature for quick access.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/docs">View Full Documentation</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4">Support Options</Badge>
              <h2 className="text-3xl font-bold mb-6">Get the help you need</h2>
              <p className="text-lg text-gray-600">
                Choose the support option that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border border-gray-200 hover:shadow-lg transition-all animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Self Service</span>
                    <Badge variant="outline">Free</Badge>
                  </CardTitle>
                  <CardDescription>Access our knowledge base and community</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Documentation & guides</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Video tutorials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Community forums</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Email support (basic)</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-2 border-brand-purple shadow-lg relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="absolute top-0 right-0 left-0">
                  <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-purple">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Pro Support</span>
                    <Badge variant="secondary">Included with Pro Plan</Badge>
                  </CardTitle>
                  <CardDescription>Priority support for professionals</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Everything in Self Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Priority email support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Live chat during business hours</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Screen sharing support sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>4-hour response time</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Upgrade to Pro
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Enterprise Support</span>
                    <Badge variant="outline">Custom</Badge>
                  </CardTitle>
                  <CardDescription>Dedicated support for large organizations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Everything in Pro Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dedicated account manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>24/7 phone and email support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom training sessions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>1-hour response SLA</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/enterprise">Contact Sales</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Support CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <LifeBuoy className="h-12 w-12 mx-auto mb-4 text-brand-purple" />
              <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our support team is here to assist you with any questions or issues you might have.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Submit a Ticket
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
