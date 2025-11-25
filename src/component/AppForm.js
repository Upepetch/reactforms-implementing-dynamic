import React, { useState } from 'react';
import './AppForm.css';
import { FormButton } from './FormButton';


export const AppForm = ({addNewJob}) => {
 const [title, setTitle] = useState('');
 const [status, setStatus]= useState('Need to Start');

 const handleSubmit = (e) => {
  e.preventDefault();
  if (title.trim()) {
    addNewJob(title, status)
    setTitle('');
    setStatus('Need to Start');
    
  }
 };

  return (
    <div className='form-header'>
        <form onSubmit={handleSubmit}>
            <input type="text" className='bot-in' placeholder='Enter the job' value={title}
             onChange={(e) => setTitle(e.target.value)}
            />

            <div className='form-details'>
                <div className='bottom-line'>
                 <FormButton value='Read Emails'onClick={() => addNewJob('Read Emails')}/>
                 <FormButton value='Web Parsing'onClick={() => addNewJob('Web Parsing')}/>
                 <FormButton value='Send Emails'onClick={() => addNewJob('Send Emails')}/>
        
                </div>
                <select 
                  className='job-status'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="start">Start process</option>
                    <option value="running">Run process</option>
                    <option value="stopped">Stop process</option>
                </select>
                <button type='submit' className='submit-data' onClick={addNewJob}>Add Job</button>
            </div>
        </form>

    </div>
  );
};