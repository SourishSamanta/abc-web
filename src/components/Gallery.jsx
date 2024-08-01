import React from "react";

import "../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Gallery = () => {
    return (
        <section className=" z-10 w-full h-[100vh] flex justify-center items-center px-32">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-[80%]"
            >
                {[1,2,3,4,5,6].map((el, i) => (
                    <SwiperSlide>
                        <div className="flex w-full h-full items-center justify-center bg-white/20">
                            <h1>Slide {el}</h1>
                        </div>
                    </SwiperSlide>
                ))}

              
            </Swiper>
        </section>
    );
};

export default Gallery;
