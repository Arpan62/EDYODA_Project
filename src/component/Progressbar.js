import React from "react";

export const Progressbar = ({ bgcolor, progress }) => {
  const Parentdiv = {
    display: "inline-flex",
    width: "150px",
    backgroundColor: "lightblue",
    borderRadius: 40,
    margin: 10
  };

  const Childdiv = {
    height: "100%",
    width: 0,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right"
  };

  const progresstext = {
    padding: 2,
    color: "black",
    fontWeight: 900
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}`}</span>
      </div>
    </div>
  );
};
