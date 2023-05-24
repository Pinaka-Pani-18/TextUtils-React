import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './components/TextForm';
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Has Enabled", "success")
      document.title = "TextUtils - DarkMode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils"
      // }, 1500);
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Enabled", "success")
      document.title = "TextUtils - LightMode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/About" element={<About mode={mode} />} />
            <Route exact path="/TextUtils-React" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter and Remove Extra Spaces" showAlert={showAlert} mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
