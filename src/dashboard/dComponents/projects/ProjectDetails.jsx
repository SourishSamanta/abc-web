import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const {projectId} = useParams();
    console.log(projectId)

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/project/read-projects/${projectId}`);
                if (response.data.success) {
                    setProject(response.data.project);
                } else {
                    setError("Failed to fetch project details.");
                }
            } catch (err) {
                setError("An error occurred while fetching project details.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [projectId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!project) {
        return <div>No project details available</div>;
    }

    return (
        <div className="flex flex-col items-center p-6 bg-white shadow-md rounded-md max-w-3xl mx-auto">
            <img 
                src={project.bannerURL} 
                alt={`${project.projectTitle} Banner`} 
                className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h2 className="text-3xl font-bold mb-2 text-black">{project.projectTitle}</h2>
            <p className="text-lg text-gray-700 mb-4">{project.projectDescription}</p>
            <div className="text-gray-600 mb-4">
                <strong>Links:</strong>
                <ul>
                    {project.links.map((link, index) => (
                        <li key={index}>
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="text-gray-600">
                <strong>Owner:</strong>
                <p>{project.owner.username}</p>
                <p>{project.owner.email}</p>
            </div>
        </div>
    );
}

export default ProjectDetails;
