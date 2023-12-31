import React from 'react';
import { Link } from 'react-router-dom';

const MyCollegeCard = ({college}) => {
    const {_id, photo, candidateName, subject, email,date, address, description , collegeName} = college;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[590px]">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{candidateName}</h2>
    <p>College Name: {collegeName}</p>
    <p>Subject: {subject}</p>
    <p>Email: {email}</p>
    <p>Address: {address}</p>
    <p>Date: {date}</p>
    <p>Details of College: {description}</p>
    <div className="card-actions">
      <Link to={`/reviews/${_id}`}> <button className="btn btn-error">Add Reviews</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyCollegeCard;