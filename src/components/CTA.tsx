
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-teal"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">Ready to transform your workflow?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of professionals who have already streamlined their work with our comprehensive tool suite.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group w-full sm:w-auto bg-white text-brand-dark hover:bg-gray-100">
              Start your free trial <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 hover:bg-white/10">
              View all tools
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-gray-400">
            <p>No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
