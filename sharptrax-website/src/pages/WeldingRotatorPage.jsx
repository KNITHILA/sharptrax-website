import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';

const mainImage = '/assets/rotator.jpg';
const thumbnails = [
  '/assets/rotator1.jpg',
  '/assets/rotator2.jpg',
  '/assets/rotator3.jpg',
  '/assets/rotator4.jpg',
];

const WeldingRotatorPage = () => {
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
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-200 uppercase">Welding Rotator</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">Welding Rotator</h1>
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
                alt="Welding Rotator"
                className="w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </StyledCard>
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumb, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer transition-all ${currentImage === thumb ? 'scale-105' : ''}`}
                onClick={() => setCurrentImage(thumb)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
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
          <h2 className="text-3xl font-semibold text-gray-800">Welding Rotator Solutions at Sharptrax Technologies</h2>
          <p>At Sharptrax Technologies, our welding Welding Rotators are designed to enhance efficiency, precision, and safety in welding operations. These automated positioning systems help in rotating cylindrical workpieces, ensuring uniform welding and reduced manual effort.</p>
          <p>Our high quality and durable range of Conventional Welding Rotators (Tank Turning Rolls) are manufactured from quality raw material and is in high demand by our clients spread across the globe. Available with self centering manual adjustment screws, our range can be availed at industry leading prices.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeldingRotatorPage;