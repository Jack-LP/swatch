import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle = ({ theme, handleThemeSwitch }) => {
  return (
    <button
      onClick={handleThemeSwitch}
      className='absolute top-2 right-2 md:top-4 md:right-4 border-2 border-neutral-800/25 dark:border-neutral-100/25 p-2 rounded-lg'
    >
      {theme === 'dark' ? (
        <SunIcon className='h-6 w-6 text-neutral-400' />
      ) : (
        <MoonIcon className='h-6 w-6 text-neutral-400' />
      )}
    </button>
  );
};

export default ThemeToggle;
