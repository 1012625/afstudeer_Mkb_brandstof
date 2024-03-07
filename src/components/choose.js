import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Choose = () => {
  const navigate = useNavigate();

  const handlehome = () => {
    console.log("login button clicked");
    navigate("/");
  };

  const handleinfo = () => {
    console.log("overview button clicked");
    navigate("/overview");
  };

  return (
    <div className={`homepage-container`}>
      <div className={`taskbar`}>
        <button className="overview-button" onClick={handleinfo}>
          overview
        </button>
      </div>
      <button className="mkb-brandstof-button" onClick={handlehome}>
        mkb.
      </button>
      <button className="mkb-brandstof-button2" onClick={handlehome}>
        brandstof
      </button>
    </div>
  );
};

export default Choose;
