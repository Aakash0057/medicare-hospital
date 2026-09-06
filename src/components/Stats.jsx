import React, { useState, useEffect, useRef } from 'react';
import { UserCheck, Stethoscope, Heart, Building2 } from 'lucide-react';

const statsData = [
  {
    id: 'specialists',
    icon: Stethoscope,
    target: 500,
    prefix: '',
    suffix: '+',
    label: 'Specialists',
    sublabel: 'Across 30+ super-specialties',
    isDecimal: false,
  },
  {
    id: 'surgeries',
    icon: Heart,
    target: 100000,
    displayTarget: '1,00,000+',
    prefix: '',
    suffix: '+',
    label: 'Surgeries Performed',
    sublabel: 'With 99.4% clinical success',
    isSpecialFormatted: true,
  },
  {
    id: 'satisfaction',
    icon: UserCheck,
    target: 98.7,
    prefix: '',
    suffix: '%',
    label: 'Patient Satisfaction',
    sublabel: 'Based on verified feedback',
    isDecimal: true,
  },
  {
    id: 'departments',
    icon: Building2,
    target: 12,
    prefix: '',
    suffix: '',
    label: 'Departments',
    sublabel: 'Fully integrated wings',
    isDecimal: false,
  },
];

export default function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    specialists: 0,
    surgeries: 0,
    satisfaction: 0,
    departments: 0,
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCountUp();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCountUp = () => {
    const duration = 2000; // 2 seconds
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = easeOutExpo(frame / totalFrames);

      setCounts({
        specialists: Math.round(progress * 500),
        surgeries: Math.round(progress * 100000),
        satisfaction: parseFloat((progress * 98.7).toFixed(1)),
        departments: Math.round(progress * 12),
      });

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts({
          specialists: 500,
          surgeries: 100000,
          satisfaction: 98.7,
          departments: 12,
        });
      }
    }, 1000 / frameRate);
  };

  // Easing function for smooth realistic count-up
  const easeOutExpo = (x) => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  const formatSurgeries = (val) => {
    if (val >= 100000) return '1,00,000+';
    // Format intermediate numbers in Indian numbering system
    return val.toLocaleString('en-IN') + '+';
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-r from-medicare-secondary via-teal-700 to-medicare-secondary-dark text-white py-14 lg:py-18 overflow-hidden shadow-xl"
    >
      {/* Background visual elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            let displayVal = '';

            if (stat.isSpecialFormatted) {
              displayVal = formatSurgeries(counts.surgeries);
            } else if (stat.isDecimal) {
              displayVal = `${counts.satisfaction}${stat.suffix}`;
            } else {
              displayVal = `${counts[stat.id]}${stat.suffix}`;
            }

            return (
              <div
                key={stat.id}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/15 flex items-center justify-center text-white shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 tabular-nums">
                  {displayVal}
                </div>

                <div className="text-base sm:text-lg font-semibold text-sky-100 mb-1">
                  {stat.label}
                </div>

                <div className="text-xs text-teal-200/90 font-medium">
                  {stat.sublabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
