import CTA from '@/modules/cta';
import Hero from '@/modules/hero';
import WhyChooseUs from '@/modules/why-choose-us';
import Works from '@/modules/works';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Works />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default LandingPage;
