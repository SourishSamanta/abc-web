// src/components/ToggleTheme.jsx
import { useState, useEffect } from 'react';

const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleTheme} className="mb-4 p-2 border rounded">
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ToggleTheme;
