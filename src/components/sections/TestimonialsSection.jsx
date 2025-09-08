import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { StyledCard, SectionTitle, SectionUnderline } from '../common/UIComponents';

const StarRating = ({ rating = 5 }) => (
    <div className="flex text-yellow-400 my-2">
        {[...Array(rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
    </div>
);

const TestimonialsSection = () => {
    const testimonials = [
        { name: "Ganesh", avatar: "/assets/ceo.png", quote: "Their robotic welding solutions helped us reduce manual errors and increase output. Sharptrax is our go-to partner for all automation needs!" },
        { name: "Ram Kumar", avatar: "https://placehold.co/100x100/313441/FFFFFF?text=R", quote: "Sharptrax Technologies provided us with a seamless welding automation system that significantly improved our production efficiency." },
        { name: "Elstin S", avatar: "https://placehold.co/100x100/313441/FFFFFF?text=E", quote: "We integrated their solutions into our plant, and the results were outstanding! The precision and reliability of their systems are truly commendable." },
        { name: "Helana", avatar: "https://placehold.co/100x100/313441/FFFFFF?text=H", quote: "We have been working with Sharptrax for years, and their dedication to quality and innovation is unmatched." },
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);

    // Auto-play logic
    useEffect(() => {
        if (!isHovered) {
            timeoutRef.current = setTimeout(() => {
                const nextIndex = (currentTestimonial + 1) % testimonials.length;
                setCurrentTestimonial(nextIndex);
            }, 5000); // 5-second delay
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentTestimonial, isHovered, testimonials.length]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    // Animation variants for the card transition
    const cardVariants = {
        enter: (direction) => ({
            opacity: 0,
            rotateY: direction > 0 ? -90 : 90,
            scale: 0.8,
        }),
        center: {
            opacity: 1,
            rotateY: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 20
            }
        },
        exit: (direction) => ({
            opacity: 0,
            rotateY: direction > 0 ? 90 : -90,
            scale: 0.8,
            transition: {
                duration: 0.3
            }
        }),
    };

    const paginate = (newDirection) => {
        const nextIndex = (currentTestimonial + newDirection + testimonials.length) % testimonials.length;
        setCurrentTestimonial(nextIndex);
    };

    return (
        <div>
            <SectionTitle>COMPANY TESTIMONIALS</SectionTitle>
            <SectionUnderline />
            <div 
                className="relative max-w-3xl mx-auto h-80 flex items-center justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentTestimonial}
                        variants={cardVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="w-full absolute"
                    >
                        <StyledCard className="w-full cursor-pointer shadow-xl border border-gray-100">
                            <div className="flex flex-col items-center p-8 text-gray-800">
                                <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400 mb-4" />
                                <h4 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                                <StarRating />
                                <p className="text-center text-gray-600 italic max-w-xl">
                                    <Quote className="inline w-6 h-6 -mt-2 mr-2 text-orange-400/50 transform scale-x-[-1]" />
                                    {testimonials[currentTestimonial].quote}
                                    <Quote className="inline w-6 h-6 -mt-2 ml-2 text-orange-400/50" />
                                </p>
                            </div>
                        </StyledCard>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => paginate(index - currentTestimonial)} 
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentTestimonial === index ? 'bg-orange-500' : 'bg-black/20 hover:bg-black/40'}`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;