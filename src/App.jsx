import React, { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import FileInput from './components/FileInput';
import LinkInput from './components/LinkInput';
import ImageDisplay from './components/ImageDisplay';
import ColorDisplay from './components/ColorDisplay';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [imageUrl, setImageUrl] = useState('');
  const [imageName, setImageName] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className='w-screen h-screen text-neutral-800 dark:text-neutral-100 py-12 font-inter bg-neutral-100 dark:bg-neutral-800'>
      <ThemeToggle theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <div className='flex flex-col items-center gap-10'>
        <Header />
        <div className='flex flex-col gap-2'>
          <LinkInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            setImageName={setImageName}
          />
          <FileInput setImageUrl={setImageUrl} setImageName={setImageName} />
        </div>
        <ImageDisplay imageUrl={imageUrl} imageName={imageName} />
        <ColorDisplay imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default App;
