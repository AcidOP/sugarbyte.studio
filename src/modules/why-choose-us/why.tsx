import { Aperture } from 'lucide-react';

import Container from '@/components/layouts/container';

import SectionHeader from '@/components/ui/section-header';

const WhyChooseUs = () => {
  return (
    <Container className='my-24'>
      <SectionHeader
        heading='Why Choose Us'
        className='text-neutral-500'
        subheading={
          <>
            <span className='text-black'>Proven results for every project,</span>{' '}
            <br /> with a focus on design <br /> and functionality.
          </>
        }
      />

      <section className='flex'>
        <section className='w-1/2'>
          <div className='h-full w-1/2 rounded-xl bg-neutral-300' />
        </section>

        <section className='w-1/2'>
          <p className='max-w-xl indent-36 text-xl font-medium text-neutral-500'>
            <span className='text-black'>No fluff, just results.</span> Thoughtful
            design and tools that make your work easier. We focus on smart design and
            useful features, project after project.
          </p>

          <div className='mt-16 grid grid-cols-4 grid-rows-6 gap-2'>
            <div className='col-span-2 row-span-2 h-full w-full rounded-xl bg-neutral-100 p-8 text-5xl font-black'>
              12
            </div>
            <div className='col-span-2 row-span-2 h-full w-full rounded-xl bg-neutral-100 p-8 text-5xl font-black'>
              95%
            </div>
            <div className='col-span-2 row-span-4 flex h-full w-full flex-col justify-between rounded-xl bg-neutral-100 p-8'>
              <p className='font-primary text-end text-xl leading-tight font-medium'>
                Successful Projects <br /> Completed
              </p>

              <p className='leading-tight font-medium text-neutral-600'>
                We&apos;ve delivered{' '}
                <span className='text-lg text-neutral-900'>12 projects</span> that
                help companies increase their revenue.
              </p>
            </div>

            <div className='col-span-2 row-span-4 flex h-full w-full flex-col justify-between rounded-xl bg-neutral-100 p-8'>
              <p className='font-primary text-end text-xl leading-tight font-medium'>
                Customer <br /> satisfaction rate
              </p>

              <section className='flex justify-end gap-2 text-neutral-600'>
                <Aperture size={40} />
                <Aperture size={40} />
                <Aperture size={40} />
                <Aperture size={40} />
              </section>
            </div>
          </div>
        </section>
      </section>
    </Container>
  );
};

export default WhyChooseUs;
