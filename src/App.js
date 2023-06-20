import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Footer from "./components/Footer/Footer";
import './App.css';

const App = () => {
  return (
    <div className="main-div">
      <Navbar />
      <div className="container-div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
