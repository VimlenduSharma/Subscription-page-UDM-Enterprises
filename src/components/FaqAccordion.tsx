import React, { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  const [openItem, setOpenItem] = useState<string | null>("item-0");
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion 
        type="single" 
        collapsible 
        className="w-full" 
        value={openItem || undefined}
        onValueChange={(value) => setOpenItem(value)}
      >
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={`item-${index}`} 
            value={`item-${index}`}
            className="border-b border-white/20 py-4"
          >
            <AccordionTrigger className="flex justify-between items-center text-left text-white hover:no-underline group">
              <span className="text-lg font-medium pr-4 flex-1">{faq.question}</span>
              <div className="flex-shrink-0 ml-4">
                {openItem === `item-${index}` ? 
                  <Minus className="h-5 w-5 text-white/70 transition-transform duration-200" /> : 
                  <Plus className="h-5 w-5 text-white/70 transition-transform duration-200" />
                }
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-white/80 pt-4 pr-9">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
