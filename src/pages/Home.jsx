import React from 'react';
import Hero from '../sections/Hero';
import TrustBar from '../sections/TrustBar';
import About from '../sections/About';
import Companies from '../sections/Companies';
import Services from '../sections/Services';
import WhyChooseUs from '../sections/WhyChooseUs';
import MissionVision from '../sections/MissionVision';
import CallToAction from '../sections/CallToAction';
import useScrollReveal from '../hooks/useScrollReveal';

function Home() {
  useScrollReveal();
  return (
    <>
      <Hero />
      <TrustBar />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Companies />
      </div>
      <div className="reveal">
        <Services />
      </div>
      <div className="reveal">
        <WhyChooseUs />
      </div>
      <div className="reveal">
        <MissionVision />
      </div>
      <div className="reveal">
        <CallToAction />
      </div>
    </>
  );
}
export default Home;
