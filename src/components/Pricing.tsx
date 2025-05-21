
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, Sparkles, Shield, Clock, Users, Zap, Bookmark } from "lucide-react";
import AnimatedWrapper from './AnimatedWrapper';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual users and small projects",
      monthlyPrice: 14.99,
      annualPrice: 149.99,
      features: [
        { name: "Access to 2 tools", included: true, icon: <Zap className="h-4 w-4" /> },
        { name: "Basic integrations", included: true, icon: <Bookmark className="h-4 w-4" /> },
        { name: "Single user", included: true, icon: <Users className="h-4 w-4" /> },
        { name: "Standard support", included: true, icon: <Clock className="h-4 w-4" /> },
        { name: "Regular updates", included: true, icon: <Sparkles className="h-4 w-4" /> },
        { name: "Advanced features", included: false, icon: <Shield className="h-4 w-4" /> },
        { name: "Priority support", included: false, icon: <Clock className="h-4 w-4" /> },
        { name: "Team collaboration", included: false, icon: <Users className="h-4 w-4" /> },
      ],
      popular: false,
      ctaText: "Get Started",
      gradientClass: "from-blue-400 to-cyan-300"
    },
    {
      name: "Pro",
      description: "Ideal for professionals and growing teams",
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        { name: "Access to all tools", included: true, icon: <Zap className="h-4 w-4" /> },
        { name: "Advanced integrations", included: true, icon: <Bookmark className="h-4 w-4" /> },
        { name: "Up to 5 users", included: true, icon: <Users className="h-4 w-4" /> },
        { name: "Priority support", included: true, icon: <Clock className="h-4 w-4" /> },
        { name: "Regular updates", included: true, icon: <Sparkles className="h-4 w-4" /> },
        { name: "Advanced features", included: true, icon: <Shield className="h-4 w-4" /> },
        { name: "Custom branding", included: true, icon: <Sparkles className="h-4 w-4" /> },
        { name: "Team collaboration", included: false, icon: <Users className="h-4 w-4" /> },
      ],
      popular: true,
      ctaText: "Start Free Trial",
      gradientClass: "from-brand-purple to-brand-lavender"
    },
    {
      name: "Enterprise",
      description: "For organizations requiring advanced features and support",
      monthlyPrice: 49.99,
      annualPrice: 499.99,
      features: [
        { name: "Access to all tools", included: true, icon: <Zap className="h-4 w-4" /> },
        { name: "Advanced integrations", included: true, icon: <Bookmark className="h-4 w-4" /> },
        { name: "Unlimited users", included: true, icon: <Users className="h-4 w-4" /> },
        { name: "Dedicated support", included: true, icon: <Clock className="h-4 w-4" /> },
        { name: "Priority updates", included: true, icon: <Sparkles className="h-4 w-4" /> },
        { name: "Advanced features", included: true, icon: <Shield className="h-4 w-4" /> },
        { name: "Custom branding", included: true, icon: <Sparkles className="h-4 w-4" /> },
        { name: "Team collaboration", included: true, icon: <Users className="h-4 w-4" /> },
      ],
      popular: false,
      ctaText: "Contact Sales",
      gradientClass: "from-brand-teal to-green-400"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Pricing plans for every need</h2>
          <p className="text-gray-600 text-lg mb-8">Choose the plan that's right for you and start improving your workflow today.</p>
          
          <div className="inline-flex items-center p-1 bg-white rounded-full shadow-md mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/10 to-brand-teal/10"></div>
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-white shadow-md text-brand-purple' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-white shadow-md text-brand-purple' : 'text-gray-600 hover:text-gray-800'}`}
            >
              Annual <span className="text-green-500 text-xs font-bold ml-1">Save 20%</span>
            </button>
          </div>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={item}>
              <Card 
                className={`price-card relative border h-full transition-all duration-300 ${plan.popular ? 'border-brand-purple shadow-lg scale-105 z-10' : 'border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <Badge 
                      variant="default" 
                      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 bg-gradient-to-r from-brand-purple to-brand-indigo"
                    >
                      <Sparkles className="h-3 w-3 mr-1" /> Most Popular
                    </Badge>
                  </div>
                )}
                <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${plan.gradientClass} rounded-t-lg`}></div>
                <CardHeader className={`pb-8 pt-10 ${plan.popular ? 'bg-gradient-to-b from-brand-purple/5 to-transparent rounded-t-lg' : ''}`}>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 ml-2">
                      {isAnnual ? '/year' : '/month'}
                    </span>
                    {isAnnual && <div className="text-green-500 text-sm font-medium mt-1">Save ${(plan.monthlyPrice * 12 - plan.annualPrice).toFixed(2)} yearly</div>}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mt-0.5 shrink-0" />
                      )}
                      <div className="flex items-center">
                        <span className="mr-2">{feature.icon}</span>
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="pt-4">
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-brand-purple to-brand-indigo hover:opacity-90 transition-opacity' : ''}`}
                  >
                    {plan.ctaText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <AnimatedWrapper animation="fade" delay={0.6}>
          <div className="mt-16 bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Money-back guarantee</h3>
                <p className="text-gray-600">Not satisfied? Get a full refund within 30 days of purchase, no questions asked.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Free plan migration</h3>
                <p className="text-gray-600">Moving from another platform? We'll help you migrate your data at no additional cost.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">24/7 customer support</h3>
                <p className="text-gray-600">Our dedicated support team is available around the clock to assist you with any issues.</p>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
        
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-sm text-gray-500">
            All plans include a 14-day free trial. No credit card required. Cancel anytime. 
            Need a custom plan? <a href="#" className="text-brand-purple hover:underline">Contact our sales team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
