import React from 'react';
import Services from '../Services/Services';
import About from '../About/About';
import ReviewSection from '../ReviewSection/ReviewSection';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;