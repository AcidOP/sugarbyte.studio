import Header from './components/header';
import Testimonials from './components/testimonials';

import Container from '@/components/layouts/container';

const WhyChooseUs = () => {
  return (
    <div className='min-h-screen py-48'>
      <Container className='flex flex-col space-y-24'>
        <Header />
        <Testimonials />
      </Container>
    </div>
  );
};

export default WhyChooseUs;
