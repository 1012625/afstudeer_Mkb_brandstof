import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./components/Overview";
//import AdminLogin from "./components/AdminLogin";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
//import EditFeedbackForm from "./components/EditFeedbackForm";
//import Answers from "./components/answers";
//import QuestionForm from "./components/QuestionForm";
//import Check from "./components/check";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
