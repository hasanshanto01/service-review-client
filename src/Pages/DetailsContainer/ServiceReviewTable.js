import React from 'react';
import { FaStar, FaUserCircle } from "react-icons/fa";

const ServiceReviewTable = ({ review }) => {

    const { userName, userImg, rating, message } = review;
    // const { name, img } = reviewer;

    return (

        <tr>
            <td>
                <div className="flex flex-col">
                    <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                            {
                                userImg !== null ?
                                    <img src={userImg} alt="" />
                                    :
                                    <FaUserCircle className='w-12 h-12' />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {
                                userName !== null ?
                                    userName
                                    :
                                    'Unknown'
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <td>
                <div className='flex items-center'>
                    <span>{rating}</span>
                    <FaStar className='ml-1 text-yellow-400' />
                </div>
            </td>
        </tr>

    );
};

export default ServiceReviewTable;