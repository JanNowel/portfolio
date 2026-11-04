import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  maxTilt?: number;
  glareOpacity?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  onClick,
  maxTilt = 8,
  glareOpacity = 0.15,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -maxTilt;
    const rotY = ((x - centerX) / centerX) * maxTilt;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 250,
        mass: 0.2,
      }}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}

      {/* Dynamic specular glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl"
        style={{
          opacity: isHovered ? glareOpacity : 0,
          background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.4), transparent 80%)`,
        }}
      />
    </motion.div>
  );
};

