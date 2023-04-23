import "./topic.css";
import { useState } from "react";
import info from "../images/information-circle 1.svg";
import play from "../images/play-circle.svg";
import video from "../images/videocam.svg";

export const Topic = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <div>
      <p className="top">Python Loops</p>
      <p className="date">15 December 2021, Wednesday, 07:30 PM</p>
      <p className="daily">Daily Feedback</p>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(1)}
          >
            <img style={{ display: "inline-flex" }} src={info} alt="" />
            <span style={{ "margin-left": "10px" }}>SESSION PLAN</span>
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(2)}
          >
            <img style={{ display: "inline-flex" }} src={play} alt="" />
            <span style={{ "margin-left": "10px" }}>PRE-WATCH VIDEOS</span>
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(3)}
          >
            <img style={{ display: "inline-flex" }} src={video} alt="" />
            <span style={{ "margin-left": "4px" }}>SESSION RECORDING</span>
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => setToggleState(4)}
          >
            DOCUMENT
          </button>
        </div>

        <div className="context-tabs">
          <div
            className={
              toggleState === 1 ? "context  active-context" : "context"
            }
          >
            <p
              style={{
                "margin-bottom": "5px",
                "margin-left": "45px",
                "font-weight": "bold",
                "font-size": "20px"
              }}
            >
              Session Plan
            </p>
            <p
              style={{
                "margin-top": "5px",
                "margin-left": "45px",
                color: "gray"
              }}
            >
              LIVE session is about to start.Please stay tuned.
            </p>
            <span
              style={{
                color: "black",
                "font-size": "12px",
                border: "2px solid lightgrey",
                "border-radius": "20px",
                "background-color": "lightgrey",
                padding: "10px",
                "margin-left": "45px"
              }}
            >
              JOIN LIVE SESSION
            </span>
            <p
              style={{
                "margin-left": "45px",
                "margin-top": "40px"
              }}
            >
              Sub-Topics
            </p>
            <ol style={{ "margin-left": "20px", color: "gray" }}>
              <li>Sorting and Indexing Dataframe</li>
              <li>Filtering Dataframe</li>
              <li>Usage of loc and iloc functions</li>
            </ol>
            <p style={{ "margin-left": "45px" }}>Session Details</p>
          </div>

          <div
            className={
              toggleState === 2 ? "context  active-context" : "context"
            }
          ></div>

          <div
            className={
              toggleState === 3 ? "context  active-context" : "context"
            }
          ></div>
        </div>
      </div>
    </div>
  );
};
