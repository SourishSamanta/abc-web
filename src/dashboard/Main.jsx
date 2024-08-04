// src/App.jsx
import { useState } from 'react';
import Sidebar from './dComponents/Sidebar';
import DashboardContent from './dComponents/DashboardContent';
import ToggleTheme from './dComponents/ToggleTheme';
import './dIndex.css';

function Main() {
  const [currentComponent, setCurrentComponent] = useState('home');
  const [collapsed, setCollapsed] = useState(false);
  
  const handleSidebarClick = (component) => {
    setCurrentComponent(component);
  };

  return (
    <div className="min-h-screen min-w-screen flex z-50 ">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} selected={currentComponent} onClick={handleSidebarClick} />
      <div className={`flex-1 p-6 transition duration-500 ${collapsed? "ml-20" : "ml-64"} `}>
        <ToggleTheme />
        <DashboardContent component={currentComponent} />
      </div>
    </div>
  );
}

export default Main;
