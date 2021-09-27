import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/210925/55113ed2012da139fbe35b430c3964fc.png"
          alt="netflix-type"
          border="0"
        />
      </Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
