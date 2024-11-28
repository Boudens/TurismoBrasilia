import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import About from './pages/About';
import Navbar from './pages/Navbar';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    if (token && storedUsername) {
      setUser(storedUsername);
    }
    setIsLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  if (isLoading) {
    return <div className="loading-screen">Carregando...</div>;
  }

  return (
    <Router>
      <div className="App">
        {user && <Navbar user={user} onLogout={handleLogout} />}

        <Routes>
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route
            path="/home"
            element={
              user ? <Home /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/attractions"
            element={
              user ? <Attractions /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/about"
            element={
              user ? <About /> : <Navigate to="/login" replace />
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
