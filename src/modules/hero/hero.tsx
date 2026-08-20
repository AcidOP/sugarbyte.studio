import Container from '@/components/layouts/container';
import HalfLayout from '@/components/layouts/half-layout';
import ShowReel from '@/components/showreel';

import { ScreenFitText } from '@/components/ui/screen-fit-text';

const Hero = () => {
  return (
    <Container className='relative pt-12 pb-24 lg:pb-12'>
      <HalfLayout className='w-full lg:min-h-[65vh]' mobileReverse>
        <HalfLayout.LeftChild className='flex flex-col justify-between'>
          <h1>
            <ScreenFitText
              text='Websites that'
              className='font-primary text-neutral-700'
            />
            <ScreenFitText
              text='Increase your'
              className='font-primary text-neutral-800'
            />
            <ScreenFitText text='revenue' className='font-primary leading-tight' />
          </h1>

          <h2 className='mt-9 max-w-3xl text-2xl leading-tight font-medium text-neutral-500 lg:text-4xl'>
            We design{' '}
            <span className='text-neutral-700'>high-conversion websites</span>{' '}
            engineered for lead generation, product sales, and creator monetization.
          </h2>
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild className='flex flex-col justify-between'>
          <ShowReel position='right' />

          {/* Removing this stuff breaks sometimes so kindly ignore this. */}
          <ul>
            <li></li>
          </ul>
        </HalfLayout.RightChild>
      </HalfLayout>
      <ScrollIndicator />
    </Container>
  );
};

const ScrollIndicator = () => {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-center text-neutral-700'>
      <p>↓ SCROLL DOWN ↓ </p>
    </div>
  );
};

export default Hero;
