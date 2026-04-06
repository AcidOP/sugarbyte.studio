import Link from 'next/link';

import Container from '@/components/layouts/container';
import HalfLayout from '@/components/layouts/half-layout';
import ShowReel from '@/components/showreel';

import { ScreenFitText } from '@/components/ui/screen-fit-text';

const Hero = () => {
  return (
    <Container>
      <HalfLayout className='mt-12 min-h-[65vh] w-full'>
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

          <h2 className='max-w-3xl text-4xl font-medium text-neutral-500'>
            We design{' '}
            <span className='text-neutral-700'>high-conversion websites</span>{' '}
            engineered for lead generation, product sales, and creator monetization.
          </h2>
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild className='flex flex-col justify-between'>
          <ShowReel position='right' />

          <ul>
            <li></li>
          </ul>

          {/* <section className='flex justify-between text-xl lg:text-2xl'>
            <Link href='/about' className='font-medium underline underline-offset-8'>
              Book a Strategy Call &rarr;
            </Link>

            <Link
              href='/#works'
              className='font-medium text-neutral-700 underline underline-offset-8'
            >
              View our Work &rarr;
            </Link>
          </section> */}
        </HalfLayout.RightChild>
      </HalfLayout>
    </Container>
  );
};

export default Hero;
