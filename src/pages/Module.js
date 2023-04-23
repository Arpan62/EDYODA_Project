import "./profile.css";
import Topbar from "../component/Topbar";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Nextsidebar from "../component/nextsidebar";

export default function Module() {
  return (
    <>
      <Navbar />
      <Topbar />
      <div className="profile">
        <Sidebar />
        <Nextsidebar />
      </div>
    </>
  );
}
