import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const AdmissionDetail = () => {
    const { user } = useContext(AuthContext);



    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const candidateName = form.name.value;
        const subject = form.subject.value;
        const email = user?.email;
        const phone = form.phone.value;
        const collegeName = form.collegeName.value;
        const address = form.address.value;
        const date = form.date.value;
        const description = form.description.value;
        const photo = form.photo.value;
    
        const data = {
          candidateName,
          subject,
          email,
          phone,
          collegeName,
          address,
          date,
          description,
          photo,
        };
        console.log(data)
        fetch('http://localhost:5000/admissions', {
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



    const detail = useLoaderData();
    const {name,
        _id,
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
        <div className=''>
            
            <div className='pt-10 '>
      <h1 className='text-center py-10 font-bold text-3xl'>Candidate Information for: {name}</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Candidate Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">College Name</span>
            </label>
            <input
              type="text"
              name="collegeName"
              defaultValue={name}
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
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
              <span className="label-text">Candidate Phone number</span>
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date of birth</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Rating"
              className="input input-bordered"
            />
          </div>
         
          <div className="form-control">
            <label className="label">
              <span className="label-text">Detail Description</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={admission_process}
              placeholder="Detail Description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Picture URL of the Candidate</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Picture URL"
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
    );
};

export default AdmissionDetail;