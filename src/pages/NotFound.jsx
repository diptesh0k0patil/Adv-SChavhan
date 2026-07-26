import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiAlertCircle } from 'react-icons/fi';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#fafbfc] px-4 font-sans text-center">
      <SEO 
        title="404 - Page Not Found"
        description="The requested page could not be located on the Advocate Shankar Chavan law firm web application."
      />

      <div className="max-w-md w-full bg-white border border-slate-200 shadow-premium p-10 rounded-2xl space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-100 text-red-500 flex items-center justify-center mx-auto shadow-sm">
          <FiAlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-serif font-bold text-slate-900 leading-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            The requested judicial web address or resource is not available or has been moved. Please return to our main chambers.
          </p>
        </div>

        <div className="pt-2">
          <Link
            to="/"
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm py-3.5 px-6 rounded-xl shadow-md shadow-primary-500/10 flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <FiHome className="w-4 h-4" />
            <span>Return to Home Chambers</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
