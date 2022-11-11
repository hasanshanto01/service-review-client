import React from 'react';
import ServiceReviewTable from './ServiceReviewTable';

const ServiceReview = ({ reviews }) => {

    console.log(reviews);

    return (
        <div className='p-5'>
            <h2 className='text-center text-3xl font-semibold text-lime-600 mb-3'>Read Reviews</h2>

            {
                reviews.length === 0 ?
                    <p className='text-2xl font-semibold'>No reviews found!</p>
                    :
                    <>
                        {
                            reviews.map(review => <ServiceReviewTable
                                key={review._id}
                                review={review}
                            ></ServiceReviewTable>)
                        }
                    </>
            }

            <div className='text-center mt-10'>
                <button className="btn bg-lime-400 hover:bg-lime-600 border-0">Back to service</button>
            </div>

        </div>
    );
};

export default ServiceReview;