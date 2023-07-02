import React from 'react';

import logo from '../assets/img/logo.svg';

import {
    FaYoutube,
    FaFacebook,
    FaInstagram,
    FaPinterest
} from 'react-icons/fa';

const Footer = (props) => {
    return (
        <div className="py-8 bg-pattern bg-primary">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-y-4">
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <div className="flex flex-row items-center gap-x-4 text-white cursor-pointer">
                        <FaYoutube />
                        <FaInstagram />
                        <FaFacebook />
                        <FaPinterest />
                    </div>

                    <div className="text-white text-[16px] md:text-[18px] text-center font-medium">
                        Copyright &copy; Pizzaland 2023. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;