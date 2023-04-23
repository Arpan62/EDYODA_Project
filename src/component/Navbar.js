import "./navbar.css";
import logo from "../images/sitelogo.jpg";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <span className="name">EDYODA</span>
        <span className="learn">
          Hi Test Learner!
          <img src={logo} alt="" />
        </span>
      </div>
    </>
  );
}
