import React, { useEffect } from 'react';
import { Calendar, PhoneCall, X, ShieldCheck, Clock } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, selectedDoctor = null }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-900/5 transition-all transform scale-100"
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-medicare-primary to-medicare-secondary px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
              <Calendar className="w-5 h-5 text-medicare-orange" />
            </div>
            <h3 id="modal-title" className="text-lg font-semibold tracking-tight">
              Appointment Desk
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200">
            <Clock className="w-8 h-8 text-amber-600 animate-pulse" />
          </div>

          <h4 className="text-xl font-bold text-medicare-primary mb-2">
            Online Booking Coming Soon!
          </h4>

          {selectedDoctor && (
            <p className="text-sm font-medium text-medicare-secondary mb-3">
              Requesting consultation with: <span className="font-semibold text-slate-800">{selectedDoctor}</span>
            </p>
          )}

          <p className="text-slate-600 text-sm mb-6 leading-relaxed">
            Our online self-service booking portal is currently undergoing scheduled upgrades to serve you better. 
            For immediate appointments and specialist scheduling, please call our 24/7 dedicated line:
          </p>

          {/* Contact Box */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 shadow-inner">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Direct Phone Booking
            </div>
            <a
              href="tel:+914428190000"
              className="inline-flex items-center space-x-2 text-xl font-extrabold text-medicare-primary hover:text-medicare-secondary transition-colors"
            >
              <PhoneCall className="w-5 h-5 text-medicare-orange" />
              <span>+91-44-2819-0000</span>
            </a>
            <div className="text-xs text-slate-500 mt-1">
              Mon–Sat: 8:00 AM – 8:00 PM | Emergency: 24/7
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Instant token confirmation & priority specialist slotting</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href="tel:+914428190000"
              className="flex-1 inline-flex justify-center items-center px-4 py-2.5 rounded-xl bg-medicare-orange text-white font-medium hover:bg-medicare-orange-hover shadow-md hover:shadow-lg transition-all"
            >
              Call Desk Now
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
