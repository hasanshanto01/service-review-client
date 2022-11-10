import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.webp';

const Register = () => {
    return (
        <div className='flex flex-col lg:flex-row w-4/5 mx-auto my-10'>

            <div className='w-full lg:w-1/2'>
                <img src={login} alt="" className='w-full' />
            </div>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-lime-500 text-3xl text-center font-semibold mt-10 lg:mt-14'>Register</h2>

                <form className='border border-lime-500 rounded-xl w-4/5 mx-auto my-5 p-5'>
                    <input type="text" name='name' placeholder="Enter name" className="input input-bordered w-full mb-4" />
                    <input type="email" name='email' placeholder="Enter email" className="input input-bordered w-full" required />
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full my-4" required />

                    <p className='mt-2 mb-6 text-center text-lg font-semibold'>Have an account? <Link to='/login' className='text-lime-500'>Login</Link> </p>

                    <div className='w-3/5 mx-auto'>
                        <button className='btn bg-lime-300 hover:bg-lime-500 border-0 w-full'>Register</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Register;