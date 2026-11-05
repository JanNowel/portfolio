import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'system' | 'light' | 'dark';
export type EffectiveTheme = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  theme: EffectiveTheme;
  setMode: (mode: ThemeMode, origin?: { x: number; y: number }) => void;
  toggleTheme: (origin?: { x: number; y: number }) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const playThemeChirp = (toTheme: EffectiveTheme) => {
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

const getSystemPreference = (): EffectiveTheme => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  return 'dark';
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('jnb-portfolio-theme-mode') as ThemeMode | null;
      if (savedMode === 'system' || savedMode === 'light' || savedMode === 'dark') {
        return savedMode;
      }
      const legacyTheme = localStorage.getItem('jnb-portfolio-theme');
      if (legacyTheme === 'light' || legacyTheme === 'dark') {
        return legacyTheme;
      }
    }
    return 'system';
  });

  const [effectiveTheme, setEffectiveTheme] = useState<EffectiveTheme>(() => {
    if (mode === 'system') {
      return getSystemPreference();
    }
    return mode;
  });

  const applyThemeToDOM = (t: EffectiveTheme) => {
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

  // Listen for system OS color scheme changes when in 'system' mode
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (mode === 'system') {
        const newEffective: EffectiveTheme = e.matches ? 'light' : 'dark';
        setEffectiveTheme(newEffective);
        applyThemeToDOM(newEffective);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [mode]);

  // Synchronize initial theme application
  useEffect(() => {
    const targetTheme = mode === 'system' ? getSystemPreference() : mode;
    setEffectiveTheme(targetTheme);
    applyThemeToDOM(targetTheme);
    localStorage.setItem('jnb-portfolio-theme-mode', mode);
  }, [mode]);

  const setMode = (newMode: ThemeMode, origin?: { x: number; y: number }) => {
    if (newMode === mode) return;

    const newEffective: EffectiveTheme =
      newMode === 'system' ? getSystemPreference() : newMode;

    const willChangeEffective = newEffective !== effectiveTheme;

    if (!willChangeEffective) {
      setModeState(newMode);
      localStorage.setItem('jnb-portfolio-theme-mode', newMode);
      return;
    }

    playThemeChirp(newEffective);

    const isReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const doc = document as any;
    if (!doc.startViewTransition || isReducedMotion) {
      setModeState(newMode);
      setEffectiveTheme(newEffective);
      applyThemeToDOM(newEffective);
      localStorage.setItem('jnb-portfolio-theme-mode', newMode);
      return;
    }

    const x = origin?.x ?? window.innerWidth / 2;
    const y = origin?.y ?? window.innerHeight / 2;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      setModeState(newMode);
      setEffectiveTheme(newEffective);
      applyThemeToDOM(newEffective);
      localStorage.setItem('jnb-portfolio-theme-mode', newMode);
    });

    transition.ready
      .then(() => {
        if (newEffective === 'dark') {
          // Expanding dark circle from the button
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 480,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        } else {
          // Reverse: contracting dark circle back into button, revealing light
          document.documentElement.animate(
            {
              clipPath: [
                `circle(${maxRadius}px at ${x}px ${y}px)`,
                `circle(0px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 480,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: '::view-transition-old(root)',
            }
          );
        }
      })
      .catch(() => {
        setModeState(newMode);
        setEffectiveTheme(newEffective);
        applyThemeToDOM(newEffective);
        localStorage.setItem('jnb-portfolio-theme-mode', newMode);
      });
  };

  const toggleTheme = (origin?: { x: number; y: number }) => {
    // Cycle: system -> light -> dark -> system
    const cycleMap: Record<ThemeMode, ThemeMode> = {
      system: 'light',
      light: 'dark',
      dark: 'system',
    };
    setMode(cycleMap[mode], origin);
  };

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: effectiveTheme,
        setMode,
        toggleTheme,
      }}
    >
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
