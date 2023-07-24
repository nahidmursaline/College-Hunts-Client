import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const AddReviews = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const collegeName = form.name.value;
        const email = user?.email;
        const review = form.review.value;
       
    
        const data = {
            collegeName,
         review,
         email
         
        };
        console.log(data)
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                alert('Data Added Successfully');
              }
            });
        };




    const reviews = useLoaderData();
    const {collegeName, _id, candidateName} = reviews;


    return (
        <div>
           

            <div className=''>
            
            <div className='pt-10 '>
      <h1 className='text-center py-10 font-bold text-3xl'>Add Reviews for: {collegeName}</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">College Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={collegeName}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Candidate Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Seller email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Add Review</span>
            </label>
            <input
              type="text"
              name="review"
              
              placeholder="Review"
              className="input input-bordered"
            />
          </div>
         
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-error btn-block"
            type="submit"
            value="Submit"
          />
        </div>
      </form>

      <div className="card-body"></div>
    </div>
        </div>
        </div>
    );
};

export default AddReviews;