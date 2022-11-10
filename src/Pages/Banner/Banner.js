import React from 'react';
import banner1 from '../../assets/banner/banner1.png';
import banner2 from '../../assets/banner/banner2.jpeg';
import banner3 from '../../assets/banner/banner3.jpg';
import BannerItem from './BannerItem';


const bannerItems = [
    {
        banner: banner1,
        prev: 3,
        id: 1,
        next: 2
    },
    {
        banner: banner2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        banner: banner3,
        prev: 2,
        id: 3,
        next: 1
    },
]

const Banner = () => {
    return (
        <div className="carousel w-4/5 mx-auto">

            {
                bannerItems.map(bannerItem => <BannerItem
                    key={bannerItem.id}
                    bannerItem={bannerItem}
                ></BannerItem>)
            }

        </div>
    );
};

export default Banner;