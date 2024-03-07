import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import fuelImage from '../fuel.png';
import smokeImage from '../smoke.png';

function Overview() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3001/overview');
      console.log("Response from server:", response.data); // Log response data
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleHomeButtonClick = () => {
    console.log("Home button clicked");
    navigate("/");
  };

  return (
    <div className="feedback-overview-container">
      <div className="taskbar">
        <img src={fuelImage} alt="fuel" className="fuel-image" />
      </div>
      <div className="content-below-taskbar">
        <button className="mkb-brandstof-button" onClick={handleHomeButtonClick}>
          mkb.
        </button>
        <button className="mkb-brandstof-button2" onClick={handleHomeButtonClick}>
          brandstof
        </button>
        <div className="feedback-overview center-content">
          {questions.length === 0 ? (
            <p>Loading...</p>
          ) : (
            questions.map((question) => (
              <div key={question.id} className="feedback-overview-item">
                <div className="feedback-overview-item-rectangle">
                  <span className="feedback-overview-item-question">
                    Hier is het totale aantal liters dat je hebt getankt sinds je lid bent geworden van MKB-Brandstof: {question.liters} 🚗💨
                  </span>
                </div>
                <div className="feedback-overview-item-rectangle2">
                  <span className="feedback-overview-item-question2">
                    Laat ons eens een kijkje nemen onder de motorkap: de brandstof waar jij op vertrouwt is: {question.type} 🛣️💨
                  </span>
                </div>
                <div className="feedback-overview-item-rectangle3">
                  <span className="feedback-overview-item-question3">
                    Jouw CO2-uitstoot sinds je bij MKB-Brandstof bent ongeveer: {calculateCO2(question.liters, question.type)} gram ☁️🌫️
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <img src={smokeImage} alt="smoke" className="smoke-image" />
    </div>
  );
}

function calculateCO2(liters, type) {
  // Hier wordt de CO2-uitstoot berekend op basis van het type brandstof en het aantal liters
  if (type === "benzine"){
    const co2PerLiter = 2.4;
    return liters * co2PerLiter;
  }
  else if (type === "diesel"){
    const co2PerLiter = 2.64;
    return liters * co2PerLiter;
  }
}


export default Overview;
