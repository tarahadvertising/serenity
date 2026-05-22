import RevealOnScroll from '../components/RevealOnScroll';

const leaders = [
  {
    name: 'Arun .V.V',
    role: 'Chief Executive Officer',
    bio: "Strategic leader with extensive experience in maritime operations and business development. Drives the group's vision and growth across all portfolio companies.",
    photo: '/arun.jpeg',
  },
  {
    name: 'Yoosaf Noohukannu',
    role: 'Chief Operating Officer',
    bio: 'Operations expert with deep industry knowledge. Oversees operational excellence and integration across the four portfolio companies.',
    photo: '/yoosaf.png',
  },
];
const commitments = [
  {
    target: 'Net Zero by 2040',
    desc: 'Across all group operations and supply chain',
  },
  {
    target: 'IMO 2050 Aligned',
    desc: 'Decarbonization pathway for managed fleet',
  },
  {
    target: '100% Sustainable',
    desc: 'Marine biodiversity offset program by 2030',
  },
];

function MissionVision() {
  return (
    <>
      {/* Section 07 — Leadership */}
      <section className="relative bg-deep-sea py-section overflow-hidden">
        <div className="max-w-site mx-auto section-padding">
          <RevealOnScroll>
            <span className="font-mono text-eyebrow uppercase text-mist block mb-10">
              07 — Leadership
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="font-display text-h1 text-pearl max-w-[500px] mb-24">
              The people behind the portfolio.
            </h2>
          </RevealOnScroll>

          <div className="space-y-0">
            {leaders.map((leader, i) => (
              <RevealOnScroll key={leader.name} delay={0.1 + i * 0.08}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start py-12 ${i < leaders.length - 1 ? 'hairline-b' : ''}`}
                >
                  {/* Portrait */}
                  <div
                    className={`lg:col-span-4 ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                  >
                    <div className="aspect-[3/4] bg-midnight rounded-sm overflow-hidden">
                      <img
                        src={leader.photo}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div
                    className={`lg:col-span-8 ${i % 2 === 1 ? 'lg:order-1' : ''} flex flex-col justify-center`}
                  >
                    <h3 className="font-display text-display-l text-pearl mb-2">
                      {leader.name}
                    </h3>
                    <span className="font-mono text-eyebrow uppercase text-brass mb-6 block">
                      {leader.role}
                    </span>
                    <p className="text-body-l text-mist max-w-[480px]">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Section 08 — Sustainability */}
      <section className="relative bg-ink overflow-hidden">
        {/* Full-bleed image */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/about.webp')" }}
          />
          <div className="absolute inset-0 bg-ink/60" />

          <div className="relative h-full flex items-end">
            <div className="max-w-site mx-auto section-padding pb-16 w-full">
              <RevealOnScroll>
                <span className="font-mono text-eyebrow uppercase text-mist block mb-8">
                  08 — Stewardship
                </span>
              </RevealOnScroll>

              <RevealOnScroll delay={0.1}>
                <p className="font-display text-h2 text-pearl max-w-[700px]">
                  The ocean is not just where we work. It is what we protect.
                  Our commitment to{' '}
                  <span className="text-brass">decarbonization</span>,
                  biodiversity, and responsible operations is not a department —
                  it is a condition of employment.
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </div>

        {/* Commitment targets */}
        <div className="max-w-site mx-auto section-padding py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commitments.map((c, i) => (
              <RevealOnScroll key={c.target} delay={0.1 + i * 0.08}>
                <div className="py-6">
                  <span className="font-mono text-h3 text-pearl block mb-2">
                    {c.target}
                  </span>
                  <span className="text-body text-mist">{c.desc}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MissionVision;
