import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';

import { IoMdArrowForward } from 'react-icons/io';

import { handleClose } from '../features/slice/sidebarSlice';
import { updateCountTotal } from '../features/slice/cartSlice';

const Sidebar = (props) => {
    const { isOpen } = useSelector( (store) => store.sidebar );
    const dispatch = useDispatch();
    
    const { cartItems ,cartCount, cartTotal } = useSelector( (store) => store.cart );

    useEffect( () => {
      dispatch(updateCountTotal());
    }, [cartItems]);

    return (
        <div 
          className={`flex flex-col justify-between w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vw] lg:w-[40vw] xl:w-[35vw] transition-all duration-500 z-20 px-6 ${isOpen ? "right-0" : "-right-full"}`} 
        >
          <div>
            <div className="flex flex-row items-center justify-between py-5 border-b">
              <div className="uppercase text-md font-semibold">
                shopping bag ({cartCount})
              </div>
    
              <div 
                className="cursor-pointer p-1" 
                onClick={ () => {
                  dispatch(handleClose());
                }}>
                <IoMdArrowForward className="text-2xl" />
              </div>
            </div>
    
            <div className="flex flex-col overflow-y-auto pr-4" style={ {maxHeight: (window.innerHeight-220)} }>
              {
                (
                  cartItems.length > 0 ?
    
                  cartItems.map( (cartItem) => {
                    return (
                      <div key={cartItem.id + cartItem.size} >
                        <CartItem cartItem={cartItem} />
                      </div>
                    );
                  }) :
    
                  <div className="text-gray-500 h-full text-center text-xl mt-[50px]">
                    Your cart is empty
                  </div>
                )
              }
            </div>
          </div>
    
          <div className="flex flex-col gap-y-3 py-5 mb-1 border-t">
            <div className="flex flex-row w-full justify-between items-center pt-[2px] pb-[10px]">
              <div className="uppercase font-semibold text-md">
                <span className="mr-[6px]"> Total: </span> $ {cartTotal}
              </div>
            </div>
    
            <button className="bg-primary flex p-4 justify-center items-center text-white w-full font-semibold">
              Checkout
            </button>
          </div>    
        </div>
      );
}

export default Sidebar;