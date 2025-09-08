import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { StyledCard } from '../common/UIComponents';

const ContactBanner = () => {
  const navigate = useNavigate();

  return (
    <StyledCard className="text-center py-12 sm:py-16 px-6 sm:px-8">
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Sharptrax Technologies
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        At Sharptrax Technologies, we are always ready to assist you with welding automation.
        Whether you have a project inquiry, need technical support, or want to collaborate, feel free to reach out to us.
      </motion.p>

      {/* Button */}
      <motion.button
        className="relative group inline-block px-6 sm:px-8 py-3 bg-gray-800 text-white text-sm sm:text-base font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/contact')}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
        Contact Us
      </motion.button>
    </StyledCard>
  );
};

export default ContactBanner;
