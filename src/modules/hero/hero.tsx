import Link from 'next/link';

import Container from '@/components/layouts/container';
import HalfLayout from '@/components/layouts/half-layout';
import ShowReel from '@/components/showreel';

import { ScreenFitText } from '@/components/ui/screen-fit-text';

const Hero = () => {
  return (
    <Container className='mt-12'>
      <HalfLayout className='min-h-[75vh] w-full'>
        <HalfLayout.LeftChild className='flex flex-col justify-between'>
          <ShowReel />

          <h2 className='max-w-3xl text-4xl font-medium text-neutral-500'>
            We design and build conversion optimized websites that help brands launch
            faster and turn attention into revenue.
          </h2>
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild className='flex flex-col justify-between'>
          <h1>
            <ScreenFitText
              text='Websites that'
              className='font-primary leading-tight'
            />
            <ScreenFitText
              text='Increase your'
              className='font-primary leading-tight'
            />
            <ScreenFitText text='revenue' className='font-primary leading-tight' />
          </h1>

          <section className='flex justify-between'>
            <Link
              href='/#works'
              className='font-medium underline underline-offset-8'
            >
              See Our Works →
            </Link>

            <Link href='/about' className='font-medium underline underline-offset-8'>
              About Us →
            </Link>
          </section>
        </HalfLayout.RightChild>
      </HalfLayout>
    </Container>
  );
};

export default Hero;
