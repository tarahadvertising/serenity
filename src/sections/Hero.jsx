import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Building2, Globe2 } from 'lucide-react';

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.classList.add('opacity-0');
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 1s ease-out';
        el.classList.remove('opacity-0');
        el.classList.add('opacity-100');
      });
    }
  }, []);

  const handleExplore = () => {
    const el = document.querySelector('#companies');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const trustItems = [
    { Icon: Building2, value: '4+', label: 'Group Companies' },
    { Icon: Anchor, value: 'UAE', label: 'Free Zone' },
    { Icon: Globe2, value: 'Global', label: 'Operations' },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900"
      aria-label="Hero"
    >
      {/* Video Background (preserved) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/homebanner.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top-heavy navy gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/55 to-navy-900/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/40 via-transparent to-navy-900/40" />

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-40 flex items-center justify-center"
      >
        <div className="max-w-4xl text-center">
          {/* Eyebrow badge */}
          {/* <div className="inline-flex items-center gap-2 glass-card text-white/75 text-[11px] font-semibold uppercase tracking-[0.28em] px-5 py-2 rounded-full mb-9 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Ocean Serenity FZ-LLC
          </div> */}

          {/* Headline — premium display serif */}
          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] text-white leading-[1.05] tracking-tight mb-7 animate-fade-up animation-delay-100">
            Integrated{' '}
            <span className="text-gradient-ocean">
              Marine &<br />
              Industrial Solutions
            </span>
          </h1>

          {/* Subheading — clean sans, wide letter spacing */}
          <p className="text-white/70 text-sm sm:text-base font-light tracking-[0.12em] uppercase max-w-2xl mx-auto mb-11 animate-fade-up animation-delay-200">
            Delivering precision, reliability, and innovation
            <br className="hidden sm:block" /> across global operations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up animation-delay-300">
            <button
              onClick={handleExplore}
              className="group relative inline-flex items-center gap-2 btn-ocean px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm overflow-hidden"
            >
              <span className="relative z-10">Explore Our Group</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </button>
            <Link
              to="/contact"
              className="btn-glass inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-16 animate-fade-up animation-delay-500">
            <div className="inline-flex flex-wrap items-center justify-center glass-card rounded-full px-3 py-3 divide-x divide-white/10">
              {trustItems.map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3 px-6 py-1">
                  <Icon className="w-4 h-4 text-cyan-300/80" />
                  <div className="text-left">
                    <div className="text-white font-semibold text-sm leading-none">
                      {value}
                    </div>
                    <div className="text-white/45 text-[10px] font-medium uppercase tracking-[0.18em] mt-1">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-white/35 text-[11px] uppercase tracking-[0.3em] mt-5">
              Trusted by offshore operators · shipping companies · industrial
              leaders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
