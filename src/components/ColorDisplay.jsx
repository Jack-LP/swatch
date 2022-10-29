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

  return (
    <div className='flex gap-4'>
      {colors.map((color) => (
        <ColorSwatch key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorDisplay;
