import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const loginData = { username, password };

    try {
      const response = await fetch('http://localhost:5187/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      setIsLoading(false);

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        onLogin(username);
        navigate('/home');
      } else {
        const error = await response.text();
        setErrorMessage(error || 'Credenciais inválidas.');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const registerData = { username, password };

    try {
      const response = await fetch('http://localhost:5187/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      setIsLoading(false);

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        setIsRegistering(false);
      } else {
        const error = await response.text();
        setErrorMessage(error || 'Erro ao registrar usuário.');
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-overlay">
        {isRegistering ? (
          <form onSubmit={handleRegister} className="login-form">
            <h2>Registrar Novo Usuário</h2>
            <div className="input-group">
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Registrar'}
            </button>
            <button type="button" className="switch-form" onClick={() => setIsRegistering(false)}>
              Já tem uma conta? Faça Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleLogin} className="login-form">
            <h2>Login</h2>
            <div className="input-group">
              <label htmlFor="username">Usuário</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Digite seu usuário"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
              />
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit" className="login-btn" disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Entrar'}
            </button>
            <button type="button" className="switch-form" onClick={() => setIsRegistering(true)}>
              Não tem uma conta? Registre-se
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
