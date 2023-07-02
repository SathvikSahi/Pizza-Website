import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import bag from '../assets/img/bag.svg';
import logo from '../assets/img/logo.svg';

import { handleOpen, handleClose } from '../features/slice/sidebarSlice';
import { applyFilter } from '../features/slice/pizzaSlice';

const Header = (props) => {
    let [isActive, setIsActive] = useState( () => false );

    const location = useLocation();
    const navigate = useNavigate();

    const { cartCount } = useSelector( (store) => store.cart );
    const dispatch = useDispatch();

    useEffect( () => {
        window.addEventListener("scroll", () => {
            (
                window.scrollY > 50 ? setIsActive( () => true ) : setIsActive( () => false )
            );
        })
    }, []);

    return (
        <div className={`max-w-[1280px] mx-auto fixed w-full z-10 top-0 left-0 right-0 transition-all duration-200 py-8 ${location.pathname !== '/' ? "bg-primary shadow-md" : (isActive ? "bg-primary shadow-md" : "bg-transparent")}`}>
            <div className="container mx-auto">
                <div className="w-[80%] mx-auto flex flex-row justify-between items-center">
                    <div 
                        className="cursor-pointer"
                        onClick={ () => {
                            if (location.pathname === '/')
                            {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            }   

                            else 
                            {
                                navigate("/");
                                window.scrollTo(0,0);
                                dispatch(applyFilter("all"));
                                dispatch(handleClose());
                            }
                        }}
                    >
                        <img src={logo} alt="" />
                    </div>

                    <button 
                        className="p-1 cursor-pointer relative"
                        onClick={ () => {
                            dispatch(handleOpen());
                        }}
                    >
                        <img src={bag} alt="" />

                        <div className="absolute -right-1 -bottom-[8px] text-[12px] w-[22px] h-[22px] rounded-full bg-black text-white flex items-center justify-center">
                            {cartCount}
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;