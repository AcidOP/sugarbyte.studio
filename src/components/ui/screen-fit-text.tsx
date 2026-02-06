'use client';

import { useEffect, useRef } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

interface IProps {
  text: string;
  href?: string;
  className?: string;
}

export const ScreenFitText = ({ text, href, className }: IProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) return;

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + 'px';

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + 'px';
  };

  useEffect(() => {
    resizeText();
    window.addEventListener('resize', resizeText);
    return () => {
      window.removeEventListener('resize', resizeText);
    };
  }, []);

  return (
    <div
      className={cn(
        'relative flex h-auto w-full items-center overflow-hidden transition-all duration-200',
        className,
      )}
      ref={containerRef}
    >
      <span
        className={cn(
          'relative bottom-0 left-0 mx-auto text-center text-5xl font-extrabold text-nowrap whitespace-nowrap uppercase lg:text-[12rem]',
          // Hover animation for links
          href &&
            'after:absolute after:-bottom-2 after:left-0 after:h-1.75 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-violet-600 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100',
        )}
        ref={textRef}
      >
        {href ? <Link href={href}>{text}</Link> : text}
      </span>
    </div>
  );
};
