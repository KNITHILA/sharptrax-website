import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';
import { Check } from 'lucide-react';

// New image paths for Column and Boom
const mainImage = '/assets/column1.jpg';
const thumbnails = [
  '/assets/column.jpg',
  '/assets/column2.jpg',
  '/assets/column3.jpg',
  '/assets/column4.jpg',
];

const ColumnAndBoomPage = () => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <motion.div
      className="container mx-auto px-6 py-28 md:py-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-200 uppercase break-words">Column and Boom</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">Column and Boom Welding System</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <StyledCard className="w-full h-96 mb-4 flex items-center justify-center p-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt="Column and Boom Welding System"
                className="w-full h-full object-contain rounded-lg"
              />
            </AnimatePresence>
          </StyledCard>
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumb, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer transition-all ${currentImage === thumb ? 'scale-105' : ''}`}
                onClick={() => setCurrentImage(thumb)}
              >
                <StyledCard className={`w-full h-24 flex items-center justify-center p-2 border-2 ${currentImage === thumb ? 'border-orange-500' : 'border-transparent'}`}>
                  <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
                </StyledCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="prose lg:prose-lg max-w-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">Column and Boom Welding System at Sharptrax Technologies</h2>
          <p>At Sharptrax Technologies, we provide high-performance Column and Boom welding systems, designed to enhance precision, efficiency, and automation in welding processes. Our customized solutions cater to industries requiring high-quality, consistent, and automated welding operations for large structures and complex fabrication.</p>
          <p>The system is ideal for longitudinal and circumferential welding applications, offering unmatched stability and reach.</p>
          <ul className="list-none p-0 space-y-3 mt-4">
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Smooth Vertical & Horizontal Motion – Ensures precise and uniform welds on large components.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Customizable Boom Length & Height – Designed to meet specific industrial requirements for maximum flexibility.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ColumnAndBoomPage;