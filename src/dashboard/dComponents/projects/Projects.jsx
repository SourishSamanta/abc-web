import React, { useEffect, useState } from "react";
import AddProject from "./AddProject";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import ProjectDetails from "./ProjectDetails";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const { user } = useUser();
    const [projects, setProjects] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    const fetchProjects = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/project/read-projects-all/${user.id}`);
        if (res.data.success === true) {
            setProjects(res.data.projects);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const [activateForm, setActivateForm] = useState(false);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <div className="flex-1 flex flex-col overflow-hidden items-center min-h-[100vh]">
            <div className="flex w-[90%] flex-col">
                {activateForm ? (
                    <AddProject activateForm={activateForm} setActivateForm={setActivateForm} />
                ) : (
                    <>
                        <div className="w-full flex justify-between mb-6">
                            <h1 className="text-2xl">Your Projects</h1>
                            <button 
                                onClick={() => setActivateForm(!activateForm)} 
                                className="flex items-center justify-center px-3 text-white py-2 rounded-md bg-blue-500"
                            >
                                Add Project <span className="text-2xl">+</span>
                            </button>
                        </div>
                        <div className="flex-wrap flex flex-1 gap-4 mb-4">
                            {projects && (
                                <>
                                    {projects.map((project) => (
                                        <div 
                                            key={project._id} 
                                            className="project-card p-4 flex flex-col bg-white rounded-md shadow-md w-full max-w-sm cursor-pointer" 
                                            onClick={() => navigate('/project-details/'+project._id)}
                                        >
                                            <img 
                                                src={project.bannerURL} 
                                                alt={`${project.projectTitle} Banner`} 
                                                className="w-full h-32 object-cover rounded-md mb-4" 
                                            />
                                            <h2 className="text-xl font-bold mb-2">{project.projectTitle}</h2>
                                            <p className="text-gray-600">{project.projectDescription}</p>
                                        </div>
                                    ))}
                                </>
                            )}
                        </div>
                        {selectedProject && <ProjectDetails project={selectedProject} />}
                    </>
                )}
            </div>
        </div>
    );
};

export default Projects;
