import React from "react";
import calendar from "../images/calendar.svg";
import clock from "../images/clock-blue.svg";

export const Quiz = () => {
  return (
    <div>
      <p
        style={{
          "font-size": "20px",
          "font-weight": "bolder",
          "margin-left": "50px"
        }}
      >
        Quiz 1: Data Types
      </p>
      <p
        style={{
          "font-size": "15px",
          color: "gray",
          "margin-left": "50px"
        }}
      >
        16 December 2021, Thursday
      </p>
      <p
        style={{
          "font-size": "18px",
          "font-weight": "bolder",
          "margin-left": "50px",
          "margin-top": "40px"
        }}
      >
        Quiz Details
      </p>
      <div className="quiz">
        <span
          style={{
            "font-size": "15px",
            color: "gray",
            "margin-left": "20px",
            "margin-top": "30px"
          }}
        >
          10
          <br />
          Questions
        </span>
        <span
          style={{
            "font-size": "15px",
            color: "gray",
            "margin-left": "50px",
            "margin-top": "30px"
          }}
        >
          {" "}
          -<br />
          Duration
        </span>
        <span
          style={{
            "font-size": "15px",
            color: "gray",
            "margin-left": "50px",
            "margin-top": "30px"
          }}
        >
          {" "}
          125
          <br />
          Total Score
        </span>
        <hr
          width="1"
          size="100"
          style={{ "margin-left": "50px", "margin-right": "50px" }}
        />
        <span>
          <p style={{ color: "gray", "font-size": "15px" }}>Start:</p>
          <p style={{ color: "gray", "font-size": "15px" }}>
            <img
              src={calendar}
              alt=""
              style={{ height: "15px", "margin-right": "7px" }}
            />
            16 Dec 2021
          </p>
          <p style={{ color: "gray", "font-size": "15px" }}>
            <img
              src={clock}
              alt=""
              style={{ height: "15px", "margin-right": "7px" }}
            />
            07:30 PM
          </p>
        </span>
        <span>
          <p
            style={{
              color: "gray",
              "font-size": "15px",
              "margin-left": "70px"
            }}
          >
            Due:
          </p>
          <p
            style={{
              color: "gray",
              "font-size": "15px",
              "margin-left": "70px"
            }}
          >
            <img
              src={calendar}
              alt=""
              style={{ height: "15px", "margin-right": "7px" }}
            />
            19 Dec 2021
          </p>
          <p
            style={{
              color: "gray",
              "font-size": "15px",
              "margin-left": "70px"
            }}
          >
            <img
              src={clock}
              alt=""
              style={{ height: "15px", "margin-right": "7px" }}
            />
            7:30 PM
          </p>
        </span>
      </div>
    </div>
  );
};
