import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { tabTitle } from '../../utils/DynamicRoute';
import ServiceCard from './ServiceCard';

const Services = () => {

    tabTitle('Services');

    const services = useLoaderData();
    // console.log(services);

    return (
        <div className='w-4/5 mx-auto my-10'>
            <h2 className='text-center text-lime-600 text-3xl font-semibold mb-5'>Services</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;