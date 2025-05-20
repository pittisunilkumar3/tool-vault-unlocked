
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-purple to-brand-teal flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <span className="font-bold text-xl text-brand-dark">ToolsHub</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-brand-purple transition-colors">Features</a>
          <a href="#tools" className="text-gray-600 hover:text-brand-purple transition-colors">Tools</a>
          <a href="#pricing" className="text-gray-600 hover:text-brand-purple transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-brand-purple transition-colors">FAQ</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Log in
          </Button>
          <Button size="sm" className="group">
            Sign up <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
