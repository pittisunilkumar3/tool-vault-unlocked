
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, CreditCard, Key, Lock, Settings, Stars, Users } from "lucide-react";

const features = [
  {
    icon: <Key className="h-6 w-6" />,
    title: "Unlimited Access",
    description: "Get immediate access to our growing suite of premium tools with a single subscription."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Simple Pricing",
    description: "Pay once and forget about multiple subscriptions and billing cycles."
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Integration Ready",
    description: "All our tools work seamlessly together for maximum productivity."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Team Management",
    description: "Easily add or remove team members and manage their access permissions."
  },
  {
    icon: <Stars className="h-6 w-6" />,
    title: "Early Access",
    description: "Be the first to try new tools and features before they're publicly released."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Regular Updates",
    description: "We continuously improve our tools based on user feedback and needs."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything you need to succeed</h2>
          <p className="text-gray-600 text-lg">Our subscription gives you access to a suite of powerful tools designed to make your work easier and more productive.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="feature-icon mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-brand-purple text-white rounded-2xl p-8 md:p-12 overflow-hidden relative animated-gradient">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Key Benefits of ToolsHub</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 shrink-0" />
                <span>Save up to 70% compared to purchasing tools individually</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 shrink-0" />
                <span>Increase productivity with our integrated workflow approach</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 shrink-0" />
                <span>All your tools in one place with a unified experience</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-white mt-0.5 shrink-0" />
                <span>Priority support and dedicated customer success manager</span>
              </li>
            </ul>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
