import React, { useState } from 'react';
import Header from './components/Header';
import FileInput from './components/FileInput';
import LinkInput from './components/LinkInput';
import ImageDisplay from './components/ImageDisplay';
import ColorDisplay from './components/ColorDisplay';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className='w-screen h-screen text-neutral-800 py-12 font-inter bg-neutral-100'>
      <div className='flex flex-col items-center gap-10'>
        <Header />
        <div className='flex flex-col gap-2'>
          <LinkInput imageUrl={imageUrl} setImageUrl={setImageUrl} />
          <FileInput setImageUrl={setImageUrl} />
        </div>
        <ImageDisplay imageUrl={imageUrl} />
        <ColorDisplay imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default App;
