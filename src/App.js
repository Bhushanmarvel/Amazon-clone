import React from "react";
import "./App.css";
import Navbar from "./Layout/Navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={((<Navbar />), (<Home />))} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
