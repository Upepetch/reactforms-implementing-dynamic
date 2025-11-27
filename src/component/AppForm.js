import React, { useState } from 'react';
import './AppForm.css';
import { FormButton } from './FormButton';

// Define the initial state once
const initialJobDetails = {
  title: '',
  category: '',
  status: 'Need to Start'
};


export const AppForm = ({addNewJob}) => {
 const [jobDetails, setJobDetails] = useState(initialJobDetails);

 // Disable the submit button if any field is empty.
 const isFormValid = 
    jobDetails.title.trim().length >= 0 &&
    jobDetails.category &&
    jobDetails.status;

 const [error, setError] = useState({});

 // Add visual feedback when a job is successfully added (e.g., a success message).
 const [success, setSuccess] = useState('');

 const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];
 const statuses = ['Need to Start', 'Work in progress', 'Completed'];

 // Function to reset the form
 const resetForm = () => {
  setJobDetails(initialJobDetails);
  setError('');
 };


 const handleInputChange = (e) => {
  const {name, value} = e.target;
  setJobDetails(prev => ({
    ...prev,
    [name] : value
  }));

  setError('');
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  // Implement error handling for each input field (e.g., job title must be at least 3 characters long).

  const newErrors = {};

    console.log("Submitting job:", jobDetails);
  if (!jobDetails.title.trim()) {
    newErrors.title = 'Job title is required.'
  } else if (jobDetails.title.trim().length < 3) {
     newErrors.title = 'Job title must be at least 3 characters long.'
  }
  
  if (!jobDetails.category) {
    newErrors.category = 'Please select a category.';
  }
  if (!jobDetails.status) {
    newErrors.category = 'Please select a status.';
  }
  if (Object.keys(newErrors).length > 0) {
    setError(newErrors);
    return;
  }

    addNewJob(jobDetails);
    setSuccess('Job added successfully!')
    setError({})
    resetForm();  // use the reset function here  

    // Hide message after 2 seconds
 setTimeout(() => setSuccess(''), 2000);

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
                      selected={jobDetails.category === cat}
                      onClick={() => {
                        setJobDetails(prev => ({...prev, category: cat}));
                        setError({});
                      }}
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
                <button 
                    type='submit'
                    disabled={!isFormValid} 
                    className={`submit-data ${!isFormValid ? 'disabled' : ''}`}
                >
                  Add Job
                </button>
            </div>

           {error.title && <p className='message-error'>{error.title}</p>}
           
           {error.category && <p className='message-error'>{error.category}</p>}
           {error.status && <p className='message-error'>{error.status}</p>}
           {success && <p className='message-success'>{success}</p>}

        </form>

    </div>
  );
};