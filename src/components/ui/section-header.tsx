import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

interface IProps {
  heading: string;
  subheading: ReactNode | string;
  className?: string;
}

const SectionHeader = ({ heading, subheading, className }: IProps) => {
  return (
    <section className={cn('flex justify-between py-36', className)}>
      <div className='w-1/3 text-xl font-medium text-neutral-600'>{heading}</div>
      <div className='font-primary w-2/3 text-start text-5xl font-black'>
        {subheading}
      </div>
    </section>
  );
};

export default SectionHeader;
