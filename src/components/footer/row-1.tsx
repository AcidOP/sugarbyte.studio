import Container from '../layouts/container';
import NavCol from './col-nav';
import SocialsCol from './col-socials';

import HalfLayout from '@/components/layouts/half-layout';
import ShowReel from '@/components/showreel';

const Row1 = () => {
  return (
    <Container>
      <HalfLayout className='h-min pt-36'>
        <HalfLayout.LeftChild>
          <ShowReel />
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild>
          <div className='grid grid-cols-2 gap-16 text-neutral-900'>
            <NavCol className='w-full' />
            <SocialsCol className='w-full' />
          </div>
        </HalfLayout.RightChild>
      </HalfLayout>
    </Container>
  );
};

export default Row1;
