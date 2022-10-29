import React from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid';

const FileInput = ({ setImageUrl }) => {
  return (
    <>
      <label
        htmlFor='photo-upload'
        className='cursor-pointer bg-white p-2 rounded-full flex items-center justify-center gap-2'
      >
        <ArrowUpTrayIcon className='h-6 w-6 text-neutral-400' />
        Browse
      </label>
      <input
        className='hidden absolute -z-10'
        onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))}
        type='file'
        id='photo-upload'
      />
    </>
  );
};

export default FileInput;
