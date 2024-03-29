import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/user')}>User</button>
      <button onClick={() => navigate('/create-user')}>Create User</button>
    </nav>
  );
}

export default Navigation;
