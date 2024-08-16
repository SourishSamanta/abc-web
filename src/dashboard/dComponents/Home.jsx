import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from "recharts";
import axios from "axios";
import ProgressBar from "./ProgressBar";
import { useUser } from "@clerk/clerk-react";

// Create a custom theme for the DataGrid
const darkTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#1a1a1a",
            paper: "#1f1f1f",
        },
        text: {
            primary: "#e0e0e0",
            secondary: "#a0a0a0",
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: "1px solid #333",
                    color: "#e0e0e0",
                },
                cell: {
                    borderBottom: "1px solid #333",
                },
                columnHeaders: {
                    backgroundColor: "#333",
                    borderBottom: "1px solid #444",
                },
                row: {
                    "&:nth-of-type(odd)": {
                        backgroundColor: "#2a2a2a",
                    },
                    "&:hover": {
                        backgroundColor: "#3a3a3a",
                    },
                },
            },
        },
    },
});

const Home = () => {
    const [commitHistory, setCommitHistory] = useState([]);
    const [projects, setProjects] = useState(null);

    const fetchCommitHistory = async () => {
        try {
            const response = await axios.get(
                `${
                    import.meta.env.VITE_API_URL
                }/github-data/commits?owner=AdamasABC&repo=club-assignments`
            );
            const commitData = response.data.map((commit) => ({
                id: commit.sha, // Use SHA as the unique identifier
                date: commit.date.split("T")[0], // Extract the date part (YYYY-MM-DD)
                author: commit.author,
                message: commit.message,
            }));
            setCommitHistory(commitData);
        } catch (error) {
            console.error("Error fetching commit data:", error);
        }
    };

    const { user } = useUser();

    const fetchProjects = async () => {
        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/project/read-projects-all/${
                user.id
            }`
        );
        if (res.data.success === true) {
            console.log(res.data);
            setProjects(res.data.projects);
        }
    };

    const fetchAnnouncements = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/announcement`);
            if (res.data.success) {
                setAnnouncements(res.data.announcements);
                console.log(res)
            } else {
                alert('Failed to fetch announcements');
            }
        } catch (err) {
            alert('Server error');
        } finally {
            setLoading(false);
        }
    };

    const [announcements, setAnnouncements] = useState(null);


    const [commitData, setCommitData] = useState([]);
    const [sortedProjects, setSortedProjects] = useState();
    const [sortedAnnouncements, setSortedAnnouncements] = useState();
    


    useEffect(() => {
        fetchProjects();
        fetchAnnouncements()
        fetchCommitHistory();
    }, []);

    useEffect(() => {
        if (projects) {
            setSortedProjects(
                projects
                    ?.slice()
                    .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    ) || []
            );
        }
    }, [projects]);

    useEffect(() => {
        if (announcements) {
            setSortedAnnouncements(
                announcements
                    ?.slice()
                    .sort(
                        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    ) || []
            );
        }
    }, [announcements]);

    useEffect(() => {
        const aggregatedData = {};
        commitHistory.forEach((commit) => {
            if (aggregatedData[commit.date]) {
                aggregatedData[commit.date].commits += 1;
                aggregatedData[commit.date].details.push(commit);
            } else {
                aggregatedData[commit.date] = { commits: 1, details: [commit] };
            }
        });

        const data = Object.keys(aggregatedData).map((date) => ({
            date,
            commits: aggregatedData[date].commits,
            details: aggregatedData[date].details,
        }));

        setCommitData(data);
    }, [commitHistory]);

    const columns = [
        { field: "date", headerName: "Date", width: 150 },
        { field: "author", headerName: "Author", width: 150 },
        { field: "message", headerName: "Message", width: 400 },
    ];

    const COLORS = ["#8884d8", "#83a6ed", "#8dd1e1", "#82ca9d", "#a4de6c"];

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="flex-1 flex flex-col items-center">
                <div className=" max-w-[1200px] w-[90%]">
                    <h1 className="text-2xl mb-4 text-gray-300">Home</h1>
                    <div className="grid grid-cols-3 gap-4 h-[30vh] mb-4">
                        <div className="neumorphism-card p-2 flex flex-col  ">
                            {/* <ResponsiveContainer width="100%" height="90%">
                           {
                            projects && (<>
                                <PieChart>
                                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#444', color: '#e0e0e0' }} />
                                    <Pie
                                        data={projects}
                                        dataKey="commits"
                                        nameKey="date"
                                        outerRadius="80%"
                                        fill="#8884d8"
                                    >
                                        {console.log(projects && projects)}
                                        {projects.map((_, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            
                            </>)
                           }
                            </ResponsiveContainer> */}

                            <h1 className="font-thin">Recent projects</h1>
                            <ul className=" flex flex-col w-[100%]">
                                {sortedProjects && (
                                    <>
                                        {sortedProjects.slice(0, 3).map((item, index) => {
                                            return (
                                                <>
                                                    <li className=" w-[95%] px-7 py-4 rounded-md m-1 bg-white/20 hover:scale-[.97] transition-all ">
                                                        {item.projectTitle}
                                                    </li>
                                                </>
                                            );
                                        })}
                                    </>
                                )}
                            </ul>
                        </div>
                        <div className="neumorphism-card p-2">
                            <h1 className="font-thin">Recent Announcements</h1>
                            <ul className=" flex flex-col w-[100%]">
                                {sortedAnnouncements && (
                                    <>
                                        {sortedAnnouncements.slice(0, 3).map((item, index) => {
                                            console.log(item)
                                            return (
                                                <>
                                                    <li className=" w-[95%] px-7 py-4 rounded-md m-1 bg-white/20 hover:scale-[.97] transition-all ">
                                                        {item.title}
                                                    </li>
                                                </>
                                            );
                                        })}
                                    </>
                                )}
                            </ul></div>
                        <div className="neumorphism-card p-2">
                            <h1 className="font-thin">Events</h1>
                            <ul className=" flex flex-col w-[100%]">
                                <li className=" w-[95%] px-7 py-4 rounded-md m-1 bg-white/20 hover:scale-[.97] transition-all ">
                                    Event1
                                </li>
                                <li className=" w-[95%] px-7 py-4 rounded-md m-1 bg-white/20">
                                    Event2
                                </li>
                                <li className=" w-[95%] px-7 py-4 rounded-md m-1 bg-white/20">
                                    Event3
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-[51vh]">
                        <div className="neumorphism-card flex items-center justify-center flex-col ">
                            <h1 className="font-thin">GitHub Commits</h1>
                            <ResponsiveContainer width="100%" height="90%">
                                <LineChart data={commitData}>
                                    <CartesianGrid
                                        strokeDasharray="3 3"
                                        stroke="#444"
                                    />
                                    <XAxis dataKey="date" stroke="#e0e0e0" />
                                    <YAxis stroke="#e0e0e0" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "#333",
                                            borderColor: "#444",
                                            color: "#e0e0e0",
                                        }}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="commits"
                                        stroke="#8884d8"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="neumorphism-card   overflow-auto">
                            <table class="min-w-full h-full rounded-2xl overflow-hidden bg-white">
                                <thead class="dark:bg-[#222] dark:text-white">
                                    <tr>
                                        <th class="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
                                            Date
                                        </th>
                                        <th class="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
                                            Author
                                        </th>
                                        <th class="w-1/3 py-3 px-4 uppercase font-semibold text-sm">
                                            Message
                                        </th>
                                    </tr>
                                </thead>
                                {commitHistory.map((item) => {
                                    return (
                                        <>
                                            <tbody class="text-gray-700">
                                                <tr class="bg-gray-100 dark:bg-[#2c2c2c] dark:text-white/70 hover:bg-gray-200">
                                                    <td class="w-1/3 py-3 px-4">
                                                        {item.date}
                                                    </td>
                                                    <td class="w-1/3 py-3 px-4">
                                                        {item.author}
                                                    </td>
                                                    <td class="w-1/3 py-3 px-4">
                                                        {item.message}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </>
                                    );
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Home;
