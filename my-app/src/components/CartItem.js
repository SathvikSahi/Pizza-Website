import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { IoMdClose } from 'react-icons/io';

import { deleteFromCart, increaseItem, decreaseItem } from '../features/slice/cartSlice';

const CartItem = (props) => {
    const { cartItem } = props;

    const {
        id, 
        name,
        image,
        quantity,
        size,
        price
    } = cartItem;

    const dispatch = useDispatch();

    const sizeMapper = {
        sm: 'small size',
        md: 'medium size',
        lg: 'large size'
    };

    return (
        <div className="flex items-center justify-center border-b py-5 w-full">
            <div className="flex flex-row items-center w-full gap-x-5">
                <div className="w-[110px]">
                    <Link to={`/pizza/${id}`}>
                        <img src={image} alt="" />
                    </Link>
                </div>

                <div className="flex-1 flex flex-col items-center gap-y-[14px] pl-[2px] pr-2">
                    <div className="flex flex-row justify-between items-start w-full">
                        <div>
                            <h2 className="font-semibold uppercase mb-1">
                                {name}
                            </h2>

                            <p className="capitalize mt-0">
                                {sizeMapper[size]}
                            </p>
                        </div>

                        <div 
                            className="text-xl pt-1"
                            onClick={ () => {
                                dispatch(deleteFromCart( {id, size} ));
                            }}
                        >
                            <IoMdClose className="text-gray-500 hover:text-red-500 transition cursor-pointer"/>
                        </div>
                    </div>

                    <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-row items-center gap-x-3">
                            <button 
                                className="text-2xl w-[20px] h-[20px] gradient rounded-full flex items-center justify-center pb-[5px] md:pb-[6px]"
                                onClick={ () => {
                                    (
                                        quantity > 1 ?
                                        dispatch(decreaseItem( {id, size} )) :
                                        dispatch(deleteFromCart( {id, size} )) 
                                    );
                                }}
                            >
                                -
                            </button>

                            <div className="text-lg pb-[2px]">
                                {quantity}
                            </div>

                            <button 
                                className="text-xl w-[20px] h-[20px] gradient rounded-full flex items-center justify-center pb-[5px] pl-[1px]"
                                onClick={ () => {
                                    dispatch(increaseItem( {id, size} ));
                                }}
                            >
                                +
                            </button>
                        </div>

                        <div className="text-lg text-gray-600">
                            ${parseFloat((price * quantity)).toFixed(2)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;