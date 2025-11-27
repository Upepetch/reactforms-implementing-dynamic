import React, {useState}from 'react';
import { FormButton } from './FormButton';
import deleteImg from '../images/delete-icon.png'
import './JobStatus.css';
export const JobStatus = ({job, deleteJob, updateJobStatus, editJob}) => {

 // Add a feature to edit existing jobs.
 const [isEditing, setIsEditing] = useState(false);
 const [editedTitle, setEditedTitle] = useState(job.title);
 const [editedCategory, setEditedCategory] = useState(job.category);

 const handleStatuschange = (e) => {
  updateJobStatus(job.id, e.target.value);
 };

const handleSave =() => {
  editJob(job.id, {title: editedTitle, category: editedCategory});
  setIsEditing(false)
}


  return (
    
    <article className='jobStateArt'>
       {isEditing ? (
        <div className='edit-form'>
          <input 
            type="text" 
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input 
            type="text" 
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          />
          <div>
            <button className='edit-btn'  onClick={handleSave}>Save</button>
          </div>
          <div>
             <button className='edit-btn'  onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
       ) : (
        <>
           <p className='textArticle'>
          <strong>{job.title}</strong>
          <span className='category-badge'>{job.category}</span>
          ({job.status})
      </p>
      <div className='jobBox'>
        <div className='jobStatBox'>

        <select value={job.status}  onChange={handleStatuschange}>
            <option value="Need to Start">Need to Start</option>
            <option value="Work in progress">Work in progress</option>
            <option value="Completed">Completed</option>
         </select>

          {job.status === 'Need to Start' && (
            <FormButton
                value='Start'
                onClick={() => {
                console.log('Updating job: ', job.id, 'to Work in progress');
                updateJobStatus(job.id, 'Work in progress');
                editJob={editJob}
              }}
            />
          )}
       
        </div>

         <button className='edit-btn' onClick={() => setIsEditing(true)}>Edit</button>
    
        <div className='jobDelete'>
          <img src={deleteImg} alt='delete icon' className='deleteImage'
           onClick={() => {
            console.log('Deleting job:', job.id);
            deleteJob(job.id);
           }}
          />
        </div>
      </div>

        </>
       )}
       

    </article>
        
  );
};
