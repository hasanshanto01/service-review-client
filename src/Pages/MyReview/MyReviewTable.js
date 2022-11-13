import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MyReviewTable = ({ review }) => {

    const { _id, serviceName, serviceImg, message } = review;
    // console.log(object);


    const handleEditReview = (event, id) => {
        event.preventDefault();
        const form = event.target;
        const editedReview = form.editedReview.value;
        // console.log(editedReview);

        const editedMessage = {
            reviewId: _id,
            message: editedReview
        }

        fetch(`http://localhost:5000/reviews`, {
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
                    toast.success('Review edited successfully');
                    form.reset();
                    window.location.reload();
                }
            })

    }


    const handleDeleteReview = id => {
        // console.log(id);

        const confirmMessage = window.confirm('id');
        console.log(confirmMessage);

        if (confirmMessage === true) {
            // console.log('confirm bro');

            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        toast.success('Review deleted successfully');
                        window.location.reload();
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
                    <>

                        {/* The button to open modal */}
                        <label htmlFor="my-modal-3" className="btn bg-lime-400 hover:bg-lime-600 border-0">Edite review</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box relative">
                                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                <form onSubmit={handleEditReview} className='text-center'>
                                    <textarea className="textarea textarea-bordered w-4/5" placeholder="Edit your review" name='editedReview'></textarea>
                                    <br />
                                    <button className='btn bg-lime-400 hover:bg-lime-600 border-0'>Edit</button>
                                </form>

                            </div>
                        </div>
                    </>
                    <button onClick={() => handleDeleteReview(_id)} className="btn bg-red-400 hover:bg-red-600 border-0 px-10">Delete</button>
                    <Toaster />
                </div>
            </td>

        </tr >

    );
};

export default MyReviewTable;