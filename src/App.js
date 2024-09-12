import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import About from "./screens/About/About.jsx";
import Contact from "./screens/Contact/Contact.jsx";
import Features from "./screens/Feactures/Features.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import BottomBar from "./Components/bottombar/bottom.jsx";
import Homepage from "./screens/HomePage/Homepage.jsx";
import Login from "./screens/auth/Login/Login.jsx";
import Register from "./screens/auth/Register/Register.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <BottomBar />
    </Router>
  );
};

export default App;
