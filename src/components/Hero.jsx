import React from "react";
import logo from "../assets/image4.png";
import { FaAngleRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className=" h-[90vh] w-full flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center">
                <img src={logo} alt="logo" className=" mb-16" />
                <h1 className=" text-[3rem] font-bold mb-2 overflow-hidden">
                    ALGORAND BLOCKCHAIN CLUB
                </h1>
                <p className=" text-xl font-light opacity-80">
                    ADAMAS UNIVERSITY
                </p>

                <button className=" border-white border-2 bg-white/20 px-5 py-2 rounded-3xl mt-8 hover:bg-white text-xl font-bold hover:text-black transition-all duration-200 flex items-center gap-2">
                    Get Started <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default Hero;
