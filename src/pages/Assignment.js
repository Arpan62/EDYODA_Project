import React from "react";
import calendar from "../images/calendar.svg";
import clock from "../images/clock-blue.svg";

export const Assignment = () => {
  return (
    <div>
      <p
        style={{
          "font-size": "20px",
          "font-weight": "bolder",
          "margin-left": "50px"
        }}
      >
        Assignment-1: Operators | Loops
        <span
          style={{
            "font-size": "15px",
            color: "gray",
            "margin-left": "30px",
            float: "right",
            "margin-right": "100px"
          }}
        >
          100
          <br />
          Total Score
        </span>
        <span
          style={{
            "font-size": "15px",
            color: "gray",
            float: "right"
          }}
        >
          3
          <br />
          Problems
        </span>
      </p>
      <p
        style={{
          "font-size": "15px",
          color: "gray",
          "margin-left": "50px"
        }}
      >
        20 December 2021, Thursday
      </p>
      <p
        style={{
          "font-size": "18px",
          "font-weight": "bolder",
          "margin-left": "50px",
          "margin-top": "40px"
        }}
      >
        Assignment Details
      </p>
      <div className="quiz">
        <span
          style={{
            "font-size": "20px",
            color: "gray",
            "margin-left": "70px",
            "margin-top": "30px"
          }}
        >
          3
          <br />
          Problems
        </span>
        <span
          style={{
            "font-size": "20px",
            color: "gray",
            "margin-left": "50px",
            "margin-top": "30px"
          }}
        >
          {" "}
          100
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
            20 December 2021
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
            26 December 2021
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
            11:59 PM
          </p>
        </span>
      </div>
    </div>
  );
};
