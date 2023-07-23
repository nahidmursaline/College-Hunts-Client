import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionCollegeCard = ({college}) => {
    const {_id,image, name, admission, events, research_history, sports} = college;
    return (
        <div className="card w-96 bg-base-100 shadow-md shadow-red-200">
  <div className="card-body">
    <Link to={`/admissionDetail/${_id}`}><h2 className="card-title">{name}</h2></Link>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-error">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default AdmissionCollegeCard;