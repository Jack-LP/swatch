import React, { useState } from 'react';
import Header from './components/Header';
import FileInput from './components/FileInput';
import LinkInput from './components/LinkInput';
import ImageDisplay from './components/ImageDisplay';
import ColorDisplay from './components/ColorDisplay';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className='w-screen h-screen bg-slate-800 text-white flex flex-col items-center gap-10 py-12 font-inter'>
      <Header />
      <LinkInput imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <FileInput setImageUrl={setImageUrl} />
      <ImageDisplay imageUrl={imageUrl} />
      <ColorDisplay imageUrl={imageUrl} />
    </div>
  );
};

export default App;
