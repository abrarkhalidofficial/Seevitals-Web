import React from "react";
import { Home, AboutUs, Contact } from "./screens";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}
