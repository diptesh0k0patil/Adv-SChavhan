import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiActivity, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { ADVOCATE_INFO } from '../utils/constants';
import SEO from '../components/SEO';



export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="bg-[#fafbfc] min-h-screen">
      <SEO 
        title="About Bio"
        description="Learn about the professional journey, education, and legal experience of Adv. Shankar Chavan, practicing Advocate at the Bombay High Court and former Special Public Prosecutor."
      />

      {/* Header Banner */}
      <section className="bg-[#070e1e] text-white py-20 relative overflow-hidden">
        {/* Absolute glow */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-widest text-accent-300 uppercase block"
          >
            About the Advocate
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-serif font-bold text-white"
          >
            Professional Profile &amp; Experience
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed"
          >
            Bridging legal integrity, state prosecution experience, and innovative technology solutions to deliver premium advocacy.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Bio Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-bold tracking-widest text-accent-500 uppercase block">
                The Legal Mind
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 leading-tight">
                Advocate Shankar Chavan
              </h2>
              <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
                Advocate Shankar Chavan is a dedicated legal practitioner practicing before the High Court of Judicature at Bombay, including its Principal Bench at Mumbai and the Circuit Benches at Aurangabad, Nagpur, and Kolhapur, as well as various District and Sessions Courts across Maharashtra. Committed to justice, integrity, and professional excellence, he provides comprehensive legal representation to individuals, businesses, and institutions.
              </p>
              <p className="text-slate-600 font-sans leading-relaxed text-sm">
                With a strong academic foundation and practical courtroom experience, Advocate Shankar Chavan has developed expertise in handling a wide range of legal matters. His areas of practice include Criminal Law, Civil Litigation, Constitutional Law, Family Law, Property Disputes, Commercial Matters, Bail Applications, Writ Petitions, Appeals, and Cheque Bounce Cases under the Negotiable Instruments Act. He approaches every matter with meticulous preparation, strategic legal analysis, and a results-oriented mindset.
              </p>
              <p className="text-slate-600 font-sans leading-relaxed text-sm">
                Known for his ethical practice and client-centric approach, he believes that every case deserves personalized attention and transparent communication. His advocacy is built on thorough legal research, effective courtroom representation, and practical legal solutions designed to protect the rights and interests of his clients while maintaining the highest standards of professional conduct.
              </p>
               <p className="text-slate-600 font-sans leading-relaxed text-sm">
                Beyond litigation, Advocate Shankar Chavan is committed to promoting legal awareness and ensuring access to quality legal services. His mission is to deliver reliable, confidential, and effective legal counsel while upholding the rule of law and fostering trust through professionalism, dedication, and unwavering commitment to justice.
              </p>
            </motion.div>

            {/* Photo & Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-8"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg aspect-video sm:aspect-square bg-slate-100">
                <img 
                  src= "./s-profile.jpg"
                  alt="Law Chambers"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quotation card */}
              <div className="bg-primary-900 text-white rounded-2xl p-6 border border-white/5 relative">
                <span className="text-accent-300 font-serif text-5xl absolute top-4 left-4 opacity-15">“</span>
                <p className="font-serif italic text-slate-200 text-sm relative z-10 leading-relaxed pl-4">
                  "Law is not merely a profession; it is an absolute commitment to justice, constitutional values, and safeguarding client rights under all challenges."
                </p>
                <p className="text-xs text-accent-400 font-semibold text-right mt-4">— Adv. Shankar Chavan</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Mission */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-premium space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 text-accent-600 flex items-center justify-center">
                <FiAward className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {ADVOCATE_INFO.mission}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-premium space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-600 flex items-center justify-center">
                <FiBookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                {ADVOCATE_INFO.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Educational & Professional Journey */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-widest text-accent-500 uppercase block">
              Qualifications &amp; Milestones
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
              Education &amp; Career Journey
            </h2>
            <p className="text-sm text-slate-500">
              A comprehensive view of the scholastic academic credentials and roles held by the Advocate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center space-x-2">
                <FaGraduationCap className="w-5 h-5 text-accent-500" />
                <span>Scholastic Background</span>
              </h3>

              <div className="space-y-6 border-l-2 border-slate-200 pl-6 ml-2">
                {ADVOCATE_INFO.education.map((edu, idx) => (
                  <div key={idx} className="relative space-y-2">
                    {/* Circle Bullet */}
                    <span className="absolute -left-[31px] top-1.5 w-[14px] h-[14px] rounded-full bg-white border-2 border-accent-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                    </span>
                    <span className="text-xs uppercase font-bold text-accent-500 tracking-wider">
                      {edu.period}
                    </span>
                    <h4 className="font-serif font-bold text-slate-900 text-lg">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-500 font-sans">
                      {edu.institution}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center space-x-2">
                <FiActivity className="w-5 h-5 text-primary-500" />
                <span>Professional Timeline</span>
              </h3>

              <div className="space-y-6 border-l-2 border-slate-200 pl-6 ml-2">
                {ADVOCATE_INFO.experience.map((exp, idx) => (
                  <div key={idx} className="relative space-y-2">
                    {/* Circle Bullet */}
                    <span className="absolute -left-[31px] top-1.5 w-[14px] h-[14px] rounded-full bg-white border-2 border-primary-500 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    </span>
                    <span className="text-xs uppercase font-bold text-primary-500 tracking-wider">
                      {exp.period}
                    </span>
                    <h4 className="font-serif font-bold text-slate-900 text-lg">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-semibold text-slate-700 font-sans">
                      {exp.organization}
                    </p>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office details */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold tracking-widest text-accent-300 uppercase block">
                Office Locations
              </span>
              <h2 className="text-3xl font-serif font-bold leading-tight">
                Chamber Consultations In Mumbai &amp; Pune
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Our main offices are located near the highest state courts, allowing us to maintain robust case preparations and offer close, high-level client consultations.
              </p>

              {/* Office 1 */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-white text-lg flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4 text-accent-400" />
                  <span>{ADVOCATE_INFO.mainOffice.title}</span>
                </h4>
                <p className="text-xs text-slate-400 font-sans pl-6">{ADVOCATE_INFO.mainOffice.address}</p>
              </div>

              {/* Office 2 */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-white text-lg flex items-center space-x-2">
                  <FiMapPin className="w-4 h-4 text-accent-400" />
                  <span>{ADVOCATE_INFO.puneOffice.title}</span>
                </h4>
                <p className="text-xs text-slate-400 font-sans pl-6">{ADVOCATE_INFO.puneOffice.address}</p>
              </div>
            </div>

            {/* Contact quick preview */}
            <div className="lg:col-span-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
                <h3 className="font-serif font-bold text-white text-xl">Quick Consultation Setup</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  We look forward to reviewing your case briefs. Feel free to ring our chamber or schedule a dedicated virtual appointment.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${ADVOCATE_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/5 p-4 rounded-xl transition-all"
                  >
                    <FiPhone className="w-5 h-5 text-accent-400" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Call Directly</p>
                      <p className="text-sm font-semibold text-white">{ADVOCATE_INFO.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${ADVOCATE_INFO.email}`}
                    className="flex items-center space-x-3 bg-white/5 hover:bg-white/10 border border-white/5 p-4 rounded-xl transition-all"
                  >
                    <FiMail className="w-5 h-5 text-accent-400" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Us</p>
                      <p className="text-sm font-semibold text-white break-all">{ADVOCATE_INFO.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
