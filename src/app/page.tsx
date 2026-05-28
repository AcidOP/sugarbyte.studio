import CTA from '@/modules/cta';
import Hero from '@/modules/hero';
import Services from '@/modules/services';
import WhyChooseUs from '@/modules/why-choose-us';
import Works from '@/modules/works';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Works />
      <Services />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default LandingPage;
