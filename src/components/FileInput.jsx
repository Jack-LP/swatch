import React from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';

const FileInput = ({ setImageUrl, setImageName }) => {
  const handleChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setImageName(e.target.files[0].name);
  };

  return (
    <>
      <label
        htmlFor='photo-upload'
        className='cursor-pointer bg-white dark:bg-neutral-700 p-2 rounded-full flex items-center justify-center gap-2'
      >
        <ArrowUpTrayIcon className='h-6 w-6 text-neutral-400' />
        Browse
      </label>
      <input
        className='hidden absolute -z-10'
        onChange={(e) => handleChange(e)}
        type='file'
        accept='image/png, image/jpeg'
        id='photo-upload'
      />
    </>
  );
};

export default FileInput;
