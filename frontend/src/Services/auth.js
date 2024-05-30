import axios from 'axios';

const login = async (nombreUsuario, contraseña) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', {
      nombreUsuario,
      contraseña
    });
    const userData = response.data;
    console.log('Datos de inicio de sesión:', userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  } catch (error) {
    console.error('Error de inicio de sesión:', error);
    throw error;
  }
};

export default login;