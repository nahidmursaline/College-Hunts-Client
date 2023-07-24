import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import CollegeReviewsCard from './CollegeReviewsCard';

const CollegeReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const url = `http://localhost:5000/reviews?email=${user?.email}`

    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='pt-20'>
             <div className='m-4 '>
            <div>
                <h2 className='text-center py-6 font-bold text-3xl'>Reviews of the University</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {reviews.map(reviews => <CollegeReviewsCard
                 key={reviews._id}
                 reviews = {reviews}
                ></CollegeReviewsCard>)}
            </div>
        </div>
        </div>
        
    );
};

export default CollegeReviews;