import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';
import { Check } from 'lucide-react';

const mainImage = '/assets/lasser.jpg'; // Adjust path as needed
const thumbnails = [
  '/assets/lasser1.jpg',
  '/assets/lasser2.jpg',
  '/assets/lasser3.jpg',
  '/assets/lasser4.jpg',
];

const LaserSeamTrackingUnitPage = () => {
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
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-200 uppercase break-words">Laser Seam Tracking Unit</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">Laser Seam Tracking Unit</h1>
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
                alt="Laser Seam Tracking Unit"
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
          <h2 className="text-3xl font-semibold text-gray-800">Laser Seam Tracking Unit at Sharptrax Technologies</h2>
          <p>At Sharptrax Technologies, our Laser Seam Tracking Unit enables tracking of almost all weld joints to avoid manual intervention. It is independently developed, convenient to operate and easy to teach. It features premium optical components compatible with all major robot brands. The unit includes seam finding and tracking functions, a host control unit with an accurate algorithm, and an internal airway design.</p>
          <p>The Laser Seam Tracking Unit enhances welding precision by automatically detecting and adjusting to seam variations in real time. It ensures consistent weld quality, reduces errors, and improves efficiency in automated welding processes.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LaserSeamTrackingUnitPage;