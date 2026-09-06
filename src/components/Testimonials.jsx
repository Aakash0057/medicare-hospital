import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The Laboratory reports were ready within 4 hours. The staff was incredibly professional.",
    author: "Ramesh K.",
    location: "Chennai",
    treatment: "Diagnostic Pathology & Health Checkup",
    rating: 5,
  },
  {
    id: 2,
    quote: "Billing was transparent with zero hidden charges. Insurance claim was handled entirely by MediCare.",
    author: "Divya S.",
    location: "Coimbatore",
    treatment: "Orthopedic Surgery & In-Patient Care",
    rating: 5,
  },
  {
    id: 3,
    quote: "Booked an appointment online at midnight and got confirmed in 2 minutes.",
    author: "Anand P.",
    location: "Chennai",
    treatment: "Cardiology OPD Consultation",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // 3-second auto-rotate interval as required

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-1.5 bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full text-medicare-secondary text-xs font-bold uppercase tracking-wider">
            <span>Verified Patient Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-medicare-primary tracking-tight">
            What Our Patients Say
          </h2>

          <p className="text-base text-slate-600">
            Real experiences from families across Tamil Nadu who trust MediCare Hospital with their health.
          </p>
        </div>

        {/* Testimonial Carousel Box */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card Container */}
          <div className="relative min-h-[260px] sm:min-h-[240px] bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100/80 flex flex-col justify-between">
            
            {/* Background Big Quote Icon */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-teal-500/10 pointer-events-none" />

            <div>
              {/* Star Ratings */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed italic transition-all duration-300">
                "{testimonials[currentIndex].quote}"
              </p>
            </div>

            {/* Author Attribution */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <span className="font-bold text-base text-medicare-primary">
                  {testimonials[currentIndex].author}
                </span>
                <span className="text-slate-400 mx-2">•</span>
                <span className="text-sm text-slate-500 font-medium">
                  {testimonials[currentIndex].location}
                </span>
              </div>

              <span className="text-xs font-semibold text-medicare-secondary bg-teal-50 px-3 py-1 rounded-full w-fit">
                {testimonials[currentIndex].treatment}
              </span>
            </div>

          </div>

          {/* Carousel Controls (Left & Right Buttons) */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex items-center space-x-2.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-medicare-secondary'
                      : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-medicare-primary hover:border-medicare-secondary hover:bg-slate-50 shadow-sm transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-medicare-primary hover:border-medicare-secondary hover:bg-slate-50 shadow-sm transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-center mt-3 text-[11px] text-slate-400">
            Auto-rotates every 3 seconds (hover to pause)
          </div>

        </div>

      </div>
    </section>
  );
}
