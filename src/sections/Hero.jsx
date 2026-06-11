import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const counters = [
  { value: 120, suffix: '+', label: 'Vessels Attended' },
  { value: 34, suffix: '', label: 'Ports Served' },
  { value: 18, suffix: '', label: 'Countries' },
];
const headlineWords = ['Fathoming', 'oceans', 'beyond', 'technology'];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationRef.current) {
          animationRef.current = true;
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
              animationRef.current = requestAnimationFrame(step);
            }
          };
          animationRef.current = requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target]);

  return (
    <span ref={ref} className="font-mono text-h2 text-pearl tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.45, 0.75]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  return (
    <section
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-ink"
      aria-label="Hero"
    >
      {/* Video Background */}
      <motion.div className="absolute inset-0" style={{ scale: videoScale }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/about.webp"
          preload="metadata"
          loading="lazy"
        >
          <source src="/homebanner.webm" type="video/webm" />
          <source src="/homebanner.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-ink"
        style={{ opacity: overlayOpacity }}
      />
      {/* Top-left Eyebrow */}
      <motion.div
        className="absolute top-16 left-6 md:left-12 lg:left-gutter z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      ></motion.div>
      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto section-padding"
        style={{ y: contentY }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="font-display text-display-l text-pearl mb-8">
              {headlineWords.map((word, i) => (
                <span key={i} className="inline-block word-mask mr-[0.25em]">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.08,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Supporting Text */}
            <motion.p
              className="text-body-l text-mist max-w-[500px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.0,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Ocean Serenity is a maritime and industrial group operating four
              specialist companies in Ship Repairs, Ship Chandling Services,
              International Port Service Assistants, and Industrial Services.
            </motion.p>
          </div>

          {/* Right Column - Counters */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              className="flex flex-col space-y-8 lg:space-y-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {counters.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="flex flex-col items-center lg:items-end text-center lg:text-right"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2 + i * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {c.label === 'Vessels Attended' && (
                    <span className="font-mono text-eyebrow uppercase text-mist/70 italic mb-1">
                      This Year
                    </span>
                  )}
                  <AnimatedCounter target={c.value} suffix={c.suffix} />
                  <span className="font-mono text-eyebrow uppercase text-mist mt-2">
                    {c.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 right-6 md:right-12 lg:right-gutter z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      ></motion.div>
    </section>
  );
}

export default Hero;
