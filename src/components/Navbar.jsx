import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Group', to: '/group' },
  { label: 'Companies', to: '/companies', hasMega: true },
  { label: 'Operations', to: '/operations' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
];

const companies = [
  {
    slug: 'asp-global-marine',
    name: 'ASP Global Marine',
    tag: 'Port Agency & Logistics',
    logo: '/asp.svg',
  },
  {
    slug: 'knot-and-sail',
    name: 'Knot & Sail',
    tag: 'Yacht Management',
    logo: '/knot.webp',
  },
  {
    slug: 'ocean-infinity',
    name: 'Ocean Infinity',
    tag: 'Autonomous Marine Tech',
    logo: '/infinity.webp',
  },
  {
    slug: 'warmsol',
    name: 'Warmsol Marine & Industrial',
    tag: 'Industrial Engineering',
    logo: '/warmsol.svg',
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/95 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-pearl/[0.08]" />
      )}

      <nav className="max-w-site mx-auto section-padding flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/SerenityLogo.svg"
            alt="Ocean Serenity"
            className="h-14 w-auto"
          />
        </Link>
        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasMega && setMegaOpen(true)}
              onMouseLeave={() => link.hasMega && setMegaOpen(false)}
            >
              <Link
                to={link.to}
                className={`text-sm font-sans tracking-wide transition-colors duration-hover ${
                  location.pathname.startsWith(link.to)
                    ? 'text-brass'
                    : 'text-mist hover:text-pearl'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="hidden lg:flex items-center gap-3 font-mono text-eyebrow uppercase">
          <span className="text-pearl">EN</span>
          <span className="text-pearl/20">|</span>
          <span className="text-mist hover:text-pearl transition-colors duration-hover cursor-pointer">
            AR
          </span>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            className="block w-6 h-px bg-pearl origin-center"
            animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-px bg-pearl origin-center"
            animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* Mega Panel — Companies */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="hidden lg:block absolute top-full left-0 right-0 bg-deep-sea/98 backdrop-blur-xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <div className="absolute bottom-0 left-0 right-0 h-px bg-pearl/[0.06]" />
            <div className="max-w-site mx-auto section-padding py-12">
              <div className="grid grid-cols-4 gap-8">
                {companies.map((c, i) => (
                  <motion.div
                    key={c.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: i * 0.06,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link to={`/companies/${c.slug}`} className="group block">
                      <div className="w-12 h-12 rounded-lg bg-midnight flex items-center justify-center mb-4 overflow-hidden">
                        <img
                          src={c.logo}
                          alt={c.name}
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <h4 className="font-display text-pearl text-lg mb-1 group-hover:text-brass transition-colors duration-hover">
                        {c.name}
                      </h4>
                      <p className="font-mono text-eyebrow uppercase text-mist">
                        {c.tag}
                      </p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 top-20 bg-ink/98 backdrop-blur-xl z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col px-6 py-12 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    to={link.to}
                    className="font-display text-h2 text-pearl hover:text-brass transition-colors duration-hover"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <div className="mt-auto pt-8 hairline-t">
                <div className="font-mono text-eyebrow uppercase text-mist flex gap-4">
                  <span className="text-pearl">EN</span>
                  <span className="text-pearl/20">|</span>
                  <span>AR</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
