import React, { useEffect, useState } from 'react';
import ResearchPaperCard from './ResearchPaperCard';

const ResearchPaper = () => {
  const [allColleges, setAllColleges] = useState([]);

  useEffect(() => {
    fetch('https://college-hunts-server.vercel.app/colleges')
      .then((res) => res.json())
      .then((data) => setAllColleges(data));
  }, []);
  return (
    <div className="">
      <div className="m-4 ">
        <div>
          <h2 className="text-center py-6 font-bold text-3xl">
            Research Paper
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allColleges.map((college) => (
            <ResearchPaperCard
              key={college._id}
              college={college}
            ></ResearchPaperCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
