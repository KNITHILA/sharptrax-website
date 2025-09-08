import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, X, Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Product & Services',
    href: '/robotic-automation',
    subMenu: [
      {
        name: 'Welding Automation',
        href: '#',
        secondLevelSubMenu: [
          { name: 'Robotic Automation', href: '/robotic-automation' },
          { name: 'Plasma Transferred Arc Welding System', href: '/plasma-welding' },
          { name: 'Welding Rotator', href: '/welding-rotator' },
          { name: 'Pull-Through Welding Automation System', href: '/pull-through-welding' },
          { name: 'MIG-Welding System', href: '/mig-welding' },
          { name: 'TIG Longitudinal Welding SPM', href: '/tig-welding' },
          { name: 'SAW-Submerged Arc Welding', href: '/saw-welding' },
          { name: 'Column And Boom', href: '/column-and-boom' },
          { name: 'Port Welding Machine SPM', href: '/port-welding' },
          { name: 'Head & Tailstock Units', href: '/head-tailstock' },
          { name: 'Hydraulic End Cap Welding SPM', href: '/hydraulic-end-cap' },
        ]
      },
      {
        name: 'Welding Positioners',
        href: '/welding-positioners',
        secondLevelSubMenu: [
          { name: 'Welding Positioners', href: '/welding-positioners' },
          { name: 'L-Type Positioner', href: '/l-type-positioner' },
          { name: 'Scissor Rollers', href: '/scissor-rollers' },
          { name: 'Welding Turn Table', href: '/welding-turntable' },
        ]
      },
      { name: 'Plasma Cnc Cutting Machine', href: '/plasma-cnc-cutting' },
      {
        name: 'Machine Accessories',
        href: '#',
        secondLevelSubMenu: [
          { name: 'Torch Weaving Unit (Welding Weaving Unit)', href: '/torch-weaving-unit' },
          { name: 'AVC Unit', href: '/avc-unit' },
          { name: 'Laser Seam Tracking Unit', href: '/laser-seam-tracking-unit' },
          { name: 'Welding Torch', href: '/welding-torch' },
          { name: 'Cross Slides', href: '/cross-slides' },
        ]
      },
    ]
  },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSecondLevelMenu, setOpenSecondLevelMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const subMenuAnimate = {
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
    exit: { opacity: 0, y: -5, scale: 0.95, transition: { duration: 0.15, ease: 'easeIn' } },
  };

  const mobileMenuAnimate = {
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    closed: { opacity: 0, x: '100%', transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileSubMenuClick = (menuName) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
    setOpenSecondLevelMenu(null);
  };

  const handleMobileSecondLevelMenuClick = (menuName) => {
    setOpenSecondLevelMenu(openSecondLevelMenu === menuName ? null : menuName);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-40 p-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <div
        className={`max-w-6xl mx-auto flex justify-between items-center p-3 px-8 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-lg shadow-lg'
            : 'bg-white/20 backdrop-blur-md shadow-md'
        }`}
      >
        {/* ✅ Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Sharptrax Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* ✅ Desktop Navbar */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.subMenu && setOpenSubMenu(link.name)}
              onMouseLeave={() => link.subMenu && setOpenSubMenu(null)}
            >
              <Link
                to={link.href}
                className="flex items-center text-gray-900 font-medium hover:text-orange-500 nav-link-glow transition-all"
              >
                {link.name}
                {link.subMenu && <ChevronDown size={16} className="ml-1" />}
              </Link>
              <AnimatePresence>
                {openSubMenu === link.name && link.subMenu && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-80 bg-white rounded-xl shadow-2xl py-3"
                    variants={subMenuAnimate}
                    initial="exit"
                    animate="enter"
                    exit="exit"
                  >
                    {link.subMenu.map((subLink) => (
                      <div
                        key={subLink.name}
                        className="relative"
                        onMouseEnter={() =>
                          subLink.secondLevelSubMenu &&
                          setOpenSecondLevelMenu(subLink.name)
                        }
                        onMouseLeave={() =>
                          subLink.secondLevelSubMenu &&
                          setOpenSecondLevelMenu(null)
                        }
                      >
                        <Link
                          to={subLink.href}
                          className="flex justify-between items-center text-gray-800 hover:bg-gray-100 px-5 py-2.5 text-sm rounded-lg mx-2"
                        >
                          {subLink.name}
                          {subLink.secondLevelSubMenu && <ChevronRight size={16} />}
                        </Link>
                        <AnimatePresence>
                          {openSecondLevelMenu === subLink.name &&
                            subLink.secondLevelSubMenu && (
                              <motion.div
                                className="absolute top-0 left-full ml-2 w-80 bg-white rounded-xl shadow-2xl py-3"
                                variants={subMenuAnimate}
                                initial="exit"
                                animate="enter"
                                exit="exit"
                              >
                                {subLink.secondLevelSubMenu.map((secondLevelLink) => (
                                  <Link
                                    key={secondLevelLink.name}
                                    to={secondLevelLink.href}
                                    className="block text-gray-800 hover:bg-gray-100 px-5 py-2.5 text-sm rounded-lg mx-2"
                                  >
                                    {secondLevelLink.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* ✅ Enquiry Button - Desktop */}
        <div className="hidden md:block ml-8">
          <Link to="/enquiry">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              Enquiry Now
            </button>
          </Link>
        </div>

        {/* ✅ Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-900">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuAnimate}
            className="fixed top-0 left-0 w-full h-full bg-white/90 backdrop-blur-md z-30 p-8 flex flex-col items-start pt-24"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="relative w-full mb-2">
                <div className="flex justify-between items-center w-full">
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (!link.subMenu) {
                        toggleMobileMenu();
                      }
                    }}
                    className="flex-1 text-gray-800 font-semibold text-lg py-3"
                  >
                    {link.name}
                  </Link>
                  {link.subMenu && (
                    <button onClick={() => handleMobileSubMenuClick(link.name)} className="p-2">
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${openSubMenu === link.name ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                <AnimatePresence>
                  {openSubMenu === link.name && link.subMenu && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 border-l-2 border-gray-200">
                        {link.subMenu.map((subLink) => (
                          <div key={subLink.name}>
                            <div className="flex justify-between items-center py-2">
                              <Link
                                to={subLink.href}
                                onClick={() => {
                                  if (!subLink.secondLevelSubMenu) {
                                    toggleMobileMenu();
                                  }
                                }}
                                className="flex-1 text-gray-700 text-base"
                              >
                                {subLink.name}
                              </Link>
                              {subLink.secondLevelSubMenu && (
                                <button onClick={() => handleMobileSecondLevelMenuClick(subLink.name)} className="p-2">
                                  <ChevronRight
                                    size={16}
                                    className={`transition-transform ${openSecondLevelMenu === subLink.name ? 'rotate-90' : ''}`}
                                  />
                                </button>
                              )}
                            </div>
                            <AnimatePresence>
                              {openSecondLevelMenu === subLink.name && subLink.secondLevelSubMenu && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-4 border-l border-gray-300">
                                    {subLink.secondLevelSubMenu.map((secondLevelLink) => (
                                      <Link
                                        key={secondLevelLink.name}
                                        to={secondLevelLink.href}
                                        onClick={toggleMobileMenu}
                                        className="block text-gray-600 text-sm py-2"
                                      >
                                        {secondLevelLink.name}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <div className="mt-8 w-full">
              <Link to="/enquiry" onClick={toggleMobileMenu}>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-8 rounded-full shadow-md w-full">
                  Enquiry Now
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;