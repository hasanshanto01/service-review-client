import React from 'react';
import { FaStar, FaUserCircle } from "react-icons/fa";

const ServiceReviewTable = ({ review }) => {

    const { reviewer, rating, message } = review;
    // const { name, img } = reviewer;

    return (
        <tbody>

            <tr>
                <td>
                    <div className="flex flex-col">
                        <div className="avatar">
                            <div className="w-12 h-12 rounded-full">
                                {
                                    reviewer.img !== null ?
                                        <img src={reviewer.img} alt="" />
                                        :
                                        <FaUserCircle className='w-12 h-12' />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                {
                                    reviewer.name !== null ?
                                        reviewer.name
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

        </tbody>
    );
};

export default ServiceReviewTable;