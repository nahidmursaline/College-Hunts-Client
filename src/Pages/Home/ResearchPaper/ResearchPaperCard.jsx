import React from 'react';
import { Link } from 'react-router-dom';

const ResearchPaperCard = ({college}) => {
    const {_id,image, name, admission, events, research_history, sports, research_works} = college;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p><span className='font-bold'>Research Title:</span> {research_works[0].title}</p>
    <p><span className='font-bold'>Research Author:</span> {research_works[0].authors[0]}</p>
    <Link><p><span className='font-bold'>Research Link: </span>{research_works[0].link}</p></Link>
    
  </div>
</div>
    );
};

export default ResearchPaperCard;