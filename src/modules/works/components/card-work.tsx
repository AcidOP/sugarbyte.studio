'use client';

import { useRef } from 'react';

import { gsap } from 'gsap';

import type { Work } from '@/data/works';

const WorkCard = ({ work }: { work: Work }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTween = useRef<gsap.core.Tween | null>(null);

  const handleMouseEnter = () => {
    if (!hoverTween.current && cardRef.current) {
      hoverTween.current = gsap.to(cardRef.current, {
        y: 6,
        skewX: 0.25,
        scale: 0.97,
        duration: 0.25,
        ease: 'back.inOut',
      });
    } else {
      hoverTween.current?.play();
    }
  };

  const handleMouseLeave = () => {
    hoverTween.current?.reverse();
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='will-change-transform'
    >
      <div className='font-primary mb-2 flex justify-between text-xl font-medium text-neutral-300 uppercase'>
        <h5>{work.name}</h5>
        <time>{work.date}</time>
      </div>

      <div className='grid aspect-square place-content-center bg-neutral-600'>
        <ul className='marker:text-accent flex flex-col text-lg font-normal text-neutral-300'>
          {work.outcomes?.map(item => (
            <li key={item} className='list-disc'>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
