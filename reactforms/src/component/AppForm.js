import React from 'react';
import './AppForm.css';
import { FormButton } from './FormButton';

export const AppForm = () => {
  return (
    <div className='form-header'>
        <form>
            <input type="text" className='bot-in' placeholder='Enter the job' />

            <div className='form-details'>
                <div className='bottom-line'>
                 <FormButton value='Read Emails'/>
                 <FormButton value='Web Parsing'/>
                 <FormButton value='Send Emails'/>
        
                </div>
                <select className='job-status'>
                    <option value="start">Start process</option>
                    <option value="running">Run process</option>
                    <option value="stopped">Stop process</option>
                </select>
                <button type='submit' className='submit-data'>Add Job</button>
            </div>
        </form>

    </div>
  );
};