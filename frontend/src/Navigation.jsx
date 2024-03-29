import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/midterm_website/')}>Home</button>
      <button onClick={() => navigate('/midterm_website/about')}>About</button>
      <button onClick={() => navigate('/midterm_website/user')}>User</button>
      <button onClick={() => navigate('/midterm_website/create-user')}>Create User</button>
    </nav>
  );
}

export default Navigation;
