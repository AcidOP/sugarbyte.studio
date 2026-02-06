import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return <main className={cn('mx-auto px-5 lg:px-12', className)}>{children}</main>;
};

export default Container;
