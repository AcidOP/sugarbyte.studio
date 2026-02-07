'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap } from '@/lib/gsap';

const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      titleRef.current,
      { scale: 1.5 },
      {
        scale: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: true,
          pin: pinRef.current,
          anticipatePin: 1,
        },
      },
    );
  });

  return (
    <section
      ref={sectionRef}
      className='my-20 min-h-[200vh] overflow-x-hidden bg-lime-400'
    >
      <div ref={pinRef} className='my-20 grid min-h-[85vh] place-content-center'>
        <h4
          ref={titleRef}
          className='font-primary text-center text-9xl leading-24 font-black will-change-transform'
        >
          SELECTED <br /> WORKS <br /> (2024-2026)
        </h4>
      </div>
    </section>
  );
};

export default Works;
