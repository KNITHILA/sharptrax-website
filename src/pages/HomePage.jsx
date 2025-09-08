import React from 'react';
import { motion } from 'framer-motion';

// Sections
import CoreValuesSection from '../components/sections/CoreValuesSection';
import ServicesSection from '../components/sections/ServicesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactBanner from '../components/sections/ContactBanner';
import FaqSection from '../components/sections/FaqSection';

// Common UI Component
import { CurtainConnector } from '../components/common/UIComponents';

// --- Page animation settings ---
const pageVariants = {
  initial: { opacity: 0, x: "-100vw" },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: "100vw" },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8,
};

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="container mx-auto px-6 space-y-12 md:space-y-16 py-12 md:py-16">
        {/* Sections in order */}
        <CurtainConnector />
        <CoreValuesSection />
        <CurtainConnector />
        <ServicesSection />
        <CurtainConnector />
        <TestimonialsSection />
        <ContactBanner />
        <CurtainConnector />
        <FaqSection />
      </div>
    </motion.div>
  );
};

export default HomePage;
