import { businessStats, technicalStats } from './stats-date';
import StatsGrid from './stats-grid';

import HalfLayout from '@/components/layouts/half-layout';

import { ScreenFitText } from '@/components/ui/screen-fit-text';

const Header = () => {
  return (
    <>
      <HalfLayout>
        <HalfLayout.LeftChild className='flex flex-col justify-between gap-12'>
          {/* <ScreenFitText text='Why choose us?' className='font-primary' /> */}
          <h3 className='font-primary text-5xl font-black text-neutral-900'>
            What makes us any different?
          </h3>

          <div className='mt-12 max-w-2xl space-y-10 font-medium'>
            <p className='text-2xl text-gray-600'>
              Every project is engineered around conversions, trust, and long-term
              business growth — not just visual polish.
            </p>

            <p className='text-3xl text-gray-500'>
              We engineer more than aesthetics.
            </p>
          </div>
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild>
          <section className='space-y-12'>
            <StatsGrid stats={businessStats} />
            <StatsGrid highlight='odd' stats={technicalStats} />
          </section>
        </HalfLayout.RightChild>
      </HalfLayout>
    </>
  );
};

export default Header;
