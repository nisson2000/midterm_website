import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/midterm_website/" element={<HomePage />} />
          <Route path="/midterm_website/about" element={<AboutPage />} />
          <Route path="/midterm_website/user" element={<UserPage />} />
          <Route path="/midterm_website/create-user" element={<CreateUserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

