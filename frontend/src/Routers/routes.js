import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import Reserve from "../Pages/Reserve/Reserve";
import Cloudinary from "../Pages/Cloudinary/Cloudinary";
import { useState, useEffect } from "react";

export function MyRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setIsLoggedIn(true);
      }
    }, []);

    const handleLogin = () => {
        setIsLoggedIn(true);
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
                <Route path="/Home" element={isLoggedIn ? <Home /> : <Navigate to='/Login'/>}/>
                {/* Ruta protegida para Reservar */}
                <Route path="/Reserve" element={isLoggedIn ? <Reserve /> : <Navigate to='/Login'/>}/>
                {/* Ruta para el cloudinary */}
                <Route path="/cloudinary" element={<Cloudinary />} />


            </Routes>
        </BrowserRouter>
    );
}

