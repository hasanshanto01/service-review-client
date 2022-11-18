import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const EditMyReview = () => {

    const review = useLoaderData();
    const { _id, email, message } = review;
    // console.log(review);

    const navigate = useNavigate();


    const handleEditedReview = event => {
        event.preventDefault();
        const form = event.target;
        const editedReviewMessage = form.editedReviewMessage.value;
        // console.log(editedReviewMessage, _id);

        const editedMessage = {
            message: editedReviewMessage
        };
        // console.log(editedMessage);

        fetch(`https://service-review-server-orcin.vercel.app/reviews/edit/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedMessage)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    form.reset();
                    navigate('/myreview');

                    toast.success('Review edited successfully');
                }
            })

    }


    return (
        <div className='w-4/5 mx-auto'>
            <form onSubmit={handleEditedReview} className='w-2/5 mx-auto p-5 rounded-xl border border-lime-600'>


                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder="Email" className="input input-bordered w-full" defaultValue={email} readOnly />
                </div>
                <br />
                <div>
                    <label htmlFor="previousReviewMessage">Previous Review Message:</label>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Previous review" defaultValue={message} readOnly></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="newReviewMessage">New Review Message:</label>
                    <textarea name='editedReviewMessage' className="textarea textarea-bordered w-full" placeholder="New review write here"></textarea>
                </div>

                <div className='text-center mt-4'>
                    <button className="btn bg-lime-400 hover:bg-lime-600 border-0 px-10">save</button>
                    <Toaster />
                </div>

            </form>
        </div>
    );
};

export default EditMyReview;