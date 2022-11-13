import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { authContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const activeStyle = {
        backgroundColor: '#84cc16'
    };

    const inActiveStyle = {
        backgroundColor: 'white'
    };

    const { user, logOut } = useContext(authContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    };


    const menuItems = <>

        <li>
            <NavLink
                to='/'
                style={({ isActive }) => isActive ? activeStyle : inActiveStyle}
            >Home</NavLink>
        </li>
        <li>
            <NavLink
                to='/services'
                style={({ isActive }) => isActive ? activeStyle : inActiveStyle}
            >Services</NavLink>
        </li>

        {
            user?.email ?
                <>
                    <li>
                        <NavLink
                            to='/addservice'
                            style={({ isActive }) => isActive ? activeStyle : inActiveStyle}
                        >Add Service</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/myreview'
                            style={({ isActive }) => isActive ? activeStyle : inActiveStyle}
                        >My Review</NavLink>
                    </li>
                    <li>
                        <button onClick={handleLogOut} className='btn bg-lime-200 hover:bg-lime-600 border-0 ml-3'>Log Out</button>
                    </li>
                </>
                :
                <li>
                    <NavLink
                        to='/login'
                        style={({ isActive }) => isActive ? activeStyle : inActiveStyle}
                    >Login</NavLink>
                </li>
        }

    </>


    return (
        <div className="navbar bg-base-100 justify-between w-4/5 mx-auto mb-10 p-5 border-b-2 border-lime-600">
            <div className="navbar-start justify-between mx-auto lg:mx-0">
                <div className='flex items-center'>

                    <div>
                        <img className='w-20 h-16' src={logo} alt="" />
                    </div>

                    <Link to='/' className="text-3xl font-bold">Homely <span className='text-lime-600'>Taste</span></Link>

                </div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">

                        {
                            menuItems
                        }

                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-xl font-semibold">

                    {
                        menuItems
                    }

                </ul>
            </div>

        </div>
    );
};

export default Header;