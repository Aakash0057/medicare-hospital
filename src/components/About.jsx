import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Building, HeartPulse, Stethoscope, Users } from 'lucide-react';

export default function About() {
  const accreditations = [
    {
      name: 'NABH Accredited',
      desc: 'National Board for Hospitals & Healthcare Providers',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      name: 'ISO 9001:2015',
      desc: 'Certified Quality Management & Patient Safety',
      icon: Award,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      name: 'JCI Standards',
      desc: 'Joint Commission International Quality Protocols',
      icon: CheckCircle2,
      color: 'text-teal-600 bg-teal-50 border-teal-200',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hospital Building Visual Placeholder */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-medicare-secondary/20 to-sky-400/20 rounded-3xl blur-2xl transform -rotate-2" />
              
              {/* Main Card Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-gradient-to-br from-slate-900 via-medicare-primary to-slate-800 text-white p-8">
                {/* Visual architectural graphic */}
                <div className="relative h-72 sm:h-80 w-full rounded-2xl bg-gradient-to-b from-teal-900/60 via-slate-900/80 to-slate-950 p-6 flex flex-col justify-between border border-white/10 overflow-hidden">
                  
                  {/* Subtle Grid backdrop */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d948815_1px,transparent_1px),linear-gradient(to_bottom,#0d948815_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Header overlay */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                      <Building className="w-4 h-4 text-teal-300" />
                      <span className="text-xs font-semibold tracking-wide text-slate-100">
                        Main Campus • Anna Salai
                      </span>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Est. 1998
                    </span>
                  </div>

                  {/* Center Architectural Stylized Building Illustration */}
                  <div className="relative z-10 my-auto text-center">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-medicare-secondary to-teal-400 flex items-center justify-center shadow-lg shadow-teal-500/30">
                      <Building className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      MediCare Super-Speciality Hospital
                    </h4>
                    <p className="text-xs text-sky-200 mt-1">
                      750 Beds • 18 Modular Operation Theatres • Level 1 Trauma Center
                    </p>
                  </div>

                  {/* Bottom Stats Quick Bar */}
                  <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center text-xs">
                    <div>
                      <div className="font-bold text-teal-300">500+</div>
                      <div className="text-[10px] text-slate-300">Consultants</div>
                    </div>
                    <div>
                      <div className="font-bold text-teal-300">2,000+</div>
                      <div className="text-[10px] text-slate-300">Support Staff</div>
                    </div>
                    <div>
                      <div className="font-bold text-teal-300">24/7</div>
                      <div className="text-[10px] text-slate-300">Trauma & ICU</div>
                    </div>
                  </div>

                </div>

                {/* Micro highlights under image */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-3 border border-white/5">
                    <HeartPulse className="w-5 h-5 text-medicare-orange shrink-0" />
                    <span className="text-xs text-slate-200">Patient-First Philosophy</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 rounded-xl p-3 border border-white/5">
                    <Stethoscope className="w-5 h-5 text-teal-300 shrink-0" />
                    <span className="text-xs text-slate-200">Digitally Unified Records</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: About Content & Badges */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full text-medicare-primary text-xs font-bold uppercase tracking-wider">
              <span>Our Heritage & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medicare-primary tracking-tight leading-[1.15]">
              About MediCare Hospital
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              MediCare Hospital has been a cornerstone of healthcare in Chennai for over 25 years. 
              Founded in 1998, we operate a fully integrated hospital management system covering patient 
              registration, laboratory diagnostics, pharmacy, and billing — all designed to deliver 
              seamless care.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our team of 500+ specialists and 2,000 support staff are committed to one goal: making 
              world-class healthcare accessible to every family. Combining compassionate care with the 
              latest clinical innovations, we ensure our patients feel supported at every step of their 
              healing journey.
            </p>

            {/* Badges Section */}
            <div className="pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                National & International Accreditations
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {accreditations.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all hover:shadow-md ${badge.color}`}
                    >
                      <div className="flex items-center space-x-2 mb-1.5">
                        <Icon className="w-5 h-5 shrink-0" />
                        <span className="font-bold text-sm tracking-tight text-slate-900">
                          {badge.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-600 leading-tight">
                        {badge.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
