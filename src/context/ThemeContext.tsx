import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const playThemeChirp = (toTheme: Theme) => {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const startFreq = toTheme === 'light' ? 440 : 660;
    const endFreq = toTheme === 'light' ? 660 : 440;

    osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(endFreq, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);
  } catch {
    // AudioContext blocked or unsupported
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('jnb-portfolio-theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      // Respect user's system theme preference on initial load
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  const applyThemeToDOM = (t: Theme) => {
    const root = document.documentElement;
    if (t === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    }
  };

  useEffect(() => {
    applyThemeToDOM(theme);
    localStorage.setItem('jnb-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = (origin?: { x: number; y: number }) => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    playThemeChirp(nextTheme);

    const isReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Graceful fallback for browsers without View Transition API or reduced motion
    const doc = document as any;
    if (!doc.startViewTransition || isReducedMotion) {
      setTheme(nextTheme);
      applyThemeToDOM(nextTheme);
      return;
    }

    // Origin coordinate of the theme toggle button
    const x = origin?.x ?? window.innerWidth / 2;
    const y = origin?.y ?? window.innerHeight / 2;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setTheme(nextTheme);
      applyThemeToDOM(nextTheme);
    });

    transition.ready
      .then(() => {
        if (nextTheme === 'dark') {
          // When switching to dark mode: dark circular layer smoothly expands until covering entire viewport
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 500,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        } else {
          // When switching back to light mode: reverse the circular reveal animation
          // The dark layer smoothly contracts back to the button position, revealing light mode
          document.documentElement.animate(
            {
              clipPath: [
                `circle(${maxRadius}px at ${x}px ${y}px)`,
                `circle(0px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 500,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: '::view-transition-old(root)',
            }
          );
        }
      })
      .catch(() => {
        // Fallback if animation fails
        setTheme(nextTheme);
        applyThemeToDOM(nextTheme);
      });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
