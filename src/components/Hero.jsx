import React from 'react';
import { Calendar, ArrowRight, Award, Users, HeartPulse, Clock, Sparkles } from 'lucide-react';

export default function Hero({ onOpenAppointmentModal }) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-gradient-to-b from-[#f0f9ff] via-[#f8fafc] to-white"
    >
      {/* Background Soft Pulse & Glow Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-medicare-secondary/10 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-medicare-primary/10 rounded-full blur-3xl pointer-events-none animate-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-medicare-accent border border-sky-200 px-4 py-1.5 rounded-full text-medicare-primary text-xs sm:text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 text-medicare-secondary" />
              <span>Compassionate Care, Cutting-Edge Technology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-medicare-primary tracking-tight leading-[1.15]">
              Your Health Is <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-medicare-primary via-medicare-secondary to-teal-500">
                Our Priority
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Serving Chennai with world-class medical care since 1998. Experience seamless hospital 
              consultations, advanced diagnostic laboratories, and compassionate clinical expertise under one roof.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-medicare-orange hover:bg-medicare-orange-hover text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-slate-50 text-medicare-primary border border-slate-200 hover:border-medicare-secondary px-7 py-3.5 rounded-xl font-semibold text-base shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-medicare-secondary group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Micro proof points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Zero Front-Desk Waiting</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>NABH & JCI Certified</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Cashless Insurance Tie-ups</span>
              </div>
            </div>
          </div>

          {/* Right Column: Medical Illustration / Composition with Floating Stat Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Center Gradient Orb Container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl bg-gradient-to-tr from-medicare-primary via-medicare-secondary to-teal-300 p-1 shadow-2xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
              
              {/* Modern Clinical Vector Graphics */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white p-8 text-center">
                <div className="w-24 h-24 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center mb-4 shadow-inner">
                  <HeartPulse className="w-12 h-12 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                  MediCare Center
                </h3>
                <p className="text-xs text-sky-100 max-w-[200px] leading-relaxed">
                  25 Years of Healing & Healthcare Innovation in Chennai
                </p>
                <div className="mt-4 inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-white/20 text-[11px] font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1" />
                  <span>24/7 Trauma Care Open</span>
                </div>
              </div>
            </div>

            {/* Floating Stat Badge 1: Top-Left */}
            <div className="absolute -top-4 -left-4 sm:top-2 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-medicare-primary">25+ Years</div>
                <div className="text-[11px] text-slate-500 font-medium">Of Excellence</div>
              </div>
            </div>

            {/* Floating Stat Badge 2: Top-Right */}
            <div className="absolute -top-4 -right-4 sm:top-6 sm:-right-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-float-delayed">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-medicare-secondary flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-medicare-primary">500+ Doctors</div>
                <div className="text-[11px] text-slate-500 font-medium">Top Specialists</div>
              </div>
            </div>

            {/* Floating Stat Badge 3: Bottom-Left */}
            <div className="absolute -bottom-6 -left-4 sm:bottom-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-float-delayed">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-medicare-primary">1M+ Patients</div>
                <div className="text-[11px] text-slate-500 font-medium">Served with Trust</div>
              </div>
            </div>

            {/* Floating Stat Badge 4: Bottom-Right */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-2 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-medicare-primary">24/7 Emergency</div>
                <div className="text-[11px] text-slate-500 font-medium">Critical Care Ready</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
