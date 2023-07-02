import React from 'react';

import pizzaImg from '../assets/img/pizza-banner.webp';

const Hero = (props) => {
    return (
        <div className="pb-16 pt-[120px] lg:pt-[85px] bg-pattern bg-primary">
            <div className="container mx-auto">
                <div className="lg:w-[88%] xl:w-[82%] lg:mx-auto flex flex-col lg:flex-row gap-y-4 items-center justify-center lg:justify-between px-4">
                    <div className="w-full lg:w-[50%] text-center lg:text-left">
                        <div className="uppercase text-[25px] md:text-[30px] lg:text-[30px] xl:text-[35px] mb-1 text-white" style={ {fontFamily: "'Bangers', cursive"} }>
                            Best pizza in town
                        </div>

                        <div className="uppercase text-[45px] md:text-[58px] lg:text-[62px] xl:text-[70px] leading-[1] text-white" style={ {fontFamily: "'Bangers', cursive"} }>
                            Pizza Perfection <br/>
                            in every bite
                        </div>
                    </div>

                    <div className="relative w-[300px] md:w-[380px] lg:w-[450px] xl:w-[500px] lg:-right-2">
                        <img className="min-h-[321px] md:min-h-[406px] lg:min-h-[465px] xl:min-h-[529px]" src={pizzaImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;