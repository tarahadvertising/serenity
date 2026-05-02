import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/', hash: '' },
  { label: 'About', to: '/', hash: '#about' },
  { label: 'Companies', to: '/', hash: '#companies' },
  { label: 'Services', to: '/', hash: '#services' },
  { label: 'Contact', to: '/contact', hash: '' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash) => {
    setMenuOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const linkBase =
    'relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-lg group';
  const linkTransparent = 'text-white/75 hover:text-white hover:bg-white/10';
  const linkScrolled = 'text-gray-600 hover:text-navy-900 hover:bg-gray-50';
  const activeTransparent = 'text-white';
  const activeScrolled = 'text-navy-900 font-semibold';

  const getLinkClass = (link) => {
    const isActive =
      link.to === '/contact'
        ? location.pathname === '/contact'
        : location.pathname === '/' && link.label === 'Home';
    return `${linkBase} ${
      scrolled
        ? `${linkScrolled} ${isActive ? activeScrolled : ''}`
        : `${linkTransparent} ${isActive ? activeTransparent : ''}`
    }`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_30px_-10px_rgba(8,47,73,0.18)] py-2 border-b border-gray-100/80'
          : 'bg-transparent py-3'
      }`}
    >
      {/* Subtle top accent line when transparent */}
      {!scrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      )}

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group flex-shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/SerenityLogo.svg"
            alt="Ocean Serenity FZ-LLC"
            className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.hash ? (
                <Link
                  to={link.to}
                  onClick={() => handleNavClick(link.hash)}
                  className={getLinkClass(link)}
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-cyan-400 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              ) : (
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={getLinkClass(link)}
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-cyan-400 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              )}
            </li>
          ))}

          {/* CTA */}
          <li className="ml-3">
            <Link
              to="/contact"
              className={`group relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 overflow-hidden ${
                scrolled ? 'btn-ocean text-white' : 'btn-glass text-white'
              }`}
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-xl transition-colors ${
            scrolled
              ? 'text-navy-800 hover:bg-gray-100'
              : 'text-white hover:bg-white/15'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative bg-navy-900/97 backdrop-blur-2xl border-t border-white/[0.08] px-4 py-4 space-y-1">
          {/* Ambient glow */}
          <div className="absolute top-0 right-1/4 w-56 h-56 rounded-full bg-cyan-400/[0.07] blur-[80px] pointer-events-none" />

          {navLinks.map((link) => (
            <div key={link.label} className="relative z-10">
              {link.hash ? (
                <Link
                  to={link.to}
                  onClick={() => handleNavClick(link.hash)}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
                  {link.label}
                </Link>
              ) : (
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? 'text-white bg-white/[0.08]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.07]'
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <div className="pt-3 pb-1 relative z-10">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="group relative flex items-center justify-center gap-2 w-full px-5 py-3.5 btn-ocean text-white text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
