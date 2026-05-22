import { useRef, useEffect, useState } from 'react';
import RevealOnScroll from '../components/RevealOnScroll';

const metrics = [
  { value: 847000, suffix: '', label: 'Tonnage Handled YTD', format: true },
  { value: 312, suffix: '', label: 'Port Calls This Quarter', format: false },
  { value: 23, suffix: '', label: 'Vessels at Sea', format: false },
  { value: 9, suffix: '', label: 'Active Projects', format: false },
];

function DashboardCounter({ target, format }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 2500;
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const formatted = format ? count.toLocaleString() : count;

  return (
    <span
      ref={ref}
      className="font-mono text-display-l text-pearl tabular-nums"
    >
      {formatted}
    </span>
  );
}

function WhyChooseUs() {
  return (
    <section className="relative bg-ink py-section overflow-hidden">
      <div className="max-w-site mx-auto section-padding">
        <RevealOnScroll>
          <span className="font-mono text-eyebrow uppercase text-mist block mb-10">
            06 — Operations
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-h1 text-pearl max-w-[640px] mb-24">
            The numbers behind the network.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {metrics.map((m, i) => (
            <RevealOnScroll key={m.label} delay={0.1 + i * 0.08}>
              <div
                className={`py-10 ${i < metrics.length - 1 ? 'hairline-b' : ''} ${i === metrics.length - 2 ? 'hairline-b' : ''}`}
              >
                <DashboardCounter target={m.value} format={m.format} />
                <div className="mt-3">
                  <span className="font-mono text-eyebrow uppercase text-mist">
                    {m.label}
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Subtle live indicator */}
        <RevealOnScroll delay={0.5}>
          <div className="mt-16 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal" />
            </span>
            <span className="font-mono text-eyebrow uppercase text-mist">
              Operational data · Updated quarterly
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default WhyChooseUs;
