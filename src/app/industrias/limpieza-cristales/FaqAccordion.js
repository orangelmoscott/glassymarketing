'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white border border-[#e3e8ee] rounded-2xl overflow-hidden transition-all duration-300">
          <button
            onClick={() => toggle(i)}
            className="w-full text-left px-8 py-6 flex justify-between items-center gap-4 hover:bg-[#f6f9fc] transition-colors"
          >
            <span className="font-bold text-[#0a2540] md:text-lg">{faq.q}</span>
            <ChevronDown
              size={20}
              className={`text-[#697386] transition-transform duration-300 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === i ? 'max-h-96 border-t border-[#f6f9fc]' : 'max-h-0'
            }`}
          >
            <div className="px-8 py-6 text-[#425466] leading-relaxed text-sm md:text-base">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
