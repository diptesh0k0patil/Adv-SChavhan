import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';
import { GALLERY_IMAGES } from '../utils/constants';
import SEO from '../components/SEO';

const categories = ["All", "Court", "Office", "Event", "Mumbai"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter gallery items based on active category
  const filteredImages = activeCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category.toLowerCase() === activeCategory.toLowerCase());

  // Lightbox Navigation Handlers
  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIdx) => (prevIdx === 0 ? filteredImages.length - 1 : prevIdx - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIdx) => (prevIdx === filteredImages.length - 1 ? 0 : prevIdx + 1));
  };

  // Listen to keyboard arrow and escape keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'Escape') setLightboxIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  return (
    <div className="bg-[#fafbfc] min-h-screen pb-24">
      <SEO 
        title="Gallery"
        description="Browse the photo gallery of Advocate Shankar Chavan. Glimpses of high court proceedings, private chambers, seminars, and corporate legal events."
      />

      {/* Hero Banner Header */}
      <section className="bg-[#070e1e] text-white py-20 relative overflow-hidden">
        {/* Subtle accent */}
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-widest text-accent-300 uppercase block">
            Media Archive
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Photo Gallery &amp; Events
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            A photographic timeline of court appearances, legal advisory sessions, tech summits, and administrative engagements.
          </p>
        </div>
      </section>

      {/* Filter Options */}
      <section className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null); // Close lightbox if category changed
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/10'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-slate-200 border border-slate-200 aspect-square shadow-sm hover:shadow-premium-hover transition-all duration-300"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary-950/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6 text-white">
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accent-300">
                        <FiMaximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-accent-400">
                        {img.category}
                      </span>
                      <h4 className="font-serif font-bold text-sm tracking-wide leading-tight">
                        {img.title}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20 bg-slate-50 border border-slate-200 rounded-2xl">
              <FiImage className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 font-sans text-sm font-medium">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* GORGEOUS LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50"
              aria-label="Close Lightbox"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50"
              aria-label="Previous Image"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors z-50"
              aria-label="Next Image"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Inner Content Area */}
            <div 
              className="relative max-w-4xl w-full flex flex-col items-center justify-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={filteredImages[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].title}
                className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-white/10"
              />

              {/* Text Description Box */}
              <div className="text-center text-white space-y-1 bg-black/40 px-6 py-3 rounded-xl backdrop-blur-md border border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent-400 font-sans">
                  {filteredImages[lightboxIndex].category}
                </span>
                <p className="font-serif font-semibold text-base">
                  {filteredImages[lightboxIndex].title}
                </p>
                <p className="text-[11px] text-slate-400 font-sans">
                  Image {lightboxIndex + 1} of {filteredImages.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
