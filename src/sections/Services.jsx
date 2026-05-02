import React from 'react';
import {
  Anchor,
  Wrench,
  Cpu,
  ShieldCheck,
  Gauge,
  Truck,
} from 'lucide-react';

const services = [
  {
    Icon: Anchor,
    title: 'Marine Solutions',
    description:
      'Port agency, vessel management, crew logistics and maritime consultancy.',
  },
  {
    Icon: Wrench,
    title: 'Industrial Solutions',
    description:
      'Turnkey engineering, insulation, heat tracing and mechanical maintenance.',
  },
  {
    Icon: Cpu,
    title: 'Automation',
    description:
      'Smart automation, instrumentation and predictive maintenance for complex assets.',
  },
  {
    Icon: ShieldCheck,
    title: 'Safety & Compliance',
    description:
      'QHSE systems, audits and ISM/ISPS-aligned regulatory consulting.',
  },
  {
    Icon: Gauge,
    title: 'Survey & Inspection',
    description:
      'AUV / ROV subsea surveys and asset integrity assessments.',
  },
  {
    Icon: Truck,
    title: 'Logistics & Supply',
    description:
      'End-to-end marine logistics, ship chandling and offshore supply.',
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-400/[0.05] blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sky-600/[0.05] blur-[100px] -translate-x-1/3 translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-900/[0.05] border border-navy-900/[0.08] text-navy-800 text-[11px] font-semibold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6">
            <Anchor className="w-3 h-3 text-cyan-600" />
            Core Capabilities
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-navy-900 leading-[1.05] tracking-tight mb-5">
            Six disciplines.{' '}
            <span className="italic bg-gradient-to-r from-sky-700 to-cyan-500 bg-clip-text text-transparent">
              One integrated delivery.
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
            A connected suite of services across the marine and industrial
            value chain, backed by world-class expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, description }, index) => (
            <div
              key={title}
              className="group relative bg-white rounded-2xl border border-gray-100 hover:border-transparent p-8 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(8,47,73,0.25)] hover:-translate-y-1 overflow-hidden shimmer-border"
            >
              {/* Gradient wash on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 via-cyan-50/0 to-transparent group-hover:from-sky-50/60 group-hover:via-cyan-50/40 transition-all duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-900 to-sky-800 text-white flex items-center justify-center mb-6 shadow-lg shadow-sky-900/20 group-hover:shadow-cyan-500/30 transition-shadow duration-500">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-semibold text-cyan-700/60 uppercase tracking-[0.25em] mb-2 block">
                  0{index + 1}
                </span>
                <h3 className="text-navy-900 font-semibold text-lg leading-snug mb-3">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {description}
                </p>

                <div className="mt-6 h-px bg-gradient-to-r from-gray-100 via-cyan-300/40 to-transparent group-hover:via-cyan-400 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
