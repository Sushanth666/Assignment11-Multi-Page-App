import React from "react";
import { NavLink } from "react-router-dom";
// import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
      <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink>
    </nav>
  );
}
