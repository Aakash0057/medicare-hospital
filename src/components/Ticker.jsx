import React from 'react';
import { Bell } from 'lucide-react';

const announcements = [
  {
    icon: '🔴',
    text: 'COVID Vaccination Drive — Register Now',
  },
  {
    icon: '🟢',
    text: 'New MRI Wing Now Open',
  },
  {
    icon: '🔵',
    text: 'Blood Donation Camp — 15th July',
  },
  {
    icon: '🟡',
    text: 'Cardiology OPD: Mon/Wed/Fri 9AM–1PM',
  },
  {
    icon: '🔴',
    text: 'Free Pediatric Health Checkup this Saturday',
  },
  {
    icon: '🟢',
    text: '24/7 Dialysis Unit Upgraded with High-Flux Technology',
  },
];

export default function Ticker() {
  return (
    <div className="relative bg-medicare-primary text-white border-y border-sky-900/50 overflow-hidden shadow-inner select-none">
      <div className="max-w-7xl mx-auto flex items-center">
        
        {/* Fixed Announcement Tag Label */}
        <div className="relative z-20 flex items-center space-x-2 bg-medicare-primary-dark px-4 sm:px-6 py-3 font-bold text-xs uppercase tracking-wider text-medicare-orange border-r border-sky-900 shadow-md shrink-0">
          <Bell className="w-4 h-4 text-medicare-orange animate-bounce" />
          <span className="hidden sm:inline">Updates</span>
        </div>

        {/* Continuous Marquee Ticker Track */}
        <div className="flex-1 overflow-hidden relative py-3">
          <div className="animate-ticker-continuous flex items-center space-x-10 text-xs sm:text-sm font-medium">
            {/* Duplicated list twice for seamless infinite continuous scroll */}
            {[...announcements, ...announcements].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 shrink-0 group cursor-default">
                <span className="text-base">{item.icon}</span>
                <span className="text-slate-200 group-hover:text-white transition-colors">
                  {item.text}
                </span>
                <span className="text-slate-500 ml-6">|</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
