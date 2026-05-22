import { Link } from 'react-router-dom';
import RevealOnScroll from '../components/RevealOnScroll';

const articles = [
  {
    date: '14 Apr 2026',
    category: 'Group News',
    headline:
      'Ocean Serenity acquires majority stake in Warmsol Marine & Industrial',
    slug: '#',
  },
  {
    date: '28 Mar 2026',
    category: 'Technology',
    headline:
      'Ocean Infinity completes first autonomous deep-water survey in the Arabian Gulf',
    slug: '#',
  },
  {
    date: '12 Feb 2026',
    category: 'Operations',
    headline: 'ASP Global Marine opens new port agency office in Fujairah',
    slug: '#',
  },
  {
    date: '30 Jan 2026',
    category: 'Sustainability',
    headline:
      'Group-wide decarbonization roadmap published ahead of IMO review',
    slug: '#',
  },
  {
    date: '08 Dec 2025',
    category: 'Yachting',
    headline:
      'Knot & Sail launches bespoke superyacht charter programme for the Indian Ocean',
    slug: '#',
  },
];

function CallToAction() {
  return (
    <section className="relative bg-midnight py-section overflow-hidden">
      <div className="max-w-site mx-auto section-padding">
        <RevealOnScroll>
          <span className="font-mono text-eyebrow uppercase text-mist block mb-10">
            09 — Press & Insights
          </span>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <h2 className="font-display text-h1 text-pearl max-w-[500px] mb-20">
            Recent developments.
          </h2>
        </RevealOnScroll>

        <div>
          {articles.map((article, i) => (
            <RevealOnScroll key={article.headline} delay={0.05 + i * 0.06}>
              <Link to={article.slug} className="group block py-8 hairline-b">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                  {/* Date */}
                  <div className="lg:col-span-2">
                    <span className="font-mono text-eyebrow uppercase text-mist">
                      {article.date}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="lg:col-span-2">
                    <span className="font-mono text-eyebrow uppercase text-brass">
                      {article.category}
                    </span>
                  </div>

                  {/* Headline */}
                  <div className="lg:col-span-7">
                    <h3 className="font-display text-h3 text-pearl group-hover:text-brass-light transition-colors duration-entrance group-hover:translate-x-2 transform transition-transform duration-entrance">
                      {article.headline}
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-1 hidden lg:flex justify-end">
                    <span className="text-mist group-hover:text-brass transition-colors duration-hover">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
