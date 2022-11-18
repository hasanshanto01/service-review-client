import React from 'react';
import { Link } from 'react-router-dom';
import cooking from '../../assets/cooking.gif';
import { tabTitle } from '../../utils/DynamicRoute';

const About = () => {

    tabTitle('Add Service');

    return (
        <div className='flex flex-col-reverse md:flex-row items-center w-4/5 mx-auto my-20'>

            <div className='w-full md:w-2/5 mt-8 md:mt-0'>
                <img src={cooking} alt="" className='w-full rounded-xl' />
            </div>

            <div className='w-full md:w-3/5 ml-10 p-10 border-l-2 border-lime-600'>
                <h2 className='text-center text-lime-600 text-3xl font-semibold'>About Us</h2>
                <p className='text-xl text-justify my-8'>Homely Taste is a cloud kitchen that utilizes a commercial kitchen for the purpose of preparing food for delivery or takeout only, with no dine-in customers.....
                    <Link to='/about' className='text-2xl text-blue-600 hover:underline'>
                        More
                    </Link>
                </p>
            </div>

        </div>
    );
};

export default About;