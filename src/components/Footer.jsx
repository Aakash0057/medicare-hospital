import React from 'react';
import { 
  Plus, 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ArrowUp,
  ShieldAlert
} from 'lucide-react';

export default function Footer({ onOpenAppointmentModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-medicare-navy text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Tagline (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-teal-400 flex items-center justify-center text-slate-900 shadow-md">
                <Plus className="w-6 h-6 stroke-[3]" />
                <Activity className="w-4 h-4 text-white absolute -bottom-1 -right-1 bg-medicare-orange rounded-full p-0.5 border-2 border-slate-900" />
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white">
                  Medi<span className="text-teal-400">Care</span>
                </span>
                <span className="block text-[10px] font-semibold tracking-wider text-slate-400 uppercase -mt-1">
                  Hospital Chennai
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 italic">
              "Compassionate Care, Cutting-Edge Technology"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to clinical excellence, empathetic patient care, and 
              ethical medical practices since 1998 in Chennai, Tamil Nadu.
            </p>

            {/* Social Icons (non-functional as specified) */}
            <div className="pt-2 flex items-center space-x-3">
              {[
                { name: 'Facebook', icon: Facebook },
                { name: 'Instagram', icon: Instagram },
                { name: 'LinkedIn', icon: Linkedin },
                { name: 'Twitter', icon: Twitter },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    aria-label={item.name}
                    className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-700 hover:border-teal-500/50 transition-all cursor-pointer"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Doctors', href: '#doctors' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Hospital Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                'Laboratory',
                'Pharmacy',
                'Billing',
                'Appointment',
                'Registration',
              ].map((serviceName) => (
                <li key={serviceName}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-teal-300 transition-colors"
                  >
                    {serviceName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Mini-Block (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Contact Desk
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>No. 42, Anna Salai, Chennai, Tamil Nadu — 600002</span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+914428190000" className="hover:text-white transition-colors">
                  +91-44-2819-0000
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:contact@medicare-hospital.in" className="hover:text-white transition-colors">
                  contact@medicare-hospital.in
                </a>
              </div>

              {/* Emergency Highlight */}
              <div className="pt-2">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center space-x-2 text-red-300">
                  <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-[11px] font-semibold">
                    Emergency: 1800-MEDICARE (24/7)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 MediCare Hospital. All Rights Reserved.</p>

          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-teal-300 transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#home" className="hover:text-teal-300 transition-colors">
              Terms of Service
            </a>
            <span>|</span>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
