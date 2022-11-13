import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import { tabTitle } from '../../utils/DynamicRoute';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {

    tabTitle('Reviews - Homely Taste');

    const { user } = useContext(authContext);
    // console.log(user);

    const [reviews, setReviews] = useState([]);
    // console.log(reviews);


    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setReviews(data);
            })
    }, [user?.email]);

    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='text-center text-3xl font-semibold text-lime-600 mb-5'>Reviews: {reviews.length}</h2>

            <div>

                {
                    reviews.length === 0 ?
                        <p className='text-center text-2xl font-semibold'>No reviews added yet!</p>
                        :
                        <>
                            <div className="overflow-x-auto w-full">
                                <table className="table table-zebra w-full">

                                    <thead>
                                        <tr>
                                            <th>service</th>
                                            <th>Message</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews.map(review => <MyReviewTable
                                                key={review._id}
                                                review={review}
                                            // handleDeleteReview={handleDeleteReview}
                                            ></MyReviewTable>)
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </>
                }


            </div>

        </div>
    );
};

export default MyReview;