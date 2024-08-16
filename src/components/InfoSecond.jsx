import React from "react";
import { MdCastForEducation } from "react-icons/md";
import {
    FaChalkboardTeacher,
    FaLaptopCode,
    FaNetworkWired,
    FaPencilAlt,
    FaRegHandshake,
    FaTools,
} from "react-icons/fa";

const InfoSecond = () => {
    return (
        <div id="info2" className=" w-full h-[100vh] flex flex-col items-center justify-center">
            <h1 className=" text-3xl font-semibold opacity-85 mb-15 p-1">
                What We Provide
            </h1>

            <div className="wrapper w-10/12 h-[80%] flex  justify-around ">
                <div className="sub-wrap w-[40%] h-full flex flex-col justify-center ">
                    {/* feature */}
                    <div className="feature w-full flex m-3">
                        <MdCastForEducation size={150} className=" mr-5" />
                        <div className="flex flex-col">
                            <h3 className=" text-2xl mb-4">
                                Educational Workshops and Seminars
                            </h3>
                            <p className=" opacity-50">
                                Attend regular workshops and seminars on
                                blockchain technology, smart contracts, and
                                decentralized applications (dApps). Gain
                                hands-on experience and stay updated with the
                                latest advancements in blockchain.
                            </p>
                        </div>
                    </div>
                    {/* feature */}
                    <div className=" w-full flex m-3">
                        <FaNetworkWired size={150} className=" mr-5" />
                        <div className="flex flex-col">
                            <h3 className=" text-2xl mb-4">
                                Networking Opportunities
                            </h3>
                            <p className=" opacity-50">
                                Participate in meetups, conferences, and online
                                forums to connect with blockchain enthusiasts,
                                developers, and industry experts. Build valuable
                                connections for collaborations, mentorship, and
                                career opportunities.
                            </p>
                        </div>
                    </div>
                    {/* feature */}
                    <div className=" w-full flex m-3">
                        <FaRegHandshake size={150} className=" mr-5" />
                        <div className="flex flex-col">
                            <h3 className=" text-2xl mb-4">
                                Project Collaboration and Hackathons
                            </h3>
                            <p className=" opacity-50">
                                Join collaborative projects and hackathons to
                                work on real-world blockchain applications.
                                Enhance your practical skills, showcase your
                                talents, and potentially launch successful
                                blockchain projects.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sub-wrap w-[40%] h-full flex flex-col justify-center">
                    {/* feature */}
                    <div className=" w-full flex m-3">
                        <FaPencilAlt size={120} className=" mr-5" />
                        <div className="flex flex-col">
                            <h3 className=" text-2xl mb-4">
                                Access to Resources and Tools
                            </h3>
                            <p className=" opacity-50">
                                Gain access to blockchain development tools,
                                libraries, and learning resources such as
                                tutorials, documentation, and online courses.
                                Develop and deploy your own blockchain solutions
                                more efficiently.
                            </p>
                        </div>
                    </div>
                    {/* feature */}
                    <div className=" w-full flex m-3">
                        <FaChalkboardTeacher size={150} className=" mr-5" />
                        <div className="flex flex-col">
                            <h3 className=" text-2xl mb-4">
                                Mentorship and Guidance
                            </h3>
                            <p className=" opacity-50">
                                Access mentorship programs where experienced
                                blockchain professionals provide guidance and
                                support. Benefit from personalized advice,
                                career insights, and tailored learning paths to
                                accelerate your growth in the blockchain field.
                            </p>
                        </div>
                    </div>
                    {/* feature */}
                    <div className=" w-full flex m-3">
                        <FaLaptopCode size={150} className=" mr-5" />
                        <div className="flex flex-col">
                            <h3 className=" text-2xl mb-4">
                                Community Projects and Initiatives
                            </h3>
                            <p className=" opacity-50">
                                Engage in community-driven projects and
                                initiatives focused on real-world blockchain
                                applications. Collaborate with members to create
                                impactful solutions, contribute to open-source
                                projects, and drive innovation within the
                                community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoSecond;
