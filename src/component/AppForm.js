import React, { useState } from 'react';
import './AppForm.css';
import { FormButton } from './FormButton';


export const AppForm = ({addNewJob}) => {
 const [jobDetails, setJobDetails] = useState({
  title: '',
  category: '',
  status: 'To Start'
 });

 const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];
 const statuses = ['To Start', 'In Progress', 'Completed'];


 const handleInputChange = (e) => {
  const {name, value} = e.target;
  setJobDetails(prev => ({
    ...prev,
    [name] : value
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (jobDetails.title.trim()) {
    addNewJob(jobDetails.title, jobDetails.status);
    setJobDetails({title: '', category:'', status: 'To Start'});
    
  }
 };

  return (
    <div className='form-header'>
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name='title' 
              className='bot-in' 
              placeholder='Enter the job' 
              value={jobDetails.title}
             onChange={handleInputChange}
            />

            <div className='form-details'>
                <div className='bottom-line'>
                  {categories.map(cat => (
                    <FormButton 
                      key={cat}
                      value={cat}
                      onClick={() => setJobDetails(prev => ({...prev, category: cat}))}
                    />
                    ))}
                </div>
                <select 
                  name='status'
                  className='job-status'
                  value={jobDetails.status}
                  onChange={handleInputChange}
                >
                   {statuses.map(st => (
                     <option key={st} value={st}>{st}</option>
                   ))}
                   
                  
                </select>
                <button type='submit' className='submit-data'>Add Job</button>
            </div>
        </form>

    </div>
  );
};