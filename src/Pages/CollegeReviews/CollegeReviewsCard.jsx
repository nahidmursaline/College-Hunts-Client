import React from 'react';

const CollegeReviewsCard = ({reviews}) => {
    const {collegeName, review} = reviews;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{collegeName}</h2>
    <p>{review}</p>
   
  </div>
</div>
    );
};

export default CollegeReviewsCard;