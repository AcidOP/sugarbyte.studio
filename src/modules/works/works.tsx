'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap, ScrollTrigger } from '@/lib/gsap';

const Works = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // PIN — layout only
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=160%',
      pin: pinRef.current,
      pinSpacing: true,
    });

    // SCALE — animation only
    gsap.fromTo(
      titleRef.current,
      { scale: 1.5 },
      {
        scale: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top+=5% top',
          end: 'top+=100% top',
          scrub: 0.4,
        },
      },
    );

    gsap.set(titleRef.current, {
      transformOrigin: '50% 50%',
      willChange: 'transform',
    });
  });

  return (
    <section ref={sectionRef} className='my-20 min-h-[260vh] bg-[#EBF400]'>
      <div ref={pinRef} className='grid h-screen place-content-center'>
        <h4
          ref={titleRef}
          className='font-primary text-center text-9xl leading-[0.8] font-black'
        >
          SELECTED <br /> WORKS <br /> (2024—2026)
        </h4>
      </div>
    </section>
  );
};

export default Works;
