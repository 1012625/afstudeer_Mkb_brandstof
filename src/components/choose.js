import React from "react";
import { useNavigate } from "react-router-dom";
import fuel2Image from '../fuel2.png';
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
  const handleinfo2 = () => {
    console.log("overview button clicked");
    navigate("/overview");
  };

  return (
    <div className={`homepage-container`}>
      <div className={`taskbar`}>
        <img src={fuel2Image} alt="fuel2" className="fuel-image" />

        <button className="overview-button" onClick={handleinfo}>
          Inzichten
        </button>

        <button className="overview-button2" onClick={handleinfo2}>
          Gebruikspatronen
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
