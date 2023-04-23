import React from "react";
import DataAnalysis from "../images/Data-Analysis.png";
import DataWrangling from "../images/Data Wrangling.png";
import logo from "../images/sitelogo.jpg";
import { Progressbar } from "../component/Progressbar";
import "./profile.css";

export default function ProfileContent() {
  return (
    <div className="content">
      <div className="blocks">
        <div className="Item1">
          <p style={{ "font-size": "30px" }}>Upcoming Certifications</p>
        </div>
        <div className="Item2">
          <img
            style={{
              "margin-top": "35px",
              "margin-left": "20px",
              height: "80px"
            }}
            src={DataAnalysis}
            alt=""
          />
          <div className="description">
            <p
              style={{
                color: "grey",
                "font-size": "12px",
                border: "2px solid lightgrey",
                "background-color": "lightgrey",
                "margin-left": "20px",
                "padding-left": "12px",
                "border-radius": "2px"
              }}
            >
              Certifications | Attempt 1
            </p>
            <p style={{ "font-size": "20px", "margin-left": "20px" }}>
              DATA ANALYSIS <br /> CERTIFICATION
            </p>
            <p
              style={{
                color: "grey",
                "font-size": "12px",
                border: "2px solid lightblue",
                "background-color": "lightblue",
                "margin-left": "20px",
                "padding-left": "10px",
                "padding-right": "10px",
                "border-radius": "10px"
              }}
            >
              Completed | 21 March 2022
            </p>
          </div>
          <div
            className="description2"
            style={{ "font-size": "15px", "margin-left": "100px" }}
          >
            <p>Exam Structure</p>
            <p
              style={{
                color: "grey"
              }}
            >
              Round 1
              <span className="sp" style={{ color: "black" }}>
                MCQS
              </span>
              <span className="sp" style={{ color: "black" }}>
                Coding
              </span>
            </p>
            <p
              style={{
                color: "grey"
              }}
            >
              Round 2
              <span className="sp" style={{ color: "black" }}>
                {" "}
                Project{" "}
              </span>
            </p>
          </div>
          <div className="description3">
            <p>VIEW EXAM DETAILS</p>
          </div>
        </div>
        <div className="Item1">
          <p style={{ "font-size": "30px" }}>Continue Learning</p>
          <p
            style={{
              color: "blue",
              "font-family":
                "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif ",
              "font-size": "15px",
              "font-weight": "bolder",
              "margin-left": "500px"
            }}
          >
            View Module Details
          </p>
        </div>
        <div className="item3">
          <div className="item4">
            <img
              style={{
                "margin-left": "10px",
                "margin-top": "20px",
                height: "80px"
              }}
              src={DataWrangling}
              alt=""
            />
            <div className="item4des">
              <p
                style={{
                  "font-size": "20px",
                  "margin-left": "5px",
                  "margin-top": "2px"
                }}
              >
                DATA WRANGLING & <br /> VISUALIZATION
              </p>
              <p
                style={{
                  color: "blue",
                  "font-size": "15px",
                  "margin-left": "5px",
                  "margin-top": "2px",
                  display: "flex"
                }}
              >
                <img style={{ height: "60px" }} src={logo} alt="" />
                Test Instructor
              </p>
              <p style={{ "font-size": "12px" }}>
                Live Sessions
                <span>
                  <Progressbar bgcolor="blue" progress="0/13" height={30} />
                </span>
              </p>
              <p style={{ "font-size": "12px", "margin-left": "5px" }}>
                Assignments
                <span>
                  <Progressbar bgcolor="blue" progress="0/3" height={30} />
                </span>
              </p>
              <p style={{ "font-size": "12px", "margin-left": "12px" }}>
                MCQ Quiz
                <span>
                  <Progressbar bgcolor="blue" progress="0/6" height={30} />
                </span>
              </p>
            </div>
            <div style={{ "margin-left": "50px" }}>
              <hr width="1" size="250" />
            </div>
            <div style={{ "font-size": "20px", "margin-left": "70px" }}>
              Today's Plan
              <br />
              <p style={{ "font-size": "10px", color: "grey" }}>
                21 March 2022
              </p>
              <p style={{ color: "blue" }}>
                Data Tansformation Using <br />
                Pandas-3
              </p>
              <p style={{ "font-size": "15px", color: "grey" }}>
                Daily Feedback
                <span
                  style={{
                    "font-size": "10px",
                    color: "lightblue",
                    "margin-left": "20px"
                  }}
                >
                  opens at 7:30pm
                </span>
              </p>
              <span
                style={{
                  color: "grey",
                  "font-size": "12px",
                  border: "2px solid lightblue",
                  "background-color": "lightblue",
                  padding: "8px",
                  "border-radius": "15px"
                }}
              >
                Join Live Session
              </span>
              <p
                style={{
                  "font-size": "10px",
                  color: "grey",
                  "margin-left": "10px"
                }}
              >
                BEGINS AT 7:30pm
              </p>
            </div>
          </div>
          <div className="item4" style={{ "margin-left": "50px" }}>
            <div>
              <p style={{ "font-size": "20px", "margin-top": "1px" }}>
                Progress Overview
              </p>
              <p
                style={{
                  padding: "15px",
                  "border-radius": "5px",
                  border: "1px solid blue",
                  "font-size": "20px"
                }}
              >
                0%
                <span
                  style={{
                    color: "grey",
                    "font-size": "13px",
                    "margin-left": "100px"
                  }}
                >
                  Overall Grade
                </span>
              </p>
              <p
                style={{
                  padding: "13px",
                  "border-radius": "5px",
                  border: "1px solid blue",
                  "font-size": "20px"
                }}
              >
                0%
                <span
                  style={{ color: "grey", "font-size": "13px", float: "right" }}
                >
                  Attendance
                </span>
              </p>
              <p
                style={{
                  color: "blue",
                  "font-family":
                    "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif ",
                  "font-size": "15px",
                  "font-weight": "bolder"
                }}
              >
                View Detailed Progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
