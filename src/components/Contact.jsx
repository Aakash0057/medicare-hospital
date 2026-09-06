import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Ambulance, 
  Clock, 
  Mail, 
  Send, 
  Building2, 
  Navigation,
  CheckCircle2
} from 'lucide-react';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    department: 'Cardiology',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const departments = [
    'Cardiology',
    'Neurology',
    'Oncology',
    'Orthopedics',
    'General Medicine',
    'Laboratory',
    'Pharmacy',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean immediate UX response with toast feedback
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast("Thank you! We'll contact you shortly.");
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        department: 'Cardiology',
        message: '',
      });
    }, 400);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full text-medicare-primary text-xs font-bold uppercase tracking-wider">
            <span>24/7 Assistance & Enquiries</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medicare-primary tracking-tight">
            Contact MediCare
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about our facilities, OPD schedules, or diagnostic reports? 
            Reach out directly or send us an enquiry.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Contact Information & Styled Map Placeholder */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-medicare-primary mb-6 flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-medicare-secondary" />
                <span>Hospital Campus & Helpdesk</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Address */}
                <div className="sm:col-span-2 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-medicare-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Hospital Address
                    </span>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      No. 42, Anna Salai, Chennai, Tamil Nadu — 600002
                    </p>
                    <span className="text-xs text-slate-500">Near Thousand Lights Metro Station</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Main Desk Phone
                    </span>
                    <a href="tel:+914428190000" className="text-sm font-bold text-medicare-primary hover:text-medicare-secondary mt-0.5 block">
                      +91-44-2819-0000
                    </a>
                    <span className="text-xs text-slate-500">Boardline & Appointments</span>
                  </div>
                </div>

                {/* Emergency */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-100/80 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Ambulance className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-red-600 font-bold">
                      Emergency (Toll-Free)
                    </span>
                    <a href="tel:1800-MEDICARE" className="text-sm font-extrabold text-red-600 hover:text-red-700 mt-0.5 block">
                      1800-MEDICARE
                    </a>
                    <span className="text-xs text-slate-500">Free Ambulance Dispatch</span>
                  </div>
                </div>

                {/* OPD Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      OPD Hours
                    </span>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      Mon–Sat: 8:00 AM – 8:00 PM
                    </p>
                    <span className="text-xs text-slate-500">Specialist Consultations</span>
                  </div>
                </div>

                {/* Emergency Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Emergency & Trauma
                    </span>
                    <p className="text-sm font-bold text-emerald-700 mt-0.5">
                      24/7, All Days
                    </p>
                    <span className="text-xs text-slate-500">Round the clock admissions</span>
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-2 flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-100/80 text-purple-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Official Email
                    </span>
                    <a href="mailto:contact@medicare-hospital.in" className="text-sm font-semibold text-medicare-primary hover:text-medicare-secondary mt-0.5 block">
                      contact@medicare-hospital.in
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* STYLED MAP PLACEHOLDER (NOT a real iframe embed) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-teal-600/30 bg-gradient-to-br from-medicare-secondary via-teal-700 to-medicare-primary p-8 text-white min-h-[190px] flex flex-col justify-between">
              {/* Stylized background lines mimicking road maps */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1.5px,transparent_1.5px)] [background-size:20px_20px]" />
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -translate-y-4 rotate-6" />
              <div className="absolute top-0 bottom-0 left-1/3 w-1 bg-white/20 -rotate-12" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Campus Location</span>
                </span>
                <span className="text-xs font-medium text-teal-200">Chennai Central Zone</span>
              </div>

              <div className="relative z-10 my-4 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-white text-medicare-secondary flex items-center justify-center shadow-xl mb-2 animate-bounce">
                  <MapPin className="w-6 h-6 fill-medicare-secondary text-white" />
                </div>
                <h4 className="text-lg font-bold text-white tracking-wide">
                  📍 MediCare Hospital, Anna Salai, Chennai
                </h4>
                <p className="text-xs text-teal-100 mt-1">
                  Valet parking & 24/7 dedicated ambulance bay available
                </p>
              </div>

              <div className="relative z-10 text-center">
                <span className="text-[11px] text-teal-200/90 font-medium">
                  Main Entry Gate 1 & Emergency Gate 2 on Anna Salai Main Road
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative">
              
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-medicare-primary">
                  Send Us an Enquiry
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Please fill out the form below and our patient relations desk will assist you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-medicare-secondary focus:border-medicare-secondary text-sm text-slate-900 transition-all placeholder:text-slate-400 outline-none"
                  />
                </div>

                {/* Phone & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-medicare-secondary focus:border-medicare-secondary text-sm text-slate-900 transition-all placeholder:text-slate-400 outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ramesh@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-medicare-secondary focus:border-medicare-secondary text-sm text-slate-900 transition-all placeholder:text-slate-400 outline-none"
                    />
                  </div>
                </div>

                {/* Department Dropdown */}
                <div>
                  <label htmlFor="department" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Department of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-medicare-secondary focus:border-medicare-secondary text-sm text-slate-900 bg-white transition-all outline-none cursor-pointer"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your enquiry or query..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-medicare-secondary focus:border-medicare-secondary text-sm text-slate-900 transition-all placeholder:text-slate-400 outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-medicare-orange hover:bg-medicare-orange-hover text-white font-bold text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Your medical data and personal information remain strictly confidential.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
