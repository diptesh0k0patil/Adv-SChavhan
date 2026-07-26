import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ADVOCATE_INFO } from '../utils/constants';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3 shadow-lg'
            : 'bg-primary-900/40 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between">
    {/* Logo */}
    <Link to="/" className="flex items-center space-x-3 group">
      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-accent-300 to-accent-500 flex items-center justify-center shadow-md shadow-accent-500/10 group-hover:scale-105 transition-transform duration-300">
        <img
          src="./s-profile.jpg"
          alt="Advocate Logo"
          className="w-full h-full object-contain"
        />
      </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-lg md:text-xl tracking-tight leading-none group-hover:text-accent-300 transition-colors">
                  {ADVOCATE_INFO.name}
                </span>
                <span className="text-accent-300/80 text-[10px] md:text-xs uppercase tracking-widest mt-1 font-sans font-medium">
                  {ADVOCATE_INFO.title.split(',')[1] || ADVOCATE_INFO.title}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors relative py-2 ${
                      isActive
                        ? 'text-accent-300 font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-400 rounded-full"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Phone Quick Call */}
              <a
                href={`tel:${ADVOCATE_INFO.phone.replace(/\s+/g, '')}`}
                className="text-white/90 hover:text-accent-300 transition-colors flex items-center text-sm font-medium space-x-1.5 px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <FiPhone className="w-4 h-4 text-accent-400" />
                <span>Call Chamber</span>
              </a>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${ADVOCATE_INFO.whatsappPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-medium text-sm px-4 py-2.5 rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-accent-300 p-2 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-0 pt-20 pb-6 z-40 bg-primary-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl flex flex-col md:hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-medium py-2.5 px-4 rounded-xl transition-all ${
                      isActive
                        ? 'bg-accent-500/10 text-accent-300 font-bold border-l-4 border-accent-400 pl-3'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <hr className="border-white/10 my-2" />

              <div className="flex flex-col space-y-3 pt-2">
                <a
                  href={`tel:${ADVOCATE_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full justify-center inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-white hover:bg-white/10 font-medium px-4 py-3 rounded-full transition-colors"
                >
                  <FiPhone className="w-4 h-4 text-accent-400" />
                  <span>Call Chamber</span>
                </a>
                
                <a
                  href={`https://wa.me/${ADVOCATE_INFO.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium px-4 py-3 rounded-full shadow-lg shadow-emerald-500/10 active:scale-[0.98] transition-all"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
