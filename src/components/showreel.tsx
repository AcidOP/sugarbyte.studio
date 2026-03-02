'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap } from '@/lib/gsap';

// Animation configuration constants
const ANIMATION_CONFIG = {
  X_SOFTENING: 0.9,
  Y_SOFTENING: 0.2,
  X_MULTIPLIER: 60,
  Y_MULTIPLIER: 8,
  X_DURATION: 1,
  Y_DURATION: 1.1,
  RESET_DURATION: 1.2,
  EASE_ANIMATE: 'power4.out',
  EASE_RESET: 'power3.out',
} as const;

const ShowReel = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const pendingMouseEvent = useRef<MouseEvent | null>(null);

  useGSAP(() => {
    const box = boxRef.current;
    if (!box) return;

    // Enable GPU acceleration
    gsap.set(box, { force3D: true });

    // Create quickTo instances for performant animations
    const xTo = gsap.quickTo(box, 'x', {
      duration: ANIMATION_CONFIG.X_DURATION,
      ease: ANIMATION_CONFIG.EASE_ANIMATE,
    });

    const yTo = gsap.quickTo(box, 'y', {
      duration: ANIMATION_CONFIG.Y_DURATION,
      ease: ANIMATION_CONFIG.EASE_ANIMATE,
    });

    // Calculate animation values from mouse position
    const calculateAnimationValues = (e: MouseEvent) => {
      const percentX = (e.clientX / window.innerWidth - 0.5) * 2;
      const percentY = (e.clientY / window.innerHeight - 0.5) * 2;

      const x =
        percentX * ANIMATION_CONFIG.X_SOFTENING * ANIMATION_CONFIG.X_MULTIPLIER;
      const y =
        percentY * ANIMATION_CONFIG.Y_SOFTENING * ANIMATION_CONFIG.Y_MULTIPLIER;

      return { x, y };
    };

    // RAF-throttled mouse move handler for smooth performance
    const handleMouseMove = (e: MouseEvent) => {
      pendingMouseEvent.current = e;

      if (animationFrameRef.current) return;

      animationFrameRef.current = requestAnimationFrame(() => {
        if (pendingMouseEvent.current) {
          const { x, y } = calculateAnimationValues(pendingMouseEvent.current);
          xTo(x);
          yTo(y);
        }
        animationFrameRef.current = undefined;
      });
    };

    // Reset animation on mouse leave
    const handleMouseLeave = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = undefined;
      }
      pendingMouseEvent.current = null;

      gsap.to(box, {
        x: 0,
        y: 0,
        duration: ANIMATION_CONFIG.RESET_DURATION,
        ease: ANIMATION_CONFIG.EASE_RESET,
      });
    };

    // Attach event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section ref={boxRef}>
      <div className='grid aspect-video h-full max-h-64 place-content-center bg-neutral-700 text-neutral-400 will-change-transform'>
        Video
      </div>
      <p className='mt-3 font-medium text-neutral-600'>SugarByte Showreel</p>
    </section>
  );
};

export default ShowReel;
