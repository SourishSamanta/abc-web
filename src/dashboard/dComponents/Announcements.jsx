import React, { useEffect, useState } from "react";
import axios from "axios";

const Announcement = () => {
    const [announcements, setAnnouncements] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAnnouncements = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/announcement`);
            if (res.data.success) {
                setAnnouncements(res.data.announcements);
            } else {
                setError('Failed to fetch announcements');
            }
        } catch (err) {
            setError('Server error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    if (loading) return <div className="text-center mt-10 text-gray-300">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

    return (
        <div className="flex-1 flex flex-col overflow-hidden items-center min-h-[100vh]  text-gray-300">
            <div className="flex w-[90%] flex-col mt-4">
                <h1 className="text-2xl mb-4 text-white">Announcements</h1>
                <div className="flex-wrap flex flex-1 gap-4 mb-4">
                    {announcements && announcements.length > 0 ? (
                        announcements.map((announcement) => (
                            <div 
                                key={announcement._id} 
                                className="announcement-card p-4 flex flex-col bg-gray-800 rounded-md shadow-lg w-full max-w-sm"
                            >
                                <h2 className="text-xl font-bold mb-2 text-white">{announcement.title}</h2>
                                <p className="text-gray-300 mb-2">{announcement.content}</p>
                                <p className="text-gray-400">Author: {announcement.author}</p>
                                <p className={`mt-2 px-2 py-1 inline-block text-sm rounded-md ${announcement.isPublished ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {announcement.isPublished ? 'Published' : 'Unpublished'}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center mt-10 text-gray-300">No announcements available</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Announcement;
