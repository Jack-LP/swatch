import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='flex gap-1 items-center'>
      <div className='text-3xl font-semibold'>swatch</div>
      <img className='w-6 h-6' src={Logo} alt='' />
    </div>
  );
};

export default Header;
