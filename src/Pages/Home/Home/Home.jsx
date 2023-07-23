import React from 'react';
import Colleges from '../../Colleges/Colleges';
import Gallery from '../../Gallery/Gallery';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Colleges></Colleges>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;