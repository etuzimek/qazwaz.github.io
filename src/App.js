import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Apartment from "./components/pages/Apartment";
import Gallery from "./components/pages/Gallery";
import Rules from "./components/pages/Rules";
import ContactDetails from "./components/pages/ContactDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="apartment" element={<Apartment />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="rules" element={<Rules />} />
        <Route path="contact" element={<ContactDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
