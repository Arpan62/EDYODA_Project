import "./topbar.css";
import { React, useState } from "react";

const Topbar = () => {
  const [opendpdn, setopendpdn] = useState(false);
  return (
    <>
      <div className="topbarContainer">
        <div className="menu-container">
          <span
            className="menu-trigger"
            onClick={() => {
              setopendpdn((prev) => !prev);
            }}
          >
            DS031221 >
          </span>
          <span className="logo">Data Scientist Program</span>
          <div className="dropdown-menu">
            <ul>{opendpdn && <DropDown />}</ul>
          </div>
        </div>
      </div>
    </>
  );
};
function DropDown() {
  return (
    <div>
      <h3>Select Program</h3>
      <li className="dropdownItem">ECRD</li>
      <li className="dropdownItem">FSR222222 </li>
      <li className="dropdownItem">DS261121 </li>
      <li
        style={{
          color: "black",
          border: "2px solid white",
          backgroundColor: "white",
          "border-radius": "2px",
          "margin-bottom": "30px",
          "margin-left": "20px",
          "padding-left": "8px",
          "padding-right": "8px",
          float: "left"
        }}
      >
        DS031221
      </li>
    </div>
  );
}
export default Topbar;
