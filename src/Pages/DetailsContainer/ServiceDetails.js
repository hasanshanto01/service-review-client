import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {

    const { title, imgURL, price, rating, description } = service;

    return (
        <div className='p-5 pt-0'>
            <h2 className='text-center text-4xl font-bold mb-5'>{title}</h2>
            <div>
                <img src={imgURL} alt="" className='w-full rounded-xl' style={{ height: '500px' }} />
            </div>
            <div className='my-5'>
                <div className='flex justify-between items-center my-3'>
                    <h4 className='text-2xl font-semibold'>Price: <span className='font-bold'>{price}</span>TK.</h4>
                    <p className='text-lg font-semibold flex items-center'>
                        <span>{rating}</span>
                        <FaStar className='ml-1 text-yellow-400' />
                    </p>
                </div>
            </div>
            <div>
                <p className='text-lg text-justify'>{description}</p>
            </div>
            <div className='text-center mt-10'>
                <Link to='/services'>
                    <button className="btn bg-lime-400 hover:bg-lime-600 border-0">Back to service</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;