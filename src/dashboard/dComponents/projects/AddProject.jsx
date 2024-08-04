import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

const AddProject = ({ activateForm, setActivateForm }) => {
    const [socialLinks, setSocialLinks] = useState([""]);

    const handleAddSocialLink = () => {
        if (socialLinks.length < 5) {
            setSocialLinks([...socialLinks, ""]);
        }
    };

    const handleRemoveSocialLink = (index) => {
        if (socialLinks.length > 1) {
            const newLinks = socialLinks.filter((_, idx) => idx !== index);
            setSocialLinks(newLinks);
        }
    };

    const handleSocialLinkChange = (index, value) => {
        const newLinks = socialLinks.map((link, idx) => (idx === index ? value : link));
        setSocialLinks(newLinks);
    };

    return (
        <div className="flex-1 flex flex-col overflow-hidden items-center min-h-[100vh]">
            <div className="flex-1 flex w-[90%] flex-col">
                <div className="w-full flex mb-6">
                    <button onClick={() => setActivateForm(!activateForm)} className="mr-3 flex items-center justify-center">
                        <IoArrowBackCircle size={30} />
                    </button>
                    <h1 className="text-2xl">Add Project</h1>
                </div>
                <div className="relative border border-white/40 rounded-md flex p-5 gap-4 mb-4 w-full min-h-[80vh]">
                    <div className="w-1/2 h-2/3 border-r-2 border-white/20 flex p-4 justify-center">
                        <div className="w-[80%] h-[60%] aspect-video min-w-[350px] bg-white/30 rounded-lg"></div>
                    </div>
                    <div className="w-1/2 flex flex-col items-center mb-10">
                        <h1 className="text-2xl mb-10">Add Project Details</h1>
                        <div className="w-full flex flex-col flex-1 px-8">
                            <div className="mb-4 flex flex-col w-full">
                                <p className="mb-2">Project Name: </p>
                                <input type="text" className="border-b text-xl opacity-80 font-thin border-white bg-transparent text-white p-2 outline-none w-[80%]" placeholder="Project Name" />
                            </div>
                            <div className="mb-4 flex flex-col w-full">
                                <p className="mb-2">Description: </p>
                                <textarea className="border text-xl opacity-80 font-thin border-white bg-transparent text-white p-2 outline-none resize-none w-[80%] h-40" placeholder="Enter Description"></textarea>
                            </div>
                            
                            <div className="mb-4 flex flex-col w-full">
                                <p className="mb-2">Social Links: </p>
                                {socialLinks.map((link, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input
                                            type="text"
                                            value={link}
                                            onChange={(e) => handleSocialLinkChange(index, e.target.value)}
                                            className="border-b text-xl opacity-80 font-thin border-white bg-transparent text-white p-2 outline-none w-[80%] mr-2"
                                            placeholder={`Social Link ${index + 1}`}
                                        />
                                        {socialLinks.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveSocialLink(index)}
                                                className="text-red-500"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                ))}
                                {socialLinks.length < 5 && (
                                    <button type="button" onClick={handleAddSocialLink} className="text-blue-500 mt-2">
                                        + Add Another Link
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => {
                        setActivateForm(!activateForm)
                    }} className=" absolute flex items-center justify-center bottom-8 right-8 px-3 text-white py-2 rounded-md bg-blue-500">
                                Upload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProject;