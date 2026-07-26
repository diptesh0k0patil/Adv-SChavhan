import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import DisclaimerModal from '../components/DisclaimerModal';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-800">

      <DisclaimerModal/>
      {/* Scroll Restorer */}
      <ScrollToTop />

      {/* React Hot Toast Global Handler */}
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'font-sans text-sm font-medium',
          duration: 4000,
          style: {
            background: '#11223b',
            color: '#fff',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content Area - Layout Outlet */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Sticky/Responsive Footer */}
      <Footer />
    </div>
  );
}
