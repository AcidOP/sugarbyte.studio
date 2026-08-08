import { cn } from '@/lib/utils';

import type { StatData } from './stats-date';

interface IProps {
  stats: StatData[];
  highlight?: 'even' | 'odd';
  className?: string;
}

const StatsGrid = ({ stats, className, highlight = 'even' }: IProps) => {
  const remainder = highlight === 'even' ? 0 : 1;
  return (
    <section className={cn('mt-5 grid grid-cols-2 gap-5 lg:grid-cols-4', className)}>
      {stats.map((stat, index) => (
        <div
          key={stat.heading}
          className='flex flex-col items-start gap-3.5 bg-neutral-100 p-3 transition-transform duration-300 ease-in-out hover:scale-97'
        >
          <h6
            className={cn(
              'font-primary text-center text-2xl font-bold text-neutral-400 underline decoration-neutral-300 decoration-1 underline-offset-8 lg:text-xl',
              index % 2 === remainder && 'text-neutral-500',
            )}
          >
            {stat.heading}
          </h6>

          <span className='font-primary text-4xl font-black text-neutral-800 lg:text-2xl'>
            {stat.value}
          </span>

          <p className='text-base text-nowrap text-neutral-600 lg:text-sm'>
            {stat.subheading}
          </p>
        </div>
      ))}
    </section>
  );
};

export default StatsGrid;
