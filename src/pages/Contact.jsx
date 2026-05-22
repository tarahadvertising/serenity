import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Headquarters',
    lines: ['Xavier Business Center', 'Office Suite A5-18', 'Dubai, UAE'],
  },
  {
    icon: Phone,
    label: 'Direct Line',
    lines: ['+971 52 775 6765'],
    href: 'tel:+971527756765',
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@oceanserenity.ae'],
    href: 'mailto:info@oceanserenity.ae',
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
    'w-full px-5 py-3.5 rounded-sm text-body text-pearl bg-midnight/50 border border-pearl/10 focus:border-brass/50 focus:outline-none transition-colors duration-200 placeholder-pearl/30';
  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? 'border-signal/50' : ''}`;

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-ink py-section overflow-hidden">
        <div className="max-w-site mx-auto section-padding">
          <RevealOnScroll>
            <span className="font-mono text-eyebrow uppercase text-mist block mb-10">
              Contact
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h1 className="font-display text-h1 text-pearl max-w-[600px] mb-8">
              Let's begin a conversation.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="text-body-l text-mist max-w-[480px] mb-16">
              Whether you have a project in mind or want to learn more about our
              services, we're here to help.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="relative bg-deep-sea py-section overflow-hidden">
        <div className="max-w-site mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Contact Info */}
            <div>
              <RevealOnScroll>
                <h2 className="font-display text-h2 text-pearl mb-16">
                  How to reach us
                </h2>
              </RevealOnScroll>

              <div className="space-y-0">
                {contactDetails.map((detail, i) => (
                  <RevealOnScroll key={detail.label} delay={0.1 + i * 0.08}>
                    <div
                      className={`py-8 ${i < contactDetails.length - 1 ? 'hairline-b' : ''}`}
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-sm bg-midnight/50 flex items-center justify-center flex-shrink-0">
                          <detail.icon className="w-5 h-5 text-brass" />
                        </div>
                        <div>
                          <span className="font-mono text-eyebrow uppercase text-mist block mb-2">
                            {detail.label}
                          </span>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-brass-hover text-body text-pearl hover:text-brass transition-colors duration-hover block"
                            >
                              {detail.lines[0]}
                            </a>
                          ) : (
                            detail.lines.map((line) => (
                              <span
                                key={line}
                                className="text-body text-pearl/70 block"
                              >
                                {line}
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <RevealOnScroll>
                <h2 className="font-display text-h2 text-pearl mb-16">
                  Send us a message
                </h2>
              </RevealOnScroll>

              {submitted ? (
                <RevealOnScroll>
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-sm bg-midnight/50 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="w-8 h-8 text-brass" />
                    </div>
                    <h3 className="font-display text-h3 text-pearl mb-4">
                      Message received
                    </h3>
                    <p className="text-body text-mist/70 mb-8">
                      Thank you for reaching out. Our team will respond within
                      one business day.
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
                      className="text-brass-hover text-body text-pearl hover:text-brass transition-colors duration-hover"
                    >
                      Send another message →
                    </button>
                  </div>
                </RevealOnScroll>
              ) : (
                <RevealOnScroll>
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <label className="font-mono text-eyebrow uppercase text-mist block mb-4">
                          Name
                        </label>
                        <input
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass('name')}
                        />
                        {errors.name && (
                          <p className="mt-2 font-mono text-caption text-signal">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="font-mono text-eyebrow uppercase text-mist block mb-4">
                          Email
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={inputClass('email')}
                        />
                        {errors.email && (
                          <p className="mt-2 font-mono text-caption text-signal">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="font-mono text-eyebrow uppercase text-mist block mb-4">
                        Subject
                      </label>
                      <input
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className={inputClass('subject')}
                      />
                    </div>

                    <div>
                      <label className="font-mono text-eyebrow uppercase text-mist block mb-4">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-2 font-mono text-caption text-signal">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="text-brass-hover text-body text-pearl hover:text-brass transition-colors duration-hover"
                    >
                      Send message →
                    </button>
                  </form>
                </RevealOnScroll>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
