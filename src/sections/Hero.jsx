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
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/55 to-navy-900/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-navy-900/60" />
      {/* Cinematic vignette */}
      <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,23,0.75)_100%)]" />

      {/* Ambient light reflections */}
      <div className="absolute top-[12%] right-[18%] w-[520px] h-[520px] rounded-full bg-cyan-400/10 blur-[140px] animate-glow-pulse" />
      <div className="absolute bottom-[18%] left-[10%] w-[420px] h-[420px] rounded-full bg-sky-500/10 blur-[120px] animate-drift-slow" />
      <div className="absolute top-[30%] left-[40%] w-[260px] h-[260px] rounded-full bg-amber-300/[0.06] blur-[100px] animate-drift-reverse" />

      {/* Soft fog overlay */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none animate-drift-slow"
        style={{
          backgroundImage: `radial-gradient(ellipse 60% 40% at 20% 80%, rgba(148,200,255,0.12), transparent 70%), radial-gradient(ellipse 50% 35% at 80% 20%, rgba(103,232,249,0.1), transparent 70%)`,
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => {
          const left = (i * 73) % 100;
          const size = 1 + (i % 3);
          const duration = 18 + (i % 8) * 2;
          const delay = (i * 1.3) % 12;
          return (
            <span
              key={i}
              className="absolute bottom-0 rounded-full bg-cyan-200/60 animate-float-particle"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                filter: 'blur(0.5px)',
              }}
            />
          );
        })}
      </div>

      {/* Subtle grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ocean wave bottom — double layer for depth */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,70 L1440,120 L0,120 Z"
            fill="#0f172a"
            fillOpacity="0.35"
          />
          <path
            d="M0,90 C240,110 480,60 720,90 C960,120 1200,50 1440,80 L1440,120 L0,120 Z"
            fill="#0f172a"
            fillOpacity="0.85"
          />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-40 flex items-center justify-center"
      >
        <div className="max-w-4xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 glass-card text-white/75 text-[11px] font-semibold uppercase tracking-[0.28em] px-5 py-2 rounded-full mb-9 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Ocean Serenity FZ-LLC
          </div>

          {/* Headline — premium display serif */}
          <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] text-white leading-[1.05] tracking-tight mb-7 animate-fade-up animation-delay-100">
            Integrated{' '}
            <span className="text-gradient-ocean italic">
              Marine &amp; Industrial {''}
            </span>
            <br className="hidden sm:block" /> Solutions
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

      {/* Smooth scroll indicator */}
      <button
        onClick={handleExplore}
        aria-label="Scroll to content"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 group"
      >
        <span className="text-white/40 text-[10px] font-medium uppercase tracking-[0.3em] group-hover:text-white/70 transition-colors">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border border-white/25 flex items-start justify-center p-1.5 group-hover:border-cyan-300/60 transition-colors">
          <div className="w-1 h-2.5 rounded-full bg-gradient-to-b from-white to-cyan-300 animate-bounce" />
        </div>
      </button>
    </section>
  );
}

export default Hero;
