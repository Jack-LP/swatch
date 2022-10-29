import React from 'react';

const FileInput = ({ setImageUrl }) => {
  return (
    <input
      onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))}
      type='file'
    />
  );
};

export default FileInput;
