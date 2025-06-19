import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PricingCard from '@/components/PricingCard';
import PricingToggle from '@/components/PricingToggle';
import FaqAccordion from '@/components/FaqAccordion';
import Footer from '@/components/Footer';

const Index = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const faqItems = [
    {
      question: "What is udm and how does it work?",
      answer: "Our solution is agile and flexible, so we can adjust as your needs change. We take great pride in having long standing client engagements and helping our partner companies grow. We'd be happy to share testimonials from companies like yours, too!"
    },
    {
      question: "Can we start any time of years?",
      answer: "Yes, you can start using our services at any time of the year. Our flexible subscription plans allow you to join whenever it's most convenient for your business."
    },
    {
      question: "How does the engagement change as my business scales?",
      answer: "As your business grows, our engagement model adapts to fit your expanding needs. We scale our services, provide additional resources, and adjust strategies to ensure optimal support through every stage of your business growth."
    },
    {
      question: "In which countries can I find your company?",
      answer: "We operate globally with a presence in major markets including North America, Europe, Asia, and Australia. Our digital solutions are accessible worldwide, allowing us to serve clients regardless of their location."
    }
  ];

  const freeFeatures = [
    "Nam sollicitudin dignissim",
    "Cras convallis lacus",
    "Quisque ut metus"
  ];

  const monthlyFeatures = [
    "Nam sollicitudin dignissim",
    "Cras convallis lacus",
    "Quisque ut metus",
    "Vivamus sit amet",
    "Cras convallis lacus orci"
  ];

  const yearlyFeatures = [
    "Nam sollicitudin dignissim",
    "Cras convallis lacus",
    "Quisque ut metus"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main background */}
      <div className="bg-gradient-subscription min-h-screen">
        {/* Navbar */}
        <Navbar />
        
        {/* Hero Section */}
        <section className="py-16 px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Subscription Plan</h1>
          
          <div className="w-16 h-1 bg-white/50 mx-auto mb-8"></div>
          
          <p className="text-white/80 max-w-2xl mx-auto mb-12">
            Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, et
            venenatis ante metus pellentesque sem.
          </p>
          
          {/* Pricing Toggle */}
          <PricingToggle 
            activeOption={billingCycle} 
            onChange={(option) => setBillingCycle(option)} 
          />
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 px-4">
            <PricingCard 
              type="free" 
              price="0" 
              priceSubtext="upto one month free / trial period"
              features={freeFeatures} 
            />
            
            <PricingCard 
              type="monthly" 
              price="99" 
              priceSubtext="/month"
              features={monthlyFeatures}
              isFeatured={true} 
            />
            
            <PricingCard 
              type="yearly" 
              price="1098" 
              priceSubtext="/year - upto almost one month subscription plan free"
              features={yearlyFeatures} 
            />
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
              If you have questions, we have answers for you here. In case we 
              don't, please feel free to reach out to us in page
            </p>
            
            <FaqAccordion faqs={faqItems} />
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
