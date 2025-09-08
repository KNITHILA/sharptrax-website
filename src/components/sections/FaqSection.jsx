import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { StyledCard, SectionTitle, SectionUnderline } from '../common/UIComponents';

// Single FAQ Item
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/10 last:border-b-0">
      {/* FAQ Question */}
      <button
        className="w-full flex justify-between items-center text-left py-4 sm:py-6 px-3 sm:px-6"
        onClick={onClick}
      >
        <span className="flex items-center text-base sm:text-lg font-semibold text-gray-800">
          <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4 text-orange-500" />
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
        </motion.div>
      </button>

      {/* FAQ Answer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-6 px-3 sm:px-6 pl-10 sm:pl-14 text-sm sm:text-base text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// FAQ Section Wrapper
const FaqSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: 'What industries do you serve with your automation solutions?',
      answer:
        'We provide automation solutions for industries such as manufacturing, food processing, material handling, water treatment, and industrial welding.',
    },
    {
      question: 'Do you offer customized welding automation solutions?',
      answer:
        'Yes! We specialize in custom-built welding automation systems, including robotic welding, plasma welding, and submerged arc welding (SAW).',
    },
    {
      question: 'Can you integrate automation with existing industrial systems?',
      answer:
        'Absolutely! Our team is experienced in integrating automation solutions with your existing machinery and systems.',
    },
    {
      question: 'How can I request a consultation or quote?',
      answer:
        'You can contact us through our website, email, or phone. Simply fill out our contact form, and our team will get in touch.',
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-16">
      <SectionTitle>FREQUENTLY ASKED QUESTIONS</SectionTitle>
      <SectionUnderline />

      <StyledCard className="w-full max-w-3xl mx-auto p-3 sm:p-6 md:p-8 shadow-xl shadow-gray-400/20">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            {...faq}
            isOpen={openFAQ === index}
            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
          />
        ))}
      </StyledCard>
    </div>
  );
};

export default FaqSection;
