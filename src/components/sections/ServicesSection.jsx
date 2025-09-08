import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Common UI Components
const StyledCard = ({ children, className }) => (
    <div className={`rounded-3xl overflow-hidden ${className}`}>
        {children}
    </div>
);

const SectionTitle = ({ children }) => (
    <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-2 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
    >
        {children}
    </motion.h2>
);

const SectionUnderline = () => (
    <motion.div
        className="w-24 h-1 bg-yellow-400 mx-auto mb-10 sm:mb-16"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
    ></motion.div>
);

// Service Card Component with Hover Effect
const ServiceCard = ({ title, imgSrc, link }) => {
    const isWeldingPositioner = title === 'Welding Positioners';
    const cardScaleClass = isWeldingPositioner ? 'scale-90' : 'scale-100';

    return (
        <motion.div
            className={`w-full overflow-hidden rounded-3xl shadow-xl shadow-gray-400/20 cursor-pointer transition-transform duration-300 ${cardScaleClass}`}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <Link to={link} className="flex flex-col h-full">
                <div className="w-full flex-grow overflow-hidden rounded-t-3xl">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://placehold.co/800x600/1e293b/a8a29e?text=Image+Not+Found';
                        }}
                    />
                </div>
                <div className="p-4 bg-gray-900 text-white text-center rounded-b-3xl">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="text-xs text-gray-400 mt-1">View Details</p>
                </div>
            </Link>
        </motion.div>
    );
};

// --- Fisheye Carousel Component ---
const FisheyeCarousel = () => {
    const originalServices = [
        { title: 'Plasma Transferred Arc Welding System', imgSrc: '/assets/plasma-welding.jpg', link: '/services/plasma-transferred-arc-welding' },
        { title: 'Robotic Automation', imgSrc: '/assets/robotic-automation.jpg', link: '/services/robotic-automation' },
        { title: 'Welding Rotator', imgSrc: '/assets/welding-rotator.jpg', link: '/services/welding-rotator' },
        { title: 'Welding Positioners', imgSrc: '/assets/welding-positioners.jpg', link: '/services/welding-positioners' },
        { title: 'Pull-Through Welding Automation System', imgSrc: '/assets/pull-through-system.jpg', link: '/services/pull-through-welding' },
        { title: 'L-Type Positioner', imgSrc: '/assets/l-type-positioner.jpg', link: '/services/l-type-positioner' },
    ];

    const numCloned = 3;
    const totalOriginal = originalServices.length;
    const totalItems = totalOriginal + 2 * numCloned;

    const loopedServices = [
        ...originalServices.slice(-numCloned),
        ...originalServices,
        ...originalServices.slice(0, numCloned),
    ];

    const [activeIndex, setActiveIndex] = useState(numCloned);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [touchStart, setTouchStart] = useState(null);

    useEffect(() => {
        if (isTransitioning) return;

        if (activeIndex < numCloned) {
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setActiveIndex(totalOriginal + activeIndex);
                setIsTransitioning(false);
            }, 400);
            return () => clearTimeout(timer);
        }

        if (activeIndex >= totalOriginal + numCloned) {
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setActiveIndex(activeIndex - totalOriginal);
                setIsTransitioning(false);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [activeIndex, isTransitioning, totalOriginal, numCloned]);

    const goToPrev = () => setActiveIndex((prev) => prev - 1);
    const goToNext = () => setActiveIndex((prev) => prev + 1);

    const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
    const handleTouchEnd = (e) => {
        if (touchStart === null) return;
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStart - touchEnd;
        if (diff > 50) goToNext();
        else if (diff < -50) goToPrev();
        setTouchStart(null);
    };

    const getCardStyle = (offset) => {
        const absOffset = Math.abs(offset);
        const maxOffset = 2;

        const translateX = offset * 250;
        const rotateY = offset * -15;
        const scale = 1 - absOffset * 0.15;
        const opacity = absOffset <= maxOffset ? 1 - absOffset * 0.35 : 0;
        const zIndex = totalItems - absOffset;

        return { translateX, rotateY, scale, opacity, zIndex };
    };

    const transitionConfig = {
        type: "spring",
        stiffness: 250,
        damping: 30,
        duration: isTransitioning ? 0 : 0.4,
    };

    return (
        <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
            <motion.button
                onClick={goToPrev}
                className="absolute top-1/2 left-2 sm:left-6 transform -translate-y-1/2 z-30 bg-transparent rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-black hover:bg-white/20 transition-all shadow-md"
                aria-label="Previous slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronLeft size={24} className="sm:w-8 sm:h-8" />
            </motion.button>

            <div
                className="relative w-[300px] sm:w-[500px] h-[350px] sm:h-[450px] mx-auto"
                style={{ perspective: '1200px' }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="absolute w-full h-full"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {loopedServices.map((service, index) => {
                        const offset = index - activeIndex;
                        return (
                            <motion.div
                                key={index}
                                animate={getCardStyle(offset)}
                                transition={transitionConfig}
                                className="absolute w-full h-full will-change-transform"
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                <ServiceCard {...service} />
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <motion.button
                onClick={goToNext}
                className="absolute top-1/2 right-2 sm:right-6 transform -translate-y-1/2 z-30 bg-transparent rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-black hover:bg-white/20 transition-all shadow-md"
                aria-label="Next slide"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ChevronRight size={24} className="sm:w-8 sm:h-8" />
            </motion.button>
        </div>
    );
};

// --- Clients Section (Scrolling Logos) ---

const ClientsSection = () => {
  const containerRef = useRef(null);

  const logos = [
    { src: "/logos/kobelco.png", alt: "Kobelco" },
    { src: "/logos/mahindra.png", alt: "Mahindra" },
    { src: "/logos/wl.png", alt: "WHEELS INDIA LIMITED" },
    { src: "/logos/tvs.png", alt: "TVS" },
    { src: "/logos/bhel.png", alt: "BHEL" },
    { src: "/logos/eminox.png", alt: "Eminox" },
    { src: "/logos/delta.png", alt: "Delta Electronics" },
    { src: "/logos/epiroc.png", alt: "Epiroc" },
    { src: "/logos/tata.png", alt: "Tata Steel" },
    { src: "/logos/rane.png", alt: "Rane" },
    { src: "/logos/ipl.png", alt: "India Pistons Limited" },
    { src: "/logos/lt.png", alt: "L&T Valves" },
    { src: "/logos/shakti.png", alt: "Shakti" },
    { src: "/logos/axles.png", alt: "Axles India Limited" },
    { src: "/logos/danfoss.png", alt: "Danfoss" },
    { src: "/logos/roots.png", alt: "Roots" },
    { src: "/logos/armstrong.png", alt: "Armstrong" },
    { src: "/logos/bluestar.png", alt: "Blue Star" },
    { src: "/logos/wipro.png", alt: "Wipro" },
    { src: "/logos/alufab.png", alt: "Alufab" },
    { src: "/logos/amara.png", alt: "Amara Raja" },
    { src: "/logos/dharranee.png", alt: "Dharranee" },
    { src: "/logos/jindal.png", alt: "Jindal Steel & Power" },
    { src: "/logos/violin.png", alt: "Violin Technologies" },
    { src: "/logos/ssi.png", alt: "SSI" },
  ];

  // Marquee animation
  const marquee = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="py-10 sm:py-14 bg-transparent">
      <SectionTitle>OUR CLIENTS</SectionTitle>
      <SectionUnderline />

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide w-full cursor-grab"
      >
        <motion.div
          className="flex items-center space-x-12 sm:space-x-14"
          variants={marquee}
          animate="animate"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center flex-shrink-0"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-20 sm:h-24 object-contain" // ⬅️ reduced size
              />
              <p
                className="mt-1 text-xs sm:text-sm text-gray-800 text-center" // ⬅️ smaller font
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                {logo.alt}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};



// ----------------

// Main Services Section + Clients
const ServicesSection = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 px-4 bg-transparent">
            <SectionTitle>OUR SERVICES</SectionTitle>
            <SectionUnderline />
            <div className="w-full max-w-7xl mx-auto">
                <FisheyeCarousel />
            </div>
            {/* Clients Section under About Us */}
            <ClientsSection />
        </div>
    );
};

export default ServicesSection;
