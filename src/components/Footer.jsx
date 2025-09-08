import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const AnimatedSocialLink = ({ icon, href }) => {
    return (
        <motion.a
            href={href}
            className="w-10 h-10 flex items-center justify-center bg-black/5 border border-black/10 rounded-full hover:bg-yellow-400 hover:text-black transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            {icon}
        </motion.a>
    );
};

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const socialLinks = [
        { icon: <Youtube size={20} />, href: '#' },
        { icon: <Facebook size={20} />, href: '#' },
        { icon: <Instagram size={20} />, href: '#' },
        { icon: <Linkedin size={20} />, href: '#' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Show button when page is scrolled up to 300px
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="w-full bg-white/50 backdrop-blur-xl text-gray-600 relative border-t border-black/10">
            <div className="container mx-auto px-6 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="col-span-1 lg:col-span-1">
                        <motion.h3
                            className="text-2xl font-bold text-gray-800 mb-4 relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="relative z-10">Sharptrax Technologies</span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-transparent"
                                animate={{ x: ["-100%", "200%"] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "linear",
                                    delay: 1,
                                }}
                                style={{ maskImage: `linear-gradient(to right, transparent, white, transparent)` }}
                            />
                        </motion.h3>
                        <p className="leading-relaxed mb-4">
                            Established in 2005, Sharptrax Technologies is a pioneer in welding automation. With a commitment to innovation and excellence, we provide advanced automation systems tailored to meet industry needs. Our expertise spans robotic welding and custom-built automation solutions. We ensure precision, efficiency, and reliability in every project.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <AnimatedSocialLink key={index} {...link} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="/" className="hover:text-orange-500 transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-orange-500 transition-colors">About us</a></li>
                            <li><a href="/contact" className="hover:text-orange-500 transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 tracking-wider">Our Services</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Robotic Automation</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Plasma Transferred Arc Welding System</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition-colors">Welding Rotator</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-4 tracking-wider">Contact Us</h4>
                        <address className="not-italic">
                            <p className="mb-2"><strong className="text-gray-900">Address:</strong> 166, 11th Main Rd, Industrial Estate, SIDCO Industrial Estate, Thirumudivakkam, Tamil Nadu 600040</p>
                            <p className="mb-2"><strong className="text-gray-900">Phone:</strong> <a href="tel:+919944432149" className="hover:text-orange-500 transition-colors">+91 99444 32149</a></p>
                            <p><strong className="text-gray-900">E-Mail:</strong> <a href="mailto:sharptrax@yahoo.com" className="hover:text-orange-500 transition-colors">sharptrax@yahoo.com</a></p>
                        </address>
                    </div>
                </div>
                <div className="mt-8 py-4 border-t border-black/10 text-center text-sm">
                    <p>&copy; Copyright <strong className="text-gray-900">Sharptrax Technologies</strong>. All Rights Reserved</p>
                    <p>Designed by NEXTERA</p>
                </div>
            </div>
            <AnimatePresence>
                {isVisible && (
                    <motion.button 
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-yellow-400/20 backdrop-blur-sm border border-orange-500 text-orange-500 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;