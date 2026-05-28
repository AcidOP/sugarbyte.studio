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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          gsap.set(box, { x: 0, y: 0 });
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(box);

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
      const rect = box.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const percentX = dx / rect.width;
      const percentY = dy / rect.height;

      let x = percentX * ANIMATION_CONFIG.X_MULTIPLIER;
      let y = percentY * ANIMATION_CONFIG.Y_MULTIPLIER;

      const maxX = 40;
      const maxY = 20;

      x = Math.max(Math.min(x, maxX), -maxX);
      y = Math.max(Math.min(y, maxY), -maxY);

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

      observer.disconnect();
    };
  }, []);

  return (
    <section className={`w-full max-w-2xl ${positionStyles[position]}`}>
      <div ref={boxRef}>
        <div className='grid aspect-video w-full place-content-center bg-neutral-700 text-neutral-400 will-change-transform'>
          Video
        </div>

        <p className='mt-3 text-xl font-medium text-neutral-600'>
          SugarByte Showreel
        </p>
      </div>
    </section>
  );
};

export default ShowReel;
