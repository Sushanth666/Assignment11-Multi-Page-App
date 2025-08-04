import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
      <footer style={{
        textAlign: "center",
        padding: 20,
        background: "#e3e8ee",
        marginTop: 50,
        color: "#6b7280",
        letterSpacing: 1
      }}>
        <span role="img" aria-label="sparkle">✨</span>
        &nbsp;{new Date().getFullYear()} Multi-Page React App • Crafted with React
      </footer>
    </BrowserRouter>
  );
}

export default App;
