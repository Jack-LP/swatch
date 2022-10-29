import React, { useState } from 'react';

const ColorSwatch = ({ color, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-16 h-16 lg:w-24 lg:h-24 ${
        index === 0 ? 'rounded-l-xl' : 'rounded-none'
      } ${
        index === 4 ? 'rounded-r-xl' : 'rounded-none'
      } flex justify-center items-center text-neutral-100/75 cursor-pointer uppercase`}
      style={{ backgroundColor: `${color}`, textShadow: '2px #2b2b2b' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigator.clipboard.writeText(color)}
    >
      {isHovered ? color.substring(1) : null}
    </div>
  );
};

export default ColorSwatch;
