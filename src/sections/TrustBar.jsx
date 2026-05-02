import React from 'react';
import { Ship, Factory, Fuel, Waves, Building2, Compass } from 'lucide-react';

const logos = [
  { Icon: Ship, label: 'Shipping' },
  { Icon: Fuel, label: 'Offshore Energy' },
  { Icon: Factory, label: 'Industrial' },
  { Icon: Waves, label: 'Subsea' },
  { Icon: Building2, label: 'Enterprise' },
  { Icon: Compass, label: 'Logistics' },
];

function TrustBar() {
  return (
    <section
      aria-label="Trusted sectors"
      className="relative bg-navy-900 border-y border-white/[0.06] py-8 overflow-hidden"
    >
      {/* Subtle glow edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
          <p className="text-white/45 text-[11px] font-medium uppercase tracking-[0.3em] whitespace-nowrap">
            Trusted by offshore operators, shipping companies &amp; industrial leaders
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-white/40 hover:text-white/80 transition-colors duration-300 group"
              >
                <Icon className="w-4 h-4 group-hover:text-cyan-300 transition-colors" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
