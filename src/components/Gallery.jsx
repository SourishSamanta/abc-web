import React from "react";

import "../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { gallery } from "../utils/util";

const Gallery = () => {
    return (
        <section className=" z-10 w-full h-[100vh] flex justify-center items-center px-32">
            <Swiper
                cssMode={true}
                navigation={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-[80%]"
            >
                { gallery.map((el, i) => (
                    <SwiperSlide>
                        <div className="flex w-full h-full items-center justify-center overflow-hidden bg-white/20">
                            <img src={el} className=" w-full" alt="" />
                        </div>
                    </SwiperSlide>
                ))}

              
            </Swiper>
        </section>
    );
};

export default Gallery;
