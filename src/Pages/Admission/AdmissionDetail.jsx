import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdmissionDetail = () => {
    const detail = useLoaderData();
    const {name,
        image,
        admission_process,
        event_details,
        research_works,
        sports,
    events,

    research_history,
    
number_of_research,
ratings
} = detail;
    return (
        <div>
            <h1>Details of admission {name}</h1>
        </div>
    );
};

export default AdmissionDetail;