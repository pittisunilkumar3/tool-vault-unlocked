
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent,
  CardFooter, 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Search, Play, Clock, ChevronRight, Filter } from "lucide-react";

// Sample tutorials data
const tutorials = [
  {
    id: "1",
    title: "Getting Started with DataSync Pro",
    description: "Learn how to set up your first data synchronization in just 10 minutes.",
    duration: "12:34",
    category: "DataSync Pro",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80",
    featured: true
  },
  {
    id: "2",
    title: "Advanced Form Design Techniques",
    description: "Master conditional logic, multi-step forms, and custom validation.",
    duration: "28:45",
    category: "FormBuilder X",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: "3",
    title: "CodeAssist AI for Teams",
    description: "How to set up CodeAssist AI for multiple developers and shared codebases.",
    duration: "18:22",
    category: "CodeAssist AI",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: "4",
    title: "Optimizing Images for Web Performance",
    description: "Learn how to use MediaOptimizer to speed up your website.",
    duration: "15:50",
    category: "MediaOptimizer",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    featured: false
  },
  {
    id: "5",
    title: "API Integration Basics",
    description: "How to integrate ToolsHub API with your existing applications.",
    duration: "21:36",
    category: "API",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: "6",
    title: "Team Administration Best Practices",
    description: "Managing users, permissions, and collaboration in ToolsHub.",
    duration: "16:48",
    category: "Administration",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    featured: false
  },
  {
    id: "7",
    title: "Advanced DataSync Pro: Custom Transformations",
    description: "Learn how to create custom data transformations during synchronization.",
    duration: "23:15",
    category: "DataSync Pro",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    featured: false
  },
  {
    id: "8",
    title: "Building Dynamic Forms with Conditional Logic",
    description: "Create smart forms that adapt to user inputs in real-time.",
    duration: "19:42",
    category: "FormBuilder X",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    featured: true
  }
];

const categories = ["All", "DataSync Pro", "FormBuilder X", "CodeAssist AI", "MediaOptimizer", "API", "Administration"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Tutorials = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTutorials, setFilteredTutorials] = useState(tutorials);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Filter tutorials based on category, level, and search query
    const filtered = tutorials.filter(tutorial => {
      const matchesCategory = activeCategory === "All" || tutorial.category === activeCategory;
      const matchesLevel = activeLevel === "All Levels" || tutorial.level === activeLevel;
      const matchesSearch = tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tutorial.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesLevel && matchesSearch;
    });
    
    setFilteredTutorials(filtered);
  }, [activeCategory, activeLevel, searchQuery]);

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
              <Badge className="mb-4">Video Tutorials</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Learn how to use ToolsHub</h1>
              <p className="text-xl text-gray-600">Step-by-step video tutorials to help you master all our tools.</p>
            </div>
            
            <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Search tutorials..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Featured Tutorials */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Tutorials</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tutorials.filter(t => t.featured).map((tutorial, index) => (
                <Card key={tutorial.id} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="aspect-w-16 aspect-h-9 relative group cursor-pointer">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-brand-purple flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{tutorial.duration}</span>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge>{tutorial.category}</Badge>
                      <Badge variant="outline">{tutorial.level}</Badge>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm">{tutorial.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full group text-brand-purple">
                      Watch Tutorial <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Tutorials */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold">All Tutorials</h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <Filter className="h-4 w-4" />
                    <span>Tool:</span>
                  </div>
                  <select 
                    className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded-md"
                    value={activeCategory}
                    onChange={(e) => setActiveCategory(e.target.value)}
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div className="relative">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <Filter className="h-4 w-4" />
                    <span>Level:</span>
                  </div>
                  <select 
                    className="w-full md:w-36 px-3 py-2 border border-gray-300 rounded-md"
                    value={activeLevel}
                    onChange={(e) => setActiveLevel(e.target.value)}
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            {filteredTutorials.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTutorials.map((tutorial, index) => (
                  <Card key={tutorial.id} className="overflow-hidden hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="aspect-w-16 aspect-h-9 relative group cursor-pointer">
                      <img 
                        src={tutorial.thumbnail} 
                        alt={tutorial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-brand-purple flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{tutorial.duration}</span>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">{tutorial.category}</Badge>
                        <Badge variant="outline" className="text-xs">{tutorial.level}</Badge>
                      </div>
                      <h3 className="font-bold mb-2 line-clamp-1">{tutorial.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{tutorial.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-xl text-gray-500 mb-4">No tutorials found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setActiveCategory("All");
                    setActiveLevel("All Levels");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Learning Paths */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4">Learning Paths</Badge>
              <h2 className="text-3xl font-bold mb-6">Guided tutorial series</h2>
              <p className="text-lg text-gray-600">
                Follow these curated paths to master specific tools or workflows.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in">
                <div className="h-3 bg-brand-purple"></div>
                <div className="p-6">
                  <Badge className="mb-4">Beginner</Badge>
                  <h3 className="text-xl font-bold mb-2">DataSync Pro Fundamentals</h3>
                  <p className="text-gray-600 mb-4">Master the basics of data synchronization in 5 tutorials.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center text-xs font-bold text-brand-purple">1</div>
                      <span className="text-sm">Getting Started with DataSync Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center text-xs font-bold text-brand-purple">2</div>
                      <span className="text-sm">Connecting Your First Data Source</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center text-xs font-bold text-brand-purple">3</div>
                      <span className="text-sm">Creating Basic Sync Rules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">4</div>
                      <span className="text-sm text-gray-400">Field Mapping Basics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">5</div>
                      <span className="text-sm text-gray-400">Scheduling and Automation</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">3 of 5</span> completed
                    </div>
                    <Button variant="outline" className="text-brand-purple">
                      Continue Path
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="h-3 bg-brand-teal"></div>
                <div className="p-6">
                  <Badge className="mb-4">Intermediate</Badge>
                  <h3 className="text-xl font-bold mb-2">Form Design Masterclass</h3>
                  <p className="text-gray-600 mb-4">Create powerful forms with advanced features in 4 tutorials.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center text-xs font-bold text-brand-teal">1</div>
                      <span className="text-sm">FormBuilder X Essentials</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center text-xs font-bold text-brand-teal">2</div>
                      <span className="text-sm">Conditional Logic in Forms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">3</div>
                      <span className="text-sm text-gray-400">Multi-step Form Creation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">4</div>
                      <span className="text-sm text-gray-400">Form Analytics and Optimization</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">2 of 4</span> completed
                    </div>
                    <Button variant="outline" className="text-brand-teal">
                      Continue Path
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="h-3 bg-brand-purple"></div>
                <div className="p-6">
                  <Badge className="mb-4">Advanced</Badge>
                  <h3 className="text-xl font-bold mb-2">AI-Powered Development</h3>
                  <p className="text-gray-600 mb-4">Master CodeAssist AI for advanced development workflows.</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">1</div>
                      <span className="text-sm text-gray-400">CodeAssist AI Setup & Integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">2</div>
                      <span className="text-sm text-gray-400">Code Completion Mastery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">3</div>
                      <span className="text-sm text-gray-400">Refactoring with AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">4</div>
                      <span className="text-sm text-gray-400">Custom AI Training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-400">5</div>
                      <span className="text-sm text-gray-400">Team Collaboration with AI</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      <span className="font-medium">0 of 5</span> completed
                    </div>
                    <Button variant="outline" className="text-brand-purple">
                      Start Path
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg">View All Learning Paths</Button>
            </div>
          </div>
        </section>
        
        {/* Request Tutorial CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4">Have a suggestion?</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Request a tutorial</h2>
                  <p className="text-gray-600 mb-6">
                    Can't find what you're looking for? Let us know what tutorials you'd like to see next.
                  </p>
                  <Button size="lg">
                    Submit a Request
                  </Button>
                </div>
                
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt="Video production"
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

export default Tutorials;
