import React from 'react';
import { Link } from 'react-router-dom';
import {
  Anchor,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowRight,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#about' },
  { label: 'Our Companies', to: '/#companies' },
  { label: 'Services', to: '/#services' },
  { label: 'Contact Us', to: '/contact' },
];

const companies = [
  'ASP Global Marine',
  'Knot & Sail',
  'Ocean Infinity',
  'Warmsol Marine & Industrial',
];

const socials = [
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-navy-900 text-white overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060e1c] via-navy-900 to-navy-900" />
      <div className="absolute top-0 right-1/4 w-[550px] h-[550px] rounded-full bg-cyan-500/[0.05] blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] rounded-full bg-sky-700/[0.07] blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      {/* Top wave transition from last section */}
      <div className="relative pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,28 L1440,60 L0,60 Z"
            fill="#0f172a"
            fillOpacity="0.6"
          />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        {/* Top row: Brand + newsletter-style tagline */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="max-w-sm">
            <img
              src="/SerenityLogo.svg"
              alt="Ocean Serenity FZ-LLC"
              className="h-14 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity mb-5"
            />
            <p className="text-white/45 text-sm leading-relaxed mb-6">
              A premier marine and industrial conglomerate delivering
              world-class solutions across global maritime and energy sectors.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-2.5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group w-9 h-9 rounded-xl glass-card flex items-center justify-center hover:border-cyan-300/30 hover:bg-white/[0.1] transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-white/40 group-hover:text-cyan-300 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Tagline / CTA */}
          <div className="lg:text-right max-w-xs lg:max-w-sm">
            <p className="font-display text-2xl sm:text-3xl text-white leading-snug mb-4">
              Ready to work with{' '}
              <span className="italic text-gradient-ocean">us?</span>
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-cyan-300 text-sm font-semibold hover:text-white transition-colors duration-300"
            >
              Get in touch today
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Quick Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-2.5 text-white/50 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-400/50 group-hover:bg-cyan-300 transition-colors duration-200 flex-shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Group Companies */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-5">
              Group Companies
            </h3>
            <ul className="space-y-3">
              {companies.map((company) => (
                <li
                  key={company}
                  className="flex items-center gap-2.5 text-white/50 text-sm"
                >
                  <span className="w-1 h-1 rounded-full bg-sky-400/40 flex-shrink-0" />
                  {company}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-800 to-sky-900 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-300/80" />
                </div>
                <span className="text-white/45 text-sm leading-relaxed pt-1">
                  Xavier Business Center,
                  <br />
                  Office Suite No: A5 - 18, Dubai – UAE
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-800 to-sky-900 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-cyan-300/80" />
                </div>
                <a
                  href="tel:+971527756765"
                  className="text-white/45 text-sm hover:text-cyan-300 transition-colors duration-200"
                >
                  +971 52 775 6765
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-800 to-sky-900 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-cyan-300/80" />
                </div>
                <a
                  href="mailto:info@oceanserenity.ae"
                  className="text-white/45 text-sm hover:text-cyan-300 transition-colors duration-200"
                >
                  info@oceanserenity.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent mb-7" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs tracking-wide">
            &copy; {currentYear} Ocean Serenity FZ-LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Anchor className="w-3 h-3 text-cyan-400/40" />
            <p className="text-white/30 text-xs tracking-wide">
              Registered in Ras Al Khaimah, UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
