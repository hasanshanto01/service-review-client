import React from 'react';
import './BannerItem.css';

const BannerItem = ({ bannerItem }) => {

    const { banner, prev, id, next } = bannerItem;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">

            <div className='w-full carousel-img'>
                <img src={banner} alt='' className="w-full h-96" />
            </div>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-3xl text-white font-semibold'>Food that will make you feel at home!</h1>
            </div>

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

        </div>
    );
};

export default BannerItem;