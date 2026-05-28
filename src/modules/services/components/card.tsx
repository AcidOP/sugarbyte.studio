import { cn } from '@/lib/utils';

import type { Offer } from '../offers';

const OfferCard = ({
  name,
  cta,
  description,
  idealFor,
  includes,
  primary,
  startingPrice,
  timeline,
}: Offer) => {
  return (
    <div
      className={cn(
        'rounded-2xl border-4 border-neutral-100 bg-white px-6 py-10',
        primary && 'bg-accent sticky top-24 border-none',
      )}
    >
      <h5 className='font-primary mb-8 text-5xl font-black'>{name}</h5>
      <p className='mb-6 text-lg font-medium text-neutral-600'>{description}</p>

      {/* <p>{idealFor}</p> */}

      <ul
        className={cn(
          'marker:text-accent list-inside list-disc text-xl text-neutral-700',
          primary && 'marker:text-black',
        )}
      >
        {includes.map((item, index) => (
          <li key={index} className='text-xl'>
            {item}
          </li>
        ))}
      </ul>

      <section className='my-10 flex justify-between text-xl text-neutral-600'>
        <p>Shipped In: {timeline} (Approx.)</p>
        <p>{startingPrice}</p>
      </section>

      <button
        className={cn(
          'font-primary hover:bg-accent w-full cursor-pointer bg-neutral-300 py-4 text-xl font-black text-black transition-all duration-200',
          primary && 'bg-black text-white',
        )}
      >
        {cta}
      </button>
    </div>
  );
};

export default OfferCard;
