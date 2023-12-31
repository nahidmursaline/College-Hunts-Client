import React, { useEffect, useState } from 'react';
import AllColleges from '../AllColleges/AllColleges';
import AdmissionCollegeCard from './AdmissionCollegeCard';

const Admission = () => {
  const [allColleges, setAllColleges] = useState([]);

  useEffect(() => {
    fetch('https://college-hunts-server.vercel.app/colleges')
      .then((res) => res.json())
      .then((data) => setAllColleges(data));
  }, []);
  return (
    <div className="pt-20">
      <div className="m-4 ">
        <div>
          <h2 className="text-center py-6 font-bold text-3xl">
            All College Names
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allColleges.map((college) => (
            <AdmissionCollegeCard
              key={college._id}
              college={college}
            ></AdmissionCollegeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admission;
