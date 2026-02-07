import HalfLayout from '../layouts/half-layout';

import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

type StringOrReactNode = string | ReactNode;

interface IProps {
  count: number;
  heading: StringOrReactNode;
  description: StringOrReactNode;
  className?: string;
}

const Count = ({ value }: { value: number }) => {
  return (
    <p className='font-primary text-4xl text-neutral-500'>
      (<span className='px-1 font-black text-neutral-700'>{value}</span>)
    </p>
  );
};

const DescriptiveHeader = ({ count, heading, description, className }: IProps) => {
  return (
    <HalfLayout className={cn('py-48', className)}>
      <HalfLayout.LeftChild>
        <h2 className='font-primary text-7xl font-black'>{heading}</h2>
        <Count value={count} />
      </HalfLayout.LeftChild>
      <HalfLayout.RightChild>
        <p className='max-w-lg text-xl font-medium text-neutral-700'>
          {description}
        </p>
      </HalfLayout.RightChild>
    </HalfLayout>
  );
};

export default DescriptiveHeader;
