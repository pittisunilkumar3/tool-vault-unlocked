
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 -translate-y-1/2 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-block animate-fade-in">
            <span className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium">
              Introducing ToolsHub Subscription
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            All the tools you need, <span className="gradient-text">in one place</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Access premium productivity tools with a simple subscription. Boost your workflow and save money with our curated collection.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="group w-full sm:w-auto">
              Get started <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View all tools
            </Button>
          </div>
          
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
              <span>Trusted by 10,000+ professionals</span>
              <span className="flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-gray-200 -ml-1 border-2 border-white"></span>
                <span className="inline-block w-8 h-8 rounded-full bg-gray-300 -ml-3 border-2 border-white"></span>
                <span className="inline-block w-8 h-8 rounded-full bg-gray-400 -ml-3 border-2 border-white"></span>
                <span className="inline-block w-8 h-8 rounded-full bg-gray-500 -ml-3 border-2 border-white text-xs text-white flex items-center justify-center">+</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
