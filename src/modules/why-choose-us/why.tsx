import Container from '@/components/layouts/container';

import SectionHeader from '@/components/ui/section-header';

const WhyChooseUs = () => {
  return (
    <Container>
      <SectionHeader
        heading='Why Choose Us'
        subheading={
          <>
            Proven results for every project, <br /> with a focus on design <br />{' '}
            and functionality.
          </>
        }
      />
    </Container>
  );
};

export default WhyChooseUs;
