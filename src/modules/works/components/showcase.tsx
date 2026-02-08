import { works } from '@/data/works';

import ShowcaseLayout from './showcase-layout';

import Container from '@/components/layouts/container';

const Showcase = () => {
  return (
    <Container className='pb-20'>
      <ShowcaseLayout works={works} />
    </Container>
  );
};

export default Showcase;
