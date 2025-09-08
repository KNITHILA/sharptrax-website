import React from 'react';
import { motion } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
};

const EnquiryPage = () => {
  const services = [
    'Robotic Automation',
    'Welding Positioners',
    'Plasma CNC Cutting',
    'Welding Rotators',
    'Machine Accessories',
    'Other'
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-6 py-24 md:py-32"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Request a Quote
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Please fill out the form below to help us understand your needs. A representative will contact you shortly.
        </motion.p>

        <StyledCard>
          <form className="p-8 md:p-12 space-y-6">
            {/* Personal & Company Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" required className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="email" placeholder="Your Email" required className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="tel" placeholder="Phone Number" required className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="text" placeholder="Company Name" className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>

            {/* Services of Interest */}
            <div>
              <label className="block text-gray-700 font-semibold mb-3">Service of Interest</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {services.map(service => (
                  <label key={service} className="flex items-center space-x-2 text-gray-600">
                    <input type="checkbox" className="h-4 w-4 rounded text-orange-600 focus:ring-orange-500" />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <textarea placeholder="Please describe your project or requirements..." rows="6" className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                Submit Enquiry
              </button>
            </div>
          </form>
        </StyledCard>
      </div>
    </motion.div>
  );
};

export default EnquiryPage