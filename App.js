import './App.css';
import React from 'react'
import {useState} from 'react'


const AdvancedJobCounter = () => {
  let [jobCounter, setJobCounter]=useState(12)

  const handleAddJob=()=>{
    setJobCounter(jobCounter+1)
    console.log('Run job',jobCounter)
  }

  const handleRemoveJob = () => {
    setJobCounter(jobCounter-1)
  };

  const handleResetJobs = () => {
   setJobCounter(0)
  };

  return (
    <div>
     <h1>Advanced Job Counter :{jobCounter}</h1>
      <p>Current Jobs: {jobCounter-5}</p>
      
      <button onClick={handleAddJob} value="Run Job">Create a job!</button> 
      <button onClick={handleRemoveJob} value="Remove Job">Remove a job!</button>      
      <button onClick={handleResetJobs} value="Reset Jobs">Reset!</button>      

    </div>
  );
};

export default AdvancedJobCounter;
