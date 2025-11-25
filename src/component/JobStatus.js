import React from 'react';
import { FormButton } from './FormButton';
import deleteImg from '../images/delete-icon.png'
import './JobStatus.css';

export const JobStatus = ({job, deleteJob, updateJobStatus}) => {
 const handleStatuschange = (e) => {
  updateJobStatus(job.id, e.target.value);
 };

  return (
    
    <article className='jobStateArt'>
      <p className='textArticle'>Paragraph text</p>
      <div className='jobBox'>
        <div className='jobStatBox'>
          <FormButton
            value={job.title}
            onClick={() => {
            console.log('Updating job: ', job.id, 'to Completed');
            updateJobStatus(job.id, 'Completed');

           }}
          />

          <select value={job.status}  onChange={handleStatuschange}>
          <option value="Need to Start">Need to Start</option>
          <option value="Work in progress">Work in progress</option>
          <option value="Completed">Completed</option>
         </select>

          {job.status !== 'Need to Start' && (
            <FormButton
              value='Start'
              onClick={() => {
              console.log('Updating job: ', job.id, 'to Work in progress');
              updateJobStatus(job.id, 'Work in progress');
              }}
            />
          )}
       
        </div>
        <div className='jobDelete'>
          <img src={deleteImg} alt='delete icon' className='deleteImage'
           onClick={() => {
            console.log('Deleting job:', job.id);
            deleteJob(job.id);
           }}
          />
        </div>
      </div>

    </article>
  );
};
