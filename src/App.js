import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NavBarMain from "./components/NavBarMain";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-white">
        <NavBarMain />
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex-grow py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
