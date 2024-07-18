import React from 'react';
import { useTheme } from '../Contexts/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white "
        >
            <i className={`${theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} transition-all`}></i>
        </button>
    );
};

export default ThemeSwitcher;
