import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield, FiAlertTriangle, FiCheck } from 'react-icons/fi';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer in this browser tab/session
    const accepted = sessionStorage.getItem('disclaimer_accepted');

    if (accepted !== 'true') {
      setIsOpen(true);
      // Disable body scroll when modal is active
      document.body.style.overflow = 'hidden';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleAccept = () => {
    // Save acceptance only for the current browser tab/session
    sessionStorage.setItem('disclaimer_accepted', 'true');

    setIsOpen(false);

    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with extreme glassmorphism blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-950/90 backdrop-blur-xl pointer-events-auto"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 flex flex-col my-auto max-h-[90vh]"
          >
            {/* Header Area */}
            <div className="bg-[#0b1627] text-white p-6 sm:p-8 border-b border-white/10 flex items-center space-x-4 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/30 flex items-center justify-center text-accent-400 shrink-0">
                <FiShield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg sm:text-xl tracking-wide uppercase text-accent-300">
                  Disclaimer &amp; User Acknowledgement
                </h2>
                <p className="text-[10px] sm:text-xs text-slate-400 font-sans mt-0.5 tracking-wider uppercase">
                  Bar Council of India Compliance Notice
                </p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-slate-700 text-sm font-sans leading-relaxed scrollbar-thin">
              <p className="font-serif font-semibold text-slate-900 text-base border-l-4 border-accent-500 pl-3.5">
                Welcome to the official website of Shankar Chavan, Advocate, High Court of Bombay, Mumbai.
              </p>

              <p className="text-slate-600 text-xs bg-slate-50 border border-slate-200 p-4 rounded-xl italic">
                As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising. This website has been created solely to provide general information about the advocate, areas of practice, and professional details. It is not intended to advertise, solicit clients, or create an advocate-client relationship.
              </p>

              <div className="space-y-3.5">
                <h4 className="text-xs uppercase font-bold text-slate-500 tracking-wider flex items-center space-x-1.5">
                  <FiAlertTriangle className="text-accent-500 w-4 h-4" />
                  <span>By accessing this website, you acknowledge and confirm that:</span>
                </h4>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0 mt-1.5" />
                    <span>You are seeking information about the advocate on your own initiative.</span>
                  </li>

                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0 mt-1.5" />
                    <span>There has been no advertisement, solicitation, invitation, or inducement by the advocate or this website.</span>
                  </li>

                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0 mt-1.5" />
                    <span>The information available on this website is provided only for informational purposes and should not be construed as legal advice.</span>
                  </li>

                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0 mt-1.5" />
                    <span>Viewing this website or communicating through it does not create an advocate-client relationship.</span>
                  </li>

                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0 mt-1.5" />
                    <span>You should obtain independent legal advice before acting on any information contained on this website.</span>
                  </li>

                  <li className="flex items-start space-x-2.5">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full shrink-0 mt-1.5" />
                    <span>The advocate shall not be liable for any action taken based on the information available on this website.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Button Area */}
            <div className="bg-slate-50 p-6 sm:px-8 sm:py-5 border-t border-slate-200 shrink-0 text-center">
              <button
                onClick={handleAccept}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-accent-500/10 active:scale-[0.98] transition-all uppercase tracking-wider cursor-pointer"
              >
                <FiCheck className="w-4 h-4 stroke-[3]" />
                <span> I Have Read and Agree – Enter Website</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}