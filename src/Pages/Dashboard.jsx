import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    // Verifica si el usuario está autenticado
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      window.location.href = '/login'; // Si no está autenticado, redirige al login
    }
  }, []);

  return (
    <div>
      <h2>Bienvenido al Dashboard</h2>
      <p>¡Estás logueado con éxito!</p>
      <button onClick={() => {
        localStorage.removeItem('auth'); // Elimina el estado de autenticación
        window.location.href = '/login'; // Redirige al login
      }}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Dashboard;
