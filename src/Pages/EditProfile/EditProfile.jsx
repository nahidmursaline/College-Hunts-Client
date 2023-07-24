import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const EditProfile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2 className='text-center pt-20 pb-6 font-bold text-3xl'>Edit Your Profile</h2>

            <div>
           

            <div className=''>
            
            <div className='pt-10 '>
     

      <form onSubmit={''}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
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
              <span className="label-text">User Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Seller email"
              className="input input-bordered"
            />
          </div>
         
         
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-error btn-block"
            type="submit"
            value="Save"
          />
        </div>
      </form>

      <div className="card-body"></div>
    </div>
        </div>
        </div>
        </div>
    );
};

export default EditProfile;