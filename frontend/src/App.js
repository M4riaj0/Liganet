import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import LoginForm from './Pages/Login/Login';
import Home from './Pages/Home/Home'
import SignUp from './Pages/SignUp/SignUp';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    return <Navigate to='/Home' />;  
  };
  return (
    <Router>
      <div className='App'>
        <Routes>
          {/* Ruta para el formulario de inicio de sesión */}
          <Route
            path='/'
            element={<LoginForm handleLogin={handleLogin} />}
          />

          {/* Ruta para el formulario de registro */}
          <Route path='/SignUp' element={<SignUp />} />

          {/* Ruta protegida para el Home */}
          <Route
            path='/Home'
            element={isLoggedIn ? <Home /> : <Navigate to='/Home' />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
