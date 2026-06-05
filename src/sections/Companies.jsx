import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const companies = [
  {
    num: '01',
    slug: 'asp-global-marine',
    eyebrow: '01 / 04 — Port Agency',
    name: 'ASP Global Marine',
    description:
      'ASP Global Marine is a specialized marine and offshore product solution provider delivering high-quality equipment, spare parts, and consumables to vessels and offshore installations worldwide. With a strong focus on operational reliability and compliance requirements of the maritime industry, ASP Global offers product solutions for equipment/mechanical systems, safety items, deck/engine stores and engine spares.This is backed by extensive sourcing capabilities and technical product knowledge, which enables ASP Global marine to serve shipowners, ship managers, operators, and marine service companies throughout the maritime sector.',
    capabilities: [
      'Port Agency & Husbandry',
      'Crew Management',
      'Ship Chandling & Provisions',
    ],
    logo: '/asp.webp',
    bg: 'bg-ink',
  },
  {
    num: '02',
    slug: 'knot-and-sail',
    eyebrow: '02 / 04 — Yacht Management',
    name: 'Knot & Sail',
    description:
      'Knot & Sail is a premier service provider in the UAE marine market, offering a complete range of reliable and high-quality solutions for ship owners and ship management companies. With a strong presence across all UAE ports, we are committed to delivering excellence in maritime services, ensuring vessels operate smoothly, efficiently, and in compliance with international standards. Our expertise spans across various aspects of ship support, from maintenance and repairs to logistics and technical assistance, making us a trusted partner in the industry.',
    capabilities: [
      'Luxury Charter Operations',
      'Yacht Management',
      'Bespoke Maritime Experiences',
    ],
    logo: '/knot.webp',
    bg: 'bg-deep-sea',
  },
  {
    num: '03',
    slug: 'ocean-infinity',
    eyebrow: '03 / 04 — Autonomous Systems',
    name: 'Ocean Infinity',
    description:
      'Ocean Infinity delivers advanced ship repair, maintenance, and marine safety solutions to support the performance and longevity of vessels operating in demanding environments.Built on strong technical expertise and hands-on industry experience, we provide end-to-end services from repair and conversion to safety compliance and onboard system support. Every project is executed with precision, minimizing downtime while maximizing operational efficiency.Our commitment goes beyond repair. We ensure that every vessel meets the highest standards of safety, reliability, and regulatory compliance, safeguarding both crew and assets.',
    capabilities: [
      'Autonomous Underwater Vehicles',
      'Remote Survey & Inspection',
      'Subsea Operations',
    ],
    logo: '/infinity.webp',
    bg: 'bg-midnight',
  },
  {
    num: '04',
    slug: 'warmsol',
    eyebrow: '04 / 04 — Industrial Engineering',
    name: 'Warmsol Marine & Industrial',
    description:
      'Thermal insulation, heat tracing, and turnkey engineering for the facilities that keep energy moving — offshore platforms, refineries, and processing plants.',
    capabilities: [
      'Thermal Insulation Systems',
      'Heat Tracing Engineering',
      'Turnkey Industrial Solutions',
    ],
    logo: '/warmsol.webp',
    bg: 'bg-ink',
  },
];

function CompanyPanel({ company, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <div
      ref={ref}
      className={`relative min-h-[80vh] flex items-center ${company.bg} overflow-hidden`}
    >
      <div className="absolute inset-0 hairline-b" />

      <div className="max-w-site mx-auto section-padding w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Image / Logo */}
          <div
            className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
          >
            <RevealOnScroll>
              <div className="relative aspect-[4/3] flex items-center justify-center">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain opacity-80"
                />
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — Content */}
          <motion.div
            className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
            style={{ y: contentY }}
          >
            <RevealOnScroll>
              <span className="font-mono text-[10px] uppercase text-mist/70 block mb-8">
                {company.eyebrow}
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <h3 className="font-display text-display-l text-pearl mb-6">
                {company.name}
              </h3>
            </RevealOnScroll>

            <RevealOnScroll delay={0.16}>
              <p className="text-body-l text-mist max-w-[480px] mb-10">
                {company.description}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.24}>
              <div className="space-y-0 mb-10">
                {company.capabilities.map((cap, i) => (
                  <div
                    key={cap}
                    className={`py-3 ${i < company.capabilities.length - 1 ? 'hairline-b' : ''}`}
                  >
                    <span className="text-body text-pearl/70">{cap}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.32}>
              <Link
                to={`/companies/${company.slug}`}
                className="text-brass-hover text-body text-pearl hover:text-brass transition-colors duration-hover"
              >
                Visit {company.name} →
              </Link>
            </RevealOnScroll>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Companies() {
  return (
    <section id="companies" className="relative">
      <div className="max-w-site mx-auto section-padding pt-section pb-16">
        <RevealOnScroll>
          <span className="font-mono text-eyebrow uppercase text-mist block mb-10">
            03 — Our Companies
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-h1 text-pearl max-w-[600px]">
            Four specialist companies. One deliberate group.
          </h2>
        </RevealOnScroll>
      </div>

      {companies.map((company, i) => (
        <CompanyPanel key={company.slug} company={company} index={i} />
      ))}
    </section>
  );
}

export default Companies;
