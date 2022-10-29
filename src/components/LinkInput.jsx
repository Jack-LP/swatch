import React, { useState } from 'react';

const LinkInput = ({ setImageUrl }) => {
  const [urlInput, setUrlInput] = useState('');

  const handleSubmit = () => {
    setImageUrl(urlInput);
    setUrlInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
      setUrlInput('');
    }
  };

  return (
    <div className='flex gap-2'>
      <input
        onChange={(e) => setUrlInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        type='text'
        value={urlInput}
        placeholder='Enter Image URL'
        className='text-black'
      />
      <button onClick={handleSubmit} className='bg-white text-black'>
        Submit
      </button>
      {urlInput}
    </div>
  );
};

export default LinkInput;
