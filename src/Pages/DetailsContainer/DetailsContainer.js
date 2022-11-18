import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from './ServiceDetails';
import ServiceReview from './ServiceReview';

const DetailsContainer = () => {

    const service = useLoaderData();
    // const { _id } = service;
    // console.log(_id);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://service-review-server-orcin.vercel.app/reviews/${service._id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [service._id])

    return (
        <div className='w-4/5 mx-auto'>
            <ServiceDetails service={service}></ServiceDetails>

            <hr className='border-dotted border-t-2 border-lime-600 w-full mx-auto' />

            <ServiceReview service={service} reviews={reviews}></ServiceReview>
        </div>
    );
};

export default DetailsContainer;