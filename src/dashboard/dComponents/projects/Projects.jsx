import React, { useState } from "react";
import AddProject from "./AddProject";

const Projects = () => {
    const [activateForm, setActivateForm] = useState(false);
    return (
        <div className="flex-1 flex flex-col overflow-hidden  items-center min-h-[100vh]">
            <div className=" flex w-[90%] flex-col">
                {activateForm ? (
                    <AddProject activateForm={activateForm} setActivateForm={setActivateForm} />
                ) : (
                    <>
                        <div className=" w-full flex justify-between mb-6">
                            <h1 className="text-2xl ">Your Projects</h1>
                            <button onClick={() => setActivateForm(!activateForm)} className="flex items-center justify-center px-3 text-white py-2 rounded-md bg-blue-500">
                                Add Project <span className="text-2xl">+</span>
                            </button>
                        </div>
                        <div className=" flex-wrap flex flex-1 gap-4 mb-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e, i) => (
                                <div className="project-card p-2 flex flex-col">
                                    {e}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Projects;
