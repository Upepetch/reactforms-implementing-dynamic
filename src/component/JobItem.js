import React from 'react'
import './JobStatus.css'

export const JobItem = ({job}) => {
  return (
    <div className='job-item'>
      <p>{job.title}</p>
    </div>
  )
}
