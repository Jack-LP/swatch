import React from 'react';

const ImageDisplay = ({ imageUrl }) => {
  return (
    <img
      className='max-w-[90vw] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[480px] max-h-[50vh] sm:max-h-[400px] md:max-h-[450px] lg:max-h-[480px]  rounded-lg shadow-lg'
      src={imageUrl}
    />
  );
};

export default ImageDisplay;
