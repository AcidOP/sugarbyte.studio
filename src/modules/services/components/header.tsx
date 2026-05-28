import HalfLayout from '@/components/layouts/half-layout';

import { ScreenFitText } from '@/components/ui/screen-fit-text';

const Header = () => {
  return (
    <section>
      <HalfLayout>
        <HalfLayout.LeftChild>
          <ScreenFitText
            className='font-primary font-black normal-case'
            text='What We Ship'
          />
        </HalfLayout.LeftChild>
      </HalfLayout>

      <HalfLayout className='my-26'>
        <HalfLayout.LeftChild>
          <div />
        </HalfLayout.LeftChild>
        <HalfLayout.RightChild className='bg-red-600'>
          <p className='font-secondary text-lg leading-relaxed text-gray-600'>
            Everything we build is designed to convert and be shipped on a fixed
            timeline.
          </p>
        </HalfLayout.RightChild>
      </HalfLayout>
    </section>
  );
};

export default Header;
