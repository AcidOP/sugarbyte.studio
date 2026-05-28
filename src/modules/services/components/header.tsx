import HalfLayout from '@/components/layouts/half-layout';

import { ScreenFitText } from '@/components/ui/screen-fit-text';

const ServiceHeader = () => {
  return (
    <div className='pb-36'>
      <HalfLayout>
        <HalfLayout.LeftChild>
          <div />
        </HalfLayout.LeftChild>

        <HalfLayout.RightChild>
          <ScreenFitText
            text='Designed for brands'
            className='font-primary font-black text-neutral-300'
          />
          <ScreenFitText
            text='That are ready to scale'
            className='font-primary font-black text-neutral-100'
          />

          <p className='mt-12 text-xl font-medium text-neutral-300'>
            Whether you&apos;re building authority or optimizing an established
            business, our packages are structured around growth, trust, and{' '}
            <span className='decoration-accent/15 underline decoration-1 underline-offset-8'>
              long-term revenue
            </span>
            .
          </p>
        </HalfLayout.RightChild>
      </HalfLayout>
    </div>
  );
};

export default ServiceHeader;
