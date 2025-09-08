import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';

const mainImage = '/assets/tig3.jpg';
// No thumbnails were in the screenshot for this product
const thumbnails = [
'/assets/tig1.jpg',
'/assets/tig2.jpg',
'/assets/tig3.jpg',
'/assets/tig4.jpg',
];

const TIGWeldingPage = () => {
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
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-200 uppercase break-words">TIG Welding SPM</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">TIG Longitudinal Welding SPM</h1>
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
                alt="TIG Longitudinal Welding SPM"
                className="w-full h-full object-contain rounded-lg"
              />
            </AnimatePresence>
          </StyledCard>
          {/* Thumbnail section will not appear as there are no thumbnails */}
          {thumbnails.length > 0 && (
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
          )}
        </motion.div>

        <motion.div 
            className="prose lg:prose-lg max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">TIG Longitudinal Welding SPM at Sharptrax Technologies</h2>
          <p>At Sharptrax Technologies, our TIG Linear Welding SPM (Special Purpose Machine) is designed for high precision linear welding applications. This system utilizes Tungsten Inert Gas (TIG) welding, ensuring clean, strong, and defect-free welds with superior control and consistency. It is ideal for industries requiring fine, high-quality welding on long and straight workpieces.</p>
          <p>Sharptrax offers Linear TIG welding SPM for your wide range applications. Precise linear motion achieved ball screw and LM bush assembly. Constant and controlled linear motion gives good weld fusion and finish. Proper Job clamping is obtained by finger type mechanism through pneumatic cylinders. Cold wire feeder also available as a filler material if required.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TIGWeldingPage;