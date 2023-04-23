import "./sidebar.css";
import { Home, ViewModule, RecordVoiceOver } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link to="/">
              <Home className="sidebarIcon" />
            </Link>
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <Link to="/Module">
              <ViewModule className="sidebarIcon" />
            </Link>
            <span className="sidebarListItemText">Modules</span>
          </li>
          <li className="sidebarListItem">
            <RecordVoiceOver className="sidebarIcon" />
            <span className="sidebarListItemText">Instructors</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
