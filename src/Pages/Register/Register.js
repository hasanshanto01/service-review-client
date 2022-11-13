import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login.webp';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const { createUser, setUser } = useContext(authContext);
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                user.displayName = name;
                user.photoURL = photoURL;
                setUser(user);
                // console.log(user);

                toast.success('Registered successfully');
                form.reset();
                navigate('/');
            })
            .catch(error => console.error(error))

    };

    return (
        <div className='flex flex-col lg:flex-row w-4/5 mx-auto my-10'>

            <div className='w-full lg:w-1/2'>
                <img src={login} alt="" className='w-full' />
            </div>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-lime-600 text-3xl text-center font-semibold mt-10 lg:mt-4'>Register</h2>

                <form onSubmit={handleRegister} className='border border-lime-600 rounded-xl w-4/5 mx-auto my-5 p-5'>
                    <input type="text" name='name' placeholder="Enter name" className="input input-bordered w-full mb-4" />
                    <input type="text" name='photoURL' placeholder="Enter photoURL" className="input input-bordered w-full mb-4" />
                    <input type="email" name='email' placeholder="Enter email" className="input input-bordered w-full" required />
                    <input type="password" name='password' placeholder="Enter password" className="input input-bordered w-full my-4" required />

                    <p className='mt-2 mb-6 text-center text-lg font-semibold'>Have an account? <Link to='/login' className='text-lime-600'>Login</Link> </p>

                    <div className='w-3/5 mx-auto'>
                        <button className='btn bg-lime-400 hover:bg-lime-600 border-0 w-full'>Register</button>
                        <Toaster />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Register;