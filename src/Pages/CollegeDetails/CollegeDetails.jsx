import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetails = () => {
    const detail = useLoaderData();
    const {name,
        image,
        admission_process,
        event_details,
        research_works,
        sports,
    events,

    research_history,
    
number_of_research,
ratings
} = detail;
    return (
        <div className='pt-28'>
             <div className="card w-2/4 bg-base-100 shadow-xl mx-auto">
            <h2 className='text-center text-3xl '>Detail's of {name}</h2>
        <figure className="px-10 pt-10">
            
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">College Name: {name}</h2>
          
          <p>Admission Process: {admission_process}</p>
          
         
          <p>Events Date: {events[0].date}</p>
          <p>Sports: {sports}</p>
          <p>Ratings: {ratings}</p>
          <h5 className='text-xl'>Research</h5>
          <p>Research Title: {research_works[0].title}</p>
          <p>Research Author: {research_works[0].authors[0]}</p>
          <p>
Number of Research: {number_of_research}</p>

          <p>Research History: {research_history}</p>
         
         
        </div>
      </div>
        </div>
    );
};

export default CollegeDetails;