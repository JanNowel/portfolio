import React from 'react';
import { FLOATING_TECH_ECOSYSTEM } from '../../data/floatingTechData';
import { FloatingTechBadge } from './FloatingTechBadge';

export const FloatingTechElements: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {FLOATING_TECH_ECOSYSTEM.map((item) => (
        <FloatingTechBadge key={item.id} item={item} />
      ))}
    </div>
  );
};
