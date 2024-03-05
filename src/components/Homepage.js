import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the CSS file
import mkbFotoImage from '../mkb-foto.png';
import laadpaalImage from '../laadpaal.png'; // Import the laadpaal.png image

const Homepage = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const handleLoginButtonClick = () => {
    console.log("login button clicked");
    navigate("/Login");
  };

  const handlehome = () => {
    console.log("login button clicked");
    navigate("/");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`homepage-container ${darkMode ? 'dark-mode' : ''}`} style={{ paddingTop: '450px' }}>
      <div className={`taskbar ${darkMode ? 'dark-mode-taskbar' : ''}`}>
        <button className="homepage-button" onClick={handleLoginButtonClick}>
          Klant login
        </button>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <button className="mkb-brandstof-button" onClick={handlehome}>
        mkb.
      </button>
      <button className="mkb-brandstof-button2" onClick={handlehome}>
        brandstof
      </button>
      <p className="welcome-text"style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Welkom op je verbruiksdashboard van MKB Brandstof!
      </p>
      <p className="welcome-text"style={{ fontSize: '20px', fontWeight: 'bold' }}>
        Hiermee krijg je binnen een handomdraai slimme inzichten over je verbruik. Log hier rechtsboven in met je Online Dashboard gegevens.
      </p>
      <img src={mkbFotoImage} alt="mkb" className="mkb-fotoImage" style={{ width: '700px', height: 'auto' }} />
      <p className="laadpaal-text" style={{ fontSize: '20px', fontWeight: 'bold' }}>Laad je elektrische voertuig op met gemak! Wij bieden niet alleen een tankpas en een laadpas,</p>
      <p className="laadpaal-text" style={{ fontSize: '20px', fontWeight: 'bold' }}>maar ook de mogelijkheid tot het installeren van laadpalen.</p>
      <img src={laadpaalImage} alt="laadpaal" className="laadpaalImage" style={{ width: '550px', height: 'auto' }} />
    </div>
  );
};

export default Homepage;
