// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Mystic Site</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/user">User</Link> | 
        <Link to="/create-user">Create User</Link>
      </nav>
    </div>
  );
}

export default HomePage;

