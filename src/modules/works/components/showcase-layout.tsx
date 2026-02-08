'use client';

import { useRef } from 'react';

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
  const rows = chunkifyArray(works, 3);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  // If a row from rows has only 1 work, we remove the last row
  if (rows.length > 1 && rows[rows.length - 1].length < 2) {
    rows.pop();
  }

  useGSAP(() => {
    rowsRef.current.forEach(rowEl => {
      if (!rowEl) return;

      const cards = rowEl.querySelectorAll('[data-work-card]');

      gsap.fromTo(
        cards,
        {
          y: 10,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.19,
          duration: 0.8,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: rowEl,
            start: 'top 80%',
          },
        },
      );
    });
  });

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          ref={el => {
            if (el) rowsRef.current[rowIndex] = el;
          }}
          className='mb-12 grid gap-8'
        >
          <HalfLayout className='gap-5'>
            <HalfLayout.LeftChild className='grid grid-cols-2 gap-5'>
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
    </>
  );
};

export default ShowcaseLayout;
