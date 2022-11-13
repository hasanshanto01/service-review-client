import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { tabTitle } from '../../utils/DynamicRoute';

const AddService = () => {

    tabTitle('Add Service - Homely Taste');

    const handleAddService = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const photoURL = form.photoURL.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        if (isNaN(price) || isNaN(rating)) {
            return toast.error('Price and Rating must be number')
        }

        const service = {
            title,
            imgURL: photoURL,
            price,
            rating,
            description
        };
        // console.log(service);

        fetch('http://localhost:5000/services/all', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
            })
        toast.success('Service added successfully');
        form.reset();

    };

    return (
        <div className='w-4/5 mx-auto my-10'>
            <h2 className='text-center text-3xl font-semibold text-lime-600'>Add a new service</h2>

            <form onSubmit={handleAddService} className='border border-lime-600 rounded-xl w-3/5  mx-auto my-10 p-10'>
                <input type="text" name='title' placeholder="Enter service title" className="input input-bordered w-full" required />
                <input type="text" name='photoURL' placeholder="Enter photoURL" className="input input-bordered w-full my-4" required />
                <input type="text" name='price' placeholder="Enter price" className="input input-bordered w-full mb-4" required />
                <input type="text" name='rating' placeholder="Enter rating out of 5" className="input input-bordered w-full mb-4" required />

                <textarea name='description' className="textarea textarea-bordered w-full" placeholder="Enter description"></textarea>

                <div className='w-3/5 mx-auto mt-5'>
                    <button className='btn bg-lime-400 hover:bg-lime-600 border-0 w-full'>Add Service</button>
                    <Toaster />
                </div>
            </form>

        </div>
    );
};

export default AddService;