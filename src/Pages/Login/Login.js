import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/login.webp';
import { FaGoogle } from 'react-icons/fa';
import { authContext } from '../../context/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const { logIn, googleLogIn } = useContext(authContext);
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    };

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                // console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='flex flex-col lg:flex-row w-4/5 mx-auto my-10'>

            <div className='w-full lg:w-1/2'>
                <img src={login} alt="" className='w-full' />
            </div>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-lime-600 text-3xl text-center font-semibold mt-10 lg:mt-8'>Login</h2>

                <form onSubmit={handleLogin} className='border border-lime-600 rounded-xl w-4/5 mx-auto my-5 p-5'>
                    <input type="email" name='email' placeholder="Enter email" className="input input-bordered w-full" required />
                    <input type="password" name='password' placeholder="Enter password" className="input input-bordered w-full my-4" required />

                    <p className='mt-2 mb-6 text-center text-lg font-semibold'>New here? <Link to='/register' className='text-lime-600'>Register</Link> </p>

                    <div className='w-3/5 mx-auto'>
                        <button className='btn bg-lime-400 hover:bg-lime-600 border-0 w-full'>Login</button>
                        <Toaster />
                    </div>
                </form>

                <hr className='border-dotted border-t-2 border-lime-600 w-11/12 mx-auto' />

                <div className='w-4/5 mx-auto my-5'>
                    <button onClick={handleGoogleLogIn} className='btn bg-lime-400 hover:bg-lime-600 border-0 w-full'>
                        <FaGoogle className='mr-3 text-2xl' />
                        Login with google
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Login;