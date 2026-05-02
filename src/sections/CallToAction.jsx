import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarClock, Anchor } from 'lucide-react';

function CallToAction() {
  return (
    <section className="relative py-24 bg-navy-900 overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050b18] via-navy-900 to-[#061224]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-800/25 blur-[120px]" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-amber-300/[0.06] blur-[100px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 glass-card text-white/70 text-[11px] font-semibold uppercase tracking-[0.28em] px-5 py-2 rounded-full mb-8">
          <Anchor className="w-3 h-3 text-cyan-300" />
          Let&apos;s Work Together
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-[4.5rem] text-white leading-[1.05] tracking-tight mb-6">
          Ready to elevate your{' '}
          <span className="italic text-gradient-ocean">operations?</span>
        </h2>

        <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Partner with Ocean Serenity to deliver precision, reliability, and
          innovation across your next project.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 btn-ocean px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm overflow-hidden"
          >
            <span className="relative z-10">Contact Us</span>
            <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
          </Link>
          <Link
            to="/contact"
            className="btn-glass inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm"
          >
            <CalendarClock className="w-4 h-4" />
            Schedule Consultation
          </Link>
        </div>

        {/* Subtle footer note */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
          <span className="text-white/30 text-[11px] uppercase tracking-[0.3em]">
            Dubai · UAE · Global Operations
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
