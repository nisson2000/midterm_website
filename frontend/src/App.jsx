import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import CreateUserPage from './pages/CreateUserPage';
import Navigation from './Navigation'; // Make sure the path is correct

function App() {
  return (
    <Router>
      <div>
        <Navigation /> {/* This will render the navigation buttons */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

