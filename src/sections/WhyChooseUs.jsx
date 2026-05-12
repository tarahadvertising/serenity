import React from 'react';
import { Award, Shield, Sparkles, Globe2, Anchor } from 'lucide-react';

const reasons = [
  {
    Icon: Award,
    title: 'Uncompromising Quality',
    description:
      'Every deliverable meets or exceeds international standards, audited and certified for consistent excellence.',
    stat: 'ISO',
    statLabel: 'Certified Systems',
  },
  {
    Icon: Shield,
    title: 'Proven Reliability',
    description:
      'A track record of on-time, on-budget execution across the most challenging offshore and industrial environments.',
    stat: '24/7',
    statLabel: 'Operational Support',
  },
  {
    Icon: Sparkles,
    title: 'Innovation-Driven',
    description:
      'From autonomous marine systems to smart automation, we invest in technology that sets new performance benchmarks.',
    stat: 'R&D',
    statLabel: 'Continuous Investment',
  },
  {
    Icon: Globe2,
    title: 'Global + Local Expertise',
    description:
      'UAE-headquartered with international reach — combining global best practices with deep regional knowledge.',
    stat: 'MENA',
    statLabel: 'Regional Leadership',
  },
];

function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-28 bg-navy-900 overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#0a1424] to-navy-900" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.07] blur-[140px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-700/[0.1] blur-[120px]" />

      {/* Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-card text-white/70 text-[11px] font-semibold uppercase tracking-[0.28em] px-5 py-2 rounded-full mb-6">
            <Anchor className="w-3 h-3 text-cyan-300" />
            Why Ocean Serenity
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-5">
            Built on trust.{' '}
            <span className="italic text-gradient-ocean">
              Engineered for excellence.
            </span>
          </h2>
          <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed">
            Four principles define how we work and why leading operators choose
            to partner with us.
          </p>
        </div>

        {/* Horizontal block layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-3xl overflow-hidden border border-white/[0.08]">
          {reasons.map(({ Icon, title, description, stat, statLabel }, i) => (
            <div
              key={title}
              className="group relative bg-navy-900 p-10 sm:p-12 transition-all duration-500 hover:bg-[#0d1a30] overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/[0.08] blur-[80px] transition-all duration-700" />

              <div className="relative flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-800 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-900/40 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-white/20 text-xs font-semibold tracking-widest">
                      0{i + 1}
                    </span>
                    <h3 className="text-white font-semibold text-xl leading-tight">
                      {title}
                    </h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-md">
                    {description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <span className="font-display text-3xl text-gradient-ocean">
                      {stat}
                    </span>
                    <span className="text-white/40 text-[11px] uppercase tracking-[0.2em]">
                      {statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
