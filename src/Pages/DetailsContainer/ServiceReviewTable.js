import React from 'react';
import { FaStar } from "react-icons/fa";

const ServiceReviewTable = ({ review }) => {

    const { reviewer, rating, message } = review;
    const { name, img } = reviewer;

    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Reviewer</th>
                        <th>Message</th>
                        <th>rating</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>
                            <div className="flex flex-col">
                                <div className="avatar">
                                    <div className="w-12 h-12 rounded-full">
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
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

            </table>
        </div>
    );
};

export default ServiceReviewTable;