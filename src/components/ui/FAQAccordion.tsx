"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/lib/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-grey-100 rounded-2xl border border-grey-100 bg-white overflow-hidden shadow-sm">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              type="button"
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gray-50 md:px-8"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={`font-heading font-semibold transition-colors duration-300 md:text-lg ${isOpen ? "text-primary" : "text-dark"}`}>
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p className="px-6 pb-5 text-grey-600 leading-relaxed md:px-8 md:text-lg [&_a]:text-primary [&_a]:font-medium [&_a]:underline hover:[&_a]:text-primary-dark" dangerouslySetInnerHTML={{ __html: item.answer }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
