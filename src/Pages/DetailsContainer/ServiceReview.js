import React from 'react';
import AddReview from '../AddReview/AddReview';
import ServiceReviewTable from './ServiceReviewTable';

const ServiceReview = ({ service, reviews }) => {

    console.log(reviews);

    return (
        <div className='p-5'>

            <div className='mt-10 flex items-center justify-between mb-5'>
                <h2 className='text-3xl font-semibold text-lime-600 '>Read Reviews</h2>
                <AddReview service={service}></AddReview>
            </div>

            <div>

                {
                    reviews.length === 0 ?
                        <p className='text-2xl font-semibold'>No reviews found!</p>
                        :
                        <>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th>Reviewer</th>
                                            <th>Message</th>
                                            <th>rating</th>
                                        </tr>
                                    </thead>

                                    {
                                        reviews.map(review => <ServiceReviewTable
                                            key={review._id}
                                            review={review}
                                        ></ServiceReviewTable>)
                                    }

                                </table>
                            </div>
                        </>
                }


            </div>

        </div>
    );
};

export default ServiceReview;