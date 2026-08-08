import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
  mobileReverse?: boolean;
}

const Child = ({ children, className }: IProps) => (
  <section className={cn('w-full lg:w-1/2', className)}>{children}</section>
);

const HalfLayout = ({ children, className, mobileReverse = false }: IProps) => (
  <div
    className={cn(
      'flex h-full justify-between gap-10 lg:flex-row',
      mobileReverse ? 'flex-col-reverse' : 'flex-col',
      className,
    )}
  >
    {children}
  </div>
);
HalfLayout.displayName = 'HalfLayout';

HalfLayout.LeftChild = Child;
HalfLayout.RightChild = Child;

export default HalfLayout;
