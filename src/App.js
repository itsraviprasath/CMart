import React from "react";
import { Routes, Route } from "react-router-dom";
// CSS Files Start
import "./App.scss";
import "../src/assets/css/Resposive.scss";
import "../src/assets/css/components/Featured.scss"
import "../src/assets/css/components/Advantages.scss"
import "../src/assets/css/components/Latest.scss"
import "../src/assets/css/components/Agent.scss"
import "../src/assets/css/components/Counter.scss"
import "../src/assets/css/components/Testimonial.scss"
// CSS Files End
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CarListing from "./pages/CarListing"
import CarDetails from "./pages/CarDetails"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carListing" element={<CarListing />} />
        <Route path="/carDetails" element={<CarDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;