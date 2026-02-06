import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

type StringOrReactNode = string | ReactNode;

interface IProps {
  count: number;
  heading: StringOrReactNode;
  description: StringOrReactNode;
  className?: string;
}

const DescriptiveHeader = ({ count, heading, description, className }: IProps) => {
  return (
    <section className={cn('flex items-center justify-between py-48', className)}>
      <span className='text-3xl font-medium text-neutral-400'>
        (<span className='text-5xl text-neutral-700'>{count}</span>)
      </span>
      <h2 className='font-primary text-7xl font-black'>{heading}</h2>
      <p className='max-w-sm text-xl font-medium text-neutral-700'>{description}</p>
    </section>
  );
};

export default DescriptiveHeader;
