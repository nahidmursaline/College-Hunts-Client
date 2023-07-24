import React from 'react';
import CollegeReviews from '../../CollegeReviews/CollegeReviews';
import Colleges from '../../Colleges/Colleges';
import Gallery from '../../Gallery/Gallery';
import Banner from '../Banner/Banner';
import ResearchPaper from '../ResearchPaper/ResearchPaper';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Colleges></Colleges>
           <Gallery></Gallery>
           <ResearchPaper></ResearchPaper>
           
           <CollegeReviews></CollegeReviews>
        </div>
    );
};

export default Home;