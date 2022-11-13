import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MyReviewTable = ({ review }) => {

    const { _id, serviceName, serviceImg, message } = review;
    // console.log(object);

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
                    <button className="btn bg-lime-400 hover:bg-lime-600 border-0">Edit review</button>
                    <button onClick={() => handleDeleteReview(_id)} className="btn bg-red-400 hover:bg-red-600 border-0 px-10">Delete</button>
                    <Toaster />
                </div>
            </td>

        </tr>

    );
};

export default MyReviewTable;