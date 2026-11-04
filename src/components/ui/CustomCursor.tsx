import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('.interactive') ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a';

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer subtle halo ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-purple-500/40 mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.03)',
          borderColor: isHovering ? 'rgba(168, 85, 247, 0.7)' : 'rgba(139, 92, 246, 0.4)',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      />
      {/* Center sharp glowing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white shadow-glow-violet"
        animate={{
          x: mousePosition.x - (isHovering ? 3 : 2),
          y: mousePosition.y - (isHovering ? 3 : 2),
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 700,
          mass: 0.1,
        }}
      />
    </>
  );
};
