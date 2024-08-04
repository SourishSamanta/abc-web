// src/components/DashboardContent.jsx
import Announcement from './Announcements';
import Events from './Events';
import Gallery from './Gallery';
import Home from './Home';
import Projects from './projects/Projects';


const DashboardContent = ({ component }) => {
  switch (component) {
    case 'home':
      return <Home />;
    case 'announcement':
      return <Announcement />;
    case 'events':
      return <Events />;
    case 'gallery':
      return <Gallery />;
    case 'projects':
      return <Projects />;
    default:
      return <Home />;
  }
};

export default DashboardContent;
