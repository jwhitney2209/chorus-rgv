import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Concerts from "./pages/Concerts";
import Support from "./pages/Support";
import Sponsors from "./pages/Sponsors";
import Recordings from "./pages/Recordings";
import Contact from "./pages/Contact";
// import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/support" element={<Support />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/recordings" element={<Recordings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
