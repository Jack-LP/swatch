import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const LinkInput = ({ setImageUrl, setImageName }) => {
  const [urlInput, setUrlInput] = useState('');

  const handleSubmit = () => {
    setImageUrl(urlInput);
    setImageName('');
    setUrlInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
      setUrlInput('');
    }
  };

  return (
    <div className='flex gap-1 bg-white dark:bg-neutral-700 rounded-full'>
      <input
        onChange={(e) => setUrlInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        type='text'
        value={urlInput}
        placeholder='Image URL'
        className='p-2 px-4 rounded-full bg-white dark:bg-neutral-700 outline-none focus:ring-2'
      />
      <button
        onClick={handleSubmit}
        className='bg-white dark:bg-neutral-700 p-2 rounded-full'
      >
        <PlusIcon className='h-6 w-6 text-neutral-800 dark:text-neutral-100' />
      </button>
    </div>
  );
};

export default LinkInput;
