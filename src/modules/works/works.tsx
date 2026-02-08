'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import Header from './components/header';
import Showcase from './components/showcase';

import { gsap, ScrollTrigger } from '@/lib/gsap';

const Works = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Initial state (light yellow)
      gsap.set(containerRef.current, {
        backgroundColor: '#ebf400',
        color: '#000000',
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        onLeave: () => {
          gsap.to(containerRef.current, {
            backgroundColor: '#37353E',
            color: '#ffffff',
            duration: 1.2,
            ease: 'power3.out',
          });
        },
        onEnterBack: () => {
          gsap.to(containerRef.current, {
            backgroundColor: '#ebf400',
            color: '#000000',
            duration: 1.2,
            ease: 'power3.out',
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className='bg-accent'>
      <Header />
      <Showcase />
    </section>
  );
};

export default Works;
