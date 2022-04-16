import React from 'react';
import { useState, useEffect } from 'react';
import './JobsContainer.css';
import JobListing from './JobListing';
import FilteredParam from './FilteredParam';

const JobsContainer = () => {
  const [jobData, setJobData] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  
  useEffect(() => {
    const getJobData = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      setJobData(data);
    };
    getJobData();
  }, []);

  const handleFilter = (ctg) => {
    filteredCategories.includes(ctg)
      ? console.log(ctg)
      : setFilteredCategories((prev) => [...prev, ctg]);
  };


  const clearAllHandler = () => {
    setFilteredCategories([]);
  };


  const clearFilterHandler = (tag) => {
    setFilteredCategories((prev) => prev.filter((item) => item !== tag));
  };


  const filterJobs = (filteredCategories, jobCategories) => {
    return filteredCategories.every((value) => jobCategories.includes(value));
  };


  return (
    <div className='jobs-container'>
      {filteredCategories.length > 0 && (
        <FilteredParam
          filteredCategories={filteredCategories}
          clearAllHandler={clearAllHandler}
          clearFilterHandler={clearFilterHandler}
        />
      )}
      {jobData.map((job) => {
        let jobCategories = [
          job.role,
          job.level,
          ...job.tools,
          ...job.languages,
        ];
        return (
          filterJobs(filteredCategories, jobCategories) && (
            <JobListing key={job.id} job={job} handleFilter={handleFilter} />
          )
        );
      })}
    </div>
  );
};

export default JobsContainer;
