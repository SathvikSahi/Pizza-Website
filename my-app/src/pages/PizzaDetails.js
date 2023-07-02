import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../features/slice/cartSlice';

const PizzaDetails = (props) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { pizzas } = useSelector( (store) => store.pizza );

    useEffect( () => {
        window.scrollTo(0,0);
    }, []);

    const pizza = pizzas.find( (pizza) => {
        return pizza.id == id;
    });

    const {
        image,
        name,
        description,
        priceSm,
        priceMd,
        priceLg
    } = pizza;

    let [price, setPrice] = useState( () => priceSm );
    let [size, setSize] = useState( () => "25cm" );
    let [selectedSize, setSelectedSize] = useState( () => "sm" );

    const mapper = {
        sm: {
            size: "25cm",
            price: priceSm
        },

        md: {
            size: "30cm",
            price: priceMd
        },

        lg: {
            size: "35cm",
            price: priceLg
        }
    };

    useLayoutEffect( () => {
        setPrice( () => mapper[selectedSize].price );
        setSize( () => mapper[selectedSize].size );
    }, [selectedSize])

    return (
        <div className="max-w-[1050px] mx-auto flex items-center justify-center min-h-screen pt-40 pb-20 lg:pt-36">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-2">
                    <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
                        <img className="min-h-[300px] md:min-h-[350px] lg:min-h-none max-w-[300px] md:max-w-[350px] lg:max-w-[400px]" src={image} alt="" />
                    </div>

                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-[30px] font-bold max-w-[450px] mx-auto lg:mx-0 capitalize">
                            {name}
                        </h2>

                        <div className="mb-4">
                            {size}
                        </div>

                        <p className="mb-6 max-w-[320px] md:max-w-[420px] mx-auto lg:mx-0 px-2 md:px-0">
                            {description}
                        </p>

                        <div className="flex flex-row justify-center lg:justify-start items-baseline gap-x-8 mb-6">
                            <div 
                                className="flex flex-col gap-y-1 items-center cursor-pointer"
                                onClick={ () => {
                                    setSelectedSize( () => "sm" );
                                }}
                            >
                                <img 
                                    className={`w-[60px] ${selectedSize === "sm" ? "grayscale-0" : "grayscale"}`} 
                                    src={image} 
                                    alt="" 
                                />
                                
                                <div className="text-gray-500 capitalize">
                                    small
                                </div>
                            </div>

                            <div 
                                className="flex flex-col gap-y-1 items-center cursor-pointer"
                                onClick={ () => {
                                    setSelectedSize( () => "md" );
                                }}
                            >
                                <img 
                                    className={`w-[80px] ${selectedSize === "md" ? "grayscale-0" : "grayscale"}`} 
                                    src={image} 
                                    alt="" 
                                />
                                
                                <div className="text-gray-500 capitalize">
                                    medium
                                </div>
                            </div>

                            <div 
                                className="flex flex-col gap-y-1 items-center cursor-pointer"
                                onClick={ () => {
                                    setSelectedSize( () => "lg" );
                                }}
                            >
                                <img 
                                    className={`w-[100px] ${selectedSize === "lg" ? "grayscale-0" : "grayscale"}`} 
                                    src={image} 
                                    alt="" 
                                />
                                
                                <div className="text-gray-500 capitalize">
                                    large
                                </div>
                            </div>
                        </div>

                        <button 
                            className="bg-primary rounded-lg py-4 px-8 text-white"
                            onClick={ () => {
                                dispatch(addToCart( {
                                    product: pizza, 
                                    size: selectedSize, 
                                    price
                                }));
                            }}
                        >
                            Add to cart for ${price}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaDetails;