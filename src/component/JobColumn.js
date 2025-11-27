import React from 'react';
import './JobColumn.css';
import { JobStatus } from './JobStatus';


export const JobColumn = ({status, imageIcon, jobs, deleteJob, updateJobStatus, editJob}) => {
  return (
    <section className='column1'>
      <h2 className='heading-status'>{status}</h2>
        <img src={imageIcon} alt={status} className='status-image' /> 
        <div className='job-list'>
          {jobs.map(job => (
            <JobStatus key={job.id} 
             job={job} 
             deleteJob={deleteJob}
             updateJobStatus={updateJobStatus}
             editJob={editJob}
            />
          ))}

        </div>

    </section>
  );
};



