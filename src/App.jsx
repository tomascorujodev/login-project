import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import NavbarLoggedOut from './components/Navbar/NavbarLoggedOut';

function App() {
  return (
    <div>
      <Routes>
        {/* Renderiza el Navbar adecuado */}
        {isLoggedIn ? <NavbarLoggedIn /> : <NavbarLoggedOut />}   
        {/* Define la ruta para la página de inicio */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />}>
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/navbar" element ={<NavbarLoggedOut/>} />
      </Routes>
    </div>
  );
}

export default App;
