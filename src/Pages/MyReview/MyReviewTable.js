import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MyReviewTable = ({ review }) => {

    const { _id, serviceName, serviceImg, message } = review;
    const navigate = useNavigate();

    const handleEditReview = id => {
        console.log(id);
        navigate(`/reviews/edit/${id}`);
    }


    const handleDeleteReview = id => {
        console.log(id);

        const confirmMessage = window.confirm('Are you sure? You want to delete?');
        console.log(confirmMessage);

        if (confirmMessage === true) {
            // console.log('confirm bro');

            fetch(`https://service-review-server-orcin.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully');
                        // window.location.reload();
                    }

                })

        }


    };


    return (

        <tr>
            <td>
                <div className="flex flex-col">
                    <div className="avatar">
                        <div className="w-14 h-14 rounded-xl">
                            <img src={serviceImg} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {serviceName}
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <td>
                <div className='flex justify-end gap-x-4'>
                    {/* <>

                        
                    <label htmlFor="my-modal-3" className="btn bg-lime-400 hover:bg-lime-600 border-0" onClick={() => handleEditReview(_id)}>Edit review</label>

                    
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                            <form onSubmit={() => handleEditBtn(reviewId)} className='text-center'>
                                <textarea className="textarea textarea-bordered w-4/5" placeholder="Edit your review" name='editedReview'></textarea>
                                <br />
                                <button type="submit" className='btn bg-lime-400 hover:bg-lime-600 border-0'>edit</button>
                            </form>

                        </div>
                    </div>
                </> */}
                    <button onClick={() => handleEditReview(_id)} className="btn bg-lime-400 hover:bg-lime-600 border-0 px-10">Edit</button>
                    <button onClick={() => handleDeleteReview(_id)} className="btn bg-red-400 hover:bg-red-600 border-0 px-10">Delete</button>
                    <Toaster />
                </div>
            </td>

        </tr >

    );
};

export default MyReviewTable;