import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import ServiceReview from './ServiceReview';

const DetailsContainer = () => {

    const service = useLoaderData();
    console.log(service);

    return (
        <div className='border border-yellow-600 w-4/5 mx-auto'>
            <ServiceDetails service={service}></ServiceDetails>
            <ServiceReview></ServiceReview>
        </div>
    );
};

export default DetailsContainer;