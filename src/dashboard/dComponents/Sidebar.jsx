import React, { useState } from "react";
import { FaHome, FaBullhorn, FaCalendarAlt, FaBars } from "react-icons/fa"; // Importing some icons
import { CgProfile } from "react-icons/cg";
import { FaPhotoFilm } from "react-icons/fa6";
import { UserButton, useUser } from "@clerk/clerk-react";

const Sidebar = ({ collapsed, setCollapsed, onClick, selected }) => {

    const { user } = useUser();

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    const getButtonClasses = (item) => {
        const baseClasses =
            "mb-2 w-full rounded-r-md flex items-center px-5 py-3 transition-all duration-200";
        const hoverClasses = "hover:bg-white hover:text-black";
        const selectedClasses = "bg-white text-black text-xl";
        return `${baseClasses} ${hoverClasses} ${selected === item ? selectedClasses : ""
            }`;
    };

    return (
        <div
            className={`flex  h-[100vh] flex-col fixed bg-gray-800 text-white ${collapsed ? "w-20" : "w-64"
                } transition-all duration-300 p-4`}
        >
            <button
                onClick={toggleSidebar}
                className="mb-2 absolute top-3 right-3"
            >
                <FaBars />
            </button>

            {!collapsed && (
                <>
                    <div className="flex flex-col items-center justify-center w-full mt-7">
                        <div className="h-20 w-20 rounded-full bg-white/20 mb-3 flex items-center justify-center object-cover object-center">
                            <UserButton appearance={{
                                elements: {
                                    userButtonAvatarBox: {
                                        width: '100%',
                                        height: '100%',
                                    },
                                },
                            }} />
                        </div>
                        <h1 className="text-2xl font-semibold">{user.fullName}</h1>
                        <p className="text-base font-light">{user.primaryEmailAddress.emailAddress}</p>
                    </div>
                </>
            )}

            <div className={`flex flex-col absolute top-52 left-0 w-full`}>
                <button
                    onClick={() => onClick("home")}
                    className={getButtonClasses("home")}
                >
                    <FaHome size={27} />
                    {!collapsed && (
                        <span className="ml-2  transition duration-200 font-semibold">
                            Home
                        </span>
                    )}
                </button>

                <button
                    onClick={() => onClick("projects")}
                    className={getButtonClasses("projects")}
                >
                    <FaHome size={27} />
                    {!collapsed && (
                        <span className="ml-2  transition duration-200 font-semibold">
                            Projects
                        </span>
                    )}
                </button>

                <button
                    onClick={() => onClick("community")}
                    className={getButtonClasses("community")}
                >
                    <FaHome size={27} />
                    {!collapsed && (
                        <span className="ml-2  transition duration-200 font-semibold">
                            Community
                        </span>
                    )}
                </button>

                <button
                    onClick={() => onClick("announcement")}
                    className={getButtonClasses("announcement")}
                >
                    <FaBullhorn size={27} />
                    {!collapsed && (
                        <span
                            className="ml-2  transition duration-200 
                    font-semibold"
                        >
                            Announcements
                        </span>
                    )}
                </button>
                <button
                    onClick={() => onClick("events")}
                    className={getButtonClasses("events")}
                >
                    <FaCalendarAlt size={27} />
                    {!collapsed && (
                        <span className="ml-2  transition duration-200  font-semibold">
                            Events
                        </span>
                    )}
                </button>
            </div>

            <button
                onClick={() => onClick("events")}
                className=" absolute left-0 bottom-7 mb-2 w-full rounded-r-md flex items-center px-5 py-3 transition-all duration-200 hover:bg-white hover:text-black"
            >
                <FaCalendarAlt size={27} />
                {!collapsed && (
                    <span className="ml-2  transition duration-200  font-semibold">
                        Log Out
                    </span>
                )}
            </button>
        </div>
    );
};

export default Sidebar;
