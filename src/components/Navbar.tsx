
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X 
} from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isActiveParent = (paths: string[]) => {
    return paths.some(path => location.pathname.startsWith(path));
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3'}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-brand-purple to-brand-teal flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl text-brand-dark">ToolsHub</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className={`flex items-center gap-1 ${isActiveParent(['/tools']) ? 'text-brand-purple bg-brand-purple/5' : 'text-gray-600 hover:text-brand-purple'} transition-colors`}
              >
                Products <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 animate-in fade-in-50 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
              <Link to="/tools/1">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">DataSync Pro</DropdownMenuItem>
              </Link>
              <Link to="/tools/2">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">FormBuilder X</DropdownMenuItem>
              </Link>
              <Link to="/tools/3">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">CodeAssist AI</DropdownMenuItem>
              </Link>
              <Link to="/tools/4">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">MediaOptimizer</DropdownMenuItem>
              </Link>
              <Link to="/integrations">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Integrations</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className={`flex items-center gap-1 ${isActiveParent(['/docs', '/tutorials', '/blog']) ? 'text-brand-purple bg-brand-purple/5' : 'text-gray-600 hover:text-brand-purple'} transition-colors`}
              >
                Resources <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 animate-in fade-in-50 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
              <Link to="/docs">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Documentation</DropdownMenuItem>
              </Link>
              <Link to="/tutorials">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Tutorials</DropdownMenuItem>
              </Link>
              <Link to="/blog">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Blog</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/pricing">
            <Button 
              variant="ghost" 
              className={`${isActive('/pricing') ? 'text-brand-purple bg-brand-purple/5' : 'text-gray-600 hover:text-brand-purple'} transition-colors`}
            >
              Pricing
            </Button>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                className={`flex items-center gap-1 ${isActiveParent(['/about', '/team', '/careers', '/testimonials', '/roadmap']) ? 'text-brand-purple bg-brand-purple/5' : 'text-gray-600 hover:text-brand-purple'} transition-colors`}
              >
                Company <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 animate-in fade-in-50 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
              <Link to="/about">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">About Us</DropdownMenuItem>
              </Link>
              <Link to="/team">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Our Team</DropdownMenuItem>
              </Link>
              <Link to="/careers">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Careers</DropdownMenuItem>
              </Link>
              <Link to="/testimonials">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Testimonials</DropdownMenuItem>
              </Link>
              <Link to="/roadmap">
                <DropdownMenuItem className="cursor-pointer hover:bg-brand-purple/5 focus:bg-brand-purple/5 focus:text-brand-purple">Product Roadmap</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/enterprise">
            <Button 
              variant="ghost" 
              className={`${isActive('/enterprise') ? 'text-brand-purple bg-brand-purple/5' : 'text-gray-600 hover:text-brand-purple'} transition-colors`}
            >
              Enterprise
            </Button>
          </Link>
          
          <Link to="/contact">
            <Button 
              variant="ghost" 
              className={`${isActive('/contact') ? 'text-brand-purple bg-brand-purple/5' : 'text-gray-600 hover:text-brand-purple'} transition-colors`}
            >
              Contact
            </Button>
          </Link>
        </nav>
        
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" size="sm" className="flex hover:bg-brand-purple/5 hover:text-brand-purple hover:border-brand-purple transition-colors">
            Log in
          </Button>
          <Button size="sm" className="group bg-gradient-to-r from-brand-purple to-brand-teal hover:opacity-90 transition-all">
            Sign up <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden hover:bg-transparent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top-5 duration-200">
          <div className="container mx-auto py-4 space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 px-4">Products</p>
              <Link to="/tools/1" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/tools/1') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>DataSync Pro</Button>
              </Link>
              <Link to="/tools/2" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/tools/2') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>FormBuilder X</Button>
              </Link>
              <Link to="/tools/3" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/tools/3') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>CodeAssist AI</Button>
              </Link>
              <Link to="/tools/4" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/tools/4') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>MediaOptimizer</Button>
              </Link>
              <Link to="/integrations" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/integrations') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Integrations</Button>
              </Link>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500 px-4">Resources</p>
              <Link to="/docs" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/docs') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Documentation</Button>
              </Link>
              <Link to="/tutorials" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/tutorials') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Tutorials</Button>
              </Link>
              <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/blog') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Blog</Button>
              </Link>
            </div>
            
            <div className="space-y-2">
              <Link to="/pricing" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/pricing') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Pricing</Button>
              </Link>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/about') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>About Us</Button>
              </Link>
              <Link to="/team" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/team') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Team</Button>
              </Link>
              <Link to="/careers" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/careers') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Careers</Button>
              </Link>
              <Link to="/enterprise" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/enterprise') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Enterprise</Button>
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="ghost" className={`w-full justify-start ${isActive('/contact') ? 'text-brand-purple bg-brand-purple/5' : ''}`}>Contact</Button>
              </Link>
            </div>
            
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="w-1/2 hover:bg-brand-purple/5 hover:text-brand-purple hover:border-brand-purple transition-colors">Log in</Button>
              <Button className="w-1/2 bg-gradient-to-r from-brand-purple to-brand-teal hover:opacity-90 transition-all">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
