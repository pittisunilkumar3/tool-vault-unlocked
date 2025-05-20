
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const tools = [
  {
    id: 1,
    name: "DataSync Pro",
    description: "Powerful data synchronization tool that connects your apps and databases in real-time",
    icon: "📊",
    category: "Data Management",
    features: ["Real-time syncing", "Multiple data sources", "Custom field mapping", "Error handling"],
    popular: true
  },
  {
    id: 2,
    name: "FormBuilder X",
    description: "Create beautiful, responsive forms with advanced validation and analytics",
    icon: "📝",
    category: "Design",
    features: ["Drag & drop interface", "Advanced validation", "Response analytics", "Template library"],
    popular: false
  },
  {
    id: 3,
    name: "CodeAssist AI",
    description: "AI-powered code completion and refactoring assistant for developers",
    icon: "🤖",
    category: "Development",
    features: ["Multiple languages", "Pattern recognition", "Refactoring suggestions", "Integration with IDEs"],
    popular: true
  },
  {
    id: 4,
    name: "MediaOptimizer",
    description: "Automatically optimize and transform your images and videos for the web",
    icon: "🖼️",
    category: "Media",
    features: ["Batch processing", "Format conversion", "Size optimization", "Metadata preservation"],
    popular: false
  }
];

const categories = ["All", "Data Management", "Design", "Development", "Media"];

const Tools = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredTools = activeCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful tools included</h2>
          <p className="text-gray-600 text-lg">Our subscription gives you access to these premium tools with more being added regularly.</p>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(category => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <Card key={tool.id} className="tool-card border hover:border-primary/40 relative overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {tool.popular && (
                <div className="absolute top-0 right-0">
                  <Badge variant="default" className="rounded-tl-none rounded-tr-md rounded-br-none rounded-bl-md">Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <Badge variant="outline">{tool.category}</Badge>
                </div>
                <CardTitle className="text-xl">{tool.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <div className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-brand-purple rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group text-brand-purple">
                  Learn more <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View all tools
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tools;
