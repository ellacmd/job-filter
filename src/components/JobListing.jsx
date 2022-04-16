import React from 'react';
import './JobListing.css';

const JobListing = ({ job, handleFilter }) => {
  const category = [job.role, job.level, ...job.tools, ...job.languages];

  return (
    <div className={`job-listing ${job.featured ? 'feature' : ''} `}>
      <div className='listing-container'>
        <div className='info-box'>
          <div className='company-logo'>
            <img src={`${job.logo}`} alt='' />
          </div>
          <div className='listing-info'>
            <div className='box'>
              <h2 className='company-name'>{job.company}</h2>
              {job.new && <span className='new-tag tag'>NEW!</span>}
              {job.featured && (
                <span className='featured-tag tag'>FEATURED</span>
              )}
            </div>
            <h1 className='title'>{job.position}</h1>
            <div className='box'>
              <p className='info'>{job.postedAt}</p>
              <span className='circle-seperator'></span>
              <p className='info'>{job.contract}</p>
              <span className='circle-seperator'></span>
              <p className='info'>{job.location}</p>
            </div>
          </div>
        </div>
        <div className='category-container'>
          {category.map((ctg) => (
            <span className='category' onClick={() => handleFilter(ctg)}>
              {ctg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
