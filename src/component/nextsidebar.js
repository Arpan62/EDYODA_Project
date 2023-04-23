import "./sidebar.css";
import topic from "../images/topic.svg";
import quiz from "../images/moduleQuiz.svg";
import assignment from "../images/assignment.svg";
import { Topic } from "../pages/Topic";
import { Quiz } from "../pages/Quiz";
import { Assignment } from "../pages/Assignment";
import { useState } from "react";

export default function Sidebar() {
  const [active, setactive] = useState("Top");
  return (
    <>
      <div
        className="sidebar"
        style={{
          "background-color": "rgba(189, 202, 202, 0.938)",
          color: "black",
          width: "200px",
          height: "450px"
        }}
      >
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <span
                style={{ display: "flex" }}
                onClick={() => setactive("Top")}
              >
                <img src={topic} alt="" />
                <span style={{ "margin-top": "6px", "margin-left": "6px" }}>
                  Python Loops
                </span>
              </span>
            </li>
            <li className="sidebarListItem">
              <span
                style={{ display: "flex" }}
                onClick={() => setactive("Qui")}
              >
                <img src={quiz} alt="" />
                <span style={{ "margin-top": "6px", "margin-left": "6px" }}>
                  Quiz-1: Data Types
                </span>
              </span>
            </li>
            <li className="sidebarListItem">
              <span
                style={{ display: "flex" }}
                onClick={() => setactive("Assign")}
              >
                <img src={assignment} alt="" />
                <span style={{ "margin-top": "6px", "margin-left": "6px" }}>
                  Assignment-1:
                  <br />
                  Operators|Loops
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {active === "Top" && <Topic />}
        {active === "Qui" && <Quiz />}
        {active === "Assign" && <Assignment />}
      </div>
    </>
  );
}
