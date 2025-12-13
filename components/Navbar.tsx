import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-8 md:px-12 flex items-center justify-between">
        {/* Logo - Matches "CKP" top left */}
        <div 
          className="cursor-pointer z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-heading font-bold text-2xl tracking-tighter text-white">
            PK<span className="text-secondary_accent">.</span>
          </span>
        </div>

        {/* Desktop Menu - Matches "Portfolio About..." top right */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-xs uppercase tracking-widest font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex gap-4 ml-4">
             {/* Social placeholders if needed, similar to ref image */}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-2xl font-heading font-light text-white hover:text-gray-400 transition-colors"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;