import React from 'react';
import { Link } from 'react-router-dom';

const AllCollegesCard = ({college}) => {
    const {_id,image, name, admission, events, research_history, sports} = college;
    return (
        <div>
             <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Admission Spring: {admission.spring}</p>
    <p>Admission Fall: {admission.fall}</p>
    <p>Events: {events[0].name}</p>
    <p>Research History: {research_history}</p>
    <p>Sports: {sports}</p>
    <div className="card-actions justify-end">
     <Link to={`/detail/${_id}`}> <button className="btn btn-error">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCollegesCard;