import React from 'react';
import './JobColumn.css';
import { JobColumnItem } from './JobColumnItem';

export const JobColumn = ({title, jobs, image, alt, status, moveJob}) => {
  return (
    <div className={`job-column ${status}`}>
      <h2 className='heading-status'>
         {title}
      </h2>
        <img src={image} alt={alt} className='status-image' />
      {jobs.map((job) => (<JobColumnItem key={job.id} job={job} moveJob={moveJob} />
      ))} 

    </div>
  );
};
