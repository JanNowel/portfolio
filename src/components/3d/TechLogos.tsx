import React from 'react';

interface TechLogoProps {
  techKey: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ techKey, className = 'w-4 h-4' }) => {
  switch (techKey) {
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2.2" fill="#00D8FF" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00D8FF" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      );

    case 'mern':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="#8B5CF6" strokeWidth="1.5" />
          <path d="M7 16V8L12 13L17 8V16" stroke="#C084FC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
          <path d="M6 9H13M9.5 9V17" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 15.5C14.8 16.5 16.2 17 17.5 16.2C18.8 15.4 18.5 13.8 17.2 13.3L15.8 12.7C14.5 12.2 14.5 10.5 15.8 9.8C17 9.1 18.2 9.5 18.8 10.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#339933" opacity="0.2" stroke="#339933" strokeWidth="1.4" />
          <path d="M12 6L18 9.5V14.5L12 18L6 14.5V9.5L12 6Z" fill="#68A063" />
        </svg>
      );

    case 'flutter':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 2L4 11.5L7 14.5L19.5 2H13.5Z" fill="#02569B" />
          <path d="M13.5 13L8 18.5L11 21.5L19.5 13H13.5Z" fill="#0175C2" />
          <path d="M11 16L13.8 18.8L16.6 16L13.8 13.2L11 16Z" fill="#29B6F6" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8 2C7.3 2 7.6 3.9 7.6 3.9L7.6 5.8H12V6.5H5.1C3.1 6.5 2 7.7 2 9.8C2 12.2 3.2 13 4.5 13H5.8V11.2C5.8 9.2 7.5 9.2 7.5 9.2H12C13.8 9.2 14 7.6 14 7.6V3.8C14 3.8 14 2 11.8 2ZM9.5 3.3C10 3.3 10.4 3.7 10.4 4.2C10.4 4.7 10 5.1 9.5 5.1C9 5.1 8.6 4.7 8.6 4.2C8.6 3.7 9 3.3 9.5 3.3Z" fill="#3776AB" />
          <path d="M12.2 22C16.7 22 16.4 20.1 16.4 20.1V18.2H12V17.5H18.9C20.9 17.5 22 16.3 22 14.2C22 11.8 20.8 11 19.5 11H18.2V12.8C18.2 14.8 16.5 14.8 16.5 14.8H12C10.2 14.8 10 16.4 10 16.4V20.2C10 20.2 10 22 12.2 22ZM14.5 20.7C14 20.7 13.6 20.3 13.6 19.8C13.6 19.3 14 18.9 14.5 18.9C15 18.9 15.4 19.3 15.4 19.8C15.4 20.3 15 20.7 14.5 20.7Z" fill="#FFD43B" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C11.5 3.5 6 9.5 6 14.5C6 18.5 8.7 21.8 12 22C15.3 21.8 18 18.5 18 14.5C18 9.5 12.5 3.5 12 2Z" fill="#13AA52" opacity="0.2" />
          <path d="M12 2V22C15.3 21.8 18 18.5 18 14.5C18 9.5 12 2 12 2Z" fill="#13AA52" />
          <path d="M12 2V22C8.7 21.8 6 18.5 6 14.5C6 9.5 12 2 12 2Z" fill="#116149" />
          <path d="M12 22V14.5" stroke="#FFFFFF" strokeWidth="0.8" />
        </svg>
      );

    case 'cloudflare':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M18.5 11C18.2 8.2 15.8 6 13 6C10.8 6 8.8 7.3 8 9.2C5.8 9.6 4 11.6 4 14C4 16.8 6.2 19 9 19H18.5C20.4 19 22 17.4 22 15.5C22 13.6 20.5 12 18.5 11Z" fill="#F38020" />
          <path d="M18.5 11C18.2 8.2 15.8 6 13 6C11.8 6 10.6 6.5 9.7 7.4L13.5 15H18.5C20.4 15 22 14.2 22 13.5C22 12.2 20.5 11.2 18.5 11Z" fill="#FAAE40" />
        </svg>
      );

    case 'leaflet':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.5C12 21.5 5 14.5 5 9.5C5 5.5 8.1 2.5 12 2.5C15.9 2.5 19 5.5 19 9.5C19 14.5 12 21.5 12 21.5Z" fill="#84CC16" opacity="0.2" stroke="#84CC16" strokeWidth="1.5" />
          <path d="M12 7V12L15 15" stroke="#84CC16" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <div className="w-2.5 h-2.5 rounded-full bg-accent-violet" />
      );
  }
};
