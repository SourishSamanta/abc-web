import React from "react";

const Sidebar = ({ onClick }) => {
    return (
      <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
        <button onClick={() => onClick('home')} className="mb-2">Home</button>
        <button onClick={() => onClick('announcement')} className="mb-2">Announcements</button>
        <button onClick={() => onClick('events')} className="mb-2">Events</button>
      </div>
    );
  };
  
  export default Sidebar;