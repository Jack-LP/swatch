import React, { useState } from 'react';
import Header from './components/Header';
import LinkInput from './components/LinkInput';
import ImageDisplay from './components/ImageDisplay';

const App = () => {
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className='w-screen h-screen bg-slate-800 text-white flex flex-col items-center gap-10 py-12 font-inter'>
      <Header />
      <LinkInput imageUrl={imageUrl} setImageUrl={setImageUrl} />
      <ImageDisplay imageUrl={imageUrl} />
      {imageUrl}
    </div>
  );
};

export default App;
