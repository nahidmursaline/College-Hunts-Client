import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
       <div>
         <h2 className='text-center pt-20 pb-6 font-bold text-3xl'>Details of the User</h2>
         <div className="card w-[700px] bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
          <img src={user?.photoURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">User Name: {user?.displayName}</h2>
          <p>User Email: {user?.email}</p>
          <div className="card-actions">
      <Link to='/editProfile'><button className="btn btn-error">Edit Profile</button></Link>
    </div>
        </div>
      </div>
       </div>
    );
};

export default Profile;