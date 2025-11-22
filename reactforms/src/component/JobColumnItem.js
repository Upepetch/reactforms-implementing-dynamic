import React from 'react';
import './JobColumn.css';

export const JobColumnItem = ({job, status, moveJob}) => {
  return (
    <div className='job-item'>
        <span className='job-title'>{job.title}</span>
      
        {/* Move buttons */}

          {status !== 'start' && (
            <button onClick={() => moveJob(job.id, 'start')}  className=''>To Start</button>
          )}
          {status !== 'running' && (
            <button onClick={() => moveJob(job.id, 'running')}  className=''>To Running</button>
          )}
        {status !== 'completed' && (
          <button onClick={() => moveJob(job.id, 'completed')}  className=''>To Completed</button>
        )}
    </div>
  )
}
