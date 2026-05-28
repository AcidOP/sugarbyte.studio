'use client';

import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

interface IProps {
  text: string;
  className?: string;
}

export const ScreenFitText = ({ text, className }: IProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const frame = useRef<number | null>(null);

  const resizeText = () => {
    const container = containerRef.current;
    const textEl = textRef.current;

    if (!container || !textEl) return;

    const containerWidth =
      container.clientWidth -
      parseFloat(getComputedStyle(container).paddingLeft) -
      parseFloat(getComputedStyle(container).paddingRight);

    let min = 4;
    let max = containerWidth; // tighter upper bound

    while (min <= max) {
      const mid = (min + max) >> 1;

      textEl.style.fontSize = mid + 'px';

      const width = textEl.offsetWidth;

      if (width <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    const finalSize = max;

    textEl.style.fontSize = finalSize + 'px';

    /* dynamic line-height */
    const lineHeightRatio = 0.88;
    textEl.style.lineHeight = finalSize * lineHeightRatio + 'px';

    /* optical letter spacing for large typography */
    const tracking = Math.max(-0.02 * finalSize, -8);
    textEl.style.letterSpacing = tracking + 'px';
  };

  const scheduleResize = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(resizeText);
  };

  useEffect(() => {
    scheduleResize();

    const observer = new ResizeObserver(scheduleResize);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex w-full transform-gpu items-center overflow-hidden',
        'select-none',
        className,
      )}
    >
      <span
        ref={textRef}
        className={cn(
          'mx-auto transform-gpu text-center font-black whitespace-nowrap uppercase',
          'will-change-[font-size]',
          '[font-kerning:normal]',
          '[font-feature-settings:"kern"]',
        )}
      >
        {text}
      </span>
    </div>
  );
};
