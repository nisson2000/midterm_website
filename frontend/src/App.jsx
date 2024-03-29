import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import CreateUserPage from './pages/CreateUserPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
