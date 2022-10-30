import React from 'react';

const ImageDisplay = ({ imageUrl, imageName }) => {
  return imageUrl !== '' ? (
    <div className='flex flex-col gap-1'>
      {imageName !== '' ? (
        <span className='text-sm font-space text-neutral-800/50 dark:text-neutral-100/50 max-w-[250px] overflow-hidden whitespace-nowrap overflow-ellipsis'>
          // {imageName}
        </span>
      ) : null}
      <img
        className='max-w-[90vw] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[480px] max-h-[50vh] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[480px]  rounded-lg shadow-lg'
        src={imageUrl}
      />
    </div>
  ) : null;
};

export default ImageDisplay;
