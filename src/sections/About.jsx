import React from 'react';
import {
  Anchor,
  Building2,
  Layers,
  Lightbulb,
  Globe2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  {
    Icon: Building2,
    title: 'UAE Free Zone',
    description: 'Registered and headquartered in the United Arab Emirates.',
  },
  {
    Icon: Layers,
    title: 'Multi-Sector Expertise',
    description: 'Marine, industrial, automation and subsea technology.',
  },
  {
    Icon: Lightbulb,
    title: 'Innovation & Sustainability',
    description: 'Advanced systems engineered for a responsible future.',
  },
  {
    Icon: Globe2,
    title: 'Global Client Base',
    description: 'Serving governments, operators and enterprises worldwide.',
  },
];
function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[520px] h-[520px] rounded-full  blur-[120px] -translate-x-1/2 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full  blur-[100px] translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left – Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 bg-navy-900/[0.05] border border-navy-900/[0.08] text-navy-800 text-[11px] font-semibold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-7">
              About the Group
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 leading-[1.05] tracking-tight mb-8">
              A diversified maritime &amp;{' '}
              <span className="bg-gradient-to-r from-sky-700 to-cyan-500 bg-clip-text text-transparent">
                industrial
              </span>{' '}
              conglomerate.
            </h2>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-10 max-w-lg">
              Ocean Serenity FZ-LLC unites specialized subsidiaries under one
              disciplined, internationally-minded group — delivering integrated
              solutions across marine operations, industrial engineering, and
              intelligent automation.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-navy-900 font-semibold text-sm border-b-2 border-navy-900/20 hover:border-cyan-500 pb-1 transition-colors"
            >
              Discover Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          {/* Right – Abstract visual + 2x2 icon grid */}
          <div className="lg:col-span-6">
            {/* Gradient visual card */}
            <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[16/8] shimmer-border">
              {/* Background image */}
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage: `url('/about.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Radial rings */}
              <svg
                className="absolute inset-0 w-full h-full opacity-40"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <defs>
                  <radialGradient id="ring" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(103,232,249,0.6)" />
                    <stop offset="100%" stopColor="rgba(103,232,249,0)" />
                  </radialGradient>
                </defs>
                <circle
                  cx="200"
                  cy="100"
                  r="40"
                  fill="none"
                  stroke="url(#ring)"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="url(#ring)"
                  strokeWidth="1"
                  opacity="0.6"
                />
                <circle
                  cx="200"
                  cy="100"
                  r="100"
                  fill="none"
                  stroke="url(#ring)"
                  strokeWidth="1"
                  opacity="0.4"
                />
              </svg>
              {/* Label */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-black">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-black/50">
                    Est. UAE
                  </div>
                  <div className="font-display text-2xl mt-1">
                    Ocean Serenity Group
                  </div>
                </div>
              </div>
            </div>

            {/* 2x2 highlight grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="group relative bg-white rounded-2xl border border-gray-100 hover:border-cyan-200 p-5 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(8,145,178,0.25)] hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0 group-hover:from-sky-100 group-hover:to-cyan-100 transition-colors">
                      <Icon className="w-[18px] h-[18px] text-cyan-700" />
                    </div>
                    <div>
                      <h4 className="text-navy-900 font-semibold text-sm leading-tight mb-1">
                        {title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
