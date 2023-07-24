import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyCollegeCard from './MyCollegeCard';

const MyCollege = () => {
    const {user} = useContext(AuthContext)
    const [myCollege, setMyCollege] = useState([]);

    const url = `http://localhost:5000/admissions?email=${user?.email}`
    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setMyCollege(data))
    },[])
    return (
        <div>
             <div className='pt-20'>
             <div className='m-4 '>
            <div>
                <h2 className='text-center py-6 font-bold text-3xl'>My Colleges</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {myCollege.map(college => <MyCollegeCard
                 key={college._id}
                 college = {college}
                ></MyCollegeCard>)}
            </div>
        </div>
        </div>
        </div>
    );
};

export default MyCollege;