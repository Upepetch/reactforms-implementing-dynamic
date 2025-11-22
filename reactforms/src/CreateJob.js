import React, { useState } from 'react'

const CreateJob = () => {
      const jobCount = 13;
      let [jobCounter, setJobCounter] = useState(0);
      const [inputValue, setInputValue] = useState('')

      function handleClickEvent() {
          setJobCounter(jobCounter + 1);
          console.log(`Run job: ${jobCounter}`);
        }

      const handleSubtractEvent = () => {
          setJobCounter(jobCounter - 1);
        }

      const handleResetEvent = () => {
        setJobCounter(0)
      }

      const handleChange = (event) => {
        // you an (event) as a parameter
        console.log(event.target.value);
        setInputValue(event.target.value); // to make it show on the browser you need to use setInputValue (useState) instead of console.log()
      }
    
        const countJob = () => {
          if (jobCount === 0) {
            return "'No jobs to schedule today!!!";k
          }

          else {
            return  `Today's running jobs from bot is: ${jobCount}`;
        }   //   return jobCount === 0 ? 'No jobs to schedule today!!!' : `Today's running jobs from bot is ${jobCount}`
      }
 
  return ( 
      <div>
        

      </div>
  );
}


export default CreateJob;
