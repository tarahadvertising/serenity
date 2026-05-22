import RevealOnScroll from '../components/RevealOnScroll';

const principles = [
  {
    num: '01',
    title: 'Integrity',
    desc: 'Every commitment honoured, every deadline met.',
  },
  {
    num: '02',
    title: 'Precision',
    desc: 'Engineered accuracy across every operation.',
  },
  {
    num: '03',
    title: 'Stewardship',
    desc: 'Custodians of the ocean and its resources.',
  },
  { num: '04', title: 'Endurance', desc: 'Built for decades, not quarters.' },
];

function About() {
  return (
    <section className="relative bg-ink py-section overflow-hidden">
      <div className="max-w-site mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — Manifesto */}
          <div className="lg:col-span-7">
            <RevealOnScroll>
              <span className="font-mono text-eyebrow uppercase text-mist block mb-10">
                02 — The Group
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <p className="font-display text-h2 text-pearl leading-snug max-w-[720px]">
                We don't chase scale. We build{' '}
                <span className="text-brass">deliberate</span> companies that
                solve specific problems for the people who move the world's
                cargo, capital, and curiosity across{' '}
                <span className="text-brass">water</span>.
              </p>
            </RevealOnScroll>
          </div>

          {/* Right — Principles */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            {principles.map((p, i) => (
              <RevealOnScroll key={p.num} delay={0.1 + i * 0.08}>
                <div
                  className={`py-6 ${i < principles.length - 1 ? 'hairline-b' : ''}`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-eyebrow text-brass">
                      {p.num}
                    </span>
                    <div>
                      <h4 className="font-display text-h3 text-pearl mb-1">
                        {p.title}
                      </h4>
                      <p className="text-body text-mist">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
