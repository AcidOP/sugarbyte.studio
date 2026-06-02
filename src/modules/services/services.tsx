'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import ServiceHeader from './components/header';
import ServiceLayout from './components/showcase-layout';

import { gsap, ScrollTrigger } from '@/lib/gsap';

import Container from '@/components/layouts/container';

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(containerRef.current, {
        backgroundColor: '#37353E',
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        onLeave: () => {
          gsap.to(containerRef.current, {
            backgroundColor: 'white',
            duration: 0.6,
            ease: 'power3.out',
          });
        },
        onEnterBack: () => {
          gsap.to(containerRef.current, {
            backgroundColor: '#37353E',
            duration: 0.6,
            ease: 'power3.out',
          });
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div id='services' className='scroll-mt-24' ref={containerRef}>
      <Container className='min-h-screen py-16 pb-32'>
        <ServiceHeader />
        <ServiceLayout />
      </Container>
    </div>
  );
};

export default Services;
