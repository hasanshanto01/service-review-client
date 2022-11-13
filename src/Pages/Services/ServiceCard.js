import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({ service }) => {

    const { _id, title, imgURL, price, rating, description } = service;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                <PhotoView>
                    <figure>
                        <img src={imgURL} alt="" style={{ objectFit: 'cover' }} />
                    </figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <div>
                    <h2 className="card-title text-3xl font-bold">{title}</h2>
                    <p className='text-lg font-semibold flex items-center'>
                        <span>{rating}</span>
                        <FaStar className='ml-1 text-yellow-400' />
                    </p>
                </div>
                <p className='text-lg text-justify'>
                    {description.slice(0, 100)}
                </p>
                <div>
                    <h4 className='text-2xl font-semibold'>Price: <span className='font-bold'>{price}</span>TK.</h4>
                </div>

                <div className="card-actions justify-center mt-3">

                    <button className="btn bg-lime-400 hover:bg-lime-600 border-0">Order Now</button>

                    <Link to={`/services/${_id}`}>
                        <button className="btn bg-lime-400 hover:bg-lime-600 border-0 ml-2">View Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;