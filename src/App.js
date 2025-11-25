import React, { useState } from 'react';
import{FaSun, FaMoon} from "react-icons/fa";
import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { JobColumn } from './component/JobColumn';
import toDoList from './images/to-do-list.jpg'; 
import inProgressimg from './images/inprogressImage.png';
import done from './images/completedImage.jpg';


function App() {
 const [darkMode, setDarkMode] = useState(false);


 const [jobs, setJobs] = useState([
  {id: crypto.randomUUID(), title: 'Parse Emails', status: 'Need to Start'},
  {id: crypto.randomUUID(), title: 'SAP Extraction', status: 'Work in progress'},
  {id: crypto.randomUUID(), title: 'Generate Reports', status: 'Completed'}

 ]);

 const addNewJob = (title, status = 'Neeed to Start') => {
  const newJob = {
    id: crypto.randomUUID(),
    title,
    status
  };

  setJobs(prevJobs => [...prevJobs, newJob]);
  console.log('Added job:', newJob);
 };

 const deleteJob = (id) => {
  setJobs(prevJobs => {
    const updated = prevJobs.filter(job => job.id !== id);
    console.log("Remaining jobs:", updated.length);
    return updated;
  });
};


 const updateJobStatus = (id, newStatus) => {
   console.log("Updating job:", id, "to", newStatus);
    setJobs(prevJobs =>
      prevJobs.map(job => 
        job.id === id ? {...job, status: newStatus} : job
       )
    );
 };
  
  return (
    <div className={darkMode ? "app-dark-mode" : "App"}>
      <div className='app-container'>
      <div className='dark-mode-toggle'>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun style={{ color: "#FFA500", fontSize: "1.5rem" }}/> : <FaMoon />}
        </button>
      </div>

     <Header addNewJob={addNewJob}/>

      <main className='header-func'>
        <JobColumn 
          imageIcon = {toDoList}  
           status = 'Need to Start' 
           jobs={jobs.filter(job => job.status === 'Need to Start')} 
           deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
        />
        <JobColumn 
          imageIcon = {inProgressimg}  
           status = 'Work in progress' 
           jobs={jobs.filter(job => job.status === 'Work in progress')} 
           deleteJob={deleteJob}
          updateJobStatus={updateJobStatus}
         />
        <JobColumn 
        imageIcon = {done}  
         status = 'Completed' 
          jobs={jobs.filter(job => job.status === 'Completed')} 
         deleteJob={deleteJob}
         updateJobStatus={updateJobStatus}
       />
      </main>
     <Footer />
     </div>
    </div>
  );
};

export default App;
