// src/components/DashboardContent.jsx
import Announcement from './Announcements';
import Events from './Events';
import Home from './Home';


const DashboardContent = ({ component }) => {
  switch (component) {
    case 'home':
      return <Home />;
    case 'announcement':
      return <Announcement />;
    case 'events':
      return <Events />;
    default:
      return <Home />;
  }
};

export default DashboardContent;
