import React from 'react';
import { useSelector } from 'react-redux';

import Hero from '../components/Hero';
import Pizza from '../components/Pizza';
import Filter from '../components/filter';

const Home = (props) => {
    const { pizzas } = useSelector( (store) => store.pizza );

    return (
        <div>
            <Hero />
            <Filter />

            <div className="container mx-auto pb-[85px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1024px] mx-auto px-4">
                    {
                        pizzas.map( (pizza) => {
                            return (
                                <div key={pizza.id}>
                                    <Pizza pizza={pizza} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;