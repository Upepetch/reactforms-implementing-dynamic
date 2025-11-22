import React, { useState } from 'react';
import{FaSun, FaMoon} from "react-icons/fa";
import './App.css';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { JobColumn } from './component/JobColumn';
import toDoList from './images/to-do-list.jpg'; 
import inProgressimg from './images/inprogressImage.png';
import done from './images/completedImage.jpg';
import { JobColumnForm } from './component/JobColumnForm';



function App() {
 const [darkMode, setDarkMode] = useState(false);

 const [jobs, setJobs] = useState([
  {id: crypto.randomUUID(), title: "Frontend Developer", status: "start"},
  {id: crypto.randomUUID(), title: "Backend Engineer", status: "running"},
  {id: crypto.randomUUID(), title: "UI Designer", status: "completed"},
 ]);


 //  Add a search or filter functionality to find specific jobs across all columns
 const [searchTerm, setSearchTerm] = useState('');

// Filter jobs by search term
 const startJobs = jobs.filter((job) => job.status === 'start' &&  job.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
 const runningJobs = jobs.filter((job) => job.status === 'running' &&  job.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
 const completedJobs = jobs.filter((job) => job.status === 'completed' &&  job.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));


//  Add functionality to move jobs between columns (e.g., from "Need to Start" to "In Progress")
const moveJob = (id, newStatus) => {
  setJobs(preveJobs => 
    preveJobs.map(job => job.id !== id ?
      {...job, status: newStatus} : job
    )
  );
};

// Implement a form to add new jobs to the "Need to Start" column
const addJob = (title) => {
  const newJob = {
    id: Date.now(),
    title,
    status: 'start' // always start in 'Need to Start'
  };
  setJobs([...jobs, newJob]);
};

  return (
    <div className={darkMode ? "app-dark-mode" : "App"}>
      <div className='dark-mode-toggle'>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun style={{ color: "#FFA500", fontSize: "1.5rem" }}/> : <FaMoon />}
        </button>
      </div>
     <Header />
      <JobColumnForm addJob={addJob} />

      <input 
        type="text"
         value={searchTerm}
          placeholder='search jobs...'
         onChange={(e) => setSearchTerm(e.target.value)}
        className='search-bar'
      />

      <main className='header-func'>
        <JobColumn 
           title = 'Need to Start'
            jobs={startJobs}
            image = {toDoList}
            alt = 'Need to start icon'
           status="start"
          moveJob={moveJob}
        />
        <JobColumn 
           title = 'Work in Progress'
            jobs={runningJobs}
            image = {inProgressimg}
            alt = 'Work in progress icon'
           status="running"
          moveJob={moveJob}
        />
        <JobColumn 
           title = 'Job Completed'
            jobs={completedJobs}
            image = {done}
            alt = 'Job completed icon'
           status="completed"
          moveJob={moveJob}
        />
    
      </main>
     <Footer />
    </div>
  );
};

export default App;
