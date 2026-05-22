import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const counters = [
  { value: 120, suffix: '+', label: 'Vessels Managed' },
  { value: 34, suffix: '', label: 'Ports Served' },
  { value: 18, suffix: '', label: 'Countries' },
];

const headlineWords = ['A', 'quiet', 'force', 'across', 'four', 'oceans.'];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const startTime = performance.now();
          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
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
      className="relative h-screen flex flex-col justify-end overflow-hidden bg-ink"
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
        >
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
        className="absolute top-16 left-6 md:left-12 lg:left-24 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      ></motion.div>

      {/* Main Content */}
      <motion.div
        className="pt-20 relative z-10 section-padding pb-16 md:pb-20"
        style={{ y: contentY }}
      >
        <div className="max-w-site mx-auto">
          {/* Headline */}
          <h1 className="font-display text-display-l text-pearl mb-8 max-w-[900px]">
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
            className="text-body-l text-mist max-w-[560px] mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Ocean Serenity is a maritime and industrial group operating four
            specialist companies in marine agency, yachting, autonomous systems,
            and industrial engineering.
          </motion.p>

          {/* Bottom Counters */}
          <motion.div
            className="flex items-start gap-12 md:gap-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {counters.map((c, i) => (
              <div key={c.label} className="flex flex-col">
                <AnimatedCounter target={c.value} suffix={c.suffix} />
                <span className="font-mono text-eyebrow uppercase text-mist mt-2">
                  {c.label}
                </span>
                {i < counters.length - 1 && <div className="hidden" />}
              </div>
            ))}

            {/* Hairline separators rendered between counters */}
          </motion.div>
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
