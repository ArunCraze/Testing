import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import Home from "./home";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={< onFormSwitch={toggleForm} />} />
          <Route path="/login/register" element={<Register onFormSwitch={toggleForm} />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;