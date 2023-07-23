import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CollegeCard from './CollegeCard';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=> {
        fetch('http://localhost:5000/colleges')
        .then(res =>res.json())
        .then(data => setColleges(data.slice(0, 3)))
    }, [])


    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
      };
    
      // Filter the colleges data based on the search query
      const filteredColleges = colleges.filter((college) =>
        college.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return (
        <div className='m-4 '>
            <div>
                <h2 className='text-3xl text-center mb-4'>Colleges</h2>
                <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded p-2 mb-4"
        />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredColleges.map(college => <CollegeCard
                key={college._id}
                college = {college}
                ></CollegeCard>)}
            </div>
        </div>
    );
};

export default Colleges;