import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import ReviewSection from '../ReviewSection/ReviewSection';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import { tabTitle } from '../../utils/DynamicRoute';

const Home = () => {

    tabTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <div className='text-center mb-20'>
                <Link to='/services'>
                    <button className="btn bg-lime-400 hover:bg-lime-600 border-0 px-20">See All</button>
                </Link>
            </div>

            <About></About>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;