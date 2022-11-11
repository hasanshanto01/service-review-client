import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import ServiceReview from './ServiceReview';

const DetailsContainer = () => {

    const service = useLoaderData();
    // console.log(service);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='w-4/5 mx-auto'>
            <ServiceDetails service={service}></ServiceDetails>
            <ServiceReview reviews={reviews}></ServiceReview>
        </div>
    );
};

export default DetailsContainer;