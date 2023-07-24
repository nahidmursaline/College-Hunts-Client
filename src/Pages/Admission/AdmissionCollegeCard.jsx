import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionCollegeCard = ({college}) => {
    const {_id,image, name, admission, events, research_history, sports} = college;
    return (
        <div className="card w-96 bg-base-100 shadow-md shadow-red-200">
  <div className="card-body">
    <Link to={`/admissionDetail/${_id}`}><h2 className="card-title">{name}</h2></Link>
   
  </div>
</div>
    );
};

export default AdmissionCollegeCard;