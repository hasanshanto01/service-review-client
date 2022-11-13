import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { authContext } from '../../context/AuthProvider/AuthProvider';

const AddReview = ({ service }) => {

    const { user } = useContext(authContext);
    // console.log(user);
    const { _id, title, imgURL } = service;
    // console.log(id);


    const handleReview = event => {
        event.preventDefault();

        const form = event.target;
        const rating = form.rating.value;
        const reviewMessage = form.reviewMessage.value;

        if (isNaN(rating)) {
            return toast.error('Rating must be number')
        }

        const review = {
            serviceId: _id,
            serviceName: title,
            serviceImg: imgURL,
            userName: user.displayName,
            email: user.email,
            userImg: user.photoURL,
            rating,
            message: reviewMessage
        }
        console.log(review);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
        toast.success('Service added successfully');
        form.reset();
        window.location.reload();

    };

    return (
        <>

            {/* The button to open modal */}
            <label htmlFor="my-modal-3" className="btn  bg-lime-400 hover:bg-lime-600 border-0">Add review</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Write your review</h3>
                    <div>

                        <form onSubmit={handleReview} className='border border-lime-600 rounded-xl w-4/5 mx-auto my-5 p-5'>

                            <div className='mb-4'>
                                <label className="label">
                                    <span className="label-text text-lg">Your email:</span>
                                </label>
                                <input type="text" name='email' defaultValue={user ? user.email : 'Not found'} className="input input-bordered w-full" readOnly />
                            </div>

                            <input type="text" name='rating' placeholder="Please, give rating out of 5" className="input input-bordered w-full mb-4" required />

                            <textarea name='reviewMessage' className="textarea textarea-bordered w-full" placeholder="Write you review here..." required></textarea>

                            <div className='w-3/5 mx-auto mt-4'>
                                <button className='btn bg-lime-400 hover:bg-lime-600 border-0 w-full'>Add</button>

                                <Toaster />
                            </div>

                        </form>

                    </div>
                </div>
            </div>

        </>
    );
};

export default AddReview;