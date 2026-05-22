import RevealOnScroll from '../components/RevealOnScroll';

const services = [
  'Port Agency & Husbandry',
  'Crew Management & Logistics',
  'Ship Chandling & Provisions',
  'Yacht Charter & Management',
  'AUV / ROV Subsea Survey',
  'Remote Inspection & Monitoring',
  'Thermal Insulation Systems',
  'Heat Tracing Engineering',
  'Turnkey Industrial Projects',
  'Safety & QHSE Compliance',
  'Marine Consultancy',
  'Offshore Supply & Logistics',
];

const companyNames = ['ASP', 'K&S', 'OI', 'Warmsol'];

const matrix = [
  [true, false, false, false],
  [true, false, false, false],
  [true, false, false, false],
  [false, true, false, false],
  [false, false, true, false],
  [false, false, true, false],
  [false, false, false, true],
  [false, false, false, true],
  [false, false, false, true],
  [true, false, true, true],
  [true, true, false, false],
  [true, false, false, true],
];

function Services() {
  return (
    <section className="relative bg-deep-sea py-section overflow-hidden">
      <div className="max-w-site mx-auto section-padding">
        <RevealOnScroll>
          <span className="font-mono text-eyebrow uppercase text-mist block mb-10">
            05 — Capabilities
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-h1 text-pearl max-w-[640px] mb-20">
            What we deliver, and who delivers it.
          </h2>
        </RevealOnScroll>

        {/* Matrix Table */}
        <RevealOnScroll delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="hairline-b">
                  <th className="text-left pb-4 pr-8">
                    <span className="font-mono text-eyebrow uppercase text-mist">
                      Service
                    </span>
                  </th>
                  {companyNames.map((name) => (
                    <th key={name} className="pb-4 px-6 text-center">
                      <span className="font-mono text-eyebrow uppercase text-mist">
                        {name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((service, i) => (
                  <tr key={service} className="hairline-b group">
                    <td className="py-4 pr-8">
                      <span className="text-body text-pearl/70 group-hover:text-pearl transition-colors duration-200">
                        {service}
                      </span>
                    </td>
                    {matrix[i].map((active, j) => (
                      <td key={j} className="py-4 px-6 text-center">
                        {active && (
                          <span className="inline-block w-2 h-2 rounded-full bg-brass" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export default Services;
