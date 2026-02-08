import { works } from '@/data/works';

import ShowcaseLayout from './showcase-layout';

import Container from '@/components/layouts/container';

const Showcase = () => {
  return (
    <Container className='my-20'>
      <ShowcaseLayout works={works} />
    </Container>
  );
};

export default Showcase;
