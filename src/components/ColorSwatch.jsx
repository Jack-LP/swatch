import React from 'react';

const ColorSwatch = ({ color }) => {
  return (
    <div
      className='w-10 h-10 border-2'
      style={{ backgroundColor: `${color}` }}
    />
  );
};

export default ColorSwatch;
