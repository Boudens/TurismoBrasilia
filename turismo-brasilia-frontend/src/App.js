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
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento inicial

  // Verifica o localStorage para restaurar o estado do usuário
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    if (token && storedUsername) {
      setUser(storedUsername); // Define o usuário
    }
    setIsLoading(false); // Finaliza o carregamento
  }, []);

  // Função de logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  if (isLoading) {
    // Tela de carregamento enquanto verifica autenticação
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
              <ProtectedRoute isAuthenticated={!!user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/attractions"
            element={
              <ProtectedRoute isAuthenticated={!!user}>
                <Attractions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute isAuthenticated={!!user}>
                <About />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
