import { cn } from '@/lib/utils';

import type { HTMLAttributes, ReactNode } from 'react';

interface IProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return <main className={cn('mx-auto px-5 lg:px-12', className)}>{children}</main>;
};

export default Container;
