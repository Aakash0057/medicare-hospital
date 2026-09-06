import React, { useState } from 'react';
import { Stethoscope, Heart, Brain, Activity, Bone, Award, Calendar, ChevronRight, User } from 'lucide-react';

const doctors = [
  {
    id: 'priya-nair',
    name: 'Dr. Priya Nair',
    specialty: 'Cardiologist',
    experience: '18 Years',
    qualification: 'MD, DM (Cardiology), FACC',
    deptIcon: Heart,
    color: 'from-rose-500 to-red-600',
    bgColor: 'bg-rose-50 text-rose-600 border-rose-100',
    available: 'Mon, Wed, Fri (9 AM – 2 PM)',
    bio: 'Senior consultant interventional cardiologist specializing in complex coronary angioplasties and preventative heart health.',
  },
  {
    id: 'arun-mehta',
    name: 'Dr. Arun Mehta',
    specialty: 'Neurologist',
    experience: '14 Years',
    qualification: 'MD, DM (Neurology), FINR',
    deptIcon: Brain,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 text-blue-600 border-blue-100',
    available: 'Tue, Thu, Sat (10 AM – 3 PM)',
    bio: 'Pioneering neurologist with specialized focus on stroke rehabilitation, neuro-electrophysiology, and headache disorders.',
  },
  {
    id: 'sneha-rajan',
    name: 'Dr. Sneha Rajan',
    specialty: 'Oncologist',
    experience: '11 Years',
    qualification: 'MD, DNB (Medical Oncology)',
    deptIcon: Activity,
    color: 'from-teal-500 to-emerald-600',
    bgColor: 'bg-teal-50 text-teal-600 border-teal-100',
    available: 'Mon, Tue, Thu (11 AM – 4 PM)',
    bio: 'Dedicated medical oncologist leading precision targeted chemotherapy, immunotherapy, and cancer screening protocols.',
  },
  {
    id: 'vikram-suri',
    name: 'Dr. Vikram Suri',
    specialty: 'Orthopedic Surgeon',
    experience: '20 Years',
    qualification: 'MS (Ortho), MCh, FRCS',
    deptIcon: Bone,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50 text-amber-600 border-amber-100',
    available: 'Mon to Fri (8 AM – 1 PM)',
    bio: 'Chief orthopedic surgeon with over 4,500 successful robotic joint replacements, arthroscopic reconstructions, and sports trauma surgeries.',
  },
];

export default function Doctors({ onOpenAppointmentModal }) {
  const [activeProfile, setActiveProfile] = useState(null);

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-1.5 bg-sky-100 border border-sky-200 px-3.5 py-1 rounded-full text-medicare-primary text-xs font-bold uppercase tracking-wider">
            <span>Clinical Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medicare-primary tracking-tight">
            Meet Our Specialists
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Our esteemed senior physicians combine decades of clinical excellence, cutting-edge research, 
            and deep compassion for personalized patient care.
          </p>
        </div>

        {/* Doctor Cards Grid with 3D Flip/Hover interaction */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doc) => {
            const DeptIcon = doc.deptIcon;
            
            return (
              <div
                key={doc.id}
                className="group [perspective:1000px] h-[430px]"
              >
                {/* 3D Flip Card Inner Container */}
                <div className="relative w-full h-full duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all">
                  
                  {/* FRONT OF CARD */}
                  <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl border border-slate-200 p-6 flex flex-col items-center justify-between shadow-sm group-hover:shadow-xl transition-shadow">
                    
                    {/* Experience Badge */}
                    <div className="w-full flex items-center justify-between">
                      <span className="inline-flex items-center space-x-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        <Award className="w-3.5 h-3.5 text-medicare-orange" />
                        <span>{doc.experience}</span>
                      </span>

                      <span className={`p-1.5 rounded-lg border text-xs font-medium ${doc.bgColor}`}>
                        <DeptIcon className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Doctor Rounded Photo Placeholder */}
                    <div className="relative my-4">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-slate-100 via-slate-200 to-slate-300 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                        <User className="w-16 h-16 text-slate-400 mt-2" />
                      </div>
                      <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-medicare-primary text-white flex items-center justify-center shadow">
                        <Stethoscope className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Name & Specialty */}
                    <div className="text-center w-full">
                      <h3 className="text-lg font-bold text-medicare-primary group-hover:text-medicare-secondary transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-sm font-semibold text-medicare-secondary mt-0.5">
                        {doc.specialty}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 font-mono">
                        {doc.qualification}
                      </p>
                    </div>

                    {/* View Profile Trigger Button (Flips or shows info) */}
                    <div className="w-full pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="font-medium text-slate-400">Hover to consult</span>
                      <span className="inline-flex items-center text-medicare-primary font-bold group-hover:text-medicare-secondary">
                        View Profile <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                      </span>
                    </div>

                  </div>

                  {/* BACK OF CARD (Flipped State) */}
                  <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-br from-medicare-primary to-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-2xl border border-sky-800">
                    
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-sky-800/80">
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {doc.name}
                          </h4>
                          <span className="text-xs text-teal-300 font-medium">
                            {doc.specialty}
                          </span>
                        </div>
                        <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-sky-200">
                          {doc.experience}
                        </span>
                      </div>

                      <div className="mt-4 space-y-3 text-xs text-slate-200">
                        <div>
                          <span className="text-slate-400 font-semibold block uppercase text-[10px] tracking-wider">
                            Clinical Focus
                          </span>
                          <p className="mt-1 leading-relaxed text-slate-300">
                            {doc.bio}
                          </p>
                        </div>

                        <div>
                          <span className="text-slate-400 font-semibold block uppercase text-[10px] tracking-wider">
                            OPD Consultation Hours
                          </span>
                          <p className="mt-0.5 text-teal-300 font-medium">
                            {doc.available}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Book Consultation Button */}
                    <div className="pt-3 border-t border-sky-800/80">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenAppointmentModal(doc.name);
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-medicare-orange hover:bg-medicare-orange-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-orange-600/30 transition-all transform hover:scale-[1.02]"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book Consultation</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
