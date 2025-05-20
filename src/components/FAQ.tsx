
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-gray-600 text-lg">Everything you need to know about our subscription service.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? <a href="#" className="text-brand-purple font-medium hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
