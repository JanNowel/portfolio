import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 1.8,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(from + (to - from) * easeProgress);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="font-bold tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};
