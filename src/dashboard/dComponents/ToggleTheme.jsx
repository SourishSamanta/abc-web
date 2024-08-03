import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importing the icons

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
    <button
      onClick={toggleTheme}
      className="mb-4 p-2 absolute right-5 border rounded flex items-center justify-center rounded-full"
    >
      {theme === 'dark' ? <FaMoon size={20} /> : <FaSun size={20} /> }
      
    </button>
  );
};

export default ToggleTheme;
