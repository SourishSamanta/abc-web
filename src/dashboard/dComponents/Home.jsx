import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from "axios";

const Home = () => {
    // State to hold commit data from API
    const [commitHistory, setCommitHistory] = useState([]);

    // Fetch commit data from the API
    const fetchCommitHistory = async () => {
        try {
            console.log(`${import.meta.env.VITE_API_URL}/github-data/commits?owner=AdamasABC&repo=club-assignments`)
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/github-data/commits?owner=AdamasABC&repo=club-assignments`);
            console.log(response.data)
            const commitData = response.data.map((commit) => ({
                sha: commit.sha,
                author: commit.author,
                date: commit.date.split('T')[0], // Extract the date part (YYYY-MM-DD)
                message: commit.message,
            }));
            setCommitHistory(commitData);
        } catch (error) {
            console.error("Error fetching commit data:", error);
        }
    };

    useEffect(() => {
        fetchCommitHistory();  // Fetch the commit data when the component mounts
    }, []);

    return (
        <div className="flex-1 flex flex-col items-center">
            <div>
                <h1 className="text-2xl mb-4">Home</h1>
                <div className="grid grid-cols-3 gap-4 h-[30vh] mb-4">
                    <div className="neumorphism-card p-2 flex flex-col">
                        <h1 className="font-thin">Course in Progress</h1>
                        <div className="flex flex-col">
                            <div className="w-full flex justify-between my-2">
                                <div className="w-44 h-24 bg-white/20"></div>
                                <ProgressBar />
                            </div>
                            <div>
                                <h1 className="w-[50%] text-ellipsis text-nowrap">
                                    Bitcoin Cryptocurrency and Technologies
                                </h1>
                                <button className="w-full rounded-full bg-white/20 py-1 mt-1">
                                    <p>Continue</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="neumorphism-card">Card 2</div>
                    <div className="neumorphism-card">Card 3</div>
                </div>
                <div className="grid grid-cols-2 gap-4 h-[51vh]">
                    <div className="neumorphism-card">
                        <h1 className="font-thin">GitHub Commits</h1>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={commitHistory}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sha" stroke="#8884d8" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="neumorphism-card">Card 5</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
