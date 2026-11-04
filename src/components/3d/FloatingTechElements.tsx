import React from 'react';
import { FLOATING_TECH_ECOSYSTEM } from '../../data/floatingTechData';
import { FloatingTechBadge } from './FloatingTechBadge';

/**
 * Floating layer sits between the navbar (top) and the scroll indicator (bottom),
 * above the hero content (z-30) so badges are always visible. Badges use
 * percentage anchors inside this layer, so they stay on-screen on every device.
 */
export const FloatingTechElements: React.FC = () => {
  return (
    <div className="absolute inset-x-0 top-24 bottom-16 pointer-events-none overflow-hidden z-30 select-none">
      {FLOATING_TECH_ECOSYSTEM.map((item) => (
        <FloatingTechBadge key={item.id} item={item} />
      ))}
    </div>
  );
};
