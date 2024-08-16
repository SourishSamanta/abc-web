import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event

    const fetchEvents = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/event`);
            if (res.data.success) {
                setEvents(res.data.events);
            } else {
                setError('Failed to fetch events');
            }
        } catch (err) {
            setError('Server error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleCloseDetails = () => {
        setSelectedEvent(null);
    };

    if (loading) return <div className="text-center mt-10 text-gray-300">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

    return (
        <div className="flex-1 flex flex-col overflow-hidden items-center min-h-[100vh]  text-gray-300">
            <div className="flex w-[90%] flex-col mt-4">
                <h1 className="text-2xl mb-4 text-white">Events</h1>
                <div className="flex-wrap flex flex-1 gap-4 mb-4">
                    {events && events.length > 0 ? (
                        events.map((event) => (
                            <div 
                                key={event._id} 
                                className="event-card p-4 flex flex-col bg-gray-800 rounded-md shadow-lg w-full max-w-sm cursor-pointer hover:bg-gray-700 transition-colors"
                                onClick={() => handleEventClick(event)}
                            >
                                <div className="flex flex-col mb-4">
                                    <h2 className="text-xl font-bold mb-2 text-white">{event.name}</h2>
                                    <p className="text-gray-300 mb-2">{event.description}</p>
                                    <p className="text-gray-400">Date: {new Date(event.date).toLocaleDateString()}</p>
                                    <p className="text-gray-400">Location: {event.location}</p>
                                </div>
                                <p className="text-gray-300">Organizer: {event.organizer}</p>
                                <p className={`mt-2 px-2 py-1 inline-block text-sm rounded-md ${event.isPublic ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {event.isPublic ? 'Public' : 'Private'}
                                </p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center mt-10 text-gray-300">No events available</div>
                    )}
                </div>

                {/* Event Details Section */}
                {selectedEvent && (
                    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
                        <div className="bg-gray-800 p-6 rounded-lg w-[90%] max-w-md">
                            <h2 className="text-2xl font-bold text-white mb-2">{selectedEvent.name}</h2>
                            <p className="text-gray-300 mb-2">{selectedEvent.description}</p>
                            <p className="text-gray-400">Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
                            <p className="text-gray-400">Location: {selectedEvent.location}</p>
                            <p className="text-gray-300">Organizer: {selectedEvent.organizer}</p>
                            <p className={`mt-2 px-2 py-1 inline-block text-sm rounded-md ${selectedEvent.isPublic ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                {selectedEvent.isPublic ? 'Public' : 'Private'}
                            </p>
                            <button
                                onClick={handleCloseDetails}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
