import React from "react";
import ProgressBar from "./ProgressBar";

const Home = () => {
    return (
        <div className="flex-1 flex flex-col items-center">
            <div>
            <h1 className="text-2xl mb-4">Home</h1>
            <div className="grid grid-cols-3 gap-4 h-[30vh] mb-4">
                <div className="neumorphism-card p-2 flex flex-col">
                    <h1 className=" font-thin">Course in Progress</h1>
                    <div className="flex flex-col ">
                        <div className=" w-full flex justify-between my-2 ">
                            <div className=" w-44 h-24 bg-white/20 "></div>
                            <ProgressBar />
                        </div>
                        <div>
                            <h1 className=" w-[50%] text-ellipsis text-nowrap">
                                Bitcoin Cryptocurrency and Technologies
                            </h1>
                            <button className=" w-full rounded-full bg-white/20 py-1 mt-1">
                                <p>Continue</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="neumorphism-card">Card 2</div>
                <div className="neumorphism-card">Card 3</div>
            </div>
            <div className="grid grid-cols-2 gap-4  h-[51vh]">
                <div className="neumorphism-card">Card 4</div>
                <div className="neumorphism-card">Card 5</div>
            </div>
            </div>
        </div>
    );
};

export default Home;
