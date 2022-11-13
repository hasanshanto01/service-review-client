import React from 'react';
import { FaCommentDots, FaUserCircle } from 'react-icons/fa';

const ReviewCard = ({ review }) => {

    const { serviceName, message, userImg, userName } = review;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <div className="card-body">

                <div className="flex justify-between items-center">
                    <div>
                        <img src={userImg ? userImg : <FaUserCircle />} alt="" className='w-12 h-12 rounded-full' />
                        <h4 className='text-lg font-semibold'>{userName}</h4>
                    </div>
                    <FaCommentDots className='w-8 h-8' />
                </div>

                <div className='mt-2 p-4 text-justify border-2 border-dotted border-lime-600 rounded-xl'>
                    <h2 className="card-title text-2xl">{serviceName}</h2>
                    <p className='text-xl'>{message}</p>
                </div>

            </div>
        </div>
    );
};

export default ReviewCard;