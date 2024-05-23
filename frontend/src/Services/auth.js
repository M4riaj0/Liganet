// Esta función se encarga de hacer una petición POST al endpoint /token con las credenciales del usuario y, si todo sale bien, guarda el token en el localStorage.
import axios from 'axios';

const login = async (nombreUsuario, contraseña) => {
  try {
    // const formData = new FormData();
    // formData.append('username', username);
    // formData.append('password', password);

    const response = await axios.post('http://localhost:8000/api/login', {
      nombreUsuario,
      contraseña
    });
    // const token = response.data.access_token;
    // console.log('Token de inicio de sesión:', token);
    // localStorage.setItem('token', token);
    // return token;
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