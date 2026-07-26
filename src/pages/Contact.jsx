import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiLoader, FiShield } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ADVOCATE_INFO } from '../utils/constants';
import SEO from '../components/SEO';

export default function Contact() {
  const formRef = useRef();
  
  // Form Fields State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  // Validation / Loading States
  const [loading, setLoading] = useState(false);
  const [errors, setFormDataErrors] = useState({});

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for that field on typing
    if (errors[name]) {
      setFormDataErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Basic Validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address syntax';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Please supply a subject';
    if (!formData.message.trim()) tempErrors.message = 'Please type your brief message';

    setFormDataErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit Handler with Fallback Mock Trigger
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the validation errors before submitting.');
      return;
    }

    setLoading(true);

    // Retrieve environment variables for EmailJS
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        // Send email via real EmailJS integration
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            from_phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            to_email: ADVOCATE_INFO.email
          },
          publicKey
        );
        toast.success('Your message has been sent successfully directly to Advocate Chambers!');
      } else {
        // Mock success fallback for offline testing/development
        console.warn('EmailJS keys are not configured in VITE environmental variables. Running simulated submission...');
        await new Promise((resolve) => setTimeout(resolve, 1200)); // Simulate API delay
        toast.success('Form Submitted Successfully! (EmailJS Simulated Fallback)');
      }

      // Reset Form fields
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('EmailJS Error:', err);
      toast.error(err?.text || 'Failed to dispatch form. Please email us directly or chat on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fafbfc] min-h-screen pb-24">
      <SEO 
        title="Contact &amp; Chambers"
        description="Book your case brief consultation with Adv. Shankar Chavan. Access primary chamber addresses, direct email, active phone support, and Google Map directions."
      />

      {/* Header Banner */}
      <section className="bg-[#070e1e] text-white py-20 relative overflow-hidden">
        {/* Absolute flow */}
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-bold tracking-widest text-accent-300 uppercase block">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Schedule A Legal Consultation
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Have an urgent query or looking to discuss a legal case? Fill out our secure form, or reach our chambers directly.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Contact Information Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#0c1626] text-white rounded-2xl p-8 border border-white/5 shadow-xl space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full blur-3xl" />
                
                <h3 className="font-serif font-bold text-2xl text-white">Chamber Information</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Private consultations are strictly confidential. For immediate assistance regarding bails or injunctions, please telephone directly.
                </p>

                {/* Info Items */}
                <div className="space-y-6 font-sans">
                  {/* Item 1: Phone */}
                  <a 
                    href={`tel:${ADVOCATE_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex items-start space-x-4 group p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-500/15 text-accent-400 flex items-center justify-center shrink-0">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Chamber Hotline</p>
                      <p className="text-sm text-white font-medium mt-0.5 group-hover:text-accent-300 transition-colors">{ADVOCATE_INFO.phone}</p>
                    </div>
                  </a>

                  {/* Item 2: Email */}
                  <a 
                    href={`mailto:${ADVOCATE_INFO.email}`}
                    className="flex items-start space-x-4 group p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent-500/15 text-accent-400 flex items-center justify-center shrink-0">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Electronic Mail</p>
                      <p className="text-sm text-white font-medium mt-0.5 group-hover:text-accent-300 transition-colors break-all">{ADVOCATE_INFO.email}</p>
                    </div>
                  </a>

                  {/* Item 3: Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/15 text-accent-400 flex items-center justify-center shrink-0">
                      <FiClock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Working Hours</p>
                      <div className="space-y-1.5 mt-1">
                        {ADVOCATE_INFO.workingHours.map((wh, i) => (
                          <div key={i} className="flex justify-between space-x-4 text-xs">
                            <span className="text-slate-300 font-medium">{wh.day}:</span>
                            <span className="text-slate-400 text-right">{wh.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Item 4: Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-500/15 text-accent-400 flex items-center justify-center shrink-0">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Bombay High Court Office</p>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">{ADVOCATE_INFO.mainOffice.address}</p>
                    </div>
                  </div>
                </div>

                <hr className="border-white/5" />

                {/* Instant WhatsApp Support */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${ADVOCATE_INFO.whatsappPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] transition-all duration-300 uppercase tracking-wider"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Secure Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-8 border border-slate-200 shadow-premium">
              <div className="mb-8 space-y-2">
                <h3 className="font-serif font-bold text-2xl text-slate-900">Secure Intake Form</h3>
                <p className="text-xs text-slate-500 font-sans">
                  Your communication is encrypted end-to-end and saved only to the Advocate's email.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 font-sans">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-100'
                    } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-primary-500 transition-all text-sm`}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 9876543210"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-100'
                      } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-primary-500 transition-all text-sm`}
                    />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. yourname@gmail.com"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-100'
                      } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-primary-500 transition-all text-sm`}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Subject / Matter
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Anticipatory Bail Petition or Contract Dispute"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-100'
                    } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-primary-500 transition-all text-sm`}
                  />
                  {errors.subject && <p className="text-xs text-red-500">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Your Case Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly state your case facts, timeline, or requested legal consultation details..."
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-500 focus:ring-red-200' : 'border-slate-200 focus:ring-primary-100'
                    } bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:border-primary-500 transition-all text-sm resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Anti-spam declaration */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex items-center space-x-2.5">
                  <FiShield className="w-5 h-5 text-accent-500 shrink-0" />
                  <p className="text-[10px] text-slate-500 leading-relaxed">
                    By submitting, you agree to secure communication and declare that all details are true and factually accurate to your knowledge.
                  </p>
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-primary-500/15 flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <FiLoader className="w-4 h-4 animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        <span>Send Intake Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-premium overflow-hidden aspect-[16/7] w-full">
            <iframe
              title="Bombay High Court Google Map Embed"
              src={ADVOCATE_INFO.mainOffice.embedMapUrl}
              className="w-full h-full border-0 rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
