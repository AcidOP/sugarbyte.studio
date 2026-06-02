import ServiceHeader from './components/header';
import ServiceLayout from './components/showcase-layout';

import Container from '@/components/layouts/container';

const Services = () => {
  return (
    <div id='services' className='scroll-mt-24'>
      <Container className='min-h-screen bg-[#37353E] py-16 pb-32'>
        <ServiceHeader />
        <ServiceLayout />
      </Container>
    </div>
  );
};

export default Services;
