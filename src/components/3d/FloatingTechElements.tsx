import React from 'react';
import { FLOATING_TECH_ECOSYSTEM, FloatingTechItem } from '../../data/floatingTechData';
import { FloatingTechBadge } from './FloatingTechBadge';

export const FloatingTechElements: React.FC = () => {
  // Perimeter badges on wide screens (positioned far along canvas edges)
  const perimeterBadges: FloatingTechItem[] = FLOATING_TECH_ECOSYSTEM.filter(
    (item) =>
      item.id === 'frontend-react' ||
      item.id === 'devops-tools' ||
      item.id === 'gis-realtime'
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {perimeterBadges.map((item) => (
        <FloatingTechBadge key={item.id} item={item} />
      ))}
    </div>
  );
};
