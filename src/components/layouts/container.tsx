/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IProps) => {
  return <main className={cn('mx-auto px-5', className)}>{children}</main>;
};

export default Container;
