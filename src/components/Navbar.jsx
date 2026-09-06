import React, { useState, useEffect } from 'react';
import { Activity, Phone, Menu, X, Calendar, Plus } from 'lucide-react';

export default function Navbar({ onOpenAppointmentModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-medicare-primary to-medicare-secondary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Plus className="w-6 h-6 stroke-[3]" />
              <Activity className="w-4 h-4 text-white absolute -bottom-1 -right-1 bg-medicare-orange rounded-full p-0.5 border-2 border-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-medicare-primary group-hover:text-medicare-secondary transition-colors">
                Medi<span className="text-medicare-secondary">Care</span>
              </span>
              <span className="block text-[10px] font-semibold tracking-wider text-slate-500 uppercase -mt-1">
                Hospital Chennai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-medicare-secondary transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-medicare-secondary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side CTA & Helpline */}
          <div className="hidden sm:flex items-center space-x-4 lg:space-x-5">
            {/* Emergency Helpline */}
            <a
              href="tel:1800-MEDICARE"
              className="flex items-center space-x-2 text-medicare-emergency bg-red-50 hover:bg-red-100/80 px-3.5 py-1.5 rounded-full border border-red-200 transition-colors shadow-sm"
              title="24/7 Emergency Helpline"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
              <Phone className="w-4 h-4 text-red-600" />
              <div className="text-left">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-red-700 leading-none">
                  Emergency 24/7
                </span>
                <span className="font-extrabold text-xs lg:text-sm tracking-tight text-red-600">
                  +91-1800-MEDICARE
                </span>
              </div>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenAppointmentModal()}
              className="flex items-center space-x-2 bg-medicare-orange hover:bg-medicare-orange-hover text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="bg-medicare-orange text-white p-2 rounded-lg text-xs font-semibold"
              title="Book"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-medicare-primary rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 top-[60px] z-30 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white px-6 pt-6 pb-8 shadow-xl border-t border-slate-100 flex flex-col space-y-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-slate-700 hover:text-medicare-secondary hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-200 flex flex-col space-y-3">
              {/* Emergency Helpline for Mobile */}
              <a
                href="tel:1800-MEDICARE"
                className="flex items-center justify-center space-x-2 bg-red-50 text-red-600 border border-red-200 p-3 rounded-xl font-bold text-sm"
              >
                <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                <Phone className="w-4 h-4" />
                <span>Emergency: +91-1800-MEDICARE</span>
              </a>

              {/* Book Appointment CTA for Mobile */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-medicare-orange text-white p-3 rounded-xl font-bold text-sm shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
