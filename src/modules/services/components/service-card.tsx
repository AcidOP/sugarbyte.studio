import { cn } from '@/lib/utils';

import type { TServicePackage } from './service-data';

interface IProps extends TServicePackage {
  index?: number;
  className?: string;
}

const ServiceCard = ({
  index = 0,
  className,
  id,
  name,
  tagline,
  cta,
  deliverables,
  idealFor,
  outcomes,
  positioning,
  pricing: pricingRange,
  process,
  recommended,
  support,
  targetClients,
}: IProps) => {
  return (
    // Card Container
    <div
      className={cn(
        `relative flex h-157 w-150 flex-col overflow-hidden px-10 py-8 transition-all duration-300 hover:scale-[0.995]`,
        !recommended && `bg-neutral-200 text-neutral-900`,
        recommended &&
          `border-accent/15 border bg-[linear-gradient(to_bottom_right,#080808_0%,#101010_72%,#1a1f00_100%)] text-white`,

        className,
      )}
    >
      {/* Recommended Badge */}
      {recommended && (
        <div className='bg-accent/8 text-accent font-primary absolute top-6 right-6 rounded-full px-3 py-1 text-xs font-semibold uppercase'>
          Recommended
        </div>
      )}

      {/* Header */}
      {/* <div className='space-y-4'> */}
      <h5
        className={cn(
          'font-primary text-4xl font-extrabold tracking-tight',
          recommended && 'text-5xl font-black text-white',
        )}
      >
        {name} Plan.
      </h5>

      {/* Package Tagline */}
      {/* {tagline && (
          <p
            className={cn(
              'text-base leading-relaxed font-medium text-neutral-600',
              recommended && 'text-neutral-300',
            )}
          >
            {tagline}
          </p>
        )} */}
      {/* </div> */}

      {/* Pricing */}
      <div className='mt-7 space-y-7'>
        {/* Package and client benefits points */}
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
            'font-primary text-5xl font-black tracking-tight text-neutral-600',
            recommended && 'text-neutral-300',
            index == 1 && 'text-3xl',
          )}
        >
          {pricingRange}{' '}
          {index != 1 && (
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
      <div
        className={cn(
          'mt-7 mb-10 h-px w-full bg-neutral-400/50',
          recommended && 'bg-white/10',
        )}
      />

      {/* Package Benefits */}
      <div className='flex flex-1 flex-col'>
        <div className='space-y-3'>
          {deliverables.slice(0, 5).map((item, i) => (
            <div key={i} className='flex items-center gap-3'>
              <div
                className={cn(
                  'h-2 w-2 rounded-full bg-neutral-800',
                  recommended && 'bg-accent',
                )}
              />

              <p
                className={cn(
                  'text-lg text-neutral-800',
                  recommended && 'text-neutral-300',
                )}
              >
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className={cn(
            `font-primary mt-auto cursor-pointer rounded-full px-5 py-4 text-xl font-black transition-all duration-300`,
            !recommended && `bg-neutral-900 text-white hover:bg-neutral-800`,
            recommended && `bg-accent/85 hover:bg-accent text-black`,
          )}
        >
          {cta || 'Get Started'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
