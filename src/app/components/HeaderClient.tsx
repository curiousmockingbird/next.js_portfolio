'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Header from './Header';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      return document.cookie
        .split('; ')
        .find((row) => row.startsWith(name + '='))
        ?.split('=')[1];
    };

    const saved =
      localStorage.getItem('theme') || getCookie('theme');
    if (saved === 'light' || saved === 'dark') {
      const themeTimer = window.setTimeout(() => setTheme(saved), 0);
      return () => window.clearTimeout(themeTimer);
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove(theme === 'dark' ? 'light' : 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    document.cookie = `theme=${theme}; path=/; max-age=31536000`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

export default function HeaderClient() {
  const { theme } = useTheme();
  const imageSrc = theme === 'dark' ? '/hm.svg' : '/hm_black.svg';
  return <Header imageSrc={imageSrc} />;
}
