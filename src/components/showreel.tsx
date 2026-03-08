'use client';

import { useRef } from 'react';

import { useGSAP } from '@gsap/react';

import { gsap } from '@/lib/gsap';

const ANIMATION_CONFIG = {
  X_SOFTENING: 0.9,
  Y_SOFTENING: 0.5,
  X_MULTIPLIER: 60,
  Y_MULTIPLIER: 10,
  X_DURATION: 1,
  Y_DURATION: 1,
  RESET_DURATION: 1.2,
  EASE_ANIMATE: 'power4.out',
  EASE_RESET: 'power3.out',
} as const;

type Position = 'left' | 'right';

interface ShowReelProps {
  position?: Position;
}

const positionStyles: Record<Position, string> = {
  left: 'mr-auto text-left',
  right: 'ml-auto text-right',
};

const ShowReel = ({ position = 'left' }: ShowReelProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const pendingMouseEvent = useRef<MouseEvent | null>(null);

  useGSAP(() => {
    const box = boxRef.current;
    if (!box) return;

    gsap.set(box, { force3D: true });

    const xTo = gsap.quickTo(box, 'x', {
      duration: ANIMATION_CONFIG.X_DURATION,
      ease: ANIMATION_CONFIG.EASE_ANIMATE,
    });

    const yTo = gsap.quickTo(box, 'y', {
      duration: ANIMATION_CONFIG.Y_DURATION,
      ease: ANIMATION_CONFIG.EASE_ANIMATE,
    });

    const clamp = (value: number, min: number, max: number) =>
      Math.min(Math.max(value, min), max);

    const calculateAnimationValues = (e: MouseEvent) => {
      const percentX = (e.clientX / window.innerWidth - 0.5) * 2;
      const percentY = (e.clientY / window.innerHeight - 0.5) * 2;

      let x =
        percentX * ANIMATION_CONFIG.X_SOFTENING * ANIMATION_CONFIG.X_MULTIPLIER;

      let y =
        percentY * ANIMATION_CONFIG.Y_SOFTENING * ANIMATION_CONFIG.Y_MULTIPLIER;

      const rect = box.getBoundingClientRect();

      const maxRight = window.innerWidth - rect.right;
      const maxLeft = -rect.left;

      const maxBottom = window.innerHeight - rect.bottom;
      const maxTop = -rect.top;

      x = clamp(x, maxLeft, maxRight);
      y = clamp(y, maxTop, maxBottom);

      return { x, y };
    };

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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section ref={boxRef} className={`w-full max-w-md ${positionStyles[position]}`}>
      <div className='grid aspect-video h-full max-h-64 place-content-center bg-neutral-700 text-neutral-400 will-change-transform'>
        Video
      </div>

      <p className='mt-3 font-medium text-neutral-600'>SugarByte Showreel</p>
    </section>
  );
};

export default ShowReel;
