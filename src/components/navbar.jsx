import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/210927/d8c1ea6aa5a1a92bf21c086e285d53b6.png"
          alt="netflix-type"
          border="0"
        />
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
