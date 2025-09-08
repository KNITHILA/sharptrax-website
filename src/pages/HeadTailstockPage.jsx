import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';
import { Check } from 'lucide-react';

const mainImage = '/assets/head.jpg';
const thumbnails = [
  '/assets/head1.jpg',
  '/assets/head2.jpg',
  '/assets/head3.jpg',
  '/assets/head4.jpg',
];

const HeadTailstockPage = () => {
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
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-200 uppercase break-words">Head & Tailstock</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">Head & Tailstock Units</h1>
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
                alt="Head & Tailstock Units"
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
          <h2 className="text-3xl font-semibold text-gray-800">Head & Tailstock Units at Sharptrax Technologies</h2>
          <p>Sharptrax offers very high quality Head & Tailstock Units, which can be used to hold various components for welding, customised solution is also available in Sharptrax.</p>
          <p>Key features:</p>
          <ul className="list-none p-0 space-y-3 mt-4">
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Vertical Adjustment synchronised on H&T.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Available on various Payloads up to 50 tonnes.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Solid construction for weight balancing.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Motorised and servo also available for position accuracy.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Economical and practical answer for all your pipe holding solutions.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>It can also be integrated with a robot.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Very efficient and good payload capacity.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeadTailstockPage;