import { cn } from '@/lib/utils';

import type { Offer } from '../offers';

interface OfferCardProps extends Offer {
  className?: string;
}

const OfferCard = ({
  name,
  cta,
  description,
  includes,
  primary,
  startingPrice,
  timeline,
  className,
}: OfferCardProps) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between border-4 border-neutral-100 bg-red-600 px-6 py-10 transition-all',
        primary && 'bg-accent sticky top-24 border-none text-neutral-900',
        className,
      )}
    >
      <div>
        <h3 className='font-primary mb-8 text-4xl font-black md:text-5xl'>{name}</h3>

        <p
          className={cn(
            'mb-6 text-lg font-medium text-neutral-600',
            primary && 'text-neutral-900/90',
          )}
        >
          {description}
        </p>

        {includes.length > 0 && (
          <ul
            className={cn(
              'marker:text-accent list-inside list-disc space-y-2 text-xl text-neutral-700',
              primary && 'text-neutral-900 marker:text-black',
            )}
          >
            {includes.map(item => (
              <li key={item} className='text-xl'>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className='mt-10'>
        <section
          className={cn(
            'mb-6 flex items-center justify-between text-xl font-medium text-neutral-600',
            primary && 'text-neutral-900',
          )}
        >
          <span>Shipped In: {timeline} (Approx.)</span>
          <span className='font-bold'>{startingPrice}</span>
        </section>

        <button
          type='button'
          className={cn(
            'font-primary w-full cursor-pointer rounded-lg bg-neutral-300 py-4 text-xl font-black text-black transition-colors duration-200 hover:bg-neutral-400 focus-visible:outline-2 focus-visible:outline-offset-2',
            primary && 'bg-black text-white hover:bg-neutral-800',
          )}
        >
          {cta}
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
