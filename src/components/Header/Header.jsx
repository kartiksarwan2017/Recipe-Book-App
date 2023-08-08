import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Recipe Book
      </Link>
    </header>
  );
};

export default Navbar;

