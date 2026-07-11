import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What are your gym timings?",
      a: "We are open Monday to Saturday from 6:00 AM to 10:00 PM, and Sundays from 8:00 AM to 2:00 PM."
    },
    {
      q: "Do I need to bring my own equipment?",
      a: "No, we provide all premium weightlifting, resistance, and cardio machines. We only recommend bringing your own training shoes, sweat towel, and water bottle."
    },
    {
      q: "Can I freeze/pause my membership?",
      a: "Yes! Active memberships can be frozen/paused for up to 30 days once per calendar year by notifying our front desk 48 hours in advance."
    },
    {
      q: "Is there a registration fee?",
      a: "No, we believe in transparent pricing. We do not charge additional registration, onboarding, or joining fees. You only pay for the plan you select."
    },
    {
      q: "Do you offer personal training packages?",
      a: "Yes, we offer custom 1-on-1 training packages. These include customized workout structures, diet audits, weekly body compositions, and direct contact with your trainer."
    },
    {
      q: "What safety measures are in place?",
      a: "Our gym floor is continuously sanitized. We provide cleaning spray stations for members, sanitize machines hourly, and keep certified first-aid staff on floor."
    },
    {
      q: "Can I cancel my membership anytime?",
      a: "Yes! Monthly plans can be cancelled anytime before the next billing cycle starts. Long-term prepaid packages have specific cancellation options detailed in the terms."
    },
    {
      q: "Do you have locker and shower facilities?",
      a: "Yes! We have secure lockers, clean changing spaces, and hot/cold showers available for all members free of charge."
    }
  ];

  const toggleFAQ = (idx) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx} 
              className="bg-bg-secondary border border-gold-dark/10 overflow-hidden transition-all duration-300 hover:border-gold-primary/30"
            >
              {/* Question Header */}
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none select-none"
              >
                <span className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
                  {faq.q}
                </span>
                <span className="text-gold-primary ml-4 flex-shrink-0">
                  {isOpen ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                </span>
              </button>

              {/* Answer Content with height transition */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-[200px] border-t border-gold-dark/5' : 'max-h-0'
                }`}
              >
                <div className="p-6 text-text-body text-xs sm:text-sm leading-relaxed">
                  {faq.a}
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
