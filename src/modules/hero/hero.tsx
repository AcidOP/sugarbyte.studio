import Link from 'next/link';

import Container from '@/components/layouts/container';
import HalfLayout from '@/components/layouts/half-layout';

const Hero = () => {
  return (
    <Container className='mt-12'>
      <HalfLayout className='min-h-[75vh] gap-10'>
        <HalfLayout.LeftChild className='flex flex-col justify-between'>
          <section>
            <div className='grid aspect-video h-56 place-content-center bg-stone-300'>
              Video
            </div>

            <p className='mt-3 font-medium text-neutral-600'>SugarByte Showreel</p>
          </section>

          <h2 className='max-w-3xl text-4xl font-medium text-neutral-600'>
            We design and build conversion optimized websites that help brands launch
            faster and turn attention into revenue.
          </h2>
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild className='flex flex-col justify-between'>
          <h1 className='font-primary text-7xl font-black uppercase'>
            Websites that increase your revenue.
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
