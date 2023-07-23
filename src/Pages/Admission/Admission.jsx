import React, { useEffect, useState } from 'react';
import AllColleges from '../AllColleges/AllColleges';
import AdmissionCollegeCard from './AdmissionCollegeCard';

const Admission = () => {
    
    const [allColleges, setAllColleges] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/colleges')
        .then(res =>res.json())
        .then(data => setAllColleges(data))
    }, [])
    return (
        <div className='pt-20'>
        <div className='m-4 '>
       <div>
           <h2 className='text-3xl text-center mb-4'>All College Names</h2>
       </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {allColleges.map(college => <AdmissionCollegeCard
           key={college._id}
           college = {college}
           ></AdmissionCollegeCard>)}
       </div>
   </div>
   </div>
    );
};

export default Admission;