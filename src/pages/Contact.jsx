import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Anchor,
  ArrowRight,
} from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Our Address',
    lines: [
      'Xavier Business Center',
      'Office Suite No: A5 - 18',
      'Dubai - UAE',
    ],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+971 52 775 6765'],
    href: 'tel:+971527756765',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@oceanserenity.ae'],
    href: 'mailto:info@oceanserenity.ae',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: [
      'Sunday – Thursday: 9:00 AM – 6:00 PM',
      'Friday – Saturday: Closed',
    ],
  },
];

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputBase =
    'w-full px-5 py-3.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2';
  const inputClass = (field) =>
    `${inputBase} ${
      errors[field]
        ? 'border border-red-400 focus:ring-red-200 bg-red-50/50 text-gray-800 placeholder-red-300'
        : 'border border-gray-200/80 focus:ring-cyan-200 focus:border-cyan-400 bg-gray-50/80 text-gray-800 placeholder-gray-400'
    }`;

  return (
    <>
      {/* ─── HERO BANNER ─── */}
      <section className="relative pt-36 pb-28 bg-navy-900 overflow-hidden">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-[#0a1424] to-navy-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/60 via-transparent to-navy-900/60" />
        <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,23,0.7)_100%)]" />

        {/* Ambient glows */}
        <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] rounded-full bg-cyan-400/10 blur-[140px] animate-glow-pulse" />
        <div className="absolute bottom-0 left-[8%] w-[380px] h-[380px] rounded-full bg-sky-500/10 blur-[120px] animate-drift-slow" />
        <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] rounded-full bg-amber-300/[0.05] blur-[80px] animate-drift-reverse" />

        {/* Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => {
            const left = (i * 67 + 11) % 100;
            const size = 1 + (i % 3);
            const dur = 16 + (i % 6) * 2;
            const del = (i * 1.7) % 10;
            return (
              <span
                key={i}
                className="absolute bottom-0 rounded-full bg-cyan-200/50 animate-float-particle"
                style={{
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  animationDuration: `${dur}s`,
                  animationDelay: `${del}s`,
                  filter: 'blur(0.5px)',
                }}
              />
            );
          })}
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
          <svg
            viewBox="0 0 1440 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full block"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C360,100 720,30 1080,60 C1260,80 1380,45 1440,55 L1440,100 L0,100 Z"
              fill="white"
              fillOpacity="0.08"
            />
            <path
              d="M0,70 C240,95 480,45 720,70 C960,95 1200,40 1440,65 L1440,100 L0,100 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 glass-card text-white/75 text-[11px] font-semibold uppercase tracking-[0.28em] px-5 py-2 rounded-full mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
            Get In Touch
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-6 animate-fade-up animation-delay-100">
            Let&apos;s start a{' '}
            <span className="italic text-gradient-ocean">conversation</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg font-light tracking-wide max-w-xl mx-auto animate-fade-up animation-delay-200">
            Have a project in mind or want to learn more about our services?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* ─── CONTACT DETAILS + FORM ─── */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-sky-500/[0.04] blur-[120px] -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-400/[0.04] blur-[100px] translate-x-1/4 translate-y-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
            {/* Left – Contact Info */}
            <div className="lg:col-span-2 space-y-7">
              <div>
                <div className="inline-flex items-center gap-2 bg-navy-900/[0.05] border border-navy-900/[0.08] text-navy-800 text-[11px] font-semibold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-5">
                  <Anchor className="w-3 h-3 text-cyan-600" />
                  Contact
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-navy-900 leading-tight tracking-tight mb-3">
                  Reach out to our team
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Our team is ready to answer your queries, discuss potential
                  partnerships, or provide information about our services.
                </p>
              </div>

              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(8,145,178,0.2)] hover:-translate-y-0.5 shimmer-border"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-900 to-sky-800 flex items-center justify-center flex-shrink-0 shadow-lg shadow-sky-900/20 group-hover:shadow-cyan-500/25 transition-shadow">
                      <detail.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em] mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="text-navy-900 text-sm font-medium hover:text-cyan-600 transition-colors"
                        >
                          {detail.lines[0]}
                        </a>
                      ) : (
                        detail.lines.map((line) => (
                          <p
                            key={line}
                            className="text-gray-600 text-sm leading-relaxed"
                          >
                            {line}
                          </p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Urgent assistance card */}
              <div className="relative rounded-2xl overflow-hidden p-6 bg-gradient-to-br from-navy-900 via-[#0a1a33] to-sky-900 text-white shimmer-border">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cyan-400/20 blur-[60px]" />
                <div className="relative">
                  <h4 className="font-semibold text-sm mb-2">
                    Need Urgent Assistance?
                  </h4>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    For time-critical marine operations or emergencies, call our
                    direct line. We maintain 24/7 on-call support for active
                    project clients.
                  </p>
                  <a
                    href="tel:+971527756765"
                    className="inline-flex items-center gap-2 text-cyan-300 text-xs font-semibold hover:text-white transition-colors"
                  >
                    Call Now <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right – Form */}
            <div className="lg:col-span-3">
              <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_-20px_rgba(8,47,73,0.12)] p-8 sm:p-10 overflow-hidden shimmer-border">
                {/* Decorative accent */}
                <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

                {submitted ? (
                  <div className="relative flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-cyan-100 border border-emerald-200 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="font-display text-3xl text-navy-900 mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                      Thank you for reaching out. Our team will get back to you
                      within one business day.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: '',
                          email: '',
                          subject: '',
                          message: '',
                        });
                      }}
                      className="mt-8 group relative inline-flex items-center gap-2 btn-ocean px-7 py-3.5 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm overflow-hidden"
                    >
                      <span className="relative z-10">
                        Send Another Message
                      </span>
                      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="mb-8">
                      <h3 className="font-display text-2xl sm:text-3xl text-navy-900 mb-2">
                        Send us a message
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Fill in the form below and we&apos;ll respond promptly.
                      </p>
                    </div>
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2"
                          >
                            Full Name <span className="text-cyan-500">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className={inputClass('name')}
                          />
                          {errors.name && (
                            <p className="mt-1.5 text-xs text-red-500">
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2"
                          >
                            Email Address{' '}
                            <span className="text-cyan-500">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={inputClass('email')}
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-xs text-red-500">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          className={inputClass('subject')}
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] mb-2"
                        >
                          Message <span className="text-cyan-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry..."
                          className={`${inputClass('message')} resize-none`}
                        />
                        {errors.message && (
                          <p className="mt-1.5 text-xs text-red-500">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="group relative w-full flex items-center justify-center gap-2 btn-ocean px-6 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 text-sm overflow-hidden"
                      >
                        <Send className="relative z-10 w-4 h-4" />
                        <span className="relative z-10">Send Message</span>
                        <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP SECTION ─── */}
      <section className="relative pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 bg-gradient-to-br from-navy-900 via-[#0a1a33] to-sky-900 h-72 sm:h-80 flex items-center justify-center shimmer-border">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
            {/* Glows */}
            <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-56 h-56 rounded-full bg-cyan-400/25 blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-sky-500/15 blur-[70px]" />

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-cyan-300" />
              </div>
              <p className="font-display text-2xl text-white mb-1">
                Xavier Business Center
              </p>
              <p className="text-white/50 text-sm">
                Office Suite No: A5 - 18, Dubai - UAE
              </p>
              <a
                href="https://maps.google.com/?q=Xavier+Business+Center+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 btn-ocean px-6 py-3 text-white text-xs font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                Open in Google Maps
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
