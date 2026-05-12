import React from 'react';
import { Target, Eye, Anchor } from 'lucide-react';

function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="relative py-28 bg-gradient-to-b from-white via-sky-50/40 to-white overflow-hidden"
    >
      {/* Ambient accents */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full bg-cyan-400/[0.08] blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-sky-700/[0.06] blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-900/[0.05] border border-navy-900/[0.08] text-navy-800 text-[11px] font-semibold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6">
            <Anchor className="w-3 h-3 text-cyan-600" />
            Purpose &amp; Direction
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 leading-[1.05] tracking-tight">
            Guided by{' '}
            <span className="italic bg-gradient-to-r from-sky-700 to-cyan-500 bg-clip-text text-transparent">
              purpose
            </span>
            , driven by vision.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mission card */}
          <div className="group relative rounded-3xl overflow-hidden p-10 lg:p-12 bg-gradient-to-br from-navy-900 via-[#0a1a33] to-sky-900 shimmer-border transition-all duration-500 hover:-translate-y-1">
            {/* Glows */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-cyan-400/20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-sky-500/10 blur-[80px]" />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center">
                  <Target className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-1">
                    01 — Our Mission
                  </div>
                  <h3 className="font-display text-3xl text-white">
                    What drives us
                  </h3>
                </div>
              </div>

              <p className="text-white/70 text-[15px] leading-relaxed">
                To deliver world-class marine and industrial solutions that
                empower our clients&apos; operations, drive sustainable growth,
                and set new benchmarks for quality and reliability — across
                every sector we serve.
              </p>

              <div className="mt-10 h-px bg-gradient-to-r from-cyan-400/40 via-white/10 to-transparent" />
            </div>
          </div>

          {/* Vision card */}
          <div className="group relative rounded-3xl overflow-hidden p-10 lg:p-12 bg-white border border-gray-100 shimmer-border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(8,47,73,0.2)]">
            {/* Accents */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-400/[0.12] blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-amber-200/20 blur-[70px]" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-cyan-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-cyan-700" />
                </div>
                <div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-[0.3em] mb-1">
                    02 — Our Vision
                  </div>
                  <h3 className="font-display text-3xl text-navy-900">
                    Where we&apos;re headed
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                To become the leading integrated marine and industrial group in
                the MENA region — recognized globally for innovation, integrity,
                and a commitment to creating lasting value for every stakeholder
                we serve.
              </p>

              <div className="mt-10 h-px bg-gradient-to-r from-cyan-400/60 via-gray-200 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
