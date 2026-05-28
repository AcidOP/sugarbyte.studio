import Header from './components/header';
import ServicesInfo from './components/services-info';
import { offers } from './offers';

import Container from '@/components/layouts/container';

const Services = () => {
  return (
    <Container className='my-24 min-h-screen'>
      <Header />
      <ServicesInfo offers={offers} />
    </Container>
  );
};

export default Services;
