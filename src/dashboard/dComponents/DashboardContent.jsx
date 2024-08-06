// src/components/DashboardContent.jsx
import Announcement from './Announcements';
import Community from './Community';
import Events from './Events';
import Gallery from './Gallery';
import Home from './Home';
import Projects from './projects/Projects';


const DashboardContent = ({ component }) => {
  console.log(component)
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
      case 'community':
      return <Community />;
    default:
      return <Home />;
  }
};

export default DashboardContent;
