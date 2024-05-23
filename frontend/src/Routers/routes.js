import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import { useState } from "react";

export function MyRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
      return <Navigate to='/Home' />;  
    };

    return (
        <BrowserRouter>
            <Routes>
                {/* Ruta para redirigir al usuario al login cuando el path es "/" */}
                <Route path="/" element={<Navigate to='/Login' replace />} />
                {/* Ruta para el formulario de inicio de sesión */}
                <Route path="/Login" element={<Login handleLogin={handleLogin} />} />
                {/* Ruta para el formulario de registro */}
                <Route path="/SignUp" element={<SignUp />} />
                {/* Ruta protegida para el Home */}
                <Route path="/Home" element={isLoggedIn ? <Home /> : <Navigate to='/Home'/>}/>
            </Routes>
        </BrowserRouter>
    );
}

