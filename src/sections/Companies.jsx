import React from 'react';
import { Anchor, ArrowUpRight } from 'lucide-react';

const companies = [
  {
    logo: '/asp.svg',
    name: 'ASP Global Marine',
    tag: 'Marine Agency & Logistics',
    description:
      'Full-service port agency, crew management, ship chandling and maritime consultancy.',
    accent: 'from-sky-500/30 to-cyan-400/10',
  },
  {
    logo: '/knot.webp',
    name: 'Knot & Sail',
    tag: 'Sailing & Yacht Management',
    description:
      'Luxury and commercial sailing, charter operations and bespoke maritime experiences.',
    accent: 'from-amber-400/25 to-cyan-400/10',
  },
  {
    logo: '/infinity.webp',
    name: 'Ocean Infinity',
    tag: 'Autonomous Marine Technology',
    description:
      'AUVs and remotely operated vessels for survey, inspection and subsea operations.',
    accent: 'from-cyan-400/30 to-indigo-500/10',
  },
  {
    logo: '/warmsol.svg',
    name: 'Warmsol Marine & Industrial',
    tag: 'Industrial Engineering',
    description:
      'Thermal insulation, heat tracing and turnkey engineering for offshore & onshore facilities.',
    accent: 'from-sky-400/25 to-teal-400/10',
  },
];

function Companies() {
  return (
    <section
      id="companies"
      className="relative py-28 bg-navy-900 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-[#0b1424] to-navy-900" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-sky-700/[0.08] blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 glass-card text-white/70 text-[11px] font-semibold uppercase tracking-[0.28em] px-5 py-2 rounded-full mb-6">
              <Anchor className="w-3 h-3 text-cyan-300" />
              Our Portfolio
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight max-w-2xl">
              Four specialized companies.{' '}
              <span className="italic text-gradient-ocean">One integrated group.</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-sm">
            A coordinated portfolio of subsidiaries built to deliver end-to-end
            maritime and industrial capability under a single, accountable
            group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {companies.map((c) => (
            <div
              key={c.name}
              className="group relative glass-card rounded-2xl p-6 flex flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.07] shimmer-border"
            >
              {/* Accent glow */}
              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${c.accent} blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Logo */}
              <div className="relative w-14 h-14 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-6 group-hover:border-cyan-300/30 transition-colors">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="w-9 h-9 object-contain"
                />
              </div>

              <span className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300/70 mb-2">
                {c.tag}
              </span>
              <h3 className="relative text-white font-semibold text-lg leading-snug mb-3">
                {c.name}
              </h3>
              <p className="relative text-white/50 text-sm leading-relaxed flex-grow mb-5">
                {c.description}
              </p>

              <div className="relative flex items-center justify-between pt-4 border-t border-white/[0.06] group-hover:border-cyan-300/20 transition-colors">
                <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                  Learn more
                </span>
                <span className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:bg-cyan-400 group-hover:border-cyan-300 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:text-navy-900 transition-colors" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
