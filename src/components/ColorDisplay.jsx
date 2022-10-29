import React, { useState, useEffect } from 'react';
import { prominent } from 'color.js';
import ColorSwatch from './ColorSwatch';

const ColorDisplay = ({ imageUrl }) => {
  const [colors, setColors] = useState([]);

  const getImageColors = async () => {
    const res = await prominent(imageUrl, {
      amount: 5,
      format: 'hex',
      group: 15,
      sample: 10,
    });
    setColors(res);
  };

  useEffect(() => {
    if (imageUrl !== '') {
      getImageColors();
    }
  }, [imageUrl]);

  return imageUrl !== '' ? (
    <div className='flex flex-col gap-2 items-center'>
      <span className='text-neutral-800/75'>Click to copy</span>
      <div className='flex rounded-xl'>
        {colors.map((color, index) => (
          <ColorSwatch key={color} color={color} index={index} />
        ))}
      </div>
    </div>
  ) : null;
};

export default ColorDisplay;
