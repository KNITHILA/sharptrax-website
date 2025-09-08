import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -50 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.8
};

// Recreating the StyledCard component for a self-contained file
const StyledCard = ({ children }) => (
  <div className="bg-white/30 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-xl border border-white/40">
    {children}
  </div>
);

const ContactInfoItem = ({ icon, title, text, delay }) => (
    <motion.div 
        className="flex items-start space-x-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay }}
    >
        <div className="bg-orange-500/20 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600">{text}</p>
        </div>
    </motion.div>
);

const ContactPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-6 py-16 md:py-24"
    >
      {/* Map Section */}
      <motion.div 
        className="mb-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0504781442125!2d80.08195360000001!3d12.9746728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f80c9ad912f%3A0x2cdbf0af50a7f1eb!2sSharp%20Trax%20Technologies!5e0!3m2!1sen!2sin!4v1725264353383!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Glassmorphism Card Container */}
      <StyledCard>
        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-12">
          {/* Left Column: Contact Details */}
          <div className="space-y-8">
            <ContactInfoItem 
                icon={<MapPin className="text-orange-500" />} 
                title="Address" 
                text="166, 11th Main Rd, Industrial Estate, SIDCO Industrial Estate, Thirumudivakkam, Tamil Nadu 600040"
                delay={0.4}
            />
            <ContactInfoItem 
                icon={<Phone className="text-orange-500" />} 
                title="Call Us" 
                text="+91 99444 32149"
                delay={0.6}
            />
            <ContactInfoItem 
                icon={<Mail className="text-orange-500" />} 
                title="Mail Us" 
                text="sharptrax@yahoo.com"
                delay={0.8}
            />
          </div>

          {/* Right Column: Contact Form */}
          <motion.form 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Name" className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="email" placeholder="Your Email" className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <input type="text" placeholder="Subject" className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            <textarea placeholder="Message" rows="5" className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            <div className="text-right">
              <button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </StyledCard>
    </motion.div>
  );
};

export default ContactPage;
