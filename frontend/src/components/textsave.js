import React, { useState } from 'react';
import axios from 'axios';

const TextForm = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/text', { content })
      .then(() => {
        console.log('Text saved successfully.');
        setContent('');
      })
      .catch((error) => {
        console.error('Failed to save text:', error);
      });
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter text"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TextForm;
