import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Links from "./components/Links/Links";
import SystemDesign from "./components/Maps/SystemDesign";
import LuckFactor from "./components/Maps/LuckFactor";
import OperatingSystem from "./components/Maps/OperatingSystem";
import AnkurWarikoo from "./components/Maps/AnkurWarikoo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/system_design" element={<SystemDesign />} />
        <Route path="/luck_factor_book" element={<LuckFactor />} />
        <Route path="/operating_system" element={<OperatingSystem />} />
        <Route path="/ankur_warikoo" element={<AnkurWarikoo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
