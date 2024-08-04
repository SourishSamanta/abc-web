import React, { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const AddProject = ({ activateForm, setActivateForm }) => {
    const [socialLinks, setSocialLinks] = useState([""]);
    const [projectName, setProjectName] = useState("");
    const [description, setDescription] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const [banner, setBanner] = useState(null);
    const [bannerPreview, setBannerPreview] = useState("");
    const {user} = useUser();

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setBanner(file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBannerPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        // Validation
        if (!projectName.trim()) {
            alert("Project Name is required.");
            return;
        }
        if (!description.trim()) {
            alert("Description is required.");
            return;
        }
        if (!githubLink.trim()) {
            alert("GitHub Link is required.");
            return;
        }
        if (socialLinks.every(link => !link.trim())) {
            alert("At least one social link is required.");
            return;
        }
        if (!banner) {
            alert("Banner image is required.");
            return;
        }

        var links = [];
        links.push(githubLink);
        socialLinks.map((item) => {
            links.push(item)
        })
        // Create FormData object
        const formData = new FormData();
        formData.append("projectTitle", projectName);
        formData.append("projectDescription", description);
        formData.append("links", links);
        formData.append("banner", banner); // 'banner' is the file object
        formData.append('clerkID', "123456")

        
        // const payload = {
        //     projectName,
        //     description,
        //     githubLink,
        //     banner,
        //     socialLinks,
        // };

        // console.log({
        //     projectName,
        //     description,
        //     githubLink,
        //     banner,
        //     socialLinks,
        // })

        const BannerForm = new FormData();
        BannerForm.append('image', banner)

        const uploadBannerResponse = await axios.post(`${import.meta.env.VITE_API_URL}/util/upload`,BannerForm, {
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })

        var BannerURL = '';

        if(uploadBannerResponse.data.success === true){
            BannerURL = uploadBannerResponse.data.url;
        }

        //making api call
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/project/create-project`, {
            projectTitle : projectName,
            projectDescription : description,
            links : links,
            bannerURL : BannerURL,
            clerkID : user.id
        
        })

        if(response.data.success === true)
            setActivateForm(!activateForm)

        
    };

    return (
        <div className="flex-1 flex flex-col overflow-hidden items-center min-h-[100vh]">
            <form onSubmit={handleSubmit} className="flex-1 flex w-[90%] flex-col">
                <div className="w-full flex mb-6">
                    <button onClick={() => setActivateForm(!activateForm)} className="mr-3 flex items-center justify-center">
                        <IoArrowBackCircle size={30} />
                    </button>
                    <h1 className="text-2xl">Add Project</h1>
                </div>
                <div className="relative border border-white/40 rounded-md flex p-5 gap-4 mb-4 w-full min-h-[80vh]">
                    <div className="w-1/2 h-2/3 border-r-2 border-white/20 flex p-4 justify-center">
                        <div className="w-[80%] h-[60%] aspect-video min-w-[350px] bg-white/30 rounded-lg relative">
                            {bannerPreview ? (
                                <img
                                    src={bannerPreview}
                                    alt="Banner Preview"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg">
                                    <p className="text-gray-600">No Image Selected</p>
                                </div>
                            )}
                            <input
                                type="file"
                                onChange={handleImageChange}
                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-center mb-10">
                        <h1 className="text-2xl mb-10">Add Project Details</h1>
                        <div className="w-full flex flex-col flex-1 px-8">
                            <div className="mb-4 flex flex-col w-full">
                                <p className="mb-2">Project Name: </p>
                                <input
                                    type="text"
                                    className="border-b text-xl opacity-80 font-thin border-white bg-transparent text-white p-2 outline-none w-[80%]"
                                    placeholder="Project Name"
                                    value={projectName}
                                    onChange={(e) => setProjectName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 flex flex-col w-full">
                                <p className="mb-2">Description: </p>
                                <textarea
                                    className="border text-xl opacity-80 font-thin border-white bg-transparent text-white p-2 outline-none resize-none w-[80%] h-40"
                                    placeholder="Enter Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 flex flex-col w-full">
                                <p className="mb-2">GitHub Link: </p>
                                <input
                                    type="text"
                                    className="border-b text-xl opacity-80 font-thin border-white bg-transparent text-white p-2 outline-none w-[80%]"
                                    placeholder="GitHub Link"
                                    value={githubLink}
                                    onChange={(e) => setGithubLink(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 flex flex-col w-full">
                                <p className="mb-2">Additional Links:</p>
                                <p className="text-sm text-gray-400">
                                    Add up to 5 links where this project can be found or described in more detail. For example, you can include links to related documentation, tutorials, or other platforms where the project is featured.
                                </p>
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
                    <button
                        type="submit"
                        className="absolute flex items-center justify-center bottom-8 right-8 px-3 text-white py-2 rounded-md bg-blue-500"
                    >
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProject;
