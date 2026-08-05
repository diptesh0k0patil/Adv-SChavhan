import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiShield,
  FiHome,
  FiBriefcase,
  FiUsers,
  FiBookmark,
  FiHeart,
  FiCheck,
  FiAward,
} from 'react-icons/fi';
import {
  FaWhatsapp,
  FaQuoteLeft,
  FaHandshake,
} from 'react-icons/fa';

import {
  ADVOCATE_INFO,
  PRACTICE_AREAS,
  WHY_CHOOSE_US,
  TESTIMONIALS,
  GALLERY_IMAGES,
} from '../utils/constants';

import SEO from '../components/SEO';

// Dynamic Icon Mapper for Practice Areas
const getIcon = (iconName, className = 'w-6 h-6') => {
  switch (iconName) {
    case 'FiShield':
      return <FiShield className={className} />;

    case 'FiHome':
      return <FiHome className={className} />;

    case 'FiBriefcase':
      return <FiBriefcase className={className} />;

    case 'FiUsers':
      return <FiUsers className={className} />;

    case 'FiBookmark':
      return <FiBookmark className={className} />;

    case 'FiHeart':
      return <FiHeart className={className} />;

    default:
      return <FiShield className={className} />;
  }
};

export default function Home() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Home"
        description="Premium legal services and consultation before the High Court of Bombay. Advocate Shankar Chavan specializes in Criminal Defense, Civil Litigation, and Corporate Law with dedication and integrity."
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-[#070e1e] text-white pt-24 pb-20">
        {/* Apple-style glow accents */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
              >
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />

                <span className="text-xs font-semibold tracking-wider uppercase text-accent-300">
                  Advocate, High Court of Bombay
                </span>
              </motion.div>

              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight"
              >
                Upholding{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-200 via-accent-300 to-accent-500">
                  Justice
                </span>{' '}
                &amp; Securing Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-200 to-accent-400">
                  Rights
                </span>
              </motion.h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="text-slate-300 text-base sm:text-lg max-w-xl font-sans font-light leading-relaxed"
              >
                Advocate Shankar Chavan is a dedicated legal practitioner
                practicing before the High Court of Judicature at Bombay,
                including its Principal Bench at Mumbai and the Circuit Benches
                at Aurangabad, Nagpur, Goa and Kolhapur, as well as various
                District and Sessions Courts across Maharashtra.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 hover:from-accent-500 hover:to-accent-600 text-primary-950 font-semibold rounded-full shadow-lg shadow-accent-500/10 hover:shadow-accent-500/25 text-center flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Book Consultation</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${ADVOCATE_INFO.whatsappPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-semibold rounded-full text-center flex items-center justify-center space-x-2 transition-all duration-300"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: 'easeOut',
                }}
                className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl bg-gradient-to-b from-primary-800 to-primary-950 p-8 border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Scales Icon Watermark */}
                <div className="absolute -bottom-10 -right-10 text-white/5 transform group-hover:scale-105 group-hover:rotate-6 transition-all duration-700">
                  <svg
                    className="w-64 h-64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M12 2v20M17 5H7M4.5 10.5C4.5 7.5 7 5 7 5M19.5 10.5C19.5 7.5 17 5 17 5" />
                  </svg>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-400/10 border border-accent-400/20 flex items-center justify-center">
                    <FiAward className="w-6 h-6 text-accent-400" />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-white">
                    Rule of Law
                  </h3>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Justice is not achieved by power alone; it is achieved
                    through courage, integrity, and unwavering dedication to
                    truth.
                  </p>
                </div>

                <div className="glass-card-dark rounded-xl p-4 border border-white/5 space-y-2 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />

                    <span className="text-xs text-slate-300 font-sans">
                      Active Chamber Consultation
                    </span>
                  </div>

                  <p className="text-xs text-slate-400">
                    Bombay High Court Principal Bench, Fort, Mumbai
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent-100 to-accent-300 rounded-3xl blur-xl opacity-50 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/5] shadow-xl">
                <img
                  src="./s-profile.jpg"
                  alt={ADVOCATE_INFO.name}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                  <h4 className="font-serif font-bold text-lg">
                    {ADVOCATE_INFO.name}
                  </h4>

                  <p className="text-xs text-accent-300 font-sans tracking-wide uppercase mt-1">
                    High Court Advocate 
                  </p>
                </div>
              </div>
            </div>

            {/* Right Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-accent-500 uppercase block">
                Professional Bio
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Deep Commitment to Advocacy, Constitutional Truth, and Diligent
                Case Research
              </h2>

              <p className="text-slate-600 font-sans leading-relaxed text-base">
                I am an Advocate practicing before the{' '}
                <strong>
                  Bombay High Court Mumbai, Aurangabad, and Circuit Benches
                </strong>
                . With extensive training in Sociology, Business Management,
                and the Law, I bring a unique multidisciplinary perspective to
                every legal challenge.
              </p>

              <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
                Advocate Shankar Chavan is a dedicated legal practitioner
                practicing before the High Court of Judicature at Bombay,
                including its Principal Bench at Mumbai and the Circuit Benches
                at Aurangabad, Nagpur, and Kolhapur, as well as various District
                and Sessions Courts across Maharashtra. Committed to justice,
                integrity, and professional excellence, he provides
                comprehensive legal representation to individuals, businesses,
                and institutions.
              </p>

              <p className="text-slate-600 font-sans leading-relaxed text-sm">
                With a strong academic foundation and practical courtroom
                experience, Advocate Shankar Chavan has developed expertise in
                handling a wide range of legal matters. His areas of practice
                include Criminal Law, Civil Litigation, Constitutional Law,
                Family Law, Property Disputes, Commercial Matters, Bail
                Applications, Writ Petitions, Appeals, and Cheque Bounce Cases
                under the Negotiable Instruments Act. He approaches every
                matter with meticulous preparation, strategic legal analysis,
                and a results-oriented mindset.
              </p>

              {/* Focus List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-sm text-slate-700">
                  <FiCheck className="w-4 h-4 text-accent-500" />
                  <span>High Court Appellate Practice</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-slate-700">
                  <FiCheck className="w-4 h-4 text-accent-500" />
                  <span>Criminal Bail &amp; Defense Expert</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-slate-700">
                  <FiCheck className="w-4 h-4 text-accent-500" />
                  <span>Corporate Contracts &amp; HR Advisory</span>
                </div>

                <div className="flex items-center space-x-2 text-sm text-slate-700">
                  <FiCheck className="w-4 h-4 text-accent-500" />
                  <span>Tech &amp; Cyber Intellectual Property</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center space-x-6">
                <Link
                  to="/about"
                  className="inline-flex items-center space-x-2 font-semibold text-primary-500 hover:text-accent-600 transition-colors text-sm group"
                >
                  <span>Read Full Journey</span>

                  <FiArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="text-xs uppercase font-bold tracking-widest text-slate-400 hover:text-slate-800 transition-colors"
                >
                  View Chambers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRACTICE AREAS SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-[#f4f6f8] text-slate-800 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent-500 uppercase block">
              Core Practice Sectors
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Strategic, Interdisciplinary Legal Consultation
            </h2>

            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              We specialize in resolving high-stakes challenges by combining
              thorough statute analysis, persuasive argument drafting, and
              strict professional ethics.
            </p>
          </div>

          {/* Practice Area Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: '-100px',
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PRACTICE_AREAS.map((area) => (
              <motion.div
                key={area.id}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-premium hover:shadow-premium-hover hover:border-slate-300/80 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50/80 text-primary-500 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-primary-950 transition-all duration-300">
                    {getIcon(area.icon)}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-primary-500 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-sans leading-relaxed">
                    {area.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {area.features?.slice(0, 2).map((feature, index) => (
                    <span
                      key={`${area.id}-${index}`}
                      className="text-[10px] uppercase font-bold tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded"
                      dangerouslySetInnerHTML={{
                        __html: feature,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-full text-sm transition-colors shadow-md shadow-primary-500/10"
            >
              <span>Consult On Your Case Specifics</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-[#070e1e] text-white relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold tracking-widest text-accent-400 uppercase block">
                The Advantage
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
                Setting New Standards in Professional Legal Representation
              </h2>

              <p className="text-slate-300 font-sans text-sm leading-relaxed">
                By taking a meticulous, tech-enabled and highly analytical
                approach, we bridge the gap between traditional law processes
                and modern premium advisory.
              </p>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-accent-400/10 flex items-center justify-center shrink-0">
                  <FaHandshake className="w-5 h-5 text-accent-400" />
                </div>

                <div>
                  <h4 className="font-serif font-bold text-white text-base">
                    Uncompromising Ethics
                  </h4>

                  <p className="text-xs text-slate-400 font-sans mt-1 leading-relaxed">
                    We guard our clients&apos; confidentiality and reputation
                    above all else, maintaining absolute compliance and
                    fiduciary integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="bg-white/5 border border-white/5 hover:border-accent-400/20 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent-500/15 text-accent-300 flex items-center justify-center mb-4">
                    <FiCheck className="w-4 h-4 stroke-[3]" />
                  </div>

                  <h3 className="font-serif font-bold text-white text-lg mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-24 bg-white text-slate-800 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent-500 uppercase block">
              Client Appreciations
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Trusted By Enterprises &amp; Individuals Alike
            </h2>

            <p className="text-sm text-slate-500">
              Here is what some of our distinguished clients say about the
              quality, diligence, and professionalism of our legal
              consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={`${testimonial.author}-${index}`}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative shadow-premium flex flex-col justify-between"
              >
                <div className="absolute top-6 right-6 text-slate-200/80">
                  <FaQuoteLeft className="w-10 h-10" />
                </div>

                <p className="text-slate-600 font-sans italic text-sm leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center space-x-3 border-t border-slate-200/60 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 font-serif font-bold text-sm">
                    {testimonial.author?.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-slate-900 font-semibold font-serif text-sm">
                      {testimonial.author}
                    </h4>

                    <p className="text-xs text-slate-400 font-sans mt-0.5">
                      {testimonial.role} &bull; {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GALLERY PREVIEW */}
      <section className="py-24 bg-gradient-to-b from-[#fafbfc] to-slate-50 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-bold tracking-widest text-accent-500 uppercase block">
                Visual Gallery
              </span>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
                Glimpses of Advocacy, Chambers &amp; Engagements
              </h2>
            </div>

            <Link
              to="/gallery"
              className="mt-4 md:mt-0 px-6 py-3 border border-slate-300 hover:border-slate-800 text-slate-700 hover:text-slate-900 text-sm font-semibold rounded-full flex items-center space-x-2 transition-all"
            >
              <span>View Full Gallery</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.slice(0, 4).map((image) => (
              <div
                key={image.id}
                className="group relative rounded-xl overflow-hidden shadow-md aspect-video sm:aspect-square bg-slate-200 border border-slate-200"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent-300">
                    {image.category}
                  </span>

                  <h4 className="text-xs font-serif font-semibold mt-1">
                    {image.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-950 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ffffff05_0%,transparent_70%)]" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold tracking-widest text-accent-300 uppercase block">
            Schedule A Meeting
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
            Consult Directly with a High Court Advocate
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-sans">
            Need urgent guidance on anticipatory bail, a pending property suit,
            startup compliance advisory, or high-stake civil litigations?
            Secure professional representational advice today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-accent-400 to-accent-500 text-primary-950 font-bold rounded-full shadow-lg shadow-accent-500/10 hover:shadow-accent-500/25 transition-all text-sm w-full sm:w-auto"
            >
              Consult Online
            </Link>

            <a
              href={`tel:${ADVOCATE_INFO.phone.replace(/\s+/g, '')}`}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-full transition-all text-sm w-full sm:w-auto"
            >
              Call: {ADVOCATE_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
