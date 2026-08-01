import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiArrowUp, FiExternalLink, FiClock } from 'react-icons/fi';
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { ADVOCATE_INFO, PRACTICE_AREAS } from '../utils/constants';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0b1627] text-slate-400 relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Absolute Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group inline-block">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-300 to-accent-500 flex items-center justify-center shadow-md shadow-accent-500/10">
                <svg className="w-6 h-6 text-primary-900" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H7M4.5 10.5C4.5 7.5 7 5 7 5M19.5 10.5C19.5 7.5 17 5 17 5" />
                  <path d="M3 13h8M13 13h8M7 13c0 2 1.5 3 1.5 3s1.5-1 1.5-3M17 13c0 2 1.5 3 1.5 3s1.5-1 1.5-3" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-serif font-bold text-lg md:text-xl tracking-tight leading-none">
                  {ADVOCATE_INFO.name}
                </span>
                <span className="text-accent-300/80 text-[10px] uppercase tracking-widest mt-1 font-sans font-semibold">
                  {ADVOCATE_INFO.title}
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed font-sans max-w-sm">
              Providing rigorous, expert, and trustworthy legal counsel and representation before the High Court of Bombay. Over 7 years of unwavering commitment to equity and justice.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={ADVOCATE_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-accent-500 hover:text-primary-950 flex items-center justify-center text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a
                href={ADVOCATE_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-accent-500 hover:text-primary-950 flex items-center justify-center text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href={ADVOCATE_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-white transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
              {ADVOCATE_INFO.socialLinks.topmate && (
                <a
                  href={ADVOCATE_INFO.socialLinks.topmate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-accent-500 hover:text-primary-950 flex items-center justify-center text-white transition-all duration-300 text-xs font-bold"
                  aria-label="Topmate Consultation"
                >
                  tm
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6 lg:pl-8">
            <h3 className="text-white font-serif font-semibold text-lg relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-accent-400">
              Quick Navigation
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <Link to="/" className="hover:text-accent-300 transition-colors flex items-center space-x-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent-300 transition-colors flex items-center space-x-1">
                  <span>About Bio</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-accent-300 transition-colors flex items-center space-x-1">
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent-300 transition-colors flex items-center space-x-1">
                  <span>Contact &amp; Chamber</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-semibold text-lg relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-accent-400">
              Practice Sectors
            </h3>
            <ul className="space-y-3 font-sans text-sm">
              {PRACTICE_AREAS.slice(0, 4).map((area) => (
                <li key={area.id}>
                  <Link to="/" className="hover:text-accent-300 transition-colors flex items-center justify-between">
                    <span>{area.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" className="text-accent-400 hover:text-accent-300 transition-colors text-xs font-semibold uppercase tracking-wider flex items-center space-x-1">
                  <span>View All Sectors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-serif font-semibold text-lg relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-accent-400">
              Communication Address
            </h3>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start space-x-3">
                <FiMapPin className="w-5 h-5 text-accent-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium text-xs">Bombay High Court</p>
                  <p className="text-xs text-slate-400 mt-1">{ADVOCATE_INFO.mainOffice.address}</p>
                  <a
                    href={ADVOCATE_INFO.mainOffice.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-accent-400 hover:text-accent-300 text-xs mt-1 font-semibold"
                  >
                    <span>View on Maps</span>
                    <FiExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="w-4 h-4 text-accent-400 shrink-0" />
                <a href={`tel:${ADVOCATE_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {ADVOCATE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="w-4 h-4 text-accent-400 shrink-0" />
                <a href={`mailto:${ADVOCATE_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {ADVOCATE_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 font-sans">
          <p>
            &copy; {new Date().getFullYear()} {ADVOCATE_INFO.name}. All Rights Reserved. Developed By infodad Technologies Private Limited
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="flex items-center space-x-1">
              <FiClock className="w-3.5 h-3.5 text-accent-500" />
              <span>Mon - Sat Consultation</span>
            </span>
            <a
              href={`https://wa.me/${ADVOCATE_INFO.whatsappPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 font-semibold transition-colors flex items-center space-x-1"
            >
              <span>Instant Chat Available</span>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      <div className={`fixed bottom-6 right-6 z-40 transition-all duration-300 transform ${showBackToTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'}`}>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-accent-500 hover:bg-accent-400 text-primary-950 flex items-center justify-center shadow-lg hover:shadow-accent-500/20 active:scale-95 transition-all duration-300"
          aria-label="Back to Top"
        >
          <FiArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>
    </footer>
  );
}
