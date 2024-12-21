import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/homePage/Home";
import HotStuff from "./Pages/hotStuff/HotStuff";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<Home />} />
          <Route path="/hotstuff" element={<HotStuff />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
