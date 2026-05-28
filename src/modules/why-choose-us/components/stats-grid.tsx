import { cn } from '@/lib/utils';

import { ScreenFitText } from '@/components/ui/screen-fit-text';

import type { StatData } from './stats-date';

interface IProps {
  stats: StatData[];
  highlight?: 'even' | 'odd';
  className?: string;
}

const StatsGrid = ({ stats, className, highlight = 'even' }: IProps) => {
  const remainder = highlight == 'even' ? 0 : 1;
  return (
    <section className={cn('grid grid-cols-4 gap-5', className)}>
      {stats.map((stat, index) => (
        <div key={stat.heading} className='flex flex-col items-start gap-5'>
          <h6
            className={cn(
              'font-primary text-2xl font-bold text-neutral-400 underline decoration-neutral-300 decoration-1 underline-offset-8',
              index % 2 == remainder && 'text-neutral-500',
            )}
          >
            {stat.heading}
          </h6>

          <span className='font-primary text-4xl font-black text-neutral-800'>
            {stat.value}
          </span>

          <p className='text-neutral-600'>{stat.subheading}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsGrid;
