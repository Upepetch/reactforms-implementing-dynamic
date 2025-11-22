import React, { useState } from 'react';
import './JobColumnForm.css';

export const JobColumnForm = ({addJob}) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter the job name!')
       return;
    } 
   
    addJob(title);
    setTitle(''); // clear the input
    setError('')
  }
  return (
      <form onSubmit={handleSubmit} className='jobColumn-form'>
        <input type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
           placeholder='Enter job title...'
        />

        <button type='submit'>Add Job</button>

        {error && <p style={{color: 'red'}}>{error}</p>}

      </form>
  );
};
