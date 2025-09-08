import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder for StyledCard ---
const StyledCard = ({ children, className }) => (
  <motion.div
    className={`relative bg-white/40 backdrop-blur-2xl border border-white/20 rounded-2xl group ${className}`}
    whileHover={{
      scale: 1.02,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    }}
  >
    <div className="relative h-full overflow-hidden rounded-2xl">
      {children}
    </div>
  </motion.div>
);

// Page animation variants
const pageVariants = {
  initial: { opacity: 0, scale: 0.8, y: 50 },
  in: { opacity: 1, scale: 1, y: 0 },
  out: { opacity: 0, scale: 1.1, y: -50 },
};

const pageTransition = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
  duration: 0.6,
};

// Main AboutPage component
const AboutPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="flex flex-col items-center justify-center h-screen px-6 py-4"
    >
      <div className="container mx-auto flex flex-col justify-center gap-8">
        {/* --- Top Section: General Info & Main Image --- */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                type: 'spring',
                damping: 12,
                stiffness: 100,
                duration: 0.8,
                delay: 0.2,
              }}
            >
              About Us
            </motion.h1>
            <p className="text-gray-700 text-sm md:text-base mb-2 leading-relaxed">
              Established in 2005, Sharptrax Technologies has emerged as a leader
              in welding automation in India. With a deep commitment to
              innovation, precision, and efficiency, we design and deliver
              state-of-the-art automation systems that enhance productivity
              across various industries.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our mission: To revolutionize the sector with cutting edge
              technology, delivering high-performance solutions that drive
              operational excellence for our clients. To be a global leader in
              automation technologies, setting new benchmarks in innovation,
              quality, and customer satisfaction.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <StyledCard className="w-full max-w-sm h-[290px]">
              <img
                src="/assets/roboarm.png"
                alt="Industrial Robotic Arm"
                className="w-full h-full object-cover object-bottom"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found';
                }}
              />
            </StyledCard>
          </motion.div>
        </div>

        {/* --- Bottom Section: Leadership --- */}
        <div className="grid md:grid-cols-2 gap--10 items-center"> {/* reduced gap */}
          {/* Left Column: CEO Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="-mt-4"  // lift image slightly
          >
            <StyledCard className="w-full max-w-xs mx-auto aspect-square">
              <img
                src="/assets/ceo.png"
                alt="Mr. N. Ganesan, Founder & CEO of Sharptrax Technologies"
                className="w-full h-full object-cover object-top"
              />
            </StyledCard>
          </motion.div>

          {/* Right Column: Leadership Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="space-y-2"  // keeps heading & paragraph neat
          >
            <h2
              className="text-2xl lg:text-3xl font-semibold text-gray-800"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Leadership That Drives Excellence
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Our journey is guided by Mr. N. Ganesan, the Founder & CEO of
              Sharptrax Technologies. A dynamic and experienced professional in
              Electrical & Electronics Engineering, his expertise and vision
              have been instrumental in shaping the company's success. Under his
              leadership, our dedicated team continuously strives to innovate
              and exceed customer expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
