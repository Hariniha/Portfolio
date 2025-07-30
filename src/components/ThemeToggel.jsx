
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' 
          : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
      }`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;