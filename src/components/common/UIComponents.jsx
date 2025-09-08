import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const StyledCard = ({ children, className, ...props }) => (
    <motion.div
        className={`relative bg-white/40 backdrop-blur-2xl border border-white/20 rounded-2xl group ${className}`}
        whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
        {...props}
    >
        <div className="relative h-full overflow-hidden rounded-2xl">{children}</div>
    </motion.div>
);

export const SectionTitle = ({ children }) => (
    <motion.h2 
        className="text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        {children}
    </motion.h2>
);

export const SectionUnderline = () => (
    <motion.div 
        className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-16 rounded"
        initial={{ width: 0 }}
        whileInView={{ width: '6rem' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
    />
);

export const CurtainConnector = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end 0.8"]
    });
    const pathLength = useSpring(scrollYProgress, { stiffness: 300, damping: 90 });

    return (
        <div ref={targetRef} className="h-48 w-full flex justify-center items-center my-8">
            <svg width="200" height="100%" viewBox="0 0 200 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="line-gradient-animated-glow-light" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FBBF24"/>
                        <stop offset="0.5" stopColor="#F59E0B"/>
                        <stop offset="1" stopColor="#D97706"/>
                    </linearGradient>
                </defs>
                
                <motion.path
                    d="M100 0 L100 96 L0 192"
                    stroke="url(#line-gradient-animated-glow-light)"
                    strokeWidth="2"
                    style={{ pathLength }}
                />
                <motion.path
                    d="M100 0 L100 96 L200 192"
                    stroke="url(#line-gradient-animated-glow-light)"
                    strokeWidth="2"
                    style={{ pathLength }}
                />
                
                {/* Central Pulse Animation is back */}
                <motion.circle
                    cx="100" cy="96" r="0"
                    fill="url(#line-gradient-animated-glow-light)"
                    initial={{ r: 0, opacity: 0 }}
                    whileInView={{ r: 8, opacity: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.5 }}
                />
            </svg>
        </div>
    );
};