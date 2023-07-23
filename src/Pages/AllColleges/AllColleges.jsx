import React, { useEffect, useState } from 'react';
import AllCollegesCard from './AllCollegesCard';

const AllColleges = () => {

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
                <h2 className='text-3xl text-center mb-4'>Colleges</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {allColleges.map(college => <AllCollegesCard
                
                key={college._id}
                college = {college}
                >

                </AllCollegesCard>)}
            </div>
        </div>
        </div>
    );
};

export default AllColleges;