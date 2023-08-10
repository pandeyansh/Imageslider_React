// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css'; // Import your styles

const Nav = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
