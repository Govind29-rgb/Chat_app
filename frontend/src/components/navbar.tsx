import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="btn btn-primary">Home</Link>
      <Link to="/login" className="btn btn-primary">Login</Link>
      <Link to="/profile" className="btn btn-primary">Profile</Link>
      <Link to="/settings" className="btn btn-primary">Settings</Link>
      <Link to="/signup" className="btn btn-primary">Sign Up</Link>
    </nav>
  );
}

export default Navbar;
