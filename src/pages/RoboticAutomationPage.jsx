import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StyledCard } from '../components/common/UIComponents';
import { Check } from 'lucide-react';

// Main image + thumbnails
const mainImage = '/assets/rob.jpg';
const thumbnails = [
  '/assets/rob1.jpg',
  '/assets/rob2.jpg',
  '/assets/rob3.jpg',
  '/assets/rob4.jpg',
];

const RoboticAutomationPage = () => {
  const [currentImage, setCurrentImage] = useState(mainImage);

  return (
    <motion.div
      className="container mx-auto px-6 py-28 md:py-36"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Page Title */}
      <div className="relative text-center mb-20">
        <h2 className="text-6xl md:text-8xl font-extrabold text-gray-200 uppercase">
          Robotic Automation
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 absolute 
          top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2">
          Robotic Automation
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-20 items-start">
        {/* Left: Image Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Main Image */}
          <StyledCard className="w-full h-96 mb-4 flex items-center justify-center p-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={currentImage}
                alt="Robotic Automation"
                className="w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </StyledCard>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-4">
            {thumbnails.map((thumb, index) => (
              <motion.div
                key={index}
                className={`cursor-pointer transition-all ${
                  currentImage === thumb ? 'scale-105' : ''
                }`}
                onClick={() => setCurrentImage(thumb)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <StyledCard
                  className={`w-full h-24 flex items-center justify-center p-2 border-2 ${
                    currentImage === thumb ? 'border-orange-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </StyledCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Product Details */}
        <motion.div
          className="prose lg:prose-lg max-w-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold text-gray-800">
            Robotic Automation at Sharptrax Technologies
          </h2>
          <p>
            Robotic automation is at the core of Sharptrax Technologies’ advanced welding solutions. 
            With cutting-edge robotic welding systems, we help industries achieve higher precision, 
            efficiency, and productivity in their manufacturing processes.
          </p>
          <p>
            Sharptrax Technologies offers over 20 years of experience as a leader and innovator 
            integrating automation and robotics for the welding industry.
          </p>

          {/* Features */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              Key Features Of Robotic Automation
            </h3>
            <ul className="list-none p-0 space-y-3">
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Our robotic systems can be seamlessly integrated into existing 
                  production lines, ensuring minimal disruption and maximum efficiency.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span>
                  Robots deliver consistent weld quality, reducing errors 
                  and minimizing material wastage.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RoboticAutomationPage;
