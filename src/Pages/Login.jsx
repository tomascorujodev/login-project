import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!username || !password) {
            setError('');
            return;
        }

        if (username === 'usuario' && password === '123456') {
            localStorage.setItem('auth', true);
            navigate('/dashboard');
        } else {
            setError('usuario y contraseña incorrectos');
        }
    };

    return (
        <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Nombre de usuario</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          {error && <p style={{ color: 'red' }}>{error}</p>}
  
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Recordarme</label>
          </div>
  
          <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>
    );
    
};

export default Login;

