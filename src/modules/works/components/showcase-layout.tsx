'use client';

import { useMemo, useRef } from 'react';

import { useGSAP } from '@gsap/react';

import WorkCard from './card-work';

import { gsap } from '@/lib/gsap';
import { chunkifyArray } from '@/lib/utils';

import HalfLayout from '@/components/layouts/half-layout';

import type { Work } from '@/data/works';

interface ShowcaseLayoutProps {
  works: Work[];
}

const ShowcaseLayout = ({ works }: ShowcaseLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const rows = useMemo(() => {
    const chunked = chunkifyArray(works, 3);
    // Remove last row if it has less than 2 items (preserves desktop design rule)
    if (chunked.length > 1 && chunked[chunked.length - 1].length < 2) {
      chunked.pop();
    }
    return chunked;
  }, [works]);

  useGSAP(
    () => {
      const rowElements = containerRef.current?.querySelectorAll('[data-work-row]');
      if (!rowElements) return;

      rowElements.forEach(rowEl => {
        const cards = rowEl.querySelectorAll('[data-work-card]');
        if (!cards.length) return;

        gsap.fromTo(
          cards,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: { each: 0.18, from: 'end' },
            duration: 0.8,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: rowEl,
              start: 'top 80%',
            },
          },
        );
      });
    },
    { scope: containerRef, dependencies: [rows] },
  );

  return (
    <div ref={containerRef}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          data-work-row
          className='mt-8 grid gap-5 md:mt-12 md:gap-8'
        >
          {/* Mobile: Standard 1-column stack. Desktop (md+): Asymmetric HalfLayout */}
          <HalfLayout className='flex flex-col gap-5 md:flex-row'>
            <HalfLayout.LeftChild className='grid grid-cols-1 gap-5 md:grid-cols-2'>
              <div data-work-card>
                <WorkCard work={row[0]} />
              </div>

              {row[1] && (
                <div data-work-card>
                  <WorkCard work={row[1]} />
                </div>
              )}
            </HalfLayout.LeftChild>

            <HalfLayout.RightChild>
              {row[2] && (
                <div data-work-card>
                  <WorkCard work={row[2]} />
                </div>
              )}
            </HalfLayout.RightChild>
          </HalfLayout>
        </div>
      ))}
    </div>
  );
};

export default ShowcaseLayout;
