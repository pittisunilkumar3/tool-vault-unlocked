
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual users and small projects",
      monthlyPrice: 14.99,
      annualPrice: 149.99,
      features: [
        { name: "Access to 2 tools", included: true },
        { name: "Basic integrations", included: true },
        { name: "Single user", included: true },
        { name: "Standard support", included: true },
        { name: "Regular updates", included: true },
        { name: "Advanced features", included: false },
        { name: "Priority support", included: false },
        { name: "Team collaboration", included: false },
      ],
      popular: false,
      ctaText: "Get Started"
    },
    {
      name: "Pro",
      description: "Ideal for professionals and growing teams",
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      features: [
        { name: "Access to all tools", included: true },
        { name: "Advanced integrations", included: true },
        { name: "Up to 5 users", included: true },
        { name: "Priority support", included: true },
        { name: "Regular updates", included: true },
        { name: "Advanced features", included: true },
        { name: "Custom branding", included: true },
        { name: "Team collaboration", included: false },
      ],
      popular: true,
      ctaText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      description: "For organizations requiring advanced features and support",
      monthlyPrice: 49.99,
      annualPrice: 499.99,
      features: [
        { name: "Access to all tools", included: true },
        { name: "Advanced integrations", included: true },
        { name: "Unlimited users", included: true },
        { name: "Dedicated support", included: true },
        { name: "Priority updates", included: true },
        { name: "Advanced features", included: true },
        { name: "Custom branding", included: true },
        { name: "Team collaboration", included: true },
      ],
      popular: false,
      ctaText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-600 text-lg mb-8">Choose the plan that's right for you and start improving your workflow today.</p>
          
          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-8">
            <button 
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!isAnnual ? 'bg-white shadow-sm' : 'text-gray-600'}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${isAnnual ? 'bg-white shadow-sm' : 'text-gray-600'}`}
            >
              Annual <span className="text-green-500 text-xs font-bold">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`price-card relative border ${plan.popular ? 'border-brand-purple shadow-lg' : 'border-gray-200'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <Badge 
                    variant="default" 
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3"
                  >
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className={`pb-8 ${plan.popular ? 'bg-brand-purple/5 rounded-t-lg' : ''}`}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-sm mt-2">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {isAnnual ? '/year' : '/month'}
                  </span>
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
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                  </div>
                ))}
              </CardContent>
              <CardFooter>
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full"
                >
                  {plan.ctaText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
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
