import { cn } from '@/lib/utils';

import type { TServicePackage } from './service-data';

interface ServiceCardProps extends TServicePackage {
  index?: number;
  className?: string;
}

const ServiceCard = ({
  index = 0,
  className,
  name,
  cta,
  deliverables = [],
  positioning,
  pricing: pricingRange,
  recommended,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        'relative flex min-h-152 w-full max-w-lg flex-col justify-between overflow-hidden px-6 py-8 transition-all duration-300 hover:scale-[0.995] sm:px-10',
        recommended
          ? 'border-accent/15 border bg-[linear-gradient(to_bottom_right,#080808_0%,#101010_72%,#1a1f00_100%)] text-white'
          : 'bg-neutral-200 text-neutral-900',
        className,
      )}
    >
      <div>
        {/* Recommended Badge */}
        {recommended && (
          <span className='font-primary bg-accent/10 text-accent absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase'>
            Recommended
          </span>
        )}

        {/* Header */}
        <h3
          className={cn(
            'font-primary text-3xl font-extrabold tracking-tight sm:text-4xl',
            recommended && 'text-4xl font-black text-white sm:text-5xl',
          )}
        >
          {name} Plan.
        </h3>

        {/* Pricing & Positioning */}
        <div className='mt-6 space-y-4'>
          {positioning && (
            <p
              className={cn(
                'text-base leading-relaxed font-medium text-neutral-600',
                recommended && 'text-neutral-300',
              )}
            >
              {positioning}
            </p>
          )}

          <p
            className={cn(
              'font-primary text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl',
              recommended && 'text-white',
              index === 1 && 'text-2xl sm:text-3xl',
            )}
          >
            {pricingRange}{' '}
            {index !== 1 && (
              <span
                className={cn(
                  'text-lg font-medium text-neutral-500',
                  recommended && 'text-neutral-400',
                )}
              >
                onwards.
              </span>
            )}
          </p>
        </div>

        {/* Divider */}
        <hr
          className={cn(
            'my-7 h-px w-full border-none bg-neutral-400/50',
            recommended && 'bg-white/10',
          )}
        />

        {/* Deliverables List */}
        {deliverables.length > 0 && (
          <ul className='space-y-3'>
            {deliverables.slice(0, 5).map(item => (
              <li key={item} className='flex items-center gap-3'>
                <span
                  className={cn(
                    'h-2 w-2 shrink-0 rounded-full bg-neutral-800',
                    recommended && 'bg-accent',
                  )}
                  aria-hidden='true'
                />
                <span
                  className={cn(
                    'text-lg font-medium text-neutral-800',
                    recommended && 'text-neutral-300',
                  )}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CTA Button */}
      <button
        type='button'
        className={cn(
          'font-primary mt-8 w-full cursor-pointer rounded-full px-5 py-4 text-xl font-black transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2',
          recommended
            ? 'bg-accent/85 hover:bg-accent focus-visible:outline-accent text-black'
            : 'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:outline-neutral-900',
        )}
      >
        {cta || 'Get Started'}
      </button>
    </div>
  );
};

export default ServiceCard;
