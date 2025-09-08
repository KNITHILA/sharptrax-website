import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';
import { Check } from 'lucide-react';

const mainImage = '/assets/weldingposition.jpg'; // Adjust path as needed
const thumbnails = [
  '/assets/weldingposition1.jpg',
  '/assets/weldingposition2.jpg',
  '/assets/weldingposition3.jpg',
  '/assets/weldingposition4.jpg',
];

const WeldingPositionersPage = () => {
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
        <h2 className="text-5xl md:text-7xl font-extrabold text-gray-200 uppercase break-words">Welding Positioners</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">Welding Positioners</h1>
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
                alt="Welding Positioners"
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
          <h2 className="text-3xl font-semibold text-gray-800">Welding Positioners at Sharptrax Technologies</h2>
          <p>At Sharptrax Technologies, our welding positioners are designed to enhance efficiency, precision, and safety in welding operations. These advanced positioning systems allow welders to rotate and tilt workpieces into the optimal position, ensuring better accessibility, reduced strain, and improved weld quality.</p>
          <p>We offer excellent quality range of Welding Positioner (Manipulators) that are made from quality raw material. Widely used in various industrial applications, our range is available in the following specifications:</p>
          <ul className="list-none p-0 space-y-3 mt-4">
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Suitable for wide range of jobs</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Designed for welding of Hydraulic cylinder welding</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Steady rest available for loading and Unloading purposes</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Available on various sizes fro 50 to 300 mm diameter</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Solid construction for weight balancing</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>PLC controlled weld sequence.</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
              <span>Multiple Job can be programmed.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WeldingPositionersPage;