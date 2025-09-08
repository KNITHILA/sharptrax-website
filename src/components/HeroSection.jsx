// src/App.jsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from "framer-motion";

const videoBg = '/assets/vedio.mp4'; // put your video in /public/assets/

// ---------------- HERO SECTION ----------------
const HeroSection = () => {
  const title = "SHARPTRAX TECHNOLOGIES";
  const slogan = "BEYOND JUST WELDING";

  const [firstWord, secondWord] = title.split(" ");

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  const btnRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScroll = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex justify-center items-center overflow-hidden px-4 md:px-8">
      {/* Fullscreen Video Background */}
      <motion.video
        src={videoBg}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center"
          variants={titleContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg leading-snug md:mr-4"
            style={{ perspective: 1000 }}
          >
            {firstWord.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg leading-snug mt-2 md:mt-0"
            style={{ perspective: 1000 }}
          >
            {secondWord.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
                style={{ whiteSpace: "pre" }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-2xl text-gray-200 font-medium max-w-xs sm:max-w-md md:max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
        >
          {slogan}
        </motion.p>

        <motion.div
          className="mt-4 sm:mt-6 h-1 w-32 sm:w-40 bg-gradient-to-r from-gray-400 via-gray-200 to-white rounded-full shadow-lg"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        />

        <motion.button
          ref={btnRef}
          className="mt-6 sm:mt-10 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold bg-white text-black shadow-xl relative overflow-hidden"
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleScroll}
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px rgba(255,255,255,0.5)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
        >
          <span className="relative z-10">Explore More</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-400 opacity-30"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.button>
      </div>
    </section>
  );
};

// ---------------- ABOUT SECTION ----------------
const AboutSection = () => {
  const aboutFeatures = [
    {
      iconPath: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5z",
      title: "Industry Expertise & Innovation",
      text: "With nearly two decades of experience, we are at the forefront of welding.",
    },
    {
      iconPath: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75",
      title: "Customized Automation Solutions",
      text: "We understand unique needs and offer tailor-made automation solutions.",
    },
    {
      iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z",
      title: "Quality, Reliability & Commitment",
      text: "Quality is at the core of everything we do, using advanced technology.",
    },
  ];

  return (
    <div
      id="about-section"
      className="grid md:grid-cols-2 gap-12 md:gap-16 items-center p-6 sm:p-12 md:p-16 lg:p-24"
    >
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-2">
          ABOUT US
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-snug">
          SHARPTRAX TECHNOLOGIES
        </h3>
        <p className="text-gray-700 mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
          Founded in 2005, Sharptrax is a leader in welding automation. With a
          strong focus on innovation and precision engineering, we deliver
          high-performance systems tailored to meet the evolving needs of
          various industries.
        </p>
        <div>
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            >
              <div className="flex flex-col sm:flex-row items-start mt-6 sm:mt-8">
                {/* Removed any background color from icon container */}
                <div className="flex-shrink-0 p-3 rounded-full border border-black/10">
                  <svg
                    className="w-8 h-8 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.iconPath}
                    ></path>
                  </svg>
                </div>
                <div className="mt-2 sm:mt-0 sm:ml-5">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="mt-1 text-gray-700 leading-relaxed text-sm sm:text-base">
                    {feature.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Column */}
      <motion.div
        className="w-full h-full min-h-[300px] md:min-h-[500px] overflow-hidden rounded-xl shadow-2xl shadow-gray-400/30"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
      >
        <img
          src="/assets/roboarm1.jpg"
          alt="Industrial Robotic Arm"
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </div>
  );
};

// ---------------- MAIN APP ----------------
const App = () => {
  return (
    <div className="min-h-screen bg--50">
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default App;
