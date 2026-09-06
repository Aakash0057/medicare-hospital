import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center p-4 max-w-sm w-full bg-white border border-emerald-200 rounded-xl shadow-2xl transition-all transform translate-y-0 opacity-100 ring-1 ring-emerald-500/20">
      <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
        <CheckCircle className="w-6 h-6" />
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-semibold text-slate-800">Enquiry Received</p>
        <p className="text-xs text-slate-600 mt-0.5">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="ml-3 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
