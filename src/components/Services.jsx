import React, { useState } from 'react';
import { 
  UserCheck, 
  FlaskConical, 
  Pill, 
  ReceiptText, 
  CalendarCheck, 
  ArrowRight,
  Check,
  X
} from 'lucide-react';

const services = [
  {
    id: 'registration',
    name: 'Patient Registration',
    icon: UserCheck,
    description: 'Seamless onboarding with digital health IDs and unified patient records.',
    badge: 'Digital Desk',
    details: [
      'Instant ABDM digital health ID generation',
      'Unified lifetime electronic medical records (EMR)',
      'Self-service check-in kiosks across all floors',
      'Confidential and secure HIPAA-compliant storage'
    ]
  },
  {
    id: 'laboratory',
    name: 'Laboratory',
    icon: FlaskConical,
    description: 'State-of-the-art diagnostics with same-day report delivery across 200+ tests.',
    badge: 'NABL Accredited',
    details: [
      'Automated biochemistry, pathology & hematology',
      'Digital reports delivered via SMS & WhatsApp in 4 hours',
      'Home sample collection across Chennai',
      'Advanced molecular and genetic screening'
    ]
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: Pill,
    description: '24/7 in-house pharmacy with prescription auto-fill and home delivery options.',
    badge: '24/7 Open',
    details: [
      '100% genuine temperature-controlled medicine stocks',
      'Digital prescription auto-sync from doctors',
      'Same-day home medicine delivery within city limits',
      'Dedicated counseling for dosage and therapy'
    ]
  },
  {
    id: 'billing',
    name: 'Billing',
    icon: ReceiptText,
    description: 'Transparent, itemized billing with insurance claim support and digital payment options.',
    badge: 'Cashless Support',
    details: [
      'Direct cashless desk for 45+ health insurance providers',
      'Completely itemized transparent digital statements',
      'Multiple payment methods: UPI, cards, net banking',
      'Dedicated insurance liaison team for fast pre-approvals'
    ]
  },
  {
    id: 'appointments',
    name: 'Appointment Management',
    icon: CalendarCheck,
    description: 'Book, reschedule, or cancel appointments online — zero waiting at the front desk.',
    badge: 'Zero Waiting',
    details: [
      'Real-time specialist calendar and token visibility',
      'Instant SMS & email confirmation alerts',
      'Hassle-free 1-click rescheduling and cancellations',
      'Tele-consultation video links for remote follow-ups'
    ]
  }
];

export default function Services({ onOpenAppointmentModal }) {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-medicare-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-medicare-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-teal-50 border border-teal-200/60 px-3.5 py-1 rounded-full text-medicare-secondary text-xs font-bold uppercase tracking-wider">
            <span>Specialized Healthcare Wings</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medicare-primary tracking-tight">
            Our Core Services
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Comprehensive care for every stage of life, powered by cutting-edge medical infrastructure 
            and dedicated clinical professionals.
          </p>
        </div>

        {/* 5 Service Cards Grid: 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Center the 4th & 5th items aesthetically on large screens if desired
            const isLastTwoOnDesktop = index >= 3;
            
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl border bg-white/80 backdrop-blur-md border-slate-200/80 hover:border-medicare-secondary hover:ring-2 hover:ring-medicare-secondary/20 shadow-sm flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-50 to-teal-50 border border-teal-100/80 text-medicare-secondary flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-medicare-secondary group-hover:to-teal-500 group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-medicare-secondary transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-medicare-primary group-hover:text-medicare-secondary transition-colors mb-3">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center space-x-2 text-sm font-semibold text-medicare-primary group-hover:text-medicare-secondary transition-colors focus:outline-none"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenAppointmentModal()}
                    className="text-xs font-semibold text-medicare-orange hover:text-medicare-orange-hover hover:underline transition-all"
                  >
                    Quick Enquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Detail Modal (Informational) */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedService(null)} />
          <div className="relative z-10 w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden border border-slate-100">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-medicare-secondary flex items-center justify-center">
                  <selectedService.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-medicare-primary">
                    {selectedService.name}
                  </h4>
                  <span className="text-xs font-medium text-medicare-secondary">
                    {selectedService.badge}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Capabilities & Patient Benefits
            </h5>

            <ul className="space-y-3 mb-8">
              {selectedService.details.map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenAppointmentModal();
                }}
                className="flex-1 bg-medicare-orange hover:bg-medicare-orange-hover text-white py-2.5 rounded-xl font-semibold text-sm shadow-md"
              >
                Book with this Service
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-semibold text-sm"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
