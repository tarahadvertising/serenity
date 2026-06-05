import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-ink overflow-hidden">
      <div className="hairline-t" />
      <div className="max-w-site mx-auto section-padding py-20">
        {/* Main Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Left — HQ */}
          <div>
            <span className="font-mono text-eyebrow uppercase text-mist block mb-6">
              Headquarters
            </span>
            <address className="not-italic text-body text-pearl/70 leading-relaxed">
              Xavier Business Center
              <br />
              Office Suite A5-18
              <br />
              Dubai, UAE
            </address>
          </div>

          {/* Center — Secondary */}
          <div>
            <span className="font-mono text-eyebrow uppercase text-mist block mb-6">
              Operations
            </span>
            <p className="text-body text-pearl/70 leading-relaxed">
              United Arab Emirates · Kingdom of Saudi Arabia
              <br />
              Qatar · opening soon -&gt; (india, maldives)
            </p>
          </div>

          {/* Right — Contact */}
          <div>
            <span className="font-mono text-eyebrow uppercase text-mist block mb-6">
              Contact
            </span>
            <div className="space-y-2">
              <a
                href="mailto:info@oceanserenity.com"
                className="text-brass-hover text-body text-pearl hover:text-brass transition-colors duration-hover block"
              >
                info@oceanserenity.com
              </a>
              <a
                href="tel:+971527756765"
                className="text-body text-pearl/70 hover:text-pearl transition-colors duration-hover block"
              >
                +971 52 775 6765
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="hairline-t pt-8">
          <div className="flex items-center justify-center">
            <span className="font-mono text-[11px] text-mist/60">
              Copyright &copy; Ocean Serenity | Designed by tarah.ae
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
