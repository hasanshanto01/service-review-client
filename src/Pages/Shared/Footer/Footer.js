import React from 'react';
import logo from '../../../assets/logo.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-lime-600 text-neutral-content py-10">
            <div className="items-center grid-flow-col">
                <img src={logo} alt="" className='w-20 bg-white rounded-2xl' />
                <p className='text-xl'>Copyright © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-3xl">
                <a href='https://www.facebook.com/' target="_blank" rel="noreferrer">
                    <FaFacebook />
                </a>
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/' target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
            </div>
        </footer>
    );
};

export default Footer;