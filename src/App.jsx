import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/Signin";
import "./App.css";
import Dashboard from "./Components/common/Dashboard";

const AppContent = () => {
  const location = useLocation(); // Get current route

  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 2 },
        color: { value: "#58c0e9" },
        line_linked: { enable: true, color: "#58c0e9" },
      },
    });
    // Hide preloader once React is fully mounted
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add("hide");
      }, 1000); // Adjust time as needed
    }
  }, []);

  return (
    <>
      {/* Hide Navbar on SignIn page */}
      {location.pathname !== "/signin" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
};

export default App;
