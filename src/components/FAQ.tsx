
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedWrapper from './AnimatedWrapper';

const faqs = [
  {
    question: "How does the subscription work?",
    answer: "Our subscription gives you access to all the tools included in your plan. You can use them as much as you want during your subscription period. We offer monthly and annual billing options, with annual subscriptions providing a 20% discount."
  },
  {
    question: "Can I switch between plans?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the new pricing will take effect at the beginning of your next billing cycle."
  },
  {
    question: "Is there a limit to how many tools I can use?",
    answer: "The Starter plan gives you access to 2 tools of your choice. The Pro and Enterprise plans give you access to our entire suite of tools with no limitations."
  },
  {
    question: "How do team accounts work?",
    answer: "With team accounts, you can invite team members to your organization. Each team member gets their own login and can access the tools included in your plan. The number of users depends on your subscription tier."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, all our plans come with a 14-day free trial, with full access to all features included in the plan. No credit card is required to start your trial."
  },
  {
    question: "How often do you add new tools?",
    answer: "We're constantly developing new tools and improving existing ones. On average, we add a new tool every quarter, and all new tools are automatically included in Pro and Enterprise subscriptions."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, you can request a full refund within 30 days of your purchase."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. For enterprise customers, we can also accommodate purchase orders and other payment methods."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
      <div className="container mx-auto px-4">
        <AnimatedWrapper animation="fade" delay={0.2} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our subscription service.</p>
        </AnimatedWrapper>
        
        <div className="max-w-3xl mx-auto">
          <AnimatedWrapper animation="fade" delay={0.4} staggerChildren={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow bg-white"
                >
                  <AccordionTrigger className="text-left text-lg font-medium py-4 hover:text-brand-purple transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 pt-2">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedWrapper>
        </div>
        
        <AnimatedWrapper animation="fade" delay={0.6} className="mt-16">
          <div className="bg-gradient-to-r from-brand-lavender/10 to-brand-purple/10 rounded-xl p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">Our support team is available 24/7 to help you with any questions you may have.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-brand-purple transition-colors shadow-sm"
                >
                  View documentation
                </a>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-purple text-white rounded-lg hover:bg-brand-indigo transition-colors shadow-sm"
                >
                  Contact support
                </a>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default FAQ;
