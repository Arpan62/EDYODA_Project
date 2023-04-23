import "./profile.css";
import Topbar from "../component/Topbar";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import ProfileContent from "./ProfileContent";

export default function Profile() {
  return (
    <>
      <Navbar />
      <Topbar />
      <div className="profile">
        <Sidebar />
        <ProfileContent />
      </div>
    </>
  );
}
