
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, CalendarDays, ArrowUpRight, ThumbsUp, MessageSquare } from "lucide-react";

const currentQuarter = "Q3 2025";

// Sample roadmap data
const plannedFeatures = [
  {
    id: 1,
    title: "Advanced AI Training Options for CodeAssist",
    description: "Customize how CodeAssist AI learns from your codebase with fine-grained controls.",
    status: "in-progress",
    quarter: "Q3 2025",
    category: "CodeAssist AI",
    votes: 324,
    comments: 42
  },
  {
    id: 2,
    title: "Bidirectional Sync for DataSync Pro",
    description: "Synchronize data in both directions between systems, with conflict resolution.",
    status: "planned",
    quarter: "Q3 2025",
    category: "DataSync Pro",
    votes: 286,
    comments: 38
  },
  {
    id: 3,
    title: "FormBuilder X: Advanced Analytics Dashboard",
    description: "Get deeper insights into form performance with heat maps and drop-off analysis.",
    status: "planned",
    quarter: "Q3 2025",
    category: "FormBuilder X",
    votes: 214,
    comments: 27
  },
  {
    id: 4,
    title: "Image Recognition Features for MediaOptimizer",
    description: "Automatically detect and tag images based on content for better organization.",
    status: "in-progress",
    quarter: "Q3 2025",
    category: "MediaOptimizer",
    votes: 189,
    comments: 21
  },
  {
    id: 5,
    title: "Team Collaboration Tools Updates",
    description: "Enhanced permissions and sharing features across all ToolsHub products.",
    status: "in-progress",
    quarter: "Q3 2025",
    category: "Platform",
    votes: 342,
    comments: 46
  },
  {
    id: 6,
    title: "GraphQL API Support",
    description: "New GraphQL endpoints for all ToolsHub services for more efficient API usage.",
    status: "planned",
    quarter: "Q4 2025",
    category: "API",
    votes: 278,
    comments: 31
  },
  {
    id: 7,
    title: "New Tool: WorkflowAutomator",
    description: "Create visual automation workflows connecting all your ToolsHub tools.",
    status: "planned",
    quarter: "Q4 2025",
    category: "New Product",
    votes: 412,
    comments: 57
  },
  {
    id: 8,
    title: "Mobile App for iOS and Android",
    description: "Access key ToolsHub features on the go with our new mobile application.",
    status: "planned",
    quarter: "Q4 2025",
    category: "Platform",
    votes: 385,
    comments: 49
  }
];

const completedFeatures = [
  {
    id: 101,
    title: "MediaOptimizer Batch Processing",
    description: "Process multiple media files simultaneously with customizable settings.",
    releaseDate: "June 15, 2025",
    category: "MediaOptimizer"
  },
  {
    id: 102,
    title: "DataSync Pro Custom Field Mapping",
    description: "Advanced field mapping options with transformations and conditional logic.",
    releaseDate: "May 28, 2025",
    category: "DataSync Pro"
  },
  {
    id: 103,
    title: "CodeAssist AI Multi-language Support",
    description: "Support for 7 additional programming languages including Rust and Go.",
    releaseDate: "May 10, 2025",
    category: "CodeAssist AI"
  },
  {
    id: 104,
    title: "FormBuilder X Payment Integration",
    description: "Collect payments directly through forms with Stripe and PayPal integrations.",
    releaseDate: "April 22, 2025",
    category: "FormBuilder X"
  }
];

const Roadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <Badge className="mb-4">Product Roadmap</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">What we're building next</h1>
              <p className="text-xl text-gray-600">Explore our product roadmap to see what features and improvements we're working on.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Current Quarter</p>
                  <p className="text-xl font-bold">{currentQuarter}</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">In Progress</p>
                  <p className="text-xl font-bold">{plannedFeatures.filter(f => f.status === "in-progress").length} Features</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <CalendarDays className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Planned</p>
                  <p className="text-xl font-bold">{plannedFeatures.filter(f => f.status === "planned").length} Features</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Recently Shipped</p>
                  <p className="text-xl font-bold">{completedFeatures.length} Features</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Current Quarter */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Current Quarter: {currentQuarter}</h2>
              <p className="text-gray-600">Features we're currently working on and planning for this quarter.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plannedFeatures
                .filter(feature => feature.quarter === currentQuarter)
                .map((feature, index) => (
                  <Card key={feature.id} className="border border-gray-200 overflow-hidden hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={feature.status === "in-progress" ? "secondary" : "outline"}>
                          {feature.status === "in-progress" ? "In Progress" : "Planned"}
                        </Badge>
                        <Badge variant="outline">{feature.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="pt-4 border-t flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-500">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-xs">{feature.votes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-xs">{feature.comments}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-brand-purple">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Next Quarter */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Coming Soon: Q4 2025</h2>
              <p className="text-gray-600">Features we're planning for the next quarter.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plannedFeatures
                .filter(feature => feature.quarter === "Q4 2025")
                .map((feature, index) => (
                  <Card key={feature.id} className="border border-gray-200 overflow-hidden hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">Planned</Badge>
                        <Badge variant="outline">{feature.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="pt-4 border-t flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-gray-500">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-xs">{feature.votes}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <MessageSquare className="h-4 w-4" />
                          <span className="text-xs">{feature.comments}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-brand-purple">
                        Details
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Recently Completed */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Recently Completed</h2>
              <p className="text-gray-600">Features we've shipped in the last couple of months.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {completedFeatures.map((feature, index) => (
                <Card key={feature.id} className="border border-gray-200 overflow-hidden hover:shadow-sm transition-all animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" /> Completed
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <CardDescription className="text-gray-600 text-sm">{feature.description}</CardDescription>
                    <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      <span>Released: {feature.releaseDate}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-3 border-t">
                    <Button variant="ghost" size="sm" className="text-brand-purple w-full justify-center">
                      Release Notes <ArrowUpRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Feature Request CTA */}
        <section className="py-16 bg-gradient-to-br from-brand-purple/10 to-brand-teal/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 shadow-lg animate-fade-in">
              <div className="text-center mb-8">
                <Badge className="mb-4">Have a feature idea?</Badge>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">We'd love to hear from you</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our product roadmap is driven by customer feedback. If you have ideas for new features or improvements, let us know!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg">
                  Request a Feature
                </Button>
                <Button variant="outline" size="lg">
                  Vote on Features
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Roadmap Updates */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4">Stay Updated</Badge>
              <h2 className="text-3xl font-bold mb-6">How we share updates</h2>
              <p className="text-lg text-gray-600">
                We regularly share updates about our product roadmap and new feature releases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border border-gray-200 hover:shadow-md transition-all animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                    <CalendarDays className="h-6 w-6 text-brand-purple" />
                  </div>
                  <CardTitle>Quarterly Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We publish detailed roadmap updates every quarter, showcasing what we've shipped and what's coming next.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-brand-purple">
                    View Latest Update
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-brand-teal" />
                  </div>
                  <CardTitle>Community Forums</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Join discussions with product managers and other users about upcoming features and provide feedback.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-brand-teal">
                    Visit Forums
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-brand-purple/10 flex items-center justify-center mb-4">
                    <ThumbsUp className="h-6 w-6 text-brand-purple" />
                  </div>
                  <CardTitle>Feature Voting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Vote on proposed features to help us prioritize what to build next based on user demand.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-brand-purple">
                    Vote Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
