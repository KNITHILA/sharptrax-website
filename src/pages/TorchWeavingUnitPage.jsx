import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';
import { Check } from 'lucide-react';

const mainImage = '/assets/toarch3.jpg'; // Adjust path as needed
const thumbnails = [
  '/assets/toarch1.jpg',
  '/assets/toarch2.jpg',
  '/assets/toarch4.jpg',
  '/assets/toarch.jpg',
];

const TorchWeavingUnitPage = () => {
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
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-200 uppercase break-words">Torch Weaving Unit</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">Torch Weaving Unit (Welding Weaving Unit)</h1>
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
                alt="Torch Weaving Unit"
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
          <h2 className="text-3xl font-semibold text-gray-800">Torch Weaving Unit (Welding Weaving Unit) at Sharptrax Technologies</h2>
          <p>At Sharptrax Technologies, our Torch Weaving Unit, also known as the Welding Weaving Unit, is designed to enhance welding precision and efficiency by introducing a controlled weaving motion to the welding torch. This advanced system ensures uniform bead formation, improved penetration, and better fusion, making it ideal for critical and high-strength welding applications.</p>
          <p>Sharptrax offers High precision Torch weaving unit for PTAW, TIG, MIG and SAW applications. Precise linear motion and durability achieved through standard LM bush/Linear bearing with ball screw transmission. Precise control of 0 - 40 MM width achieved through micro controller / PLC.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TorchWeavingUnitPage;