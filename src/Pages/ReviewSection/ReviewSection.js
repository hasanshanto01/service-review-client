import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const ReviewSection = () => {

    const [count, setCount] = useState(0);
    const [reviews, setReviews] = useState([]);

    const [page, setPage] = useState(0);
    const size = 3;

    const pages = Math.ceil(count / size);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCount(data.count);
                setReviews(data.reviews);
            })
    }, [page, size])

    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='text-center text-lime-600 text-3xl font-semibold'>You can see reviews</h2>

            <div className='grid grid-cols-3 gap-10 my-10'>
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>

            <div className='text-center'>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        onClick={() => setPage(number)}
                        className='btn bg-lime-400 hover:bg-lime-600 border-0 mr-2'
                    >
                        {number + 1}
                    </button>)
                }
            </div>

        </div >
    );
};

export default ReviewSection;